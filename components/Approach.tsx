import React from 'react';
import { Theme } from '../types';
import { APPROACH_STEPS } from '../constants';

interface ApproachProps {
  theme: Theme;
}

const Approach: React.FC<ApproachProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const highlightClass = isDark ? "text-teal-400" : "text-blue-600";

  return (
    <section id="approach" className="py-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-50">How I Work</h2>
          <p className="text-4xl md:text-5xl font-extrabold tracking-tight">The Recruitment <span className={highlightClass}>Blueprint.</span></p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {APPROACH_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                isDark 
                  ? "bg-[#1d1d1f] border border-white/5 hover:border-teal-500/30 shadow-2xl" 
                  : "bg-white border border-gray-100 shadow-lg hover:shadow-xl"
              }`}
            >
              <div className={`mb-6 p-4 rounded-2xl inline-block transition-colors ${
                isDark ? "bg-white/5 group-hover:bg-teal-500/10 text-teal-400" : "bg-blue-50 text-blue-600"
              }`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="opacity-70 leading-relaxed text-sm">
                {step.description}
              </p>
              
              <div className={`absolute top-0 right-0 p-4 font-black text-6xl opacity-5 transition-opacity group-hover:opacity-10 pointer-events-none`}>
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background visual element */}
      <div className={`absolute bottom-0 left-0 w-full h-1/2 opacity-5 pointer-events-none ${isDark ? 'text-teal-500' : 'text-blue-500'}`}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path fill="currentColor" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,170.7C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Approach;