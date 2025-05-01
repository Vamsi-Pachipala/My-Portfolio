import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Edu Consultancy System',
      description: 'Educational consultancy platform built for Infosys Springboard internship. Connects students with educational advisors.',
      image: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/chikatlarakesh/EduConsultancySystem',
      demoLink: '#demo-1'
    },
    {
      id: 2,
      title: 'Technical Term Simplifier',
      description: 'MERN stack application that simplifies complex technical jargon into easy-to-understand definitions.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
      githubLink: 'https://github.com/chikatlarakesh',
      demoLink: '#demo-2'
    },
    {
      id: 3,
      title: 'Study Planner App',
      description: 'Android application to help students organize their study schedules, set goals, and track progress.',
      image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg',
      techStack: ['Kotlin', 'Android SDK', 'SQLite', 'Material Design'],
      githubLink: 'https://github.com/chikatlarakesh/Study-Planner',
    },
    {
      id: 4,
      title: 'LeetCode Progress Tracker',
      description: 'Helps track progress on LeetCode problems, categorized by difficulty and patterns.',
      image: 'https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg',
      techStack: ['C++', 'Data Structures', 'Algorithms', 'GitHub'],
      githubLink: 'https://github.com/chikatlarakesh/Leetcode-Progress',
    },
    {
      id: 5,
      title: 'Interview Prep Resource Hub',
      description: 'Centralized platform for interview preparation materials, coding challenges, and industry insights.',
      image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg',
      techStack: ['React', 'Firebase', 'JavaScript', 'CSS'],
      githubLink: 'https://github.com/chikatlarakesh/Interview-Prep-Resource-Hub',
      demoLink: '#demo-5'
    },
    {
      id: 6,
      title: 'Smart Walking Cane',
      description: 'IoT prototype for a smart walking cane that provides navigation assistance and obstacle detection.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
      techStack: ['IoT', 'Arduino', 'Sensors', 'C++'],
      githubLink: 'https://github.com/chikatlarakesh',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my technical projects and applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Tech stack overlaid on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={`${project.id}-${tech}`}
                      className="text-xs px-2 py-1 rounded-full bg-primary/80 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Project links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    <span>Code</span>
                  </a>
                  
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Hover effect */}
              <motion.div 
                className="absolute top-0 left-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-300"
                animate={{ 
                  height: hoveredProject === project.id ? '100%' : '0%' 
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="https://github.com/chikatlarakesh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Code className="mr-2 h-5 w-5" />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;