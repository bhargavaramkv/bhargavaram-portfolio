import React from 'react';
import { ArrowDown, Send, Shield, Globe, Database, Cpu, Code, Terminal, Layers } from 'lucide-react';

// --- Constants ---
export const TECH_STACK = ['.NET Core', 'MongoDB', 'Microservices', 'C#', 'Docker'];

// --- Sub-Components ---

const TechStack: React.FC = () => (
  <div className="flex flex-wrap justify-start gap-3">
    {TECH_STACK.map((tech) => (
      <div key={tech} className="flex items-center gap-2 px-4 py-2 bg-marvel-dark border-l-4 border-marvel-blue rounded-r text-sm font-mono text-cyan-300 shadow-lg hover:bg-black transition-colors cursor-default group">
        <Terminal size={16} className="text-marvel-blue group-hover:text-white transition-colors" />
        <span className="tracking-wider">{tech.toUpperCase()}</span>
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

// --- Main Component ---

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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-[#ffffff] pt-20 md:pt-0">

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1 pt-10 lg:pt-0">

          {/* System Badge */}
          <div className="bg-[#0064FF] text-white px-[20px] py-[8px] font-bold text-[14px] tracking-[2px] uppercase -skew-x-[10deg] border-[2px] border-black shadow-[4px_4px_0px_#000] mb-[40px]">
            <span className="inline-block skew-x-[10deg]">MISSION STATUS: ACTIVE</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-comic text-[50px] md:text-[80px] leading-none mb-[20px] text-black tracking-[2px]">
            HELLO, I'M
          </h1>

          {/* Name */}
          <h1 className="font-comic text-[60px] md:text-[90px] text-[#0064FF] tracking-[3px] leading-none mb-[30px]"
            style={{ textShadow: '3px 3px 0px #000, 6px 6px 0px rgba(0, 100, 255, 0.3)' }}>
            BHARGAVA RAM
          </h1>

          {/* Subtitle */}
          <h2 className="font-comic text-[32px] md:text-[48px] text-black mb-[40px] tracking-[1px] leading-none min-h-[48px]">
            <Typewriter />
          </h2>

          {/* Description */}
          <div className="border-l-[5px] border-[#0064FF] pl-[25px] max-w-[700px] mb-[50px]">
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#666] font-body">
              I build scalable, production-grade backend systems using <strong className="text-black font-bold">C# .NET Core</strong> and <strong className="text-black font-bold">Azure</strong>.
              Available for complex distributed systems work and freelance projects.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-[20px] flex-wrap w-full md:w-auto mb-10">
            {/* Primary Button */}
            <button
              onClick={() => document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-[40px] py-[18px] bg-[#0064FF] text-white font-comic text-[24px] tracking-[2px] border-[3px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_#000] transition-all flex items-center justify-center gap-[12px]"
            >
              <Layers className="w-[24px] h-[24px]" /> VIEW PROJECTS
            </button>

            {/* Secondary Button */}
            <a
              href="mailto:kattavenkatabhargavaram@gmail.com"
              className="px-[40px] py-[18px] bg-white text-black font-comic text-[24px] tracking-[2px] border-[3px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_#000] transition-all flex items-center justify-center gap-[12px]"
            >
              <Send className="w-[24px] h-[24px]" /> CONTACT ME
            </a>
          </div>

          <TechStack />
        </div>

        <ProfileCard />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-marvel-dark hidden md:block">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};
