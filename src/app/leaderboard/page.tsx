import { getLeaderboard } from '@/lib/dataUtils';
import { Trophy, Medal } from 'lucide-react';

export default function LeaderboardPage() {
  const leaderboard = getLeaderboard();

  // Helper to determine row styling for top 3
  const getRowClass = (index: number) => {
    switch (index) {
      case 0: return "bg-gaming-gold/10 border-l-[6px] border-gaming-gold hover:bg-gaming-gold/20";
      case 1: return "bg-gaming-silver/10 border-l-[6px] border-gaming-silver hover:bg-gaming-silver/20";
      case 2: return "bg-gaming-bronze/10 border-l-[6px] border-gaming-bronze hover:bg-gaming-bronze/20";
      default: return "bg-gaming-surface border-l-[6px] border-transparent hover:bg-gaming-card hover:border-gaming-neonOrange/50";
    }
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="w-6 h-6 text-gaming-gold" />;
      case 1: return <Medal className="w-6 h-6 text-gaming-silver" />;
      case 2: return <Medal className="w-6 h-6 text-gaming-bronze" />;
      default: return <span className="text-gray-500 font-bold w-6 text-center">{index + 1}</span>;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom py-10 w-full duration-700 max-w-5xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-glow-gradient drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">
          Global Leaderboard
        </h1>
        <p className="text-gray-400 uppercase tracking-widest mt-4">Top teams dominate the arena</p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-gaming-neonRed/20 blur-[100px] -z-10 rounded-full" />
      </div>

      <div className="w-full overflow-x-auto rounded-xl border border-white/5 shadow-neon">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gaming-card text-gray-400 uppercase tracking-wider text-sm border-b border-white/10">
              <th className="p-4 pl-6 w-20">Rank</th>
              <th className="p-4 font-bold">Team Name</th>
              <th className="p-4 text-center">Match 1</th>
              <th className="p-4 text-center">Match 2</th>
              <th className="p-4 text-center">Match 3</th>
              <th className="p-4 text-center text-gaming-neonOrange">Total Kills</th>
              <th className="p-4 text-center text-gaming-neonRed font-black">Total Pts</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => {
              const m1 = entry.matches.find(m => m.round === 1)?.points || '-';
              const m2 = entry.matches.find(m => m.round === 2)?.points || '-';
              const m3 = entry.matches.find(m => m.round === 3)?.points || '-';

              return (
                <tr 
                  key={entry.team.id} 
                  className={`border-b border-white/5 transition-all duration-300 ${getRowClass(index)}`}
                >
                  <td className="p-4 pl-6 flex items-center justify-center">
                    {getRankIcon(index)}
                  </td>
                  <td className="p-4 font-bold text-lg uppercase tracking-wider text-white">
                    {entry.team.name}
                  </td>
                  <td className="p-4 text-center text-gray-300 font-mono">{m1}</td>
                  <td className="p-4 text-center text-gray-300 font-mono">{m2}</td>
                  <td className="p-4 text-center text-gray-300 font-mono">{m3}</td>
                  <td className="p-4 text-center text-gaming-neonOrange font-mono font-bold">{entry.totalKills}</td>
                  <td className="p-4 text-center text-gaming-neonRed text-xl font-black">{entry.totalPoints}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
