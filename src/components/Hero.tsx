import { useContext } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Rakesh Chikatla 👋",
      "Competitive Programmer",
      "Full-Stack Developer",
      "Open Source Contributor"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background animation blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-2/3 -right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="section-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            <span className="text-primary">{text}</span>
            <Cursor cursorColor="#6C63FF" />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Crafting scalable solutions that simplify technology for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="https://github.com/chikatlarakesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>View My Work</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1XuHwO-XVwgSozzueigIi4G4_Mw3nrzB0/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>View Resume</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 group-hover:text-primary transition-colors duration-300">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
