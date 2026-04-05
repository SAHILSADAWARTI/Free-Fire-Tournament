"use client";
import { useEffect, useState } from "react";

export default function Leaderboard() {

  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const saved = localStorage.getItem("teams");
      if (saved) {
        setTeams(JSON.parse(saved));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const leaderboard = teams
    .map((team: any) => ({
      ...team,
      total: team.m1 + team.m2 + team.m3 + team.kills,
    }))
    .filter((team: any) =>
      team.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a: any, b: any) => b.total - a.total);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <h1 className="text-2xl md:text-4xl font-bold text-center text-red-500 mb-6">
        LEADERBOARD
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-black border border-red-500 text-white"
        />
      </div>

    </main>
  );
}
