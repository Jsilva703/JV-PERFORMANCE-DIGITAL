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

const Logo: React.FC = () => (
    <div className="flex items-center justify-center gap-2.5" aria-label="JV Performance Digital Home">
      <svg className="h-8 w-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>JV Performance Digital Logo</title>
        <path
          d="M2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18C34 26.8366 26.8366 34 18 34"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14L18 25L24 14"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold">
        <span className="text-slate-200">JV Performance </span>
        <span className="text-orange-500">Digital</span>
      </span>
    </div>
  );

const navLinks = [
    { href: '#jornada', text: 'Jornada' },
    { href: '#projetos', text: 'Projetos' },
    { href: '#planos', text: 'Planos' },
    { href: '#contato', text: 'Contato' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <a href="#" aria-label="Voltar ao topo" className="inline-block mb-8">
            <Logo />
        </a>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-400 hover:text-orange-500 transition-colors duration-300">
                {link.text}
            </a>
            ))}
        </nav>
        <div className="flex justify-center items-center space-x-6 mb-8">
            <a href="https://wa.me/5511952445898" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300">
                <WhatsAppIcon />
                <span>WhatsApp</span>
            </a>
            <a href="mailto:jvs.devsilva@gmail.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-300">
                <EmailIcon />
                <span>Email</span>
            </a>
        </div>
        <div className="border-t border-slate-800 pt-8">
            <p>&copy; {new Date().getFullYear()} JV Performance Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
