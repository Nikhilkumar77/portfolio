import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'JavaScript', level: 92 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 87 },
        { name: 'Python', level: 83 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: { name: string; level: number }; index: number }> = ({ skill, index }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{
                animationDelay: `${categoryIndex * 200}ms`
              }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 text-white rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 4 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS',
              'Next.js', 'Express', 'PostgreSQL', 'Docker', 'Git', 'Figma'
            ].map((tech, index) => (
              <div
                key={tech}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;