
import React from 'react';
import { HeroOne } from './components/HeroOne';
import { HeroTwo } from './components/HeroTwo';
import { HeroThree } from './components/HeroThree';
import { HeroFour } from './components/HeroFour';
import { HeroFive } from './components/HeroFive';

const App: React.FC = () => {
  return (
    <main className="w-full">
      {/* Scroll Navigation Helper */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <a
            key={num}
            href={`#hero-${num}`}
            className="w-3 h-3 rounded-full bg-black/20 hover:bg-black/40 transition-colors border border-white/50"
            title={`Hero ${num}`}
          />
        ))}
      </div>

      <section id="hero-1">
        <HeroOne />
      </section>
      
      <section id="hero-2">
        <HeroTwo />
      </section>
      
      <section id="hero-3">
        <HeroThree />
      </section>
      
      <section id="hero-4">
        <HeroFour />
      </section>
      
      <section id="hero-5">
        <HeroFive />
      </section>

      <footer className="py-12 bg-gray-900 text-white text-center">
        <p className="text-gray-400">© 2026 Gradient Hero Collection. Built with React & Tailwind CSS.</p>
      </footer>
    </main>
  );
};

export default App;
