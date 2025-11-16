import React from 'react';
import { Mail, Github, Linkedin, Code, ChevronDown, ArrowRight } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 xl:px-16 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 backdrop-blur-sm">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h2 className="font-bold text-4xl xl:text-6xl leading-tight">
                Hello<span className="text-red-500 text-5xl xl:text-7xl">.</span>
              </h2>
              
              <h3 className="text-3xl xl:text-5xl font-semibold text-gray-800 dark:text-gray-100">
                I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Hojiakbar</span>
              </h3>
              
              <h3 className="text-2xl xl:text-4xl font-medium text-gray-700 dark:text-gray-300">
                Front-end Developer
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Passionate about creating beautiful, responsive, and user-friendly web applications. 
                Currently expanding my skills to become a full-stack developer.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Got a project?
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="https://docs.google.com/document/d/1u7rGiRmLRNe6b34kODK-dLLr0U-wGjPykQF3qKfD6zU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-105"
              >
                My Resume
              </a>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="mailto:hojiakbarsobirov30@gmail.com"
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/hojiakbarsobirov"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src="developer-img.png"
                  alt="Hojiakbar Sobirov"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;