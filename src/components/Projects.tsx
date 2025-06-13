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
      title: 'E-Commerce Microservices Backend',
      description: 'A scalable e-commerce backend system using microservices, Spring Boot, Spring Security, and MySQL. Features include authentication, inventory, order, and product management.',
      image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg',
      techStack: ['Java', 'Spring Boot', 'Spring Gate Way', 'Spring Security', 'MySQL', 'Eureka'],
      githubLink: 'https://github.com/Vamsi-Pachipala/e-commerce-Microservices',
    },
    {
      id: 2,
      title: 'System Design Patterns & Practices',
      description: 'A comprehensive collection of scalable system design patterns, HLD/LLD templates, and backend architecture blueprints for real-world applications.',
      image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg',
      techStack: ['Java', 'Spring Boot', 'Scalable Architecture', 'Design Patterns', 'HLD/LLD'],
      githubLink: 'https://github.com/Vamsi-Pachipala/SystemDesign',
    },
    {
      id: 3,
      title: 'Library Management System',
      description: 'A complete backend system for managing library operations including book inventory, users, issue/return tracking, and fine calculation — built using Java and Spring Boot.',
      image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg',
      techStack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
      githubLink: 'https://github.com/Vamsi-Pachipala/LibraryManagementSystem',
    }
        
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my backend development projects and systems.
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
              className="card overflow-hidden group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-60 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Tech stack overlay */}
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
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
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

              {/* Left border hover effect */}
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
            href="https://github.com/Vamsi-Pachipala" 
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