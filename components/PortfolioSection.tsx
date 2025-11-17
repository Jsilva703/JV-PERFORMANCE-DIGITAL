
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
    <div className="group/project bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/70 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 relative">
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/project:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover group-hover/project:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        {/* Badge flutuante */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg opacity-0 group-hover/project:opacity-100 transition-opacity duration-300">
          ✨ Ver Ao Vivo
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover/project:from-emerald-300 group-hover/project:to-emerald-500 transition-all">{project.name}</h3>
        <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mb-4 group-hover/project:w-24 transition-all duration-300"></div>
        <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-[3rem]">
          {project.solution}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold group/link transition-all duration-300 hover:gap-3"
        >
          Ver Projeto Completo
          <svg className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};


const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden">
      {/* Background futurista com grid e gradientes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-6 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-top duration-700">
            <span className="text-emerald-400 text-sm font-semibold">✨ Nossos Trabalhos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">Portfólio</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Confira alguns dos nossos <span className="text-emerald-400 font-semibold">projetos de sucesso</span> que transformaram negócios
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
