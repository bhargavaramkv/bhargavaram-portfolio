import React from 'react';
import { ArrowDown, Send, Shield, Globe, Database, Cpu, Code, Terminal, Layers } from 'lucide-react';

// --- Constants ---
export const TECH_STACK = ['.NET Core', 'MongoDB', 'Microservices', 'C#', 'Docker'];

// --- Sub-Components ---

const TechStack: React.FC = () => (
  <div className="flex flex-wrap justify-start gap-3">
    {TECH_STACK.map((tech, index) => (
      <div
        key={tech}
        className="flex items-center gap-2 px-4 py-2 bg-marvel-dark/80 border border-marvel-blue/30 rounded text-sm font-mono text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:border-marvel-blue transition-all duration-300 cursor-default group relative overflow-hidden animate-[float_4s_ease-in-out_infinite]"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className="absolute inset-0 bg-marvel-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <Terminal size={16} className="text-marvel-blue group-hover:text-white transition-colors relative z-10" />
        <span className="tracking-wider relative z-10">{tech.toUpperCase()}</span>
      </div>
    ))}
  </div>
);

const ProfileCard: React.FC = () => (
  <div className="relative hidden lg:flex justify-center items-center order-1 lg:order-2">
    {/* Animated Rings */}
    <div className="absolute w-[550px] h-[550px] border border-marvel-blue/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
    <div className="absolute w-[480px] h-[480px] border border-dashed border-marvel-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

    {/* Glass Card */}
    <div className="relative w-full max-w-sm bg-[#0a192f]/90 backdrop-blur-md border border-marvel-blue/40 p-6 rounded-xl shadow-[0_0_50px_rgba(0,100,255,0.25)] overflow-hidden transform hover:scale-105 transition-transform duration-500">

      {/* Scanning Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-marvel-blue/80 shadow-[0_0_15px_rgba(0,100,255,1)] animate-[scan_3s_linear_infinite] z-20"></div>

      {/* Header */}
      <div className="flex justify-between items-center border-b border-marvel-blue/30 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Shield className="text-marvel-blue" size={20} />
          <span className="font-mono text-marvel-blue tracking-widest text-xs font-bold">S.H.I.E.L.D. DATABASE</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
        </div>
      </div>

      {/* Identity Section */}
      <div className="flex gap-4 mb-6">
        <div className="w-20 h-20 bg-marvel-blue/20 rounded border border-marvel-blue/50 flex items-center justify-center relative overflow-hidden shrink-0">
          <img
            src="https://ui-avatars.com/api/?name=Bhargava+Ram&background=0064FF&color=fff&size=128&bold=true"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {/* Blue overlay for holo effect */}
          <div className="absolute inset-0 bg-marvel-blue/10 mix-blend-overlay"></div>
        </div>
        <div>
          <h3 className="font-comic text-2xl text-white tracking-wide leading-none mb-1">BHARGAVA RAM</h3>
          <p className="text-xs text-marvel-blue font-mono mb-2">CODENAME: MAVERICK</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] font-bold bg-white/10 text-white px-2 py-0.5 rounded border border-white/20">LVL: SOFTWARE ENGINEER</span>
          </div>
        </div>
      </div>

      {/* Data Stats */}
      <div className="space-y-3 font-mono text-xs text-gray-400">

        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <span className="flex items-center gap-2"><Globe size={12} className="text-marvel-blue" /> LOCATION</span>
          <span className="text-white">BENGALURU, INDIA</span>
        </div>

        <div className="bg-black/30 p-2 rounded border border-white/5">
          <div className="flex justify-between mb-1">
            <span>EXPERIENCE</span>
            <span className="text-marvel-blue">2+ YEARS</span>
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-marvel-blue h-full w-[85%] relative">
              <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="bg-marvel-blue/5 p-2 rounded border border-marvel-blue/20 flex flex-col justify-center gap-1 hover:bg-marvel-blue/10 transition-colors">
            <div className="flex items-center gap-1 text-marvel-blue font-bold">
              <Database size={12} /> MONGODB
            </div>
            <span className="text-[10px] text-gray-500">Primary Database</span>
          </div>
          <div className="bg-marvel-blue/5 p-2 rounded border border-marvel-blue/20 flex flex-col justify-center gap-1 hover:bg-marvel-blue/10 transition-colors">
            <div className="flex items-center gap-1 text-marvel-blue font-bold">
              <Cpu size={12} /> .NET CORE
            </div>
            <span className="text-[10px] text-gray-500">Core Framework</span>
          </div>
          <div className="bg-marvel-blue/5 p-2 rounded border border-marvel-blue/20 flex flex-col justify-center gap-1 hover:bg-marvel-blue/10 transition-colors col-span-2">
            <div className="flex items-center gap-1 text-marvel-blue font-bold">
              <Code size={12} /> VIBE CODING
            </div>
            <span className="text-[10px] text-gray-500">Specialization</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-4 pt-2 border-t border-marvel-blue/30 flex justify-between text-[9px] font-mono text-gray-600 uppercase">
        <span>ID: 8492-AB-2023</span>
        <span className="animate-pulse text-green-500">● CONNECTED</span>
      </div>

    </div>
  </div>
);

