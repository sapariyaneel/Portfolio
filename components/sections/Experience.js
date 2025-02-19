import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Junior Software Developer",
    company: "PRYM Aerospace Pvt. Ltd.",
    period: "January 2025 - Present",
    description: [
      "Led development of multiple high-impact web applications using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "PRYM Aerospace Pvt. Ltd.",
    period: "October 2024 - January 2025",
    description: [
      "Led development of multiple high-impact web applications using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Software Intern",
    company: "Octanet Services Pvt. Ltd.",
    period: "October 2024 - December 2024",
    description: [
      "Developed and maintained client websites using Next.js and MongoDB",
      "Optimized application performance improving load times by 60%",
      "Collaborated with design team to implement responsive UI/UX",
    ],
  },
  {
    title: "Data Entry",
    company: "Medical Clinic",
    period: "July 2022 - July 2023",
    description: [
      "Built responsive web applications using React and Redux",
      "Implemented modern UI libraries and custom animations",
      "Worked closely with backend team to integrate REST APIs",
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
        viewport={{ once: true }}
      >
        <h2 className="heading text-center">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[26px] bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full border-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900" />
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ml-4">
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 