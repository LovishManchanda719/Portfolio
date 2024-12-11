"use client";
import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      name: 'Wanderlust',
      description: 'A full-stack MERN project for hotel bookings and listings.',
      link: 'https://wanderlust-hd9q.onrender.com'
    },
    {
      name: 'Water Distribution System',
      description: 'React-based system for efficient water management in drought areas.'
    },
    {
      name: 'Stock Prediction System',
      description: 'Machine learning project for stock price prediction.',
      image: '/stock-prediction.png'  // This will be handled by Next.js base path
    },
    {
      name: 'WhatsApp AI Chatbot',
      description: 'Chatbot integrated with Gemini API.',
      image: '/whatsapp-chatbot.png'  // This will be handled by Next.js base path
    },
    {
      name: 'Discord Quiz-Bot',
      description: 'Trivia bot with Gemini API, real-time scoring, and leaderboards.'
    }
  ];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.name} className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {project.image && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  View Project
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;