import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Cochin University of science and technology',
      location: 'Kochi, India',
      duration: '2021 - 2025',
      grade: 'CGPA: 7.9',
      description: 'Specialized in software engineering, data structures, algorithms, and web development. Completed various projects in full-stack development.',
      achievements: [
        'Led a team project on AI-based recommendation system',
        'Participated in multiple hackathons and coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Education (Science)',
      institution: 'Don Bosco Academy',
      location: 'patna, Bihar',
      duration: '2017 - 2019',
      grade: 'Percentage: 92.4%',
      description: 'Focused on Mathematics, Physics, and Computer Science. Built strong foundation in logical thinking and problem-solving.',
      achievements: [
        'School topper in Computer Science',
        'Participated in state-level science fair',
        'Member of school programming club'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'ABC123456'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      credentialId: 'DEF789012'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2022',
      credentialId: 'GHI345678'
    }
  ];

  const EducationCard: React.FC<{ education: typeof educationData[0]; index: number }> = ({ education, index }) => (
    <div 
      className="relative pl-8 pb-12 last:pb-0"
      style={{
        animationDelay: `${index * 200}ms`
      }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-900"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {education.institution}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{education.duration}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{education.location}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
            {education.grade}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {education.description}
        </p>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
            <Award className="w-4 h-4 mr-2" />
            Key Achievements
          </h4>
          <ul className="space-y-1">
            {education.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My educational journey and continuous learning in technology and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              Academic Background
            </h3>
            <div className="relative">
              {educationData.map((education, index) => (
                <EducationCard key={education.degree} education={education} index={index} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-600"
                  style={{
                    animationDelay: `${(index + 2) * 200}ms`
                  }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{cert.date}</span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Stats */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Courses Completed</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Hackathons Participated</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Open Source Contributions</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;