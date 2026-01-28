
import React from 'react';

export const HeroTwo: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#030014] text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span>v3.0 is now live</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Decentralized <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Intelligence
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-lg leading-relaxed">
            Secure your digital assets with our next-generation blockchain architecture. Built for speed, security, and absolute privacy.
          </p>
          <div className="flex space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:opacity-90 transition-opacity">
              Launch App
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Read Whitepaper
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-xl p-8 shadow-2xl overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
            <div className="h-full border border-dashed border-white/10 rounded-2xl flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl rotate-12 flex items-center justify-center text-3xl">💎</div>
                <div>
                  <h3 className="text-2xl font-bold">Secure Vault</h3>
                  <p className="text-gray-400 mt-2">End-to-end encryption for all nodes.</p>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
