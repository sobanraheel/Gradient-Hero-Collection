
import React from 'react';

export const HeroThree: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-1/2 lg:h-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 transform skew-x-[-10deg] translate-x-[15%] lg:translate-x-[25%]"></div>
      
      <div className="container mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center relative z-10">
        <div className="w-full lg:w-1/2 py-20 lg:py-0">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Design Studio</h2>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-[0.9]">
            MAKE <br />
            <span className="italic text-gray-800">THINGS</span> <br />
            BEAUTIFUL
          </h1>
          <p className="text-gray-600 text-lg max-w-md mb-12 border-l-4 border-orange-500 pl-6 py-2">
            We are a creative collective building brands that stand the test of time and pixels.
          </p>
          <div className="flex items-center gap-8">
            <button className="w-20 h-20 bg-gray-900 rounded-full text-white flex items-center justify-center text-sm font-bold hover:scale-110 transition-transform">
              EXPLORE
            </button>
            <div className="text-sm font-medium text-gray-400 leading-tight">
              SCROLL DOWN <br /> TO SEE PROJECTS
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-md">
                <img 
                    src="https://picsum.photos/seed/creative/800/1000" 
                    alt="Creative" 
                    className="w-full h-full object-cover rounded-[40px] shadow-2xl"
                />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                    <p className="text-xs text-gray-400 mb-2 font-bold uppercase">Satisfaction Rate</p>
                    <p className="text-4xl font-black text-gray-900">99%</p>
                    <div className="mt-4 flex gap-1">
                        {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-orange-400"></div>)}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
