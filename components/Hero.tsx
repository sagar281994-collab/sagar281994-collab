
import React from 'react';
import { Theme } from '../types.ts';

interface HeroProps {
  theme: Theme;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className={`absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none ${isDark ? 'text-teal-500' : 'text-blue-500'}`}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform translate-x-1/4">
          <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.2C87.4,-33.3,90.1,-17.6,88.4,-2.4C86.7,12.8,80.7,27.5,72,40.1C63.3,52.7,51.9,63.2,38.9,70.5C25.9,77.8,11.3,81.9,-2.8,86.7C-16.9,91.5,-30.5,97,-44.1,93C-57.7,89.1,-71.3,75.7,-79.8,60.8C-88.3,45.8,-91.7,29.4,-91.2,13.6C-90.7,-2.1,-86.3,-17.1,-79.3,-30.9C-72.3,-44.7,-62.7,-57.3,-49.8,-65.4C-36.9,-73.5,-20.7,-77.1,-4.5,-69.3C11.7,-61.5,23.3,-42.2,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-500 border border-teal-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for Strategic Consultations
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Connecting Visionary Companies with <span className={isDark ? "text-teal-400" : "text-blue-600"}>Elite AI Talent.</span>
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-lg leading-relaxed">
            Your dedicated partner in sourcing and placing top-tier professionals in Machine Learning, Data Science, and AI Research. Building the future, one key hire at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className={`px-8 py-4 rounded-xl font-bold text-center transition-all hover:scale-105 shadow-lg ${
                isDark 
                ? "bg-teal-500 text-[#121212] hover:bg-teal-400 shadow-teal-500/20" 
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20"
              }`}
            >
              Find Your Next AI Leader
            </a>
            <a 
              href="#portfolio"
              className={`px-8 py-4 rounded-xl font-bold text-center border transition-all hover:bg-white/5 ${
                isDark ? "border-white/20 text-white" : "border-gray-300 text-gray-800"
              }`}
            >
              View Success Stories
            </a>
          </div>
        </div>

        <div className="relative group animate-in fade-in slide-in-from-right duration-1000">
          <div className={`absolute -inset-4 rounded-3xl blur-2xl opacity-20 transition-opacity group-hover:opacity-30 ${isDark ? "bg-teal-500" : "bg-blue-500"}`}></div>
          <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden border-4 ${isDark ? "border-white/10" : "border-white shadow-2xl"}`}>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Al-Muhaiminul Islam" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className={`absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-2xl transform transition-transform group-hover:-translate-y-2 ${isDark ? "bg-[#1d1d1f] border border-white/10" : "bg-white border border-gray-100"}`}>
            <div className={`text-3xl font-bold ${isDark ? "text-teal-400" : "text-blue-600"}`}>500+</div>
            <div className="text-xs font-bold opacity-60 uppercase tracking-widest">Networked Experts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
