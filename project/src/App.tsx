import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// This component will handle the redirection logic
const RouteHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state as { targetPath?: string; fromHome?: boolean } | undefined;
  const [initialLoad, setInitialLoad] = React.useState(true);

  React.useEffect(() => {
    // Only run this effect on initial load
    if (initialLoad) {
      setInitialLoad(false);
      
      // If we're not on the home page and we didn't come from home
      if (location.pathname !== '/' && !locationState?.fromHome) {
        // Store the target path and redirect to home
        const targetPath = location.pathname + location.search;
        navigate('/', { 
          state: { targetPath },
          replace: true 
        });
      }
    }
  }, [location, navigate, locationState, initialLoad]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
          <Navigation />
          <RouteHandler>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </RouteHandler>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
