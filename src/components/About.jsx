import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Redux, and modern CSS frameworks."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and MongoDB."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full Stack Solutions",
      description: "Developing end-to-end web applications with seamless integration between frontend and backend."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centric Design",
      description: "Focusing on intuitive interfaces and excellent user experiences in every project."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm a passionate Full Stack Developer with expertise in creating beautiful, functional websites and applications.
          </motion.p>
          
          <motion.div
            className="text-left mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-custom"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I'm Yogesh Dhakad, a Full Stack Developer with a strong foundation in both frontend and backend technologies. 
              My journey in web development started with my passion for creating intuitive and impactful digital experiences.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have experience building everything from 
              small business websites to complex web applications. I enjoy solving problems and continuously learning new technologies 
              to stay at the forefront of web development.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the developer community.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card p-6 flex flex-col items-center text-center"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;