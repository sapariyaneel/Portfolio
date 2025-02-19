import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading text-4xl sm:text-6xl lg:text-7xl mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Neel Sapariya
            </span>
          </h1>
          <h2 className="subheading max-w-2xl mx-auto">
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="#projects" className="button-primary">
              View My Work
            </Link>
            <Link href="#contact" className="button-secondary">
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16"
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 