import React from 'react';

export const Footer: React.FC = () => (
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
