import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code, School } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      title: "B.Tech in Mechanical Engineering",
      company: "Gayatri Vidya Parishad College of Engineering",
      date: "2020 – 2023",
      description: "Graduated with 8.61 CGPA. Focused on Data Structures, OOPs, Networking, and Java development.",
      icon: <School />,
      iconStyle: { background: '#9C27B0', color: '#fff' }
    },
    {
      title: "E-Commerce Microservices Project",
      company: "Personal Project",
      date: "Apr 2024",
      description: "Designed scalable backend with Spring Boot, Eureka, Redis, JWT Auth, and MySQL. Focused on modular microservices, indexing, caching, and pagination.",
      icon: <Code />,
      iconStyle: { background: '#2196F3', color: '#fff' }
    },
    {
      title: "Competitive Programming & Achievements",
      company: "LeetCode, GFG, CodeVita",
      date: "Ongoing",
      description: "Solved 1000+ DSA problems. CodeVita Global Rank #700 (R1), #1347 (R2). Ranked 54 in ECET. Active on GitHub & LeetCode.",
      icon: <Code />,
      iconStyle: { background: '#4CAF50', color: '#fff' }
    },
    {
      title: "Backend Developer – IRA & IRA 2.0",
      company: "Tata Consultancy Services (TCS)",
      date: "Jun 2023 – May 2025",
      description: "Worked on connected vehicle platform serving 10M+ hits/day. Built APIs for vehicle insights, trip history, charge limits, and health reports. Integrated with Redis, MySQL, and CRM systems.",
      icon: <Briefcase />,
      iconStyle: { background: '#FF9800', color: '#fff' }
    },
    {
      title: "Senior Software Engineer",
      company: "BlackDuck",
      date: "Jun 2025 – Present",
      description: "Leading backend initiatives to build scalable, secure systems. Involved in system design, microservices architecture, and performance tuning using Spring Boot, Redis, Kafka, and Kubernetes.",
      icon: <Briefcase />,
      iconStyle: { background: '#000000', color: '#fff' }
    }
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
            My professional journey, academic milestones, and engineering achievements.
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
