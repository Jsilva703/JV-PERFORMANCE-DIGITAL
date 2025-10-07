
import React from 'react';

const JourneySection: React.FC = () => {
  return (
    <section id="jornada" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Da Superação Pessoal à <span className="text-orange-500">Performance Digital</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna 1: O Atleta */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">O Atleta</h3>
            <div className="flex space-x-4 mb-4">
              <img 
                src="https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/daec21955b325d542b0b6d714abf88f4_1624/production/ImagemdoWhatsAppde2025-09-16s09_1759787636447.29" 
                alt="João Victor correndo" 
                className="w-1/2 rounded-lg h-80 object-contain bg-black ring-1 ring-slate-700/50" 
              />
              <img 
                src="https://mkdocs-201908.s3.sa-east-1.amazonaws.com/1624/production/bb9760e889f0da3bdcf8ace6a52b9688_1624/production/foto4_1759787694006.jpg" 
                alt="João Victor em prova de corrida" 
                className="w-1/2 rounded-lg h-80 object-contain bg-black ring-1 ring-slate-700/50" 
              />
            </div>
            <p className="text-slate-300">
              Em 2024, a balança marcava 115kg. Hoje, ela marca a distância de uma maratona concluída. O esporte me ensinou sobre foco, resiliência e o poder de dar um passo de cada vez. O triathlon é meu próximo desafio, a prova de que nenhum objetivo é grande demais quando se tem um plano.
            </p>
          </div>
          {/* Coluna 2: O Profissional */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">O Profissional</h3>
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
