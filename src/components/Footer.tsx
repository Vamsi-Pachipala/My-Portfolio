import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Vamsi-Pachipala' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vamsi-pachipala-98a338209/' },
    { name: 'Email', url: 'mailto:vamsipachipala243@gmail.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Vamsi Pachipala</h3>
            <p className="text-gray-400 mb-6">
              Backend Developer | Java & Spring Boot Enthusiast | System Design, DSA & Microservices Practitioner.
            </p>
            <p className="text-gray-500">
              Based in Bengaluru, India
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Vamsi Pachipala. All rights reserved.
          </p>

          <p className="text-gray-500 flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span>Built with ❤️ by Vamsi Pachipala</span>
            <span>|</span>
            <span>Powered by React & TailwindCSS</span>
          </p>

          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors duration-300 cursor-pointer"
          >
            <ArrowUp className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
