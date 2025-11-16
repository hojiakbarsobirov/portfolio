import React from 'react';

const SkillsMarquee = ({ skills }) => {
  return (
    <section className="relative py-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-y border-gray-200 dark:border-gray-700">
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="inline-flex items-center mx-8">
              <span className="text-2xl xl:text-3xl font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {skill.name}
              </span>
              <span className="mx-8 text-gray-400 dark:text-gray-600">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;