
import React from 'react';

export const HeroFive: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-indigo-950 flex flex-col justify-center overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[150px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="inline-block px-3 py-1 bg-emerald-400/10 text-emerald-400 text-xs font-bold tracking-widest uppercase rounded border border-emerald-400/20 mb-6">
            Active Now
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            Experience the <br />
            <span className="italic font-light text-emerald-400">Flow State</span>
          </h1>
          <p className="text-indigo-200 text-lg mb-10 max-w-lg">
            Connect your creative tools into a single, seamless environment. Automation that feels like magic.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-emerald-400 text-indigo-950 font-black rounded-full hover:bg-emerald-300 transition-all transform hover:scale-105 shadow-lg shadow-emerald-400/20">
              JOIN THE WAITLIST
            </button>
            <div className="flex -space-x-3 items-center ml-4">
              {[1, 2, 3].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  className="w-12 h-12 rounded-full border-2 border-indigo-900 object-cover" 
                  alt="User" 
                />
              ))}
              <div className="pl-6 text-sm text-indigo-300 font-medium">+1.2k others</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px]">
            {/* Layered Cards Visual */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-full bg-gradient-to-br from-indigo-500/20 to-indigo-900/40 rounded-[3rem] border border-white/10 backdrop-blur shadow-2xl rotate-[-6deg] transition-transform hover:rotate-0 duration-500"></div>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-xs h-full bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 rounded-[3rem] border border-white/10 backdrop-blur shadow-2xl rotate-[3deg] transition-transform hover:rotate-0 duration-500"></div>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-full max-w-xs h-full bg-white/5 rounded-[3rem] border border-white/20 backdrop-blur-xl shadow-2xl p-10 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">⚡</div>
                    <div className="text-right">
                        <p className="text-[10px] text-white/50 uppercase font-bold">Latency</p>
                        <p className="text-xl font-bold text-white">12ms</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="h-2 w-full bg-white/5 rounded-full"><div className="w-1/2 h-full bg-emerald-400 rounded-full"></div></div>
                    <div className="h-2 w-full bg-white/5 rounded-full"><div className="w-3/4 h-full bg-indigo-400 rounded-full"></div></div>
                    <div className="h-2 w-full bg-white/5 rounded-full"><div className="w-1/3 h-full bg-purple-400 rounded-full"></div></div>
                </div>
                <div className="p-4 bg-emerald-400 text-indigo-950 rounded-2xl text-center font-bold">
                    System Optimal
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
