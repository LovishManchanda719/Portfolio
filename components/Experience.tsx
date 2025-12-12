import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { EXPERIENCE, EDUCATION, EXTRACURRICULAR } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Journey" subtitle="My professional experience and academic background." />
        
        {/* Experience Section */}
        <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Briefcase className="text-primary" /> Experience
            </h3>
            <div className="space-y-8 border-l-2 border-slate-700 ml-3 pl-8 relative">
                {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-slate-800 border-2 border-primary"></span>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <span className="text-sm text-slate-400 flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
                        <Calendar size={14} /> {exp.duration}
                    </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium mb-3">
                    <span>{exp.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-sm text-slate-400 flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                    </span>
                    </div>
                    <ul className="space-y-2">
                    {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-slate-300 text-sm leading-relaxed">
                        • {point}
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <GraduationCap className="text-secondary" /> Education
            </h3>
            <div className="space-y-8 border-l-2 border-slate-700 ml-3 pl-8 relative">
                {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-slate-800 border-2 border-secondary"></span>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                    <span className="text-sm text-slate-400 flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
                        <Calendar size={14} /> {edu.duration}
                    </span>
                    </div>
                    <p className="text-slate-300 mb-1">{edu.degree}</p>
                    <p className="text-sm text-slate-400">{edu.grade}</p>
                </div>
                ))}
            </div>
        </div>

        {/* Extracurricular Section */}
         <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="text-emerald-400">★</span> Leadership & Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EXTRACURRICULAR.map((activity, idx) => (
                    <div key={idx} className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                        <h4 className="text-lg font-bold text-white mb-1">{activity.organization}</h4>
                        <p className="text-primary text-sm font-medium mb-2">{activity.role}</p>
                        <p className="text-slate-300 text-sm">{activity.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};