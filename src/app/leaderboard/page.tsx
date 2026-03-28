const teams = [
  { name: "Team Alpha", m1: 15, m2: 10, m3: 12 },
  { name: "Team Blaze", m1: 12, m2: 14, m3: 9 },
  { name: "Team Shadow", m1: 10, m2: 8, m3: 11 },
  { name: "Team Phantom", m1: 8, m2: 12, m3: 10 },
  { name: "Team Vortex", m1: 6, m2: 9, m3: 7 },
  { name: "Team Inferno", m1: 5, m2: 6, m3: 8 },
];

const leaderboard = teams
  .map((team) => ({
    ...team,
    total: team.m1 + team.m2 + team.m3,
  }))
  .sort((a, b) => b.total - a.total);

export default function Leaderboard() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        LEADERBOARD
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-center border border-gray-700">
          
          <thead className="bg-red-600">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Team</th>
              <th className="p-3">Match 1</th>
              <th className="p-3">Match 2</th>
              <th className="p-3">Match 3</th>
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
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{team.name}</td>
                <td className="p-3">{team.m1}</td>
                <td className="p-3">{team.m2}</td>
                <td className="p-3">{team.m3}</td>
                <td className="p-3">{team.total}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </main>
  );
}
