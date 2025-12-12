import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Let's Connect</h2>
            <div className="flex gap-6 justify-center">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                    <Mail size={24} />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                    <Linkedin size={24} />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                    <Github size={24} />
                </a>
            </div>
        </div>

        <p className="text-slate-500 text-sm text-center mb-8">
          Designed & Built by {PERSONAL_INFO.name} using React & Tailwind CSS
        </p>

        <button 
          onClick={scrollToTop}
          className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-primary transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};