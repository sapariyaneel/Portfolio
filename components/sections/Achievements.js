import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Certifications",
    items: [
      {
        name: "Certificate in C / C++ Programming",
        organization: "MKCL KLiC",
        date: "2023",
        // description: "Awarded for proactive approach and dedication in the workplace"
      },
      {
        name: "Certificate in Web Designing",
        organization: "MKCL KLiC",
        date: "2023",
      },
      {
        name: "Internship Completion Certificate",
        organization: "Octanet Services Pvt. Ltd.",
        date: "2024",
      },
      {
        name: "Internship Completion Certificate",
        organization: "PRYM Aerospace Pvt. Ltd.",
        date: "2025",
      }
      // Add more certifications here
    ]
  },
  {
    title: "Awards & Recognition",
    items: [
      // Add more achievements here as needed
      {
        name: "Self Starter Award",
        organization: "PRYM Aerospace Pvt. Ltd.",
        date: "Jan 2025",
        description: "Honored with the Self Starter Award for demonstrating exceptional initiative, problem-solving skills, and a proactive approach in the workplace. This recognition reflects my ability to take ownership of tasks, drive innovation, and contribute meaningfully to organizational success. By consistently identifying opportunities for improvement and implementing effective solutions, I have showcased a strong work ethic, leadership potential, and the ability to thrive in dynamic environments. This award highlights my commitment to excellence, self-motivation, and dedication to making a lasting impact within my professional sphere."
      }
    ]
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="heading text-center"
        >
          Achievements & Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {achievements.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-gray-900 dark:text-white mb-6"
              >
                {category.title}
              </motion.h3>
              
              <div className="space-y-6">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, x: -20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="border-l-4 border-blue-600 dark:border-blue-400 pl-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.organization} • {item.date}
                    </p>
                    {item.description && (
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements; 