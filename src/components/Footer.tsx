import React from 'react';
import { Heart, Mail, Github as GitHub, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-6">
            <span className="text-blue-400">Abdelrahman</span>
            <span className="text-gray-200"> Lotfy</span>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="mailto:abdelrahmanm.lotfyy@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/Warz1154"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdelrahman-mahmoud-9720221a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="#hero"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#teaching"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Teaching
            </a>
            <a 
              href="#skills"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#projects"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
          
          <div className="text-gray-500 text-sm mb-4">
            &copy; {currentYear} Abdelrahman Lotfy. All rights reserved.
          </div>
          
          <div className="flex items-center text-gray-500 text-xs">
            <span>Made with</span>
            <Heart size={12} className="mx-1 text-red-500" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;