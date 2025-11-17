
import React from 'react';

const JourneySection: React.FC = () => {
  return (
    <section id="jornada" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background futurista */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Da Superação Pessoal à <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Performance Digital</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna 1: O Atleta */}
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl shadow-lg hover:border-orange-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 group/card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
            <h3 className="relative text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">O Atleta</h3>
            <div className="flex space-x-4 mb-4">
              <img 
                src="https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/daec21955b325d542b0b6d714abf88f4_1624/production/ImagemdoWhatsAppde2025-09-16s09_1759787636447.29" 
                alt="João Victor correndo" 
                className="relative w-1/2 rounded-xl h-80 object-contain bg-black ring-1 ring-orange-500/30 hover:ring-orange-500/50 transition-all duration-300 hover:scale-105" 
              />
              <img 
                src="https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/bb9760e889f0da3bdcf8ace6a52b9688_1624/production/foto4_1759787694006.jpg" 
                alt="João Victor em prova de corrida" 
                className="relative w-1/2 rounded-xl h-80 object-contain bg-black ring-1 ring-orange-500/30 hover:ring-orange-500/50 transition-all duration-300 hover:scale-105" 
              />
            </div>
            <p className="text-slate-300">
              Em 2024, a balança marcava 115kg. Hoje, ela marca a distância de uma maratona concluída. O esporte me ensinou sobre foco, resiliência e o poder de dar um passo de cada vez. O triathlon é meu próximo desafio, a prova de que nenhum objetivo é grande demais quando se tem um plano.
            </p>
          </div>
          {/* Coluna 2: O Profissional */}
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl shadow-lg hover:border-orange-500/50 hover:bg-slate-900/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 group/card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
            <h3 className="relative text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">O Profissional</h3>
            <p className="text-slate-300">
              Eu levo a mentalidade de atleta para cada projeto. Assim como em uma prova, cada detalhe importa: o planejamento, a execução e a entrega do melhor resultado. Seu site não é apenas código, é a linha de chegada para os seus clientes. Minha dedicação garante que sua presença online seja construída com a mesma precisão e energia que me levam a cruzar a linha de chegada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
