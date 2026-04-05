"use client";
import { useEffect, useState } from "react";

const results = [
  {
    round: "Round 1",
    mvp: "Player1",
    data: [
      { teamIndex: 0, position: 1, points: 12 },
      { teamIndex: 1, position: 2, points: 9 },
      { teamIndex: 2, position: 3, points: 8 },
    ],
  },
];

export default function ResultsPage() {


  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("teams");
    if (saved) {
      setTeams(JSON.parse(saved));
    }
  }, []);

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
  {results.map((round, index) => (
    <div key={index}>

      <h2 className="text-2xl font-bold mb-4 text-red-400">
        {round.round}
      </h2>

      <p className="mb-4 text-yellow-400 text-center">
        🏆 MVP: {round.mvp}
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
            {[...round.data]
              .sort((a, b) => a.position - b.position)
              .map((team, i) => (
               <tr className={`border-t border-gray-700 ${
                 team.position === 1 ? "bg-yellow-500 text-black" : ""
               }`}>

                  <td className="p-2">
                    {team.position === 1
                    ? "🥇"
                    : team.position === 2
                    ? "🥈"
                    : team.position === 3
                    ? "🥉"
                    : team.position}
                 </td>

                  <td className="p-2 flex items-center justify-center gap-2">

                    <img
                      src={teams[team.teamIndex]?.logo || "/default-logo.png"}
                      alt="logo"
                      className="w-6 h-6 rounded-full border border-red-500"
                    />

                    <span>
                      {teams[team.teamIndex]?.name || "Team"}
                    </span>

                  </td>

                  <td className="p-2">
                    {team.points}
                  </td>

                </tr>
              ))}
          </tbody>

        </table>
      </div>

    </div>
  ))}
</div>

    </main>
  );
}
