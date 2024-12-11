"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'C', 'Python', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      skills: ['MERN Stack', 'React', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'REST API']
    },
    {
      title: 'Other Skills',
      skills: ['Machine Learning', 'DSA', 'OS', 'Computer Networks', 'Embedded Systems (Arduino)']
    }
  ];

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.title} className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-center text-blue-600 dark:text-blue-400">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-center">
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="bg-blue-100 dark:bg-blue-900 py-2 rounded-md text-blue-800 dark:text-blue-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
