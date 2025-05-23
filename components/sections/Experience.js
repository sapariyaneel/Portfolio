import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "PRYM Aerospace Pvt. Ltd.",
    period: "January 2025 - Present",
    description: [
      "Leading the development of scalable full stack applications to support aerospace systems.",
      "Designing & implementing robust front-end & back-end for real-time hardware integration.",
      "Collaborating cross-functionally to enhance system performance, security, and maintainability across the software lifecycle.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "PRYM Aerospace Pvt. Ltd.",
    period: "October 2024 - January 2025",
    description: [
      "Integrated sensors and modules in embedded systems to enhance functionality.",
      "Developed software to control the gyro machine and motors, improving automation.",
      "Gained hands-on experience in embedded systems and software development for aerospace applications.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: "some" }}
      >
        <h2 className="heading text-center">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: "some" }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[26px] bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: "some" }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ml-4"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {experience.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {experience.period}
                </p>
                <ul className="space-y-2">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 