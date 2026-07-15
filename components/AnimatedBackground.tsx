import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.20),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.14),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.72),#020617_62%)]" />
    </div>
  );
};

export default AnimatedBackground;
