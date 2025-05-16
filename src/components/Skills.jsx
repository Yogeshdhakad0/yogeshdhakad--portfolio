import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Others' }
  ];

  const skillsData = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Redux', level: 80 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/SCSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Responsive Design', level: 90 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'Mongoose', level: 75 },
      { name: 'Authentication', level: 80 },
      { name: 'Server Deployment', level: 70 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 80 },
      { name: 'NPM/Yarn', level: 85 },
      { name: 'Webpack', level: 70 },
      { name: 'Figma', level: 65 },
      { name: 'Responsive Testing', level: 80 }
    ]
  };

  const SkillBar = ({ skill, index }) => (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 + (index * 0.05) }}
        ></motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">My Skills</h2>
          <p className="section-subheading mx-auto">
            Here are my technical skills and proficiencies that I've developed through projects and practical experience.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 border-b dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 font-medium text-sm transition-colors focus:outline-none relative ${
                  activeTab === tab.id 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                    layoutId="tab-indicator"
                    initial={false}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {skillsData[activeTab].map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;