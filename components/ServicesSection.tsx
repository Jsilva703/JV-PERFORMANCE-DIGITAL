
import React from 'react';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Design Responsivo',
    description: 'Sites que funcionam perfeitamente em celulares, tablets e desktops. Seus clientes terão a melhor experiência em qualquer dispositivo.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance Otimizada',
    description: 'Carregamento ultrarrápido que mantém seus visitantes engajados. Sites lentos perdem clientes, o seu não vai.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO Otimizado',
    description: 'Seu site preparado para aparecer no Google. Otimização técnica completa para ser encontrado pelos seus clientes.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Integração WhatsApp',
    description: 'Botão de contato direto via WhatsApp para facilitar a comunicação com seus clientes e aumentar conversões.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Design Moderno',
    description: 'Visual profissional e atraente que transmite credibilidade. Seu negócio merece uma imagem à altura do que oferece.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Entrega Rápida',
    description: 'Seu site pronto em até 48 horas. Não espere semanas para começar a ter resultados online.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-12 sm:py-16 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            O que Você Recebe
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tudo que seu negócio precisa para ter uma presença digital profissional e gerar resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="text-emerald-600 mb-3">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
