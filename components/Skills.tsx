import React from 'react';
import { SectionTitle } from './SectionTitle';
import { SKILLS } from '../constants';
import {
  SiCplusplus, SiC, SiPython, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiMongodb, SiMysql, SiGit, SiGithub, SiVercel, SiRender,
  SiLinux
} from 'react-icons/si';
import { FaDatabase, FaNetworkWired, FaCubes } from 'react-icons/fa';
import { BsDiagram3 } from 'react-icons/bs';
import { TbSql, TbApi } from 'react-icons/tb';

const iconMap: Record<string, { icon: React.ElementType, color: string }> = {
  "C++": { icon: SiCplusplus, color: "#00599C" },
  "C": { icon: SiC, color: "#A8B9CC" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss3, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Bootstrap": { icon: SiBootstrap, color: "#7952B3" },
  "REST API": { icon: TbApi, color: "#E34F26" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#FFFFFF" },
  "Vercel": { icon: SiVercel, color: "#FFFFFF" },
  "Render": { icon: SiRender, color: "#46E3B7" },
  "Data Structures & Algorithms": { icon: BsDiagram3, color: "#FF6B6B" },
  "OOP": { icon: FaCubes, color: "#FFD93D" },
  "Operating Systems": { icon: SiLinux, color: "#FCC624" },
  "DBMS": { icon: FaDatabase, color: "#A8B9CC" },
  "Computer Networks": { icon: FaNetworkWired, color: "#0984E3" },
  "SQL": { icon: TbSql, color: "#003B57" }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Technical Skills" subtitle="My arsenal of languages, frameworks, and tools." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-3">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => {
                  const skillData = iconMap[skill];
                  const Icon = skillData?.icon;

                  return (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 bg-slate-700/50 text-slate-200 rounded-md text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default flex items-center gap-2 group"
                    >
                      {Icon && (
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300" style={{ color: skillData.color }}>
                          <Icon />
                        </span>
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};