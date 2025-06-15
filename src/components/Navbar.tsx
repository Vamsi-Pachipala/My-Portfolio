import { useState, useEffect, useContext } from 'react';
import { scroller } from 'react-scroll';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { name: 'Home', to: 'hero', offset: 0 },
    { name: 'About', to: 'about', offset: -70 },
    { name: 'Skills', to: 'skills', offset: -70 },
    { name: 'Projects', to: 'projects', offset: -70 },
    { name: 'Experience', to: 'experience', offset: -70 },
    { name: 'Certifications', to: 'certifications', offset: -70 },
    { name: 'Coding', to: 'coding', offset: -70 },
    { name: 'Contact', to: 'contact', offset: -70 },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-xl font-bold text-primary cursor-pointer">
            <Code className="h-6 w-6" />
            <span>Vamsi Pachipala</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() =>
                  scroller.scrollTo(link.to, {
                    smooth: true,
                    offset: link.offset,
                    duration: 500,
                  })
                }
                className="nav-link cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Theme toggle + menu icon */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Hamburger menu */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Changed from top slide to side slide */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-dark-bg backdrop-blur-md transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-xl font-bold text-primary">Vamsi Pachipala</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center mt-8 space-y-6 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => {
                  scroller.scrollTo(link.to, {
                    smooth: true,
                    offset: link.offset,
                    duration: 500,
                  });
                }, 200);
              }}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;