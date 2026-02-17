
import React from 'react';
import { Theme } from '../types.ts';
import { SUCCESS_STORIES, PORTFOLIO_PROJECTS } from '../constants.tsx';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  theme: Theme;
}

const Portfolio: React.FC<PortfolioProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const highlightClass = isDark ? "text-teal-400" : "text-blue-600";

  return (
    <section id="portfolio" className={`py-24 px-6 ${isDark ? "bg-[#121212]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-50">Success Stories</h2>
          <p className="text-4xl md:text-5xl font-extrabold tracking-tight">Proven Results in <span className={highlightClass}>AI Placement.</span></p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SUCCESS_STORIES.map((story, idx) => (
            <div 
              key={idx}
              className={`group p-8 rounded-3xl border transition-all hover:scale-[1.02] ${
                isDark ? "bg-[#1d1d1f] border-white/5 shadow-2xl" : "bg-gray-50 border-gray-100 shadow-lg"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 ${
                isDark ? "bg-teal-500/10 text-teal-400" : "bg-blue-600 text-white"
              }`}>
                {story.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{story.role}</h3>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 opacity-60 ${isDark ? "text-teal-500" : "text-blue-600"}`}>
                {story.clientProfile}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-black uppercase opacity-40 mb-1">The Challenge</h4>
                  <p className="text-sm opacity-80 leading-relaxed">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase opacity-40 mb-1">The Impact</h4>
                  <p className="text-sm font-medium leading-relaxed">{story.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Digital Portfolio</h2>
          <p className="opacity-60">Insight, strategy, and community building in the AI sector.</p>
        </div>

        {/* Digital Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <div 
              key={idx}
              className={`group overflow-hidden rounded-3xl border transition-all ${
                isDark ? "bg-[#1d1d1f]/50 border-white/10 hover:border-teal-500/50" : "bg-white border-gray-200 hover:border-blue-300 shadow-md"
              }`}
            >
              <div className={`aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-700 ${!isDark && "from-blue-50 to-blue-100"}`}>
                <div className={`text-center font-bold text-lg opacity-40 ${isDark ? "text-white" : "text-blue-900"}`}>
                  [ {project.title} ]
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${isDark ? "border-teal-500/20 text-teal-500 bg-teal-500/5" : "border-blue-200 text-blue-600 bg-blue-50"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform">{project.title}</h3>
                <p className="text-sm opacity-70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/link ${isDark ? "hover:text-teal-400" : "hover:text-blue-600"}`}
                >
                  View Case Study <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
