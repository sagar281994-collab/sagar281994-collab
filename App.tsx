
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Approach from './components/Approach.tsx';
import Portfolio from './components/Portfolio.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import { Theme } from './types.ts';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('transition');
    if (theme === 'dark') {
      html.classList.add('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#EAEAEA';
    } else {
      html.classList.remove('dark');
      document.body.style.backgroundColor = '#F5F5F7';
      document.body.style.color = '#1D1D1F';
    }
    
    const timeout = setTimeout(() => {
      html.classList.remove('transition');
    }, 400);
    
    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <div className={`min-h-screen selection:bg-teal-500/30`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Approach theme={theme} />
        <Portfolio theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
