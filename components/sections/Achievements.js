import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Certifications",
    items: [
      {
        name: "Full Stack Java Developer",
        organization: "ExcelR - Hyderabad",
        date: "2025",
        link: "https://drive.google.com/file/d/1gogr3YaS2tpE1LivzLtE_5sJnI-D4M7Y/view?usp=sharing"
        // description: "Awarded for proactive approach and dedication in the workplace"
      },
      {
        name: "MKCL KLiC Certificate in C Programming",
        organization: "MKCL KLiC",
        date: "2023",
        link: "https://drive.google.com/file/d/1xm_5yGXTAoj-iRhG9W6hAAxtKpxj5ccH/view?usp=sharing"
        // description: "Awarded for proactive approach and dedication in the workplace"
      },
      {
        name: "MKCL KLiC Certificate in C++ Programming",
        organization: "MKCL KLiC",
        date: "2023",
        link: "https://drive.google.com/file/d/1V2BHSo480BW1C-k8IcOCfaJdpqkjoONA/view?usp=sharing"
        // description: "Awarded for proactive approach and dedication in the workplace"
      },
      {
        name: "MKCL KLiC Certificate in Web Designing",
        organization: "MKCL KLiC",
        date: "2023",
        link: "https://drive.google.com/file/d/1xqlq_jenFwUDaT-GjSd7aozvny20idX0/view?usp=sharing"
      },
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

// SVG icon component for external link
const ExternalLinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-4 w-4 inline-block ml-1 text-blue-500" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    strokeWidth={2}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
    />
  </svg>
);

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
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {item.name}
                          <ExternalLinkIcon />
                        </a>
                      ) : (
                        item.name
                      )}
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