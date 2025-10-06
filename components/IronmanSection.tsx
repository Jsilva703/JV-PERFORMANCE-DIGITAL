
import React from 'react';

const IronmanSection: React.FC = () => {
  const meta = 15000; // Valor total da meta
  const arrecadado = 0; // Valor arrecadado
  const progressPercentage = (arrecadado / meta) * 100;

  return (
    <section id="ironman" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Seu Projeto Impulsiona <span className="text-orange-500">Meu Sonho</span>
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Minha meta é competir no Ironman 70.3. Uma prova que exige o máximo de corpo e mente. Hoje, treino sem patrocínio, e cada projeto de site que desenvolvo é um passo fundamental para custear a inscrição, os equipamentos e a preparação. Ao me contratar, você não só adquire uma Landing Page de alta performance, mas também se torna um apoiador da minha jornada.
        </p>
        <div className="w-full bg-slate-700 rounded-full h-8 p-1 mb-4 shadow-inner">
          <div 
            className="bg-gradient-to-r from-orange-400 to-orange-600 h-full rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ width: `${progressPercentage}%` }}
          >
           {progressPercentage > 5 && `${progressPercentage.toFixed(0)}%`}
          </div>
        </div>
        <div className="flex justify-between text-sm font-semibold">
          <span className="text-slate-400">Arrecadado: R$ {arrecadado.toLocaleString('pt-BR')}</span>
          <span className="text-slate-400">Meta: R$ {meta.toLocaleString('pt-BR')}</span>
        </div>
      </div>
    </section>
  );
};

export default IronmanSection;