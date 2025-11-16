import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 xl:px-16 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            HOJIAKBAR SOBIROV
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-md">
            Created with care, all rights reserved for Hojiakbar Sobirov Omega.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:hojiakbarsobirov30@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/hojiakbarsobirov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-500">
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;