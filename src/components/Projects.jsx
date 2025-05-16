import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Layers, Database, Eye } from 'lucide-react';

const Projects = () => {
  const [category, setCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "Smoothies",
      description: "Comprehensive cart management app with add, delete, update, and remove functionalities. Used Redux for efficient state management.",
      image: "https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Redux", "CSS", "JavaScript"],
      category: "frontend",
      githubLink: "https://github.com/Yogeshdhakad0",
      liveLink: ""
    },
    {
      id: 2,
      title: "CryptoApp",
      description: "Cryptocurrency tracking app integrated with a live API to fetch and display real-time market data. Features a customizable cart for tracking favorites.",
      image: "https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Redux", "API Integration", "CSS"],
      category: "frontend",
      githubLink: "https://github.com/Yogeshdhakad0",
      liveLink: ""
    },
    {
      id: 3,
      title: "Influencer Adda",
      description: "Full-stack influencer booking platform with separate admin and user dashboards for managing influencer-related operations and bookings.",
      image: "https://images.pexels.com/photos/6893825/pexels-photo-6893825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      category: "fullstack",
      githubLink: "https://github.com/Yogeshdhakad0",
      liveLink: ""
    },
    {
      id: 4,
      title: "Car Rental App",
      description: "Ongoing project for renting cars where I'm working as tech lead. Features user authentication, car browsing, and booking management.",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
      category: "fullstack",
      githubLink: "https://github.com/Yogeshdhakad0",
      liveLink: ""
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Check out some of my recent work. Each project represents different skills and techniques I've developed.
          </motion.p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    category === cat.id
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.category === 'frontend' && (
                        <span className="inline-block px-2 py-1 text-xs bg-blue-500/70 text-white rounded">Frontend</span>
                      )}
                      {project.category === 'backend' && (
                        <span className="inline-block px-2 py-1 text-xs bg-green-500/70 text-white rounded">Backend</span>
                      )}
                      {project.category === 'fullstack' && (
                        <span className="inline-block px-2 py-1 text-xs bg-purple-500/70 text-white rounded">Full Stack</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3 mt-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;