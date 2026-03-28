import Link from 'next/link';
import { getData } from '@/lib/dataUtils';
import { Trophy, Crosshair, Clock } from 'lucide-react';

export default function Home() {
  const data = getData();
  const { tournament } = data;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-16 animate-in fade-in duration-1000">
      
      {/* Hero Section */}
      <section className="text-center space-y-6 flex flex-col items-center max-w-4xl relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gaming-neonRed/20 blur-[100px] rounded-full z-[-1]" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gaming-neonOrange/50 bg-gaming-neonOrange/10 text-gaming-neonOrange text-sm font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(255,85,0,0.3)] mb-4">
          <span className="w-2 h-2 rounded-full bg-gaming-neonOrange animate-pulse" />
          {tournament.status}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase">
          <span className="bg-glow-gradient bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,85,0,0.6)]">
            {tournament.name}
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-400 uppercase tracking-[0.2em] font-light">
          {tournament.tagline}
        </p>

        <div className="pt-8 flex gap-4 justify-center">
          <Link href="/leaderboard" className="px-8 py-4 bg-gaming-neonOrange hover:bg-gaming-neonRed text-white rounded-md font-bold text-lg uppercase tracking-wider transition-all duration-300 shadow-neon-hover transform hover:scale-105 active:scale-95">
            View Leaderboard
          </Link>
          <Link href="/teams" className="px-8 py-4 bg-transparent border border-gaming-neonOrange text-gaming-neonOrange hover:bg-gaming-neonOrange/10 rounded-md font-bold text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95">
            Participating Teams
          </Link>
        </div>
      </section>

      {/* MVP Section */}
      <section className="w-full max-w-3xl mt-20">
        <div className="bg-gaming-surface border border-gaming-neonOrange/30 rounded-xl p-8 relative overflow-hidden group hover:border-gaming-neonOrange/80 transition-all duration-500 shadow-neon">
          <div className="absolute -inset-1 bg-gradient-to-r from-gaming-neonOrange to-gaming-neonRed opacity-20 group-hover:opacity-40 blur transition duration-500" />
          <div className="relative flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center justify-center md:justify-start gap-2">
                <Trophy className="text-gaming-gold w-6 h-6" /> Tournament MVP
              </h2>
              <h3 className="text-4xl font-black text-white capitalize bg-gradient-to-r from-gaming-gold to-white bg-clip-text text-transparent">{tournament.mvp.name}</h3>
              <p className="text-gaming-neonOrange uppercase tracking-widest mt-1 text-sm font-semibold">{tournament.mvp.team}</p>
            </div>
            
            <div className="flex gap-6 items-center">
              <div className="flex flex-col items-center bg-gaming-card p-4 rounded-lg border border-white/5">
                <Crosshair className="text-gaming-neonRed mb-2 w-8 h-8" />
                <span className="text-2xl font-bold text-white">{tournament.mvp.kills}</span>
                <span className="text-xs text-gray-400 uppercase">Kills</span>
              </div>
              <div className="flex flex-col items-center bg-gaming-card p-4 rounded-lg border border-white/5">
                <Crosshair className="text-gaming-neonOrange mb-2 w-8 h-8 opacity-70" />
                <span className="text-2xl font-bold text-white">{tournament.mvp.headshots}</span>
                <span className="text-xs text-gray-400 uppercase">Headshots</span>
              </div>
              <div className="flex flex-col items-center bg-gaming-card p-4 rounded-lg border border-white/5">
                <Clock className="text-gray-300 mb-2 w-8 h-8" />
                <span className="text-2xl font-bold text-white">{tournament.mvp.survivalTime}</span>
                <span className="text-xs text-gray-400 uppercase">Survival</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
