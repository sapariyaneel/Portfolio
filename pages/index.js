import Head from 'next/head';
import dynamic from 'next/dynamic';

// Import sections with loading state
const Hero = dynamic(() => import('../components/sections/Hero'), {
  loading: () => <div className="min-h-screen animate-pulse bg-gray-100 dark:bg-gray-800" />
});
const About = dynamic(() => import('../components/sections/About'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});
const Experience = dynamic(() => import('../components/sections/Experience'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});
const Projects = dynamic(() => import('../components/sections/Projects'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});
const Skills = dynamic(() => import('../components/sections/Skills'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});
const Contact = dynamic(() => import('../components/sections/Contact'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});

// Import SEO component
const StructuredData = dynamic(() => import('../components/StructuredData'));

const baseUrl = 'https://neelsapariya.vercel.app'; // Update to match your Vercel domain

export default function Home() {
  const sectionDescriptions = {
    home: "Neel Sapariya - Full Stack Developer specializing in React, Next.js, and Node.js. Creating innovative web solutions with modern technologies.",
    about: "Learn about Neel Sapariya's journey in web development, technical expertise, and passion for creating elegant solutions.",
    experience: "Explore Neel Sapariya's professional experience in full-stack development, including work at PRYM Aerospace and various tech projects.",
    projects: "View Neel's portfolio of full-stack projects, including e-commerce platforms, real-time applications, and innovative web solutions.",
    skills: "Discover Neel's technical skills in frontend and backend development, including React, Node.js, MongoDB, and cloud technologies.",
    contact: "Get in touch with Neel Sapariya for collaboration, job opportunities, or to discuss your next web development project.",
  };

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Neel Sapariya | Full Stack Developer</title>
        <meta name="description" content={sectionDescriptions.home} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="z65P9d0YNI5D6PqOyjky5ZOYL9rOlOYdGZYkFiZZmog" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preload Critical Resources */}
        <link 
          rel="preload" 
          href="/profile.jpg" 
          as="image"
          type="image/jpeg"
        />
        <link 
          rel="preload" 
          href="/herobg.png" 
          as="image"
          type="image/png"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Neel Sapariya | Full Stack Developer" />
        <meta property="og:description" content={sectionDescriptions.home} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        <meta property="og:site_name" content="Neel Sapariya Portfolio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sapariyaneel_" />
        <meta name="twitter:creator" content="@sapariyaneel_" />
        <meta name="twitter:title" content="Neel Sapariya | Full Stack Developer" />
        <meta name="twitter:description" content={sectionDescriptions.home} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
        
        {/* Section-specific meta tags */}
        <meta name="about" content={sectionDescriptions.about} />
        <meta name="experience" content={sectionDescriptions.experience} />
        <meta name="projects" content={sectionDescriptions.projects} />
        <meta name="skills" content={sectionDescriptions.skills} />
        <meta name="contact" content={sectionDescriptions.contact} />
        
        {/* Keywords */}
        <meta name="keywords" content="Neel Sapariya, Full Stack Developer, Web Development, React, Next.js, Node.js, MongoDB, JavaScript, Frontend Developer, Backend Developer" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Neel Sapariya" />
        <meta name="theme-color" content="#050816" />
        <meta name="robots" content="index, follow" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      </Head>

      <StructuredData sectionDescriptions={sectionDescriptions} />

      <main className="bg-white dark:bg-primary" role="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
} 