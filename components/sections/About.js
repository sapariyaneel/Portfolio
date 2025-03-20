import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';

const About = () => {
  const profileImageUrl = 'https://neelsapariya.vercel.app/profile.jpg';
  const shouldReduceMotion = useReducedMotion();
  
  // Simplified animation variants with reduced complexity
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      <Head>
        {/* Image meta tags */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Neel Sapariya | About Me - Full Stack Developer" />
        <meta property="og:description" content="About Neel Sapariya - Full Stack Developer specializing in creating elegant solutions with modern web technologies" />
        <meta property="og:image" content={profileImageUrl} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neel Sapariya | About Me - Full Stack Developer" />
        <meta name="twitter:description" content="About Neel Sapariya - Full Stack Developer specializing in creating elegant solutions with modern web technologies" />
        <meta name="twitter:image" content={profileImageUrl} />
        <meta name="image" content={profileImageUrl} />
        <meta property="og:image:alt" content="Neel Sapariya - Full Stack Developer" />
        
        {/* Image indexing specific tags */}
        <meta name="robots" content="max-image-preview:large" />
        <meta name="thumbnail" content={profileImageUrl} />
        <link rel="image_src" href={profileImageUrl} />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Neel Sapariya",
              "givenName": "Neel",
              "familyName": "Sapariya",
              "image": profileImageUrl,
              "url": "https://neelsapariya.vercel.app",
              "jobTitle": "Full Stack Developer",
              "description": "Neel Sapariya is a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and professional experience.",
              "sameAs": [
                "https://github.com/sapariyaneel",
                "https://linkedin.com/in/neelsapariya",
                "https://x.com/sapariyaneel_"
              ]
            })
          }}
        />
      </Head>
      <section id="about" className="section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image container */}
          <motion.div 
            variants={imageVariants}
            className="relative w-full h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/10 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Image
                src="/profile.jpg"
                alt="Neel Sapariya - Full Stack Developer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMTU1LTlCPj5APkJFRUpFQj5CQkL/2wBDAQoLCw4NDhwQEBxCLiYuQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </motion.div>

          {/* Content container */}
          <motion.div variants={itemVariants}>
            <motion.h2 variants={itemVariants} className="heading">
              About Neel Sapariya
            </motion.h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <motion.p variants={itemVariants}>
                I'm <strong>Neel Sapariya</strong>, a passionate Full Stack Developer with a keen eye for creating elegant solutions
                in the least amount of time. I specialize in building robust applications that meet
                both client and user needs.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                With a strong foundation in both frontend and backend development, I enjoy taking on
                complex problems and turning them into simple and beautiful interface designs.
                I also love the logic and structure of coding and always strive to write elegant
                and efficient code.
              </motion.p>

              <motion.p variants={itemVariants}>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge through technical writing and mentoring.
              </motion.p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Next.js', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About; 