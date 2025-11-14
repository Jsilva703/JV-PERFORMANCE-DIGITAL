
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 border border-slate-200 shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Pronto Para Começar?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Entre em contato agora e vamos criar juntos a presença digital profissional que seu negócio merece.
            </p>
            
            <a 
              href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20quero%20criar%20meu%20site%20profissional!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 mb-8"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-1.009 3.686 3.767-.986z"/>
              </svg>
              Falar no WhatsApp
            </a>
            
            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-600 mb-3">Ou envie um e-mail</p>
              <a 
                href="mailto:jvs.devsilva@gmail.com" 
                className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300 inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
