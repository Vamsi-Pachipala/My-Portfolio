import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Terminal, Wrench, Users } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  category: 'backend' | 'programming' | 'tools' | 'soft';
}

const Skills = () => {
  const [filter, setFilter] = useState<string>('all');

  const skills: Skill[] = [
    // 🔙 Backend
    { name: 'Java', proficiency: 95, category: 'backend' },
    { name: 'Spring Boot', proficiency: 90, category: 'backend' },
    { name: 'Spring Security', proficiency: 80, category: 'backend' },
    { name: 'REST API Design', proficiency: 90, category: 'backend' },
    { name: 'Microservices Architecture', proficiency: 80, category: 'backend' },
    { name: 'Redis', proficiency: 80, category: 'backend' },
    { name: 'MySQL', proficiency: 90, category: 'backend' },
    { name: 'Eureka Server', proficiency: 80, category: 'backend' },

    // 🧠 Programming
    { name: 'Data Structures', proficiency: 95, category: 'programming' },
    { name: 'Algorithms', proficiency: 90, category: 'programming' },
    { name: 'Multithreading', proficiency: 80, category: 'programming' },
    { name: 'OOPs', proficiency: 90, category: 'programming' },
    { name: 'System Design', proficiency: 85, category: 'programming' },

    // 🛠️ Tools
    { name: 'Git', proficiency: 90, category: 'tools' },
    { name: 'GitHub', proficiency: 95, category: 'tools' },
    { name: 'Docker', proficiency: 80, category: 'tools' },
    { name: 'Kubernetes', proficiency: 80, category: 'tools' },
    { name: 'Postman', proficiency: 90, category: 'tools' },

    // 💬 Soft Skills
    { name: 'Team Collaboration', proficiency: 90, category: 'soft' },
    { name: 'Strategic Thinking', proficiency: 85, category: 'soft' },
    { name: 'Communication', proficiency: 80, category: 'soft' },
    { name: 'Problem Solving', proficiency: 95, category: 'soft' },
  ];

  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter(skill => skill.category === filter);

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Terminal className="h-5 w-5" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="h-5 w-5" /> },
    { id: 'programming', name: 'Programming', icon: <Code className="h-5 w-5" /> },
    { id: 'tools', name: 'Tools', icon: <Wrench className="h-5 w-5" /> },
    { id: 'soft', name: 'Soft Skills', icon: <Users className="h-5 w-5" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            The technologies and skills I’ve mastered as a backend engineer.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-lg">{skill.name}</h3>
                <span className="text-primary font-medium">{skill.proficiency}%</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-primary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mt-12"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`tag-${skill.name}`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="skill-tag"
              style={{
                backgroundColor: skill.proficiency > 85
                  ? 'rgba(99, 102, 241, 0.25)'     // Indigo-500 (primary)
                  : 'rgba(79, 70, 229, 0.15)',     // Indigo-600 muted
                color: skill.proficiency > 85
                  ? '#E0F2FE'                     // Light cyan text for contrast
                  : '#A5B4FC',                    // Soft indigo text
              }}              
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
