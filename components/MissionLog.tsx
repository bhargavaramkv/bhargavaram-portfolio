import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

// --- Constants ---

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI-POWERED DEFENSE SYSTEM',
    description: 'A futuristic cybersecurity command center interface showing real-time threat detection, AI neural network visualizations, and global defense status.',
    technologies: ['AI/ML', 'Python', 'React', 'Cybersecurity'],
    imageUrl: 'https://picsum.photos/seed/cyber1/800/600',
    issueNumber: 1
  },
  {
    id: '2',
    title: 'QUANTUM CRYPTOGRAPHY NETWORK',
    description: 'Abstract visualization of a quantum cryptography network, with entangled particles, secure data nodes, and encryption keys.',
    technologies: ['Quantum Computing', 'Cryptography', 'C++', 'Distributed Systems'],
    imageUrl: 'https://picsum.photos/seed/quantum/800/600',
    repoUrl: '#',
    issueNumber: 42
  },
  {
    id: '3',
    title: 'NEURAL INTERFACE API',
    description: 'A biological-digital interface visualization showing brain-computer interface data streams, synaptic connections merging with digital code.',
    technologies: ['Bio-Tech', 'Node.js', 'GraphQL', 'Neural Networks'],
    imageUrl: 'https://picsum.photos/seed/neural/800/600',
    issueNumber: 99
  }
];

// --- Sub-Components ---

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative bg-marvel-dark border border-marvel-blue/30 shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] flex flex-col h-full rounded-xl overflow-hidden backdrop-blur-sm">

    {/* Issue Number Badge */}
    <div className="absolute top-4 right-4 bg-marvel-dark/90 text-marvel-blue border-2 border-marvel-blue rounded-full w-12 h-12 flex items-center justify-center font-comic text-xl z-20 shadow-[0_0_10px_rgba(0,195,255,0.5)] backdrop-blur-md">
      #{project.issueNumber}
    </div>

    {/* Image */}
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-marvel-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-marvel-dark via-transparent to-transparent"></div>
    </div>

    {/* Content */}
    <div className="p-6 flex-1 flex flex-col relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-marvel-blue/50 to-transparent"></div>

      <h3 className="text-2xl font-comic mb-3 leading-none uppercase text-white group-hover:text-marvel-blue transition-colors tracking-wide">
        {project.title}
      </h3>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(tech => (
          <span key={tech} className="text-[10px] font-bold bg-marvel-blue/10 text-marvel-blue border border-marvel-blue/20 px-2 py-1 uppercase tracking-wider rounded">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-400 font-body mb-6 flex-grow text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Actions */}
      <div className="flex space-x-4 pt-4 border-t border-white/10 mt-auto">
        {project.repoUrl && (
          <a href={project.repoUrl} className="flex items-center text-sm font-bold uppercase text-white hover:text-marvel-blue transition-colors">
            <Github size={16} className="mr-2" />
            Source Code
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} className="flex items-center text-sm font-bold uppercase text-white hover:text-marvel-blue transition-colors">
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

// --- Main Component ---

export const MissionLog: React.FC = () => {
  return (
    <section id="missions" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-marvel-blue to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-marvel-blue to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-marvel-blue text-sm font-mono tracking-[0.3em] uppercase mb-2 block animate-pulse">
            // CLASSIFIED ARCHIVES
          </span>
          <h2 className="text-6xl font-comic text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            MISSION LOGS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
