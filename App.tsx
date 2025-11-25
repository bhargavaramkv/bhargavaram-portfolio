import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { OriginStory } from './components/OriginStory';
import { Superpowers } from './components/Superpowers';
import { MissionLog } from './components/MissionLog';
import { FreelanceMissions } from './components/FreelanceMissions';
import { JarvisChat } from './components/JarvisChat';
import { Menu, X } from 'lucide-react';

// --- Constants ---
const NAV_ITEMS = ['Origin', 'Missions', 'Freelance', 'Powers'];

// --- Sub-Components ---

const Navbar: React.FC<{
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrollToSection: (id: string) => void;
}> = ({ isMenuOpen, toggleMenu, scrollToSection }) => (
  <>
    <nav className="fixed top-0 left-0 right-0 bg-marvel-dark/80 backdrop-blur-md text-white z-50 border-b border-marvel-blue/30 h-20 flex items-center justify-between px-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-comic tracking-wider bg-marvel-blue/10 text-marvel-blue px-4 py-2 border border-marvel-blue/50 rounded-lg shadow-[0_0_15px_rgba(0,195,255,0.2)] hover:shadow-[0_0_25px_rgba(0,195,255,0.4)] transition-all cursor-pointer group"
        >
          <span className="block group-hover:scale-105 transition-transform">BHARGAVA.DEV</span>
        </div>
        {/* System Status Indicator */}
        <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-marvel-blue/70 border border-marvel-blue/20 px-2 py-1 rounded bg-black/40">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          SYSTEM: ONLINE
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 font-bold uppercase tracking-widest text-sm items-center">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="relative px-2 py-1 text-gray-400 hover:text-white transition-colors duration-200 group overflow-hidden"
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-marvel-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        ))}
        <button className="bg-marvel-blue text-black font-bold px-4 py-2 rounded text-xs hover:bg-white transition-colors shadow-[0_0_10px_rgba(0,195,255,0.4)]">
          INITIATE
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white hover:text-marvel-blue transition-colors" onClick={toggleMenu}>
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </nav>

    {/* Mobile Menu Overlay */}
    {isMenuOpen && (
      <div className="fixed inset-0 bg-marvel-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-comic tracking-widest text-white">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="hover:text-marvel-blue hover:scale-110 transition-all"
          >
            {item}
          </button>
        ))}
      </div>
    )}
  </>
);

const Footer: React.FC = () => (
  <footer className="bg-black text-white py-16 border-t border-marvel-blue/20 relative overflow-hidden">
    {/* Background Grid */}
    <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl font-comic mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">ASSEMBLE YOUR TEAM</h2>
      <p className="mb-10 max-w-md mx-auto text-gray-400 font-body leading-relaxed">
        Need a distributed systems architect or a freelance developer? Contact me for high-scale opportunities.
      </p>
      <div className="inline-block">
        <a
          href="mailto:kattavenkatabhargavaram@gmail.com"
          className="bg-marvel-blue/10 text-marvel-blue font-comic text-xl px-10 py-4 border border-marvel-blue rounded hover:bg-marvel-blue hover:text-black hover:shadow-[0_0_30px_rgba(0,195,255,0.6)] transition-all duration-300 flex items-center gap-3"
        >
          SEND SIGNAL
        </a>
      </div>
      <p className="mt-12 text-xs text-gray-600 uppercase tracking-[0.2em] font-mono">
        © {new Date().getFullYear()} Bhargava Ram K V. All Systems Operational.
      </p>
    </div>
  </footer>
);

// --- Main Component ---

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