import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const OriginStory: React.FC = () => {
  return (
    <section className="py-24 bg-marvel-dark relative overflow-hidden">
      {/* Background Pattern - Blueprint/Grid style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Decorative Comic Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-marvel-blue/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-20 -left-10 w-80 h-80 bg-marvel-red/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="bg-marvel-blue/10 text-marvel-blue px-4 py-1 border border-marvel-blue mb-4 shadow-[0_0_10px_rgba(0,240,255,0.3)] backdrop-blur-sm">
            <span className="font-mono tracking-widest text-sm">SECRET FILES: VOL 1</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-comic text-white mb-4 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            THE ORIGIN STORY
          </h2>
          {/* Neon separator */}
          <div className="w-full max-w-md h-1 bg-gradient-to-r from-transparent via-marvel-blue to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch mb-12">

          {/* Panel 1: The Beginning */}
          <div className="comic-panel bg-black/50 border border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.5)] p-6 relative transform rotate-1 hover:rotate-0 transition-transform duration-300 backdrop-blur-sm group">
            <div className="absolute -top-3 -left-3 bg-marvel-yellow text-black border border-black px-3 py-1 font-comic text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
              PART 1
            </div>

            {/* Image Frame */}
            <div className="h-64 mb-6 overflow-hidden border border-white/20 relative">
              <div className="absolute inset-0 bg-marvel-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop" alt="Coding Labs" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
              {/* Comic caption box in image */}
              <div className="absolute bottom-2 right-2 bg-black/80 border border-white/20 px-2 py-1 text-xs font-mono text-marvel-blue uppercase tracking-wider">
                RV INSTITUTE LABS
              </div>
            </div>

            <h3 className="text-3xl font-comic mb-3 text-white">THE TECH OBSESSION</h3>
            <p className="font-body text-lg text-gray-400 leading-relaxed">
              Long before professional contracts, I was deep in the college labs, obsessing over <span className="font-bold text-marvel-blue">AI and automation</span>. While others studied for grades, I was a total nerd for technology, constantly striving to engineer efficient solutions. My goal was simple but ambitious: write code that makes human life just a little bit easier.
            </p>
          </div>

          {/* Panel 2: The Evolution */}
          <div className="comic-panel bg-black/50 border border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.5)] p-6 relative mt-12 md:mt-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300 backdrop-blur-sm group">
            <div className="absolute -top-3 -right-3 bg-marvel-blue text-black border border-black px-3 py-1 font-comic text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
              PART 2
            </div>

            <div className="h-64 mb-6 overflow-hidden border border-white/20 relative">
              <div className="absolute inset-0 bg-marvel-red/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Cloud Architecture" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>

            <h3 className="text-3xl font-comic mb-3 text-white">THE SCALABILITY AWAKENING</h3>
            <p className="font-body text-lg text-gray-400 leading-relaxed">
              My journey at <span className="font-bold text-marvel-blue">ABB</span> wasn't just a job—it was a baptism by fire in the world of <span className="font-bold text-white">distributed systems</span>. I moved beyond simple apps to engineering high-velocity architectures powered by <span className="font-bold text-white">.NET Core</span> and <span className="font-bold text-white">MongoDB</span>. I discovered the thrill of building systems that don't just run, but <em>scale</em>. When the traffic spikes and the pressure mounts, that's when I feel most alive.
            </p>
          </div>

        </div>

        {/* Education Section - Enhanced Visibility */}
        <div className="relative max-w-4xl mx-auto mt-16">
          <div className="bg-black/40 border border-marvel-blue/30 p-8 shadow-[0_0_20px_rgba(0,240,255,0.1)] relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all rounded-xl backdrop-blur-md">

            {/* Folder Tab */}
            <div className="absolute -top-1 left-0 bg-marvel-blue/20 text-marvel-blue font-mono text-xs px-6 py-1 tracking-widest border-r border-b border-marvel-blue/30 rounded-br-lg">
              CLASSIFIED: ACADEMY RECORDS
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Icon / Seal */}
              <div className="w-24 h-24 bg-marvel-blue/10 rounded-full flex items-center justify-center border border-marvel-blue/50 shadow-[0_0_15px_rgba(0,240,255,0.3)] shrink-0 animate-[pulse_3s_infinite]">
                <GraduationCap size={48} className="text-marvel-blue" />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-body uppercase tracking-widest text-gray-500 mb-1">Bachelor of Engineering</h3>
                <h2 className="text-4xl font-comic text-white mb-2">INFORMATION SCIENCE</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
                  <p className="text-xl font-bold text-marvel-blue">RV INSTITUTE OF TECHNOLOGY AND MANAGEMENT</p>
                  <span className="hidden md:inline text-gray-600">|</span>
                  <p className="text-gray-400 font-medium flex items-center gap-1">
                    <Award size={16} className="text-marvel-yellow" /> Graduated with Honors
                  </p>
                </div>
              </div>

              {/* Decorative Barcode or Stamp */}
              <div className="hidden md:block opacity-40 transform rotate-12 text-marvel-blue">
                <div className="font-mono text-[10px] tracking-tighter leading-3">
                  █║▌│█│║▌║││█║▌│║▌║<br />
                  APPROVED FOR DEPLOYMENT<br />
                  ID: EDU-2023-RV
                </div>
              </div>
            </div>

            {/* Background watermarks */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-marvel-blue/5 rounded-full blur-3xl z-0"></div>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="mt-16 max-w-3xl mx-auto bg-transparent p-8 relative">
          <p className="font-comic text-2xl text-center leading-relaxed text-gray-300">
            "WITH GREAT DATA COMES GREAT LATENCY REQUIREMENTS."
          </p>
          <p className="text-center text-gray-600 font-body uppercase tracking-widest mt-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gray-700"></span>
            A Distributed Systems Proverb
            <span className="w-8 h-px bg-gray-700"></span>
          </p>
        </div>
      </div>
    </section>
  );
};