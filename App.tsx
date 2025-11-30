import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { Superpowers } from './components/Superpowers';
import { MissionLog } from './components/MissionLog';
import { FreelanceMissions } from './components/FreelanceMissions';
import { JarvisChat } from './components/JarvisChat';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-marvel-dark text-gray-100 overflow-x-hidden font-sans selection:bg-marvel-blue/30 selection:text-white relative">
      {/* Global Background Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-marvel-dark/80 to-marvel-dark pointer-events-none z-0"></div>

      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />

      <main className="pt-20 relative z-10">
        <Hero />

        <div id="origin">
          <OriginStory />
        </div>

        <div id="missions">
          <MissionLog />
        </div>

        <div id="freelance">
          <FreelanceMissions />
        </div>

        <div id="powers">
          <Superpowers />
        </div>
      </main>

      <Footer />

      {/* J.A.R.V.I.S. Floating Button */}
      <JarvisChat />
    </div>
  );
};

export default App;