import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase as BriefcaseBusiness, CalendarDays, Award } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    // {
    //   company: "Car Rental App",
    //   position: "Tech Lead",
    //   period: "Current Project",
    //   description: "Currently working on a Car Rental App for renting cars, taking on the role of tech lead. Managing the development process and implementing key features.",
    //   skills: ["React", "Node.js", "MongoDB", "Team Leadership"]
    // },
    // {
    //   company: "MP Lokseva Kendra",
    //   position: "Computer Assistant",
    //   period: "2021 - 2023",
    //   description: "Assisted with technical operations and computer-related services, providing support for various digital initiatives.",
    //   skills: ["Technical Support", "Customer Service", "Office Software"]
    // },
    // {
    //   company: "Eskills Web",
    //   position: "Web Developer-intern",
    //   period: "oct,2024– Present)",
    //   description: "Collaborated with designers and clients to implement visually appealing and functional front-end solutions.",
    //   skills: ["HTML/CSS", "JavaScript", "Responsive Design"]
    // }
  ];

  const educations = [
    {
      institution: "Devi Ahilya Vishwavidyalaya Indore (M.P)",
      degree: "Master of Arts (Economics)",
      period: "2021 - 2023",
      description: "Completed Master's degree with focus on economic theory and analysis."
    },
    {
      institution: "Devi Ahilya Vishwavidyalaya Indore (M.P)",
      degree: "Bachelor of Arts",
      period: "2019 - 2021",
      description: "Undergraduate studies with foundation in social sciences and humanities."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Experience & Education
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My professional journey and educational background that have shaped my career.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <motion.h3 
              className="text-2xl font-bold font-display text-gray-800 dark:text-gray-200 mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <BriefcaseBusiness className="mr-2 text-primary-600 dark:text-primary-400" size={24} />
              Work Experience
            </motion.h3>
            
            <div ref={ref} className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-2">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="mb-10 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                  </div>
                  
                  <div className="card p-5">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{exp.position}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{exp.company}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <CalendarDays size={14} className="mr-1" />
                      {exp.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3 
              className="text-2xl font-bold font-display text-gray-800 dark:text-gray-200 mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="mr-2 text-primary-600 dark:text-primary-400" size={24} />
              Education
            </motion.h3>
            
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-2">
              {educations.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="mb-10 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary-500 dark:bg-secondary-400"></div>
                  </div>
                  
                  <div className="card p-5">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <CalendarDays size={14} className="mr-1" />
                      {edu.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;