import { useState, useEffect, useContext } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Auto-close mobile nav when user scrolls manually
  useEffect(() => {
    const handleScrollCloseMenu = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScrollCloseMenu);
    return () => window.removeEventListener('scroll', handleScrollCloseMenu);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 text-xl font-bold text-primary cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <Code className="h-6 w-6" />
            <span>Vamsi Pachipala</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
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

          {/* Theme Toggle + Mobile Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 z-30 bg-white dark:bg-dark-bg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={() => {
                setIsOpen(false); // Close first
                setTimeout(() => {
                  scroller.scrollTo(link.to, {
                    smooth: true,
                    offset: link.offset,
                    duration: 500,
                  });
                }, 300); // Wait for menu to animate out
              }}
              className="w-full text-center py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
