import React from 'react';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.474 1.059-1.103 4.029 4.138-1.082.946.465z" />
    </svg>
);

const EmailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <div className="flex justify-center items-center space-x-6 mb-4">
            <a href="https://wa.me/5511952445898" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300">
                <WhatsAppIcon />
                <span>WhatsApp</span>
            </a>
            <a href="mailto:jvs.devsilva@gmail.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300">
                <EmailIcon />
                <span>Email</span>
            </a>
        </div>
        <p>&copy; {new Date().getFullYear()} JV Performance Digital. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
