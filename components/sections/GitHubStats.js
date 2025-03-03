import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import ErrorBoundary from '../ErrorBoundary';

const GitHubStats = () => {
  const [stats, setStats] = useState({
    totalStars: 0,
    totalCommits: 0,
    totalPRs: 0,
    totalIssues: 0,
    totalContributions: 0,
    currentStreak: 0,
    longestStreak: 0,
    contributedRepos: []
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const techStack = [
    // Languages
    { name: 'C', type: 'language', className: 'bg-blue-600 text-white' },
    { name: 'C++', type: 'language', className: 'bg-blue-500 text-white' },
    { name: 'CSS3', type: 'language', className: 'bg-blue-400 text-white' },
    { name: 'HTML5', type: 'language', className: 'bg-orange-500 text-white' },
    { name: 'JAVA', type: 'language', className: 'bg-yellow-600 text-white' },
    { name: 'JAVASCRIPT', type: 'language', className: 'bg-yellow-400 text-white' },
    { name: 'MARKDOWN', type: 'language', className: 'bg-gray-700 text-white' },
    { name: 'PYTHON', type: 'language', className: 'bg-blue-500 text-white' },
    
    // Cloud & Deployment
    { name: 'CLOUDFLARE', type: 'cloud', className: 'bg-orange-500 text-white' },
    { name: 'NETLIFY', type: 'cloud', className: 'bg-teal-600 text-white' },
    { name: 'VERCEL', type: 'cloud', className: 'bg-black text-white' },
    { name: 'RENDER', type: 'cloud', className: 'bg-green-500 text-white' },
    
    // Frontend Frameworks
    { name: 'BOOTSTRAP', type: 'frontend', className: 'bg-purple-600 text-white' },
    { name: 'DAISYUI', type: 'frontend', className: 'bg-purple-500 text-white' },
    { name: 'ELECTRON', type: 'frontend', className: 'bg-blue-600 text-white' },
    
    // Build Tools
    { name: 'ESBUILD', type: 'build', className: 'bg-yellow-500 text-white' },
    { name: 'EXPRESS.JS', type: 'backend', className: 'bg-gray-600 text-white' },
    { name: 'JWT', type: 'security', className: 'bg-pink-500 text-white' },
    { name: 'MUI', type: 'frontend', className: 'bg-blue-400 text-white' },
    { name: 'NPM', type: 'package', className: 'bg-red-500 text-white' },
    { name: 'NEXT', type: 'framework', className: 'bg-black text-white' },
    { name: 'NODE.JS', type: 'runtime', className: 'bg-green-600 text-white' },
    { name: 'NODEMON', type: 'tool', className: 'bg-green-500 text-white' },
    { name: 'QT', type: 'framework', className: 'bg-green-600 text-white' },
    
    // Frontend Libraries
    { name: 'REACT', type: 'library', className: 'bg-blue-400 text-white' },
    { name: 'REACT ROUTER', type: 'library', className: 'bg-red-500 text-white' },
    { name: 'REACT QUERY', type: 'library', className: 'bg-red-400 text-white' },
    { name: 'REDUX', type: 'state', className: 'bg-purple-600 text-white' },
    { name: 'TAILWINDCSS', type: 'css', className: 'bg-teal-500 text-white' },
    { name: 'TAURI', type: 'framework', className: 'bg-teal-600 text-white' },
    { name: 'VITE', type: 'build', className: 'bg-purple-500 text-white' },
    
    // Databases
    { name: 'MONGODB', type: 'database', className: 'bg-green-500 text-white' },
    { name: 'SQLITE', type: 'database', className: 'bg-blue-400 text-white' },
    { name: 'MYSQL', type: 'database', className: 'bg-blue-500 text-white' },
    { name: 'SUPABASE', type: 'database', className: 'bg-green-400 text-white' },
    
    // Design & Tools
    { name: 'FIGMA', type: 'design', className: 'bg-red-400 text-white' },
    { name: 'CANVA', type: 'design', className: 'bg-cyan-500 text-white' },
    { name: 'GIT', type: 'version-control', className: 'bg-red-500 text-white' },
    { name: 'GITHUB ACTIONS', type: 'ci-cd', className: 'bg-blue-600 text-white' },
    
    // Development Tools
    { name: 'GITHUB', type: 'platform', className: 'bg-gray-800 text-white' },
    { name: 'BABEL', type: 'transpiler', className: 'bg-yellow-500 text-white' },
    { name: 'ARDUINO', type: 'hardware', className: 'bg-teal-500 text-white' },
    { name: 'CMAKE', type: 'build', className: 'bg-blue-500 text-white' },
    { name: 'ESLINT', type: 'linter', className: 'bg-purple-600 text-white' },
    { name: 'GRADLE', type: 'build', className: 'bg-green-600 text-white' },
    { name: 'FFMPEG', type: 'multimedia', className: 'bg-green-500 text-white' },
    { name: 'PRETTIER', type: 'formatter', className: 'bg-yellow-600 text-white' },
    
    // Other
    { name: 'PORTFOLIO', type: 'project', className: 'bg-orange-500 text-white' },
    { name: 'RASPBERRY PI', type: 'hardware', className: 'bg-red-500 text-white' },
    { name: 'TAMPERMONKEY', type: 'tool', className: 'bg-gray-700 text-white' }
  ];

  const fetchGitHubStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const username = 'sapariyaneel';
      const response = await fetch(`/api/github-stats?username=${username}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch GitHub stats');
      }

      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch GitHub stats');
      }

      setStats(data);
      setRetryCount(0); // Reset retry count on success
    } catch (error) {
      console.error('Error fetching GitHub stats:', error);
      setError(error.message);
      
      // Retry logic (max 3 attempts)
      if (retryCount < 3) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchGitHubStats();
        }, Math.min(1000 * Math.pow(2, retryCount), 5000)); // Exponential backoff
      }
    } finally {
      setLoading(false);
    }
  }, [retryCount]);

  useEffect(() => {
    // Check if dark mode is enabled
    const darkModeCheck = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    darkModeCheck();
    const observer = new MutationObserver(darkModeCheck);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetchGitHubStats();
  }, [fetchGitHubStats]);

  // Loading state
  if (loading) {
    return (
      <section id="github-stats" className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mx-auto"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-[#1f2937] rounded-xl p-6 shadow-lg">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"/>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-4 bg-gray-200 dark:bg-gray-700 rounded"/>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="github-stats" className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center text-red-600 dark:text-red-400">
          <h2 className="heading">GitHub Stats</h2>
          <p>Error loading GitHub stats: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary>
      <section id="github-stats" className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">GitHub Stats</h2>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1f2937] rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <img
              src={`https://nirzak-streak-stats.vercel.app/?user=sapariyaneel&theme=${isDarkMode ? 'dark' : 'light'}&hide_border=true&background=00000000&border=30363D&stroke=30363D&ring=39D353&fire=39D353&currStreakNum=39D353&sideNums=39D353&currStreakLabel=39D353&sideLabels=39D353&dates=39D353`}
              alt="GitHub Streak Stats"
              className="w-full h-auto mx-auto"
              loading="lazy"
            />
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">💻 Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className={`px-4 py-2 rounded text-sm font-medium ${tech.className}`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* GitHub Contribution Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">📊 Contribution Graph</h3>
            <div className="w-full overflow-hidden rounded-xl bg-transparent p-6">
              <div className="overflow-x-auto">
                <img
                  src={`https://ghchart.rshah.org/${isDarkMode ? '39d353' : '39d353'}/sapariyaneel`}
                  alt="Neel Sapariya's GitHub Contribution Chart"
                  className={`w-full h-auto min-w-[800px] max-w-full mx-auto ${
                    isDarkMode ? 'dark:brightness-110' : ''
                  }`}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ErrorBoundary>
  );
};

export default GitHubStats; 