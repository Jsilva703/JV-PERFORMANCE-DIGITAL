import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const IronmanSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const meta = 15000; // Valor total da meta
  const arrecadado = 0; // Valor arrecadado (valor de exemplo para demonstrar a animação)
  const progressPercentage = (arrecadado / meta) * 100;

  return (
    <section id="ironman" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background futurista */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div ref={ref} className="container mx-auto px-6 text-center max-w-3xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Seu Projeto Impulsiona{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Meu Sonho</span>
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Minha meta é competir no Ironman 70.3. Uma prova que exige o máximo de
          corpo e mente. Hoje, treino sem patrocínio, e cada projeto de site que
          desenvolvo é um passo fundamental para custear a inscrição, os
          equipamentos e a preparação. Ao me contratar, você não só adquire uma
          Landing Page de alta performance, mas também se torna um apoiador da
          minha jornada.
        </p>
        <div className="w-full bg-slate-700 rounded-full h-8 p-1 mb-4 shadow-inner">
          <div
            className="bg-gradient-to-r from-orange-400 to-orange-600 h-full rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-1500 ease-out"
            style={{ width: isVisible ? `${progressPercentage}%` : "0%" }}
          >
            {isVisible &&
              progressPercentage > 10 &&
              `${progressPercentage.toFixed(0)}%`}
          </div>
        </div>
        <div className="flex justify-between text-sm font-semibold">
          <span className="text-slate-400">
            Arrecadado: R$ {arrecadado.toLocaleString("pt-BR")}
          </span>
          <span className="text-slate-400">
            Meta: R$ {meta.toLocaleString("pt-BR")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default IronmanSection;
