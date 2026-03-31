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
  {
    round: "Round 2",
    mvp: "Player1",
    data: [
      { team: "Team Alpha", position: 2, points: 9 },
      { team: "Team Blaze", position: 1, points: 12 },
      { team: "Team Shadow", position: 4, points: 7 },
    ],
  },
  {
    round: "Round 3",
    mvp: "Player1",
    data: [
      { team: "Team Alpha", position: 3, points: 8 },
      { team: "Team Blaze", position: 2, points: 9 },
      { team: "Team Shadow", position: 1, points: 12 },
    ],
  },
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[url('/results.jpg')] bg-cover bg-center text-white px-6 py-10">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        MATCH RESULTS
      </h1>

      <div className="space-y-10">
        {results.map((round, index) => (
          <div key={index}>

            <h2 className="text-2xl font-bold mb-4 text-red-400">
              {round.round}
            </h2>
            <p className="mb-4 text-yellow-400 font-semibold text-center text-lg drop-shadow-[0_0_10px_gold]">
              🏆 MVP: {round.mvp}
            </p>

            <table className="w-full text-center border border-gray-700">

              <thead className="bg-red-600">
                <tr>
                  <th className="p-2 md:p-3 text-xs md:text-base">Position</th>
                  <th className="p-2 md:p-3 text-xs md:text-base">Team</th>
                  <th className="p-2 md:p-3 text-xs md:text-base">Points</th>
                </tr>
              </thead>

              <tbody>
                {[...round.data]
                  .sort((a, b) => a.position - b.position)
                  .map((team: any, i) => (
                    <tr
                      key={i}
                      className={`border-t border-gray-700 ${
                        team.position === 1
                          ? "bg-yellow-500 text-black font-bold shadow-[0_0_20px_gold]"
                          : team.position === 2
                          ? "bg-gray-300 text-black"
                          : team.position === 3
                          ? "bg-orange-400 text-black"
                          : ""
                      }`}
                    >
                      <td className="p-2 md:p-3 text-xs md:text-base text-lg font-bold">
                        {team.position === 1
                          ? "🥇"
                          : team.position === 2
                          ? "🥈"
                          : team.position === 3
                          ? "🥉"
                          : team.position}
                      </td>
                      <td className="p-2 md:p-3 text-xs md:text-base flex items-center justify-center gap-2">

                        <img
                          src={team.logo}
                          alt="logo"
                          className="w-8 h-8 rounded-full border border-red-500"
                        />

                        <span>{team.team}</span>

                        </td>
                      <td className="p-2 md:p-3 text-xs md:text-base">{team.points}</td>
                    </tr>
                  ))}
              </tbody>

            </table>

          </div>
        ))}
      </div>

    </main>
  );
}
