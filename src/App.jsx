import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  // Loading screen — show for 2 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Main app */}
      {!loading && (
        <div className={`relative min-h-screen ${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-dark-900 text-gray-100'}`}>
          {/* Animated particle background */}
          <ParticleBackground />

          {/* Sticky navbar */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Main content */}
          <main id="main-content">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to top button */}
          <BackToTop />
        </div>
      )}
    </>
  );
}
