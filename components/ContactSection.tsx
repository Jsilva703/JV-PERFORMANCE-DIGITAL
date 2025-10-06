import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Vamos Juntos Cruzar a Linha de Chegada do Seu Projeto?
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Me envie uma mensagem e vamos conversar sobre como posso te ajudar a alcançar seus objetivos.
        </p>
        <a 
          href="https://wa.me/5511952445898?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-bold py-4 px-10 rounded-full text-xl uppercase hover:bg-green-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Falar com João Victor no WhatsApp
        </a>
        <div className="mt-8 text-slate-400">
          <p>Ou se preferir, me envie um e-mail:</p>
          <a href="mailto:jvs.devsilva@gmail.com" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors duration-300 flex items-center justify-center gap-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            jvs.devsilva@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
