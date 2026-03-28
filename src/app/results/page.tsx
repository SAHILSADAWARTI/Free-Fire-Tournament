import { getData } from '@/lib/dataUtils';
import { Target, Flag } from 'lucide-react';

export default function ResultsPage() {
  const { matches, teams } = getData();

  const getTeamName = (teamId: string) => {
    return teams.find(t => t.id === teamId)?.name || 'Unknown Team';
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom py-10 w-full duration-700 max-w-5xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-glow-gradient drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">
          Match Results
        </h1>
        <p className="text-gray-400 uppercase tracking-widest mt-4">Detailed round breakdown</p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-gaming-neonRed/20 blur-[100px] -z-10 rounded-full" />
      </div>

      <div className="w-full space-y-12">
        {matches.map((match) => (
          <div key={match.round} className="bg-gaming-surface border border-white/5 rounded-2xl overflow-hidden shadow-lg">
            
            <div className="bg-gaming-card border-b border-white/10 px-6 py-4 flex items-center justify-between group">
              <h2 className="text-2xl font-bold uppercase tracking-wider text-white flex items-center">
                <Target className="w-6 h-6 mr-3 text-gaming-neonOrange" />
                Round {match.round}
              </h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {match.results
                  .sort((a, b) => a.placement - b.placement)
                  .map((result, idx) => (
                  <div 
                    key={result.teamId}
                    className="flex flex-col bg-gaming-card/50 border border-white/5 rounded-xl p-4 hover:border-gaming-neonOrange/30 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xl font-black ${
                        result.placement === 1 ? 'text-gaming-gold' :
                        result.placement === 2 ? 'text-gaming-silver' :
                        result.placement === 3 ? 'text-gaming-bronze' :
                        'text-gray-400'
                      }`}>
                         #{result.placement}
                      </span>
                      <span className="flex items-center text-sm font-bold text-gaming-neonRed bg-gaming-neonRed/10 px-2 py-1 rounded">
                         <Flag className="w-4 h-4 mr-1" />
                         {result.kills} KILLS
                      </span>
                    </div>
                    <div className="text-lg font-bold text-white tracking-wide uppercase">
                      {getTeamName(result.teamId)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
