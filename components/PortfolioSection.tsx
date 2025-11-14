
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    image: 'https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/74eefcd92a414c5c3ea738f1775fa39d_1624/production/image.png',
    name: 'Naturaly - Beleza e Cuidado',
    challenge: 'Landing page profissional para divulgar produto e aumentar credibilidade.',
    solution: 'Site moderno que conta a história, apresenta o produto e facilita o contato para vendas.',
    link: 'https://natur-aly.github.io/Naturaly/#',
  },
  {
    image: 'https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/70be2538f18c38ad05a460c9fa5ac947_1624/production/image.png',
    name: 'FS Performance Club',
    challenge: 'Consultoria precisava de presença online profissional para atrair novos alunos.',
    solution: 'Site completo apresentando planos de treino de forma clara, melhorando a imagem da marca.',
    link: 'https://fs-performance.github.io/FS-Performance-Club/',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-40"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
        <div className="space-y-2 mb-4">
          <p className="text-slate-600 text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300 group"
        >
          Ver Projeto
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};


const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Projetos Recentes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sites que ajudaram negócios a ter presença digital profissional
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
