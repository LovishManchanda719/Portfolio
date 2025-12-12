import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import heroCat from '../assets/hero-cat-main.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl">
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {PERSONAL_INFO.title} based in {PERSONAL_INFO.location}.
            <br className="hidden md:block" />
            Building scalable web applications with modern technologies.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all hover:scale-105 shadow-lg active:scale-95"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-all hover:scale-105 shadow-lg border border-slate-700 active:scale-95"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-all hover:scale-105 shadow-lg border border-slate-700 active:scale-95"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-slate-800/50 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
              <img
                src={heroCat}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};