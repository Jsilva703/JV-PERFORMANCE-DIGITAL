import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    image: 'https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/74eefcd92a414c5c3ea738f1775fa39d_1624/production/image.png',
    name: 'Naturaly - Beleza e Cuidado',
    challenge: 'Um atleta vendendo suco de laranja para financiar seu sonho de competir no Ironman Florianópolis precisava de uma divulgação mais profissional, que ia além de apenas compartilhar seu número de WhatsApp.',
    solution: 'Criei uma Landing Page para contar sua história, apresentar o produto e aumentar a credibilidade do seu esforço. O site serve como uma vitrine digital, facilitando o contato e ajudando a impulsionar as vendas para alcançar sua meta.',
    link: 'https://natur-aly.github.io/Naturaly/#',
  },
  {
    image: 'https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/70be2538f18c38ad05a460c9fa5ac947_1624/production/image.png',
    name: 'FS Performance Club',
    challenge: 'A consultoria divulgava seus planos e serviços apenas através do WhatsApp, o que limitava a visibilidade e a captação de novos alunos que buscavam informações detalhadas online.',
    solution: 'Desenvolvi uma página focada em apresentar os planos de treino de forma clara e profissional. O site agora funciona como um ponto central de informações, melhorando a imagem da marca e facilitando a chegada de novos membros.',
    link: 'https://fs-performance.github.io/FS-Performance-Club/',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:ring-2 hover:ring-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-orange-500 mb-2">{project.name}</h3>
        <p className="text-slate-400 text-sm mb-2"><span className="font-semibold text-slate-300">O Desafio:</span> {project.challenge}</p>
        <p className="text-slate-400 text-sm mb-4"><span className="font-semibold text-slate-300">A Solução:</span> {project.solution}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300">
          Ver o Site ao Vivo
        </a>
      </div>
    </div>
  );
};


const PortfolioSection: React.FC = () => {
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projetos Entregues com <span className="text-orange-500">Foco e Performance</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <p className="text-center text-slate-400 mt-12">
          Estes são os últimos projetos apresentados aos clientes.
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
