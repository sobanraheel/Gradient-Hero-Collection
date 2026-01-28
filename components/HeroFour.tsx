
import React from 'react';

export const HeroFour: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-950 px-6 py-24">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black"></div>

      <div className="relative z-10 max-w-4xl text-center space-y-10">
        <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">
          Precision Engineering for <br />
          <span className="font-bold text-gray-100">Global Enterprises</span>
        </h1>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto"></div>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The unified platform for secure infrastructure, data sovereignty, and predictive analytics at scale.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="group relative px-8 py-3.5 bg-white text-black font-bold rounded-sm overflow-hidden transition-all hover:bg-gray-100">
            <span className="relative z-10">Request Access</span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <button className="px-8 py-3.5 border border-gray-800 text-gray-300 font-medium rounded-sm hover:border-gray-600 hover:text-white transition-all">
            Technical Specs
          </button>
        </div>
        
        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">2.4k+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">99.9%</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">ISO</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Certified</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">24/7</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};
