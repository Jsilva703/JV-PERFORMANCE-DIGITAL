import React from 'react';
import type { Project } from '../types';
import { trackExternalLink, trackPortfolioClick } from '../utils/analytics';

const projects: Project[] = [
  {
    image: 'https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/74eefcd92a414c5c3ea738f1775fa39d_1624/production/image.png',
    name: 'Naturaly',
    challenge: 'Produto precisava de uma apresentação online mais clara e confiável.',
    solution: 'Landing page com foco em história, benefícios do produto e contato para venda.',
    link: 'https://natur-aly.github.io/Naturaly/#',
  },
  {
    image: 'https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/70be2538f18c38ad05a460c9fa5ac947_1624/production/image.png',
    name: 'FS Performance Club',
    challenge: 'Consultoria precisava apresentar seus planos e reforçar autoridade online.',
    solution: 'Site direto para explicar a proposta, organizar serviços e facilitar novos contatos.',
    link: 'https://fs-performance.github.io/FS-Performance-Club/',
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="relative border-y border-white/10 bg-slate-900/80 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Projetos</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Projetos publicados, não promessa vazia.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A ideia agora é fortalecer cada vez mais esta área com novos trabalhos, depoimentos e resultados.
            </p>
          </div>
          <a href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20vi%20os%20projetos%20da%20JV%20Performance%20e%20quero%20conversar%20sobre%20meu%20site." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12">
            Quero um projeto assim
          </a>
        </div>

        <div className="mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/20">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img src={project.image} alt={`Preview do projeto ${project.name}`} className="h-full w-full object-cover opacity-95" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-white">{project.name}</h3>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Publicado</span>
                </div>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Desafio</dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-300">{project.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Solução</dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-300">{project.solution}</dd>
                  </div>
                </dl>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackPortfolioClick(project.name, project.link);
                    trackExternalLink(project.link, `Projeto: ${project.name}`);
                  }}
                  className="mt-6 inline-flex text-sm font-bold text-emerald-300 hover:text-emerald-200"
                >
                  Abrir projeto publicado
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
