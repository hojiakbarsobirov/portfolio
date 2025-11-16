import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isOpen, setIsOpen, darkMode, setDarkMode, activeSection, scrollToSection, scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center h-24">
          <h1 className="font-bold text-xl xl:text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            HOJIAKBAR SOBIROV
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`cursor-pointer font-medium transition-all duration-300 relative group ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </li>
            ))}
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200 dark:border-gray-800">
          <ul className="flex flex-col items-center space-y-6 py-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`cursor-pointer font-medium text-lg transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;