import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10 dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)]"></div>
      
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-5">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Yogesh Dhakad</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                I build exceptional digital experiences with modern frontend and backend technologies.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#contact" 
                  className="btn btn-primary"
                >
                  Get in touch
                </a>
                <a 
                  href="#projects" 
                  className="btn bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  View projects
                </a>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://github.com/Yogeshdhakad0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/yogesh-dhakad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Yogesh Dhakad" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div className="absolute -bottom-2 -right-2 bg-secondary-500 text-white p-3 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            <span className="text-sm mb-1">Scroll Down</span>
            <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;