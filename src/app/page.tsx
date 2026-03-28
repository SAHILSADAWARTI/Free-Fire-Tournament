export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-5xl font-bold text-red-500 mb-4">
        FREE FIRE TOURNAMENT
      </h1>

      <p className="text-xl mb-6">
        Survive. Dominate. Conquer.
      </p>

      <div className="flex gap-4">
        <a href="/leaderboard" className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700">
          View Leaderboard
        </a>

        <a href="/teams" className="border border-red-500 px-6 py-3 rounded-lg hover:bg-red-500">
          View Teams
        </a>
      </div>

    </main>
  );
}
