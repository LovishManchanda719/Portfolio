import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Featured Projects" subtitle="A selection of things I've built." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                {project.image ? (
                  <div className="w-full h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-300" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
                    <Code2 size={64} className="text-slate-400/50 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-6 flex-1">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-slate-300 text-sm leading-relaxed">
                      • {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};