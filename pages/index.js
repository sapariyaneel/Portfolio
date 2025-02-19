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

const baseUrl = 'https://neelsapariya.com'; // Replace with your domain

export default function Home() {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Neel Sapariya | Full Stack Developer</title>
        <meta name="description" content="Neel Sapariya is a passionate Full Stack Developer crafting beautiful and functional web experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Neel Sapariya | Full Stack Developer" />
        <meta property="og:description" content="Neel Sapariya is a passionate Full Stack Developer crafting beautiful and functional web experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        <meta property="og:site_name" content="Neel Sapariya Portfolio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sapariyaneel_" />
        <meta name="twitter:creator" content="@sapariyaneel_" />
        <meta name="twitter:title" content="Neel Sapariya | Full Stack Developer" />
        <meta name="twitter:description" content="Neel Sapariya is a passionate Full Stack Developer crafting beautiful and functional web experiences." />
        <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="Neel Sapariya, Full Stack Developer, Web Development, React, Next.js, Node.js" />
        <meta name="author" content="Neel Sapariya" />
        <meta name="theme-color" content="#050816" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      </Head>

      <StructuredData />

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