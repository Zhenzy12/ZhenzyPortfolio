import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Mail, Facebook } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ProfileImage from '../assets/Images/RieZhenzy.jpg';
import ResumePDF from '../assets/Documents/Zumel-Resume.pdf';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 space-y-8">
            <AnimatedSection>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  Rie Zhenzy Zumel
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                Computer Science Graduate & Developer
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Welcome to my portfolio! I'm Rie Zhenzy Zumel, a passionate Computer Science graduate from the University of Baguio. I specialize in full-stack development, blending creativity and technical expertise to build responsive web and mobile applications using technologies like React, Vue.js, Flutter, Laravel, and Tailwind CSS.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="group flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a 
                  href={ResumePDF} 
                  download="Zumel_Resume.pdf"
                  className="group flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-emerald-500 text-gray-300 hover:text-white rounded-lg font-semibold transition-all cursor-pointer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={800}>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/Zhenzy12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <Github className="h-6 w-6 text-gray-400 group-hover:text-white" />
                </a>
                
									<a href="https://www.facebook.com/rzhenzy/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
										<Facebook className="h-6 w-6 text-gray-400 group-hover:text-white" />
									</a>
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white" />
                </a> */}
                <a
                  href="mailto:zumelriezhenzy@gmail.com"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <Mail className="h-6 w-6 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="hidden lg:block lg:w-1/2 mt-12 lg:mt-0">
            <AnimatedSection delay={400}>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-700 overflow-hidden">
                    <img 
                      src={ProfileImage} 
                      alt="Rie Zhenzy's Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Quick Stats */}
        {/* <AnimatedSection delay={1000}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">10+</div>
              <div className="text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">2+</div>
              <div className="text-gray-400 mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">5+</div>
              <div className="text-gray-400 mt-2">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">100%</div>
              <div className="text-gray-400 mt-2">Client Satisfaction</div>
            </div>
          </div>
        </AnimatedSection> */}
      </div>
    </div>
  );
};

export default Home;