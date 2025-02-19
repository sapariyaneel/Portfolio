import Head from 'next/head';
import dynamic from 'next/dynamic';

// Import sections
const Hero = dynamic(() => import('../components/sections/Hero'));
const About = dynamic(() => import('../components/sections/About'));
const Experience = dynamic(() => import('../components/sections/Experience'));
const Projects = dynamic(() => import('../components/sections/Projects'));
const Skills = dynamic(() => import('../components/sections/Skills'));
const Contact = dynamic(() => import('../components/sections/Contact'));

// Import SEO component
const StructuredData = dynamic(() => import('../components/StructuredData'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Neel Sapariya | Full Stack Developer</title>
        <meta name="description" content="Neel Sapariya is a passionate Full Stack Developer crafting beautiful and functional web experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Neel Sapariya | Full Stack Developer" />
        <meta property="og:description" content="Neel Sapariya is a passionate Full Stack Developer crafting beautiful and functional web experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neel Sapariya | Full Stack Developer" />
        <meta name="twitter:description" content="Neel Sapariya is a passionate Full Stack Developer crafting beautiful and functional web experiences." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="Neel Sapariya, Full Stack Developer, Web Development, React, Next.js, Node.js" />
        <meta name="author" content="Neel Sapariya" />
        <meta name="theme-color" content="#050816" />
      </Head>

      <StructuredData />

      <main className="bg-white dark:bg-primary">
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