import React from 'react';
import { Monitor, Flame, Radio } from 'lucide-react';

// --- Constants ---

export const SIDE_QUESTS = [
  {
    id: 1,
    title: "Louisiana Flood Detection System",
    icon: <Monitor size={32} />,
    status: "CLASSIFIED",
    desc: "A data-driven model that identifies early flood indicators using historical climate patterns, river gauge readings, and spatial data. Highlights risk zones with high precision.",
    image: "assets/flood-detection.png"
  },
  {
    id: 2,
    title: "Wildfire Analysis Platform",
    icon: <Flame size={32} />,
    status: "CLASSIFIED",
    desc: "An analytical workflow tracking fire spread, evaluating risk based on vegetation and weather conditions, and visualizing hotspot intensity.",
    image: "assets/wildfire-analysis.png"
  },
  {
    id: 3,
    title: "Multicast Freelance Projects",
    icon: <Radio size={32} />,
    status: "CLASSIFIED",
    desc: "Scalable multicast communication systems delivering high-volume data streams with minimal latency for distributed networks.",
    image: "assets/multicast-project.png"
  }
];

// --- Sub-Components ---

const SideQuestCard: React.FC<{ quest: any }> = ({ quest }) => (
  <div className="group relative bg-marvel-dark border border-marvel-blue/30 shadow-[0_0_15px_rgba(0,195,255,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,195,255,0.4)] flex flex-col h-full rounded-xl overflow-hidden backdrop-blur-sm">
    {quest.image && (
      <div className="h-48 w-full overflow-hidden relative shrink-0">
        <div className="absolute inset-0 bg-marvel-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img src={quest.image} alt={quest.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-marvel-dark via-transparent to-transparent"></div>
      </div>
    )}
    <div className="p-6 flex-1 flex flex-col relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-marvel-blue/50 to-transparent"></div>

      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-marvel-blue/10 text-marvel-blue rounded-lg border border-marvel-blue/20 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,195,255,0.2)] relative z-10">
          {quest.icon}
        </div>
        <span className={`text-[10px] font-bold border px-2 py-1 rounded uppercase tracking-widest ${quest.status === 'CONFIDENTIAL' || quest.status === 'CLASSIFIED'
          ? 'border-red-500 text-red-500 bg-red-500/10 shadow-[0_0_5px_rgba(255,0,60,0.3)]'
          : 'border-white/30 text-white/70'
          }`}>
          {quest.status}
        </span>
      </div>
      <h3 className="text-2xl font-comic text-white mb-3 group-hover:text-marvel-blue transition-colors">{quest.title}</h3>
      <p className="text-gray-400 font-body text-sm leading-relaxed border-t border-white/10 pt-3 mt-auto">
        {quest.desc}
      </p>
    </div>
  </div>
);

// --- Main Component ---

export const FreelanceMissions: React.FC = () => {
  return (
    <section className="py-24 bg-marvel-dark text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section - Aligned with MissionLog */}
        <div className="text-center mb-16">
          <span className="text-marvel-blue text-sm font-mono tracking-[0.3em] uppercase mb-2 block animate-pulse">
            // CLASSIFIED ARCHIVES
          </span>
          <h2 className="text-6xl font-comic text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] mb-4">
            FREELANCE OPERATIONS
          </h2>
          <p className="text-gray-400 font-body max-w-xl mx-auto text-center">
            Independent contracts and specialized deployments outside of main directives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SIDE_QUESTS.map((quest) => (
            <SideQuestCard key={quest.id} quest={quest} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm font-mono animate-pulse">
            {'>'}  INCOMING TRANSMISSION: NEW PROJECTS ACCEPTED
          </p>
        </div>
      </div>
    </section>
  );
};