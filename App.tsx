import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
};

export default App;