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
const Achievements = dynamic(() => import('../components/sections/Achievements'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});
const GitHubStats = dynamic(() => import('../components/sections/GitHubStats'), {
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
    achievements: "Explore Neel's achievements, certifications, and recognition in the field of web development and technology.",
    githubStats: "View Neel's GitHub statistics, contributions, and most used programming languages.",
    contact: "Get in touch with Neel Sapariya for collaboration, job opportunities, or to discuss your next web development project.",
  };

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Neel Sapariya - Full Stack Developer</title>
        <meta name="description" content="Neel Sapariya - Personal portfolio website. Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and professional experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://neelsapariya.vercel.app" />
        
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
        <meta property="og:title" content="Neel Sapariya | Personal Portfolio - Full Stack Developer" />
        <meta property="og:description" content="Neel Sapariya - Personal portfolio website. Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and professional experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neelsapariya.vercel.app" />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:site_name" content="Neel Sapariya" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sapariyaneel_" />
        <meta name="twitter:creator" content="@sapariyaneel_" />
        <meta name="twitter:title" content="Neel Sapariya | Personal Portfolio - Full Stack Developer" />
        <meta name="twitter:description" content="Neel Sapariya - Personal portfolio website. Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and professional experience." />
        <meta name="twitter:image" content="/profile.jpg" />
        
        {/* Keywords */}
        <meta name="keywords" content="Neel Sapariya, Neel, Sapariya, Portfolio, Personal Website, Resume, CV, Full Stack Developer, Web Developer, React Developer, Next.js Developer, Node.js Developer, JavaScript Developer, Web Development, Software Engineer, Frontend Developer, Backend Developer, MERN Stack, JavaScript Expert, UI/UX Developer, Responsive Web Design" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Neel Sapariya" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="application-name" content="Neel Sapariya Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Neel Sapariya" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      </Head>

      <StructuredData sectionDescriptions={sectionDescriptions} />

      <main className="bg-white dark:bg-primary" role="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <GitHubStats />
        <Contact />
      </main>
    </>
  );
} 