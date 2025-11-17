
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/10">
          <div className="text-center space-y-6">
            <div className="inline-block px-5 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-full mb-4 animate-pulse">
              <span className="text-red-400 font-bold text-sm">🔥 Últimas vagas de Novembro com 35% OFF</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Vamos Criar Seu Site Profissional?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium">
              Resposta em <span className="text-emerald-400 font-bold">minutos</span> • Orçamento <span className="text-emerald-400 font-bold">sem compromisso</span> • Tire todas as suas dúvidas
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <p className="text-xs text-slate-400 font-semibold">4 Revisões<br/>Grátis</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">⚡</div>
                <p className="text-xs text-slate-400 font-semibold">Entrega<br/>7 dias</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🔒</div>
                <p className="text-xs text-slate-400 font-semibold">Pagamento<br/>Seguro</p>
              </div>
            </div>
            
                        <a
              href="https://wa.me/5511952445898?text=Oi!%20Quero%20garantir%20meu%20desconto%20de%2035%25%20e%20criar%20meu%20site%20profissional.%20Pode%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group/whats inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 text-base sm:text-lg shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover/whats:translate-x-[100%] transition-transform duration-700"></span>
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
              </svg>
              <span className="relative z-10">Começar Agora - 35% OFF</span>
            </a>
            <p className="text-sm text-slate-500 mt-3">💬 Resposta média em 5 minutos • Online agora</p>
            
            <div className="pt-6 sm:pt-8 border-t border-slate-700">
              <p className="text-slate-400 mb-2 sm:mb-3 text-sm sm:text-base">Ou envie um e-mail</p>
              <a 
                href="mailto:jvs.devsilva@gmail.com" 
                className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors duration-300 inline-flex items-center gap-2 text-sm sm:text-base break-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                jvs.devsilva@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
