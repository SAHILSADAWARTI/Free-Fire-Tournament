import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/home.jpg')] bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-4 relative">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      {/* content */}
      <div className="relative z-10">
        
        <div className="flex flex-col items-center -mt-19">
        
          <h1 className="text-4xl md:text-3xl font-bold text-white text-center mb-4 drop-shadow-[0_0_10px_white] relative -top-12">
            PRAGYOTSAV PRESENTS
          </h1>
        
          <h2
            className="text-2xl md:text-5xl font-bold text-center flicker drop-shadow-[0_0_10px_red] relative -top-9"
            data-text="FREE FIRE TOURNAMENT"
          >
            FREE FIRE TOURNAMENT
          </h2>
        </div>
        <div className="bg-red-600 px-4 py-2 rounded-full text-white font-bold animate-pulse shadow-[0_0_20px_red]">
          🔴 LIVE MATCH Ongoing
        </div>

        <div className="flex flex-col md:flex flex-col md:flex-row gap-4 mt-6 items-center items-center">

          <Link href="/leaderboard" className="border border-red-500 px-6 py-3 rounded-lg hover:bg-red-500 shadow-lg shadow-red-500/50">
            Leaderboard
          </Link>

          <Link href="/teams" className="border border-red-500 px-6 py-3 rounded-lg hover:bg-red-500 shadow-lg shadow-red-500/50">
            Teams
          </Link>

          <Link href="/results" className="border border-red-500 px-6 py-3 rounded-lg hover:bg-red-500 shadow-lg shadow-red-500/50">
            Results
          </Link>

        </div>

      </div>

    </main>
  );
}
