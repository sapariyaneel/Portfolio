import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Bootstrap/Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Java", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Visual Studio Code", level: 90 },
      { name: "Arduino", level: 70 },
      { name: "Figma", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Render", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="heading text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1,
                          delay: idx * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true, amount: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 