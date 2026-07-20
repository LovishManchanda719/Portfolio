export interface Project {
  title: string;
  description: string[];
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  image?: string;
  date: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  location: string;
}

export interface Achievement {
  title: string;
  platform: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Extracurricular {
  role: string;
  organization: string;
  description: string;
}