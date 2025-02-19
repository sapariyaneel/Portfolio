const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  'public',
  'public/projects',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate an SVG placeholder
function generatePlaceholderSVG(text, width = 800, height = 600) {
  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#2563eb"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dy=".3em">
        ${text}
      </text>
    </svg>
  `;
}

// List of images to generate
const images = [
  { name: 'profile.jpg', text: 'Profile Image' },
  { name: 'og-image.jpg', text: 'Portfolio Preview' },
  { name: 'herobg.png', text: 'Hero Background' },
  { name: 'projects/ecommerce.jpg', text: 'E-Commerce Platform' },
  { name: 'projects/taskapp.jpg', text: 'Task Management App' },
  { name: 'projects/ai-content.jpg', text: 'AI Content Generator' },
  { name: 'projects/portfolio.jpg', text: 'Portfolio Website' },
  { name: 'projects/weather.jpg', text: 'Weather Dashboard' },
  { name: 'projects/blog-api.jpg', text: 'Blog API' },
];

// Generate and save placeholder images
images.forEach(({ name, text }) => {
  const svg = generatePlaceholderSVG(text);
  const filePath = path.join('public', name);
  fs.writeFileSync(filePath, svg);
  console.log(`Generated: ${filePath}`);
});

// Generate favicon
const favicon = `
  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#2563eb"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dy=".3em">
      N
    </text>
  </svg>
`;

fs.writeFileSync('public/favicon.ico', favicon);
console.log('Generated: public/favicon.ico');

console.log('\nAll placeholder images have been generated!'); 