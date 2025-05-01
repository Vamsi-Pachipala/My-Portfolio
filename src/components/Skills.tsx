import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Terminal, Wrench, Users } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'programming' | 'tools' | 'soft';
}

const Skills = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const skills: Skill[] = [
    { name: 'HTML', proficiency: 90, category: 'frontend' },
    { name: 'CSS', proficiency: 85, category: 'frontend' },
    { name: 'JavaScript', proficiency: 90, category: 'frontend' },
    { name: 'React', proficiency: 85, category: 'frontend' },
    { name: 'Tailwind CSS', proficiency: 80, category: 'frontend' },
    
    { name: 'Node.js', proficiency: 80, category: 'backend' },
    { name: 'Express.js', proficiency: 85, category: 'backend' },
    { name: 'MongoDB', proficiency: 75, category: 'backend' },
    { name: 'REST API', proficiency: 85, category: 'backend' },
    
    { name: 'C++', proficiency: 95, category: 'programming' },
    { name: 'Data Structures', proficiency: 90, category: 'programming' },
    { name: 'Algorithms', proficiency: 90, category: 'programming' },
    { name: 'Java', proficiency: 70, category: 'programming' },
    
    { name: 'Git', proficiency: 85, category: 'tools' },
    { name: 'GitHub', proficiency: 90, category: 'tools' },
    { name: 'VSCode', proficiency: 90, category: 'tools' },
    { name: 'Postman', proficiency: 80, category: 'tools' },
    
    { name: 'Leadership', proficiency: 85, category: 'soft' },
    { name: 'Strategic Thinking', proficiency: 90, category: 'soft' },
    { name: 'Communication', proficiency: 80, category: 'soft' },
    { name: 'Teamwork', proficiency: 85, category: 'soft' },
  ];
  
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: <Terminal className="h-5 w-5" /> },
    { id: 'frontend', name: 'Frontend', icon: <Code className="h-5 w-5" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="h-5 w-5" /> },
    { id: 'programming', name: 'Programming', icon: <Terminal className="h-5 w-5" /> },
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
            The technologies and skills I've acquired throughout my journey.
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
        
        {/* Skills grid */}
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
        
        {/* Skills cloud as alternative view */}
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
                  ? 'rgba(0, 191, 255, 0.2)' 
                  : 'rgba(0, 191, 255, 0.1)',
                color: skill.proficiency > 85 
                  ? 'rgb(0, 90, 120)' 
                  : 'rgb(0, 120, 160)',
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