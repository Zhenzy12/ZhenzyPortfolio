import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Github, Mail, Facebook, Linkedin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ProfileImage from '../assets/Images/RieZhenzy.jpg';
import ResumePDF from '../assets/Documents/Zumel-Resume.pdf';
import OnlineJobsLogo from '../assets/Images/online-jobs-ph-logo.png';
import TypingText from '../components/TypingText';

// Extend the Location type to include our custom state
interface LocationState {
  targetPath?: string;
}

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state as LocationState | undefined;
  const [hasProcessed, setHasProcessed] = React.useState(false);

  React.useEffect(() => {
    // Only process the redirect once when the component mounts
    if (!hasProcessed) {
      const targetPath = locationState?.targetPath;
      
      if (targetPath) {
        // Small delay to ensure the home page is fully rendered
        const timer = setTimeout(() => {
          navigate(targetPath, { replace: true });
        }, 100);
        
        return () => clearTimeout(timer);
      }
      
      setHasProcessed(true);
    }
  }, [locationState, navigate, hasProcessed]);

  // If we're processing a redirect, show a loading state
  if (locationState?.targetPath && !hasProcessed) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="animate-pulse text-2xl dark:text-white">Loading...</div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <div className="sr-only" aria-hidden="true">Home page loading...</div>
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] space-y-8 lg:space-y-0">
          <div className="lg:w-1/2 space-y-8 text-gray-900 dark:text-white">
            <AnimatedSection>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent dark:from-emerald-300 dark:to-blue-400">
                  Rie Zhenzy Zumel
                </span>
              </h1>
            </AnimatedSection>
  
            <AnimatedSection delay={200}>
              <h2 className="text-2xl lg:text-3xl font-light">
                <TypingText
                  texts={[
                    'Computer Science Graduate',
                    'Full Stack Developer',
                    'React • Node • Express • MySQL',
                    'Web & Mobile App Developer',
                  ]}
                  typingSpeed={80}
                  backspaceSpeed={20}
                  delay={1000}
                  className="text-emerald-500 font-semibold"
                  color="text-emerald-500"
                />
              </h2>
            </AnimatedSection>
  
            <AnimatedSection delay={400}>
              <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl leading-relaxed">
                Welcome to my portfolio! I'm Rie Zhenzy Zumel, a passionate Computer Science graduate from the University of Baguio. I specialize in full-stack development, blending creativity and technical expertise to build responsive web and mobile applications using technologies like React, Vue.js, Flutter, Laravel, and Tailwind CSS.
              </p>
            </AnimatedSection>
  
            <AnimatedSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="group flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
  
                <a
                  href={ResumePDF}
                  download="Zumel_Resume.pdf"
                  className="group flex items-center justify-center px-8 py-4 border-2 border-gray-800 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-500 dark:hover:text-white rounded-lg font-semibold transition-all cursor-pointer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </div>
            </AnimatedSection>
  
            <AnimatedSection delay={800}>
              <div className="flex space-x-3">
                {[
                  {
                    href: 'https://github.com/Zhenzy12',
                    icon: <Github className="h-6 w-6" />,
                  },
                  {
                    href: 'https://www.facebook.com/rzhenzy/',
                    icon: <Facebook className="h-6 w-6" />,
                  },
                  {
                    href: 'mailto:zhenzyzumel@gmail.com',
                    icon: <Mail className="h-6 w-6" />,
                  },
                  {
                    href: 'https://www.linkedin.com/in/rie-zhenzy-zumel-45307936b',
                    icon: <Linkedin className="h-6 w-6" />,
                  },
                ].map(({ href, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors group text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  >
                    {icon}
                  </a>
                ))}
  
                <a
                  href="https://www.onlinejobs.ph/jobseekers/info/4236083"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <img
                    className="h-9 w-9"
                    src={OnlineJobsLogo}
                    alt="Online Jobs Logo"
                  />
                </a>
              </div>
            </AnimatedSection>
          </div>
  
          <div className="hidden lg:block lg:w-1/2 mt-12 lg:mt-0">
            <AnimatedSection delay={400}>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-blue-300 dark:from-emerald-500 dark:to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 overflow-hidden">
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
      </div>
    </div>
  );
  
};

export default Home;