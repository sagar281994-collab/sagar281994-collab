import React from 'react';
import { Theme } from '../types';

interface FooterProps { theme: Theme; }

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`py-12 px-6 border-t ${isDark ? "bg-[#121212] border-white/5" : "bg-white border-gray-100"}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg ${isDark ? 'bg-teal-500 text-[#121212]' : 'bg-blue-600 text-white'}`}>
            M
          </div>
          <span className="font-heading font-bold tracking-tight">AL-MUHAIMINUL ISLAM</span>
        </div>
        
        <p className="text-sm opacity-50">
          © {new Date().getFullYear()} Expert AI Tech Recruiter. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;