import React from 'react';
import { Trophy, Code } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { ACHIEVEMENTS } from '../constants';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Achievements" subtitle="Coding profiles and competitive programming milestones." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <a 
              key={idx} 
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-slate-800 to-slate-800 hover:from-slate-800 hover:to-slate-700 p-6 rounded-xl border border-slate-700 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-slate-900 p-3 rounded-lg group-hover:text-yellow-400 transition-colors text-slate-400">
                  {idx === 0 ? <Code size={24} /> : <Trophy size={24} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{ach.platform}</h3>
                  <p className="text-slate-200 font-medium text-sm mb-2">{ach.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{ach.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};