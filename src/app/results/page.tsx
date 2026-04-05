const results = [
  {
    round: "Round 1",
    mvp: "Player1",
    data: [
      { team: "Team Alpha", position: 1, points: 12 },
      { team: "Team Blaze", position: 2, points: 9 },
      { team: "Team Shadow", position: 3, points: 8 },
    ],
  },
];

export default function ResultsPage() {
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

            {/* 🔥 TABLE START */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-center border border-gray-700">

                <thead className="bg-red-600">
                  <tr>
                    <th className="p-2">Position</th>
                    <th className="p-2">Team</th>
                    <th className="p-2">Points</th>
                  </tr>
                </thead>

                {/* ✅ THIS IS WHERE TBODY GOES */}
                <tbody>
                  {[...round.data]
                    .sort((a, b) => a.position - b.position)
                    .map((team, i) => (
                      <tr key={i} className="border-t border-gray-700">

                        <td className="p-2">
                          {team.position === 1
                            ? "🥇"
                            : team.position === 2
                            ? "🥈"
                            : team.position === 3
                            ? "🥉"
                            : team.position}
                        </td>

                        <td className="p-2">{team.team}</td>
                        <td className="p-2">{team.points}</td>

                      </tr>
                    ))}
                </tbody>

              </table>
            </div>
            {/* 🔥 TABLE END */}

          </div>
        ))}
      </div>

    </main>
  );
}
