"use client";
import { useEffect, useState } from "react";
  
export default function Leaderboard() {
  
  const [teams, setTeams] = useState<any[]>([]);
  
  useEffect(() => {
    const saved = localStorage.getItem("teams");
    if (saved) {
      setTeams(JSON.parse(saved));
    }
  }, []);
  
  const leaderboard = teams
  .map((team) => ({
    ...team,
    total: team.m1 + team.m2 + team.m3 + team.kills,
  }))
  .filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => b.total - a.total);
  
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <h1 className="text-4xl md:text-4xl font-bold text-center text-red-500 mb-10">
        LEADERBOARD
      </h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => location.reload()}
          className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
        >
          🔄 Refresh Scores
        </button>
      </div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-black border border-red-500 text-white outline-none w-64 focus:shadow-[0_0_10px_red]"
        />
      </div>
      {leaderboard.length === 0 && (
        <p className="text-center text-gray-400 mt-4">
          No team found
        </p>
      )}

      <div className="overflow-x-auto w-full">
        <div className="flex justify-center items-end gap-6 mb-10">

  {/* 2nd Place */}
  <div className="bg-gray-300 text-black p-6 rounded-lg text-center w-32">
    <h2 className="text-xl font-bold">🥈</h2>
    <p>{leaderboard[1]?.name}</p>
  </div>

  {/* 1st Place */}
  <div className="bg-yellow-500 text-black p-8 rounded-lg text-center w-36 scale-110">
    <h2 className="text-2xl font-bold">🥇</h2>
    <p>{leaderboard[0]?.name}</p>
  </div>

  {/* 3rd Place */}
  <div className="bg-orange-400 text-black p-6 rounded-lg text-center w-32">
    <h2 className="text-xl font-bold">🥉</h2>
    <p>{leaderboard[2]?.name}</p>
  </div>

</div>
        <div className="text-center mb-10">
  <h2 className="text-2xl font-bold text-red-500 mb-2">
    🔥 MVP PLAYER
  </h2>
  <p className="text-lg">
    PlayerX (Team Alpha) - 15 Kills
  </p>
</div>
        <table className="w-full text-center border border-gray-700">
          
          <thead className="bg-red-600">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Team</th>
              <th className="p-3">Match 1</th>
              <th className="p-3">Match 2</th>
              <th className="p-3">Match 3</th>
              <th className="p-3">Kills</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((team, index) => (
              <tr
                key={index}
                className={`border-t border-gray-700 ${
                  index === 0
                    ? "bg-yellow-500 text-black font-bold"
                    : index === 1
                    ? "bg-gray-300 text-black"
                    : index === 2
                    ? "bg-orange-400 text-black"
                    : ""
                }`}
              >
                <td className="p-3 text-xl font-bold">
                  <span className={`
                    ${index === 0 ? "text-yellow-400 drop-shadow-[0_0_10px_gold]" : ""}
                    ${index === 1 ? "text-gray-300" : ""}
                    ${index === 2 ? "text-orange-400" : ""}
                  `}>
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                  </span>
                </td>
                <td className="p-3">{team.name}</td>
                <td className="p-3">{team.m1}</td>
                <td className="p-3">{team.m2}</td>
                <td className="p-3">{team.m3}</td>
                <td className="p-3">{team.kills}</td>
                <td className="p-3">{team.total}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </main>
  );
}
