import { getData } from '@/lib/dataUtils';
import { Shield, User } from 'lucide-react';

export default function TeamsPage() {
  const { teams } = getData();

  return (
    <div className="animate-in fade-in slide-in-from-bottom flex flex-col items-center py-10 w-full duration-700">
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-glow-gradient drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">
          Registered Teams
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-32 bg-gaming-neonOrange/20 blur-[80px] -z-10 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {teams.map((team, index) => (
          <div
            key={team.id}
            className="group relative bg-gaming-surface border border-white/5 rounded-2xl p-6 overflow-hidden hover:border-gaming-neonOrange/50 transition-all duration-300 hover:shadow-neon cursor-pointer transform hover:-translate-y-2"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-gaming-neonOrange to-gaming-neonRed opacity-0 group-hover:opacity-20 transition duration-500 blur" />
            
            <div className="relative flex flex-col items-center">
              {/* Logo Placeholder */}
              <div className="w-24 h-24 rounded-full bg-gaming-card border border-white/10 mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-gaming-neonOrange transition-colors z-10">
                 <Shield className="w-10 h-10 text-gaming-neonOrange opacity-70 group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gaming-neonOrange/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
              </div>

              {/* Team Name */}
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10 w-full text-center group-hover:border-gaming-neonOrange/50 transition-colors">
                {team.name}
              </h2>

              {/* Roster */}
              <ul className="w-full space-y-3">
                {team.players.map((player, pIdx) => (
                  <li key={pIdx} className="flex items-center text-gray-400 group-hover:text-gray-300 text-sm font-medium tracking-wide">
                    <User className="w-4 h-4 mr-3 text-gaming-neonRed/70" />
                    {player}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Index Badge */}
            <div className="absolute top-4 left-4 bg-gaming-card px-2 py-1 rounded text-xs font-bold text-gray-500 border border-white/5">
              #{String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