const Typewriter: React.FC = () => {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const words = ["SOFTWARE ENGINEER", "FREELANCER"];
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at full text
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <span className="text-[#0064FF]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-marvel-dark pt-20 md:pt-0">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-marvel-dark/50 to-marvel-dark pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1 pt-10 lg:pt-0">

          {/* System Badge */}
          <div className="bg-marvel-blue/5 text-marvel-blue px-[20px] py-[8px] font-bold text-[14px] tracking-[2px] uppercase -skew-x-[10deg] border border-marvel-blue/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] mb-[40px] backdrop-blur-sm animate-pulse">
            <span className="inline-block skew-x-[10deg] flex items-center gap-2">
              <span className="w-2 h-2 bg-marvel-blue rounded-full shadow-[0_0_10px_#00F0FF]"></span>
              NEURAL LINK ESTABLISHED
            </span>
          </div>

          {/* Main Heading */}
          <div className="font-comic text-[50px] md:text-[80px] leading-none mb-[20px] text-white tracking-[2px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            HELLO, I'M
          </div>

          {/* Name with Glitch Effect */}
          <div className="relative mb-[30px] group">
            <h1 className="font-comic text-[60px] md:text-[90px] text-transparent bg-clip-text bg-gradient-to-r from-marvel-blue to-white tracking-[3px] leading-none relative z-10 group-hover:animate-glitch">
              BHARGAVA RAM
            </h1>
            <span aria-hidden="true" className="font-comic text-[60px] md:text-[90px] text-marvel-red tracking-[3px] leading-none absolute top-0 left-0 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 z-0 pointer-events-none">
              BHARGAVA RAM
            </span>
            <span aria-hidden="true" className="font-comic text-[60px] md:text-[90px] text-marvel-blue tracking-[3px] leading-none absolute top-0 left-0 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 z-0 pointer-events-none">
              BHARGAVA RAM
            </span>
          </div>

          {/* Subtitle */}
          <h2 className="font-comic text-[32px] md:text-[48px] text-gray-400 mb-[40px] tracking-[1px] leading-none min-h-[48px]">
            <Typewriter />
          </h2>

          {/* Dark UI Block with Scanline Border */}
          <div className="relative group max-w-[700px] mb-[50px]">
            {/* Background & Border */}
            <div className="absolute inset-0 bg-black/40 border border-white/10 rounded-xl group-hover:border-marvel-blue/50 transition-colors duration-300 backdrop-blur-sm"></div>

            {/* Scanline Effect Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,195,255,0.05)_50%)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>

            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-marvel-blue/30 group-hover:border-marvel-blue transition-colors duration-300 rounded-tl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-marvel-blue/30 group-hover:border-marvel-blue transition-colors duration-300 rounded-br-lg"></div>

            <div className="relative p-8">
              {/* Description */}
              <p className="text-[18px] md:text-[20px] leading-[1.6] text-gray-300 font-body mb-8">
                Architecting digital realities and forging scalable systems. I bridge the gap between human intent and machine execution using <strong className="text-marvel-blue font-bold text-shadow-neon">C# .NET Core</strong> and <strong className="text-marvel-blue font-bold text-shadow-neon">Azure</strong>.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-[25px] flex-wrap w-full md:w-auto">
                {/* Primary Button - Cyber Style */}
                <button
                  onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="View Projects"
                  className="relative px-[32px] py-[14px] bg-marvel-blue/10 text-marvel-blue font-comic text-[20px] tracking-[2px] border border-marvel-blue shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:bg-marvel-blue hover:text-black hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 flex items-center justify-center gap-[10px] group/btn overflow-hidden clip-slant"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                  <Layers className="w-[20px] h-[20px] group-hover/btn:rotate-180 transition-transform relative z-10" />
                  <span className="relative z-10">VIEW PROJECTS</span>
                </button>

                {/* Secondary Button - Holo Style */}
                <a
                  href="mailto:kattavenkatabhargavaram@gmail.com"
                  aria-label="Contact Me via Email"
                  className="relative px-[32px] py-[14px] bg-transparent text-white font-comic text-[20px] tracking-[2px] border border-white/30 hover:border-marvel-blue hover:text-marvel-blue hover:shadow-[inset_0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 flex items-center justify-center gap-[10px] group/btn overflow-hidden"
                >
                  <span className="absolute inset-0 bg-marvel-blue/5 opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                  <Send className="w-[20px] h-[20px] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  <span className="group-hover/btn:animate-pulse">CONTACT ME</span>
                </a>
              </div>
            </div>
          </div>

          <TechStack />
        </div>

        <ProfileCard />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-marvel-blue hidden md:block">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};
