import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, User, Brain, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better, my background, and what drives me.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Profile image */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                <img 
                  src="/main_pic.jpeg" 
                  alt="Rakesh Ch" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10"></div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-dark-card shadow-lg rounded-full p-3">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-card shadow-lg rounded-full p-3">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
            </div>
          </motion.div>
          
          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Rakesh Chikatla</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-4">
                <h4 className="font-semibold mb-1">Role</h4>
                <p className="text-gray-600 dark:text-gray-300">Final Year IT Student</p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-1">College</h4>
                <p className="text-gray-600 dark:text-gray-300">GVP College of Engineering</p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-1">Personality</h4>
                <p className="text-gray-600 dark:text-gray-300">ENTJ – Assertive, Strategic</p>
              </div>
              
              <div className="card p-4">
                <h4 className="font-semibold mb-1">Interests</h4>
                <p className="text-gray-600 dark:text-gray-300">Competitive Programming, Open Source</p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center space-x-3 mb-3">
                <Brain className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold">Goal</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "To build scalable solutions that make technology accessible to everyone."
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                I'm passionate about solving complex problems through code. As a full-stack developer and competitive programmer, I strive to create efficient, user-friendly applications that make a real impact.
              </p>
              
              <a 
                href="https://www.linkedin.com/in/rakeshchikatla/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                View My LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;