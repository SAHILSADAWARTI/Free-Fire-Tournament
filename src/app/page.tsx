import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-4 relative">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      {/* content */}
      <div className="relative z-10">

        <h2 className="text-lg text-white mb-2 tracking-widest">
          PRAGYOTSAV PRESENTS
        </h2>

        <h1 className="text-5xl font-bold text-red-500 mb-4 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
          FREE FIRE TOURNAMENT
        </h1>

        <div className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full shadow-lg shadow-red-500/50">
          🔴 LIVE NOW: Round 2 Ongoing
        </div>

        <div className="flex gap-4 mt-6 flex-wrap justify-center">

          <Link href="/leaderboard" className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 shadow-lg shadow-red-500/50">
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
