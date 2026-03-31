"use client";
import { useEffect, useState } from "react";

export default function Leaderboard() {

  const [teams, setTeams] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  // 🔥 LOAD FROM LOCAL STORAGE
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

      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
        LEADERBOARD
      </h1>

      {/* 🔍 SEARCH */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-black border border-red-500 text-white"
        />
      </div>

      <div className="overflow-x-auto w-full">
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
              <tr key={index} className="border-t border-gray-700">

                <td className="p-3">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
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
