import React from 'react';
import { Sparkles, Code, Globe, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
          
          {/* Right Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h2 className="font-bold text-4xl xl:text-5xl text-blue-600 dark:text-blue-400">
                  About me
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a frontend developer, currently developing my backend skills. I can learn new
                frameworks and libraries and use them in my projects. I am outgoing, I can work in a
                team and always eager to take on new challenges.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-2xl hover:scale-105 transition-transform duration-300 border border-blue-200 dark:border-gray-700">
                <h3 className="font-bold text-4xl xl:text-5xl text-blue-600 dark:text-blue-400">
                  5<span className="text-blue-500">+</span>
                </h3>
                <p className="font-medium text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Completed<br />Project
                </p>
              </div>

              <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-2xl hover:scale-105 transition-transform duration-300 border border-blue-200 dark:border-gray-700">
                <h3 className="font-bold text-4xl xl:text-5xl text-blue-600 dark:text-blue-400">
                  95<span className="text-blue-500">%</span>
                </h3>
                <p className="font-medium text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Client<br />Satisfaction
                </p>
              </div>

              <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-2xl hover:scale-105 transition-transform duration-300 border border-blue-200 dark:border-gray-700">
                <h3 className="font-bold text-4xl xl:text-5xl text-blue-600 dark:text-blue-400">
                  1<span className="text-blue-500">+</span>
                </h3>
                <p className="font-medium text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Years of<br />experience
                </p>
              </div>
            </div>
          </div>

          {/* Left Services */}
          <div className="flex-1 grid gap-6">
            <div className="group p-8 bg-blue-50 dark:bg-gray-800 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-blue-600 dark:bg-blue-500 rounded-2xl">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">Web Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Building responsive and modern websites using latest technologies
              </p>
            </div>

            <div className="group p-8 bg-blue-50 dark:bg-gray-800 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-blue-600 dark:bg-blue-500 rounded-2xl">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">UI/UX Design</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Creating beautiful and intuitive user interfaces
              </p>
            </div>

            <div className="group p-8 bg-blue-50 dark:bg-gray-800 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-blue-600 dark:bg-blue-500 rounded-2xl">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">Responsive Design</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Ensuring perfect display across all devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;