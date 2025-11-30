import React from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['Origin', 'Missions', 'Freelance', 'Powers'];

interface NavbarProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu, scrollToSection }) => (
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
