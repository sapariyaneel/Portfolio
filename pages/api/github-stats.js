import axios from 'axios';

// Create axios instance with default config
const githubAPI = axios.create({
  timeout: 10000, // 10 second timeout
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
});

// Simple in-memory rate limiting
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  current: new Map()
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const windowStart = now - rateLimit.windowMs;
  
  // Clean up old entries
  for (const [key, timestamp] of rateLimit.current.entries()) {
    if (timestamp < windowStart) {
      rateLimit.current.delete(key);
    }
  }
  
  // Get current count for this IP
  const count = Array.from(rateLimit.current.entries())
    .filter(([key, timestamp]) => key.startsWith(ip) && timestamp > windowStart)
    .length;
    
  return count >= rateLimit.max;
};

// Helper function to validate GitHub token
const validateToken = (token) => {
  if (!token) {
    throw new Error('GitHub token is required. Please add GITHUB_TOKEN to your environment variables.');
  }
  return `bearer ${token}`;
};

export default async function handler(req, res) {
  try {
    // Rate limiting check
    const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (isRateLimited(clientIP)) {
      return res.status(429).json({
        error: 'Too many requests. Please try again later.',
        success: false
      });
    }
    rateLimit.current.set(`${clientIP}-${Date.now()}`, Date.now());

    const { username } = req.query;

    if (!username) {
      return res.status(400).json({ 
        error: 'Username is required',
        success: false 
      });
    }

    // Validate GitHub token
    const GITHUB_TOKEN = validateToken(process.env.GITHUB_TOKEN);
    
    // Set auth headers
    const headers = {
      'Authorization': GITHUB_TOKEN,
      'Content-Type': 'application/json',
    };

    // GraphQL query for user data
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            totalCommitContributions
            totalPullRequestContributions
            totalIssueContributions
            totalRepositoryContributions
          }
          repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
            nodes {
              name
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    `;

    try {
      // Fetch all data in parallel with timeout
      const [userResponse, reposResponse, graphqlResponse] = await Promise.all([
        githubAPI.get(`https://api.github.com/users/${username}`, { headers }),
        githubAPI.get(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers }),
        githubAPI.post('https://api.github.com/graphql', { query, variables: { username } }, { headers })
      ]);

      // Validate responses
      if (!graphqlResponse.data.data?.user) {
        throw new Error('User not found or invalid GitHub token permissions');
      }

      const userData = graphqlResponse.data.data.user;

      // Calculate stats
      const totalStars = reposResponse.data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
      const topRepos = reposResponse.data
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5)
        .map(repo => ({ name: repo.name }));

      // Get PRs and Issues count with proper error handling
      const [contributionsResponse, issuesResponse] = await Promise.all([
        githubAPI.get(`https://api.github.com/search/issues?q=author:${username}+type:pr`, { headers }),
        githubAPI.get(`https://api.github.com/search/issues?q=author:${username}+type:issue`, { headers })
      ]);

      const stats = {
        totalStars,
        totalCommits: userData.contributionsCollection.totalCommitContributions,
        totalPRs: contributionsResponse.data.total_count,
        totalIssues: issuesResponse.data.total_count,
        totalContributions: userData.contributionsCollection.totalRepositoryContributions,
        currentStreak: 2, // These would need separate calculations
        longestStreak: 5, // These would need separate calculations
        contributedRepos: topRepos,
        success: true
      };

      // Cache the response for 1 hour
      res.setHeader('Cache-Control', 's-maxage=3600');
      return res.status(200).json(stats);

    } catch (apiError) {
      // Handle specific API errors
      console.error('GitHub API Error:', apiError.message);
      if (apiError.response) {
        console.error('Response data:', apiError.response.data); // Log the response data
      }
      
      if (apiError.response?.status === 403) {
        return res.status(403).json({
          error: 'Rate limit exceeded. Please try again later.',
          success: false
        });
      }
      
      if (apiError.response?.status === 404) {
        return res.status(404).json({
          error: 'GitHub user not found',
          success: false
        });
      }

      // For other API errors, return fallback data
      return res.status(200).json({
        ...getFallbackStats(),
        success: true,
        isFallback: true
      });
    }

  } catch (error) {
    // Handle server-side errors
    console.error('Server Error:', error.message);
    return res.status(500).json({
      error: 'Internal server error',
      success: false
    });
  }
}

// Helper function for fallback stats
const getFallbackStats = () => ({
  totalStars: 0,
  totalCommits: 0,
  totalPRs: 0,
  totalIssues: 0,
  totalContributions: 0,
  currentStreak: 0,
  longestStreak: 0,
  contributedRepos: []
}); 