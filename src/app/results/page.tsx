"use client";
import { useEffect, useState } from "react";

type Team = {
  name: string;
  logo?: string;
  m1?: number;
  m2?: number;
  m3?: number;
};

export default function ResultsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      try {
        const saved = localStorage.getItem("teams");
        if (saved) {
          setTeams(JSON.parse(saved));
        }
      } catch (err) {
        console.error("Error reading localStorage:", err);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // 🔥 prevents hydration error

  const rounds = [
    { round: "Round 1", key: "m1" },
    { round: "Round 2", key: "m2" },
    { round: "Round 3", key: "m3" },
  ];

  return (
    <main
      className="min-h-screen text-white px-6 py-10"
      style={{
        backgroundImage: "url('/results.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        MATCH RESULTS
      </h1>

      <div className="space-y-10">
        {rounds.map((round, rIndex) => {
          const sorted = [...teams]
            .map((team) => ({
              name: team.name,
              logo: team.logo,
              points: team[round.key as RoundKey] ?? 0,
            }))
            .sort((a, b) => b.points - a.points);
          return (
            <div key={rIndex} className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-red-400">
                {round.round}
              </h2>

              <p className="mb-4 text-yellow-400 text-center animate-pulse">
                🏆 MVP: {sorted.length > 0 ? sorted[0].name : "TBD"}
              </p>

              <div className="overflow-x-auto w-full">
                <table className="w-full text-center border border-gray-700">
                  <thead className="bg-red-600">
                    <tr>
                      <th className="p-2">Position</th>
                      <th className="p-2">Team</th>
                      <th className="p-2">Points</th>
                    </tr>
                  </thead>

                  <tbody>
                    {sorted.map((team, index) => (
                      <tr key={index} className="border-t border-gray-700">
                        <td className="p-2">
                          {index === 0
                            ? "🥇"
                            : index === 1
                            ? "🥈"
                            : index === 2
                            ? "🥉"
                            : index + 1}
                        </td>

                        <td className="p-2 flex items-center justify-center gap-2">
                          <img
                            src={team.logo || "/default-logo.png"}
                            className="w-6 h-6 rounded-full"
                            alt="team"
                          />
                          {team.name}
                        </td>

                        <td className="p-2">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
