import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="relative py-24 px-6 xl:px-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl xl:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My expertise in modern web technologies
          </p>
        </div>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {skill.level}%
                </span>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;