import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <>
      {/* Grid futurista animado */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        
        {/* Esferas de luz animadas */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}} />
        
        {/* Raios de luz */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent left-1/4 animate-pulse" style={{animationDuration: '3s'}} />
          <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent right-1/3 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}} />
          <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent right-1/4 animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}} />
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;
