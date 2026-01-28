
import React from 'react';

export const HeroOne: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/50 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/50 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-100/50 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
          Introducing the Future
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
          Build your next <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">big idea</span> faster.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          The ultimate foundation for modern web applications. Scale infinitely with a UI that adapts to your growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300">
            Get Started Now
          </button>
          <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300">
            View Live Demo
          </button>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 grayscale opacity-50">
          {['Stripe', 'Airbnb', 'HubSpot', 'Discord'].map((brand) => (
            <span key={brand} className="text-xl font-bold text-gray-400">{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
