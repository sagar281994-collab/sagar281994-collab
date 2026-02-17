
import React from 'react';
import { Theme } from '../types.ts';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps { theme: Theme; }

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const highlightClass = isDark ? "text-teal-400" : "text-blue-600";

  return (
    <section id="contact" className={`py-24 px-6 ${isDark ? "bg-[#1d1d1f]/40" : "bg-gray-100"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-50">Contact</h2>
              <p className="text-5xl font-extrabold tracking-tight mb-6">Let's build your <span className={highlightClass}>dream team.</span></p>
              <p className="text-lg opacity-80 leading-relaxed max-w-md">
                Ready to find your next AI leader or looking for your next career breakthrough in Machine Learning? Reach out and let's start the conversation.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:almuhaiminul2025@fau.edu" className="flex items-center gap-6 group">
                <div className={`p-4 rounded-2xl transition-all ${isDark ? "bg-white/5 group-hover:bg-teal-500/10 text-teal-400" : "bg-white shadow-md group-hover:shadow-lg text-blue-600"}`}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-40">Email</div>
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">almuhaiminul2025@fau.edu</div>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className={`p-4 rounded-2xl transition-all ${isDark ? "bg-white/5 group-hover:bg-teal-500/10 text-teal-400" : "bg-white shadow-md group-hover:shadow-lg text-blue-600"}`}>
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-40">LinkedIn</div>
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">Connect Profile</div>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className={`p-4 rounded-2xl ${isDark ? "bg-white/5 text-teal-400" : "bg-white shadow-md text-blue-600"}`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-40">Location</div>
                  <div className="text-lg font-medium">Boca Raton, Florida</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-10 rounded-[2.5rem] border shadow-2xl relative overflow-hidden ${isDark ? "bg-[#121212] border-white/5" : "bg-white border-gray-100"}`}>
             {/* Subtle gradient glow for dark mode form */}
             {isDark && <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/10 blur-[100px] pointer-events-none"></div>}
             
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-60 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className={`w-full px-5 py-4 rounded-xl outline-none border transition-all ${
                      isDark 
                      ? "bg-white/5 border-white/10 focus:border-teal-500/50 text-white" 
                      : "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900"
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase opacity-60 ml-1">Company</label>
                  <input 
                    type="text" 
                    placeholder="AI Startup Inc."
                    className={`w-full px-5 py-4 rounded-xl outline-none border transition-all ${
                      isDark 
                      ? "bg-white/5 border-white/10 focus:border-teal-500/50 text-white" 
                      : "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900"
                    }`}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase opacity-60 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="jane@company.ai"
                  className={`w-full px-5 py-4 rounded-xl outline-none border transition-all ${
                    isDark 
                    ? "bg-white/5 border-white/10 focus:border-teal-500/50 text-white" 
                    : "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900"
                  }`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase opacity-60 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your talent needs..."
                  className={`w-full px-5 py-4 rounded-xl outline-none border transition-all resize-none ${
                    isDark 
                    ? "bg-white/5 border-white/10 focus:border-teal-500/50 text-white" 
                    : "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900"
                  }`}
                ></textarea>
              </div>
              <button 
                type="submit"
                className={`w-full py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] ${
                  isDark 
                  ? "bg-teal-500 text-[#121212] hover:bg-teal-400 shadow-xl shadow-teal-500/20" 
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/20"
                }`}
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
