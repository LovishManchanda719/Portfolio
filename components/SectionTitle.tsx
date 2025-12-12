import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
        {title}
      </h2>
      {subtitle && <p className="text-slate-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};