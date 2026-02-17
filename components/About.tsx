
import React from 'react';
import { Theme } from '../types.ts';
import { Quote } from 'lucide-react';

interface AboutProps {
  theme: Theme;
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const highlightClass = isDark ? "text-teal-400" : "text-blue-600";

  return (
    <section id="about" className={`py-24 px-6 ${isDark ? "bg-[#1d1d1f]/30" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-50">About Me</h2>
          <p className="text-4xl md:text-5xl font-extrabold tracking-tight">The Human Behind the <span className={highlightClass}>Data.</span></p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-8">
            <div className={`p-8 rounded-3xl border ${isDark ? "bg-[#121212] border-white/10" : "bg-white border-gray-100 shadow-xl"}`}>
              <Quote className={`w-12 h-12 mb-6 ${highlightClass} opacity-40`} />
              <h3 className="text-2xl font-bold mb-4">My Mission</h3>
              <p className="opacity-80 leading-relaxed text-lg italic">
                "I believe that the next breakthrough in AI won't just come from lines of code, but from the brilliant minds we place at the center of innovation. My mission is to bridge the gap between visionary tech and the elite talent that makes it possible."
              </p>
            </div>
            
            <div className={`p-8 rounded-3xl border ${isDark ? "bg-[#121212] border-white/10" : "bg-white border-gray-100 shadow-xl"}`}>
              <h3 className="text-2xl font-bold mb-4">Personal Touch</h3>
              <p className="opacity-80 leading-relaxed">
                When I'm not headhunting the next AI leader, you can find me exploring the intersection of 3D design and retail analytics, or perhaps experimenting with sustainable fashion technologies. I believe a multidisciplinary perspective is the key to spotting truly 'outside the box' talent.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold mb-6">Expertise & Background</h3>
            <div className="space-y-8">
              <p className="text-lg opacity-80 leading-relaxed">
                With a background in <span className="font-semibold underline decoration-teal-500/50">Business Analytics</span> and a deep immersion in 3D Virtual Design, I bring a unique analytical lens to the recruitment process. I don't just read resumes; I interpret the potential for workflow optimization and technical synergy within your specific team structure.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className={`text-4xl font-black ${highlightClass}`}>5+</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-50">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className={`text-4xl font-black ${highlightClass}`}>40%</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-50">Cycle Reduction</div>
                </div>
                <div className="space-y-2">
                  <div className={`text-4xl font-black ${highlightClass}`}>30%</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-50">Efficiency Gain</div>
                </div>
                <div className="space-y-2">
                  <div className={`text-4xl font-black ${highlightClass}`}>98%</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-50">Placement Retention</div>
                </div>
              </div>

              <p className="text-lg opacity-80 leading-relaxed">
                My professional journey has taken me from the precision-driven world of <span className="font-semibold">3D garment simulation</span> to the high-stakes environment of <span className="font-semibold">AI innovation</span>. This diverse experience allows me to speak the language of both designers and developers, ensuring every placement is a strategic win.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
