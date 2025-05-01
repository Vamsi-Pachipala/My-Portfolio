import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code, School, Briefcase as Work } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  
  const experiences = [
    {
      title: "B.Tech in Information Technology",
      company: "Gayatri Vidya Parishad College of Engineering",
      date: "2022 - 2026 (Currently pursuing)",
      description: "Studying Information Technology with focus on software development, data structures, algorithms, and web technologies.",
      icon: <School />,
      iconStyle: { background: '#9C27B0', color: '#fff' }
    },
    {
      title: "Junior Developer Intern",
      company: "Namoona 3D Labs",
      date: "Dec 2024 - Jan 2025",
      description: "Worked on developing and optimizing 3D modeling tools and applications.",
      icon: <Work />,
      iconStyle: { background: '#FF9800', color: '#fff' }
    },
    {
      title: "Project Intern",
      company: "Infosys Springboard",
      date: "Oct 2024 - Dec 2024",
      description: "Contributed to projects focusing on web technologies and software development.",
      icon: <Work />,
      iconStyle: { background: '#2196F3', color: '#fff' }
    },
    {
      title: "Campus Ambassador & Contributor",
      company: "GSSoC (GirlScript Summer of Code)",
      date: "Oct 2024 - Nov 2024",
      description: "Promoted open source contribution at campus. Contributed to multiple projects and mentored junior developers.",
      icon: <School />,
      iconStyle: { background: '#4CAF50', color: '#fff' }
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background.
          </p>
        </motion.div>
        
        <VerticalTimeline lineColor={theme === 'dark' ? '#2d2d2d' : '#e5e5e5'}>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ 
                background: theme === 'dark' ? '#1E1E1E' : '#fff',
                boxShadow: theme === 'dark' 
                  ? '0 3px 10px rgba(0, 0, 0, 0.4)' 
                  : '0 3px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}
              contentArrowStyle={{ 
                borderRight: theme === 'dark' 
                  ? '7px solid #1E1E1E' 
                  : '7px solid #fff' 
              }}
              date={exp.date}
              iconStyle={exp.iconStyle}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-primary mt-1">
                {exp.company}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-3">
                {exp.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;