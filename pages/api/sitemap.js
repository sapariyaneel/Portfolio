export default function handler(req, res) {
  // Set the content type to XML
  res.setHeader('Content-Type', 'text/xml');
  
  // Get the current date in YYYY-MM-DD format
  const date = new Date().toISOString().split('T')[0];
  
  // Generate the sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://neelsapariya.vercel.app</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://neelsapariya.vercel.app/#about</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://neelsapariya.vercel.app/#experience</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://neelsapariya.vercel.app/#projects</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>https://neelsapariya.vercel.app/#skills</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>https://neelsapariya.vercel.app/#contact</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    </urlset>`;

  // Send the XML response
  res.write(xml);
  res.end();
} 