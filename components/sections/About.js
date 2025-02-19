import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/10 rounded-2xl transform rotate-3"></div>
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <Image
              src="/profile.jpg"
              alt="Neel Sapariya"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMTU1LTlCPj5APkJFRUpFQj5CQkL/2wBDAQoLCw4NDhwQEBxCLiYuQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="heading"
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-600 dark:text-gray-300"
          >
            <p>
              I'm a passionate Full Stack Developer with a keen eye for creating elegant solutions
              in the least amount of time. I specialize in building robust applications that meet
              both client and user needs.
            </p>
            
            <p>
              With a strong foundation in both frontend and backend development, I enjoy taking on
              complex problems and turning them into simple and beautiful interface designs.
              I also love the logic and structure of coding and always strive to write elegant
              and efficient code.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'Next.js', 'MongoDB', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 