const teams = [
  {
    name: "Team Alpha",
    logo: "/default-logo.png",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Blaze",
    logo: "/default-logo.png",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Shadow",
    logo: "/default-logo.png",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
];

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-[url('/teams.jpg')] bg-cover bg-center text-white px-6 py-10">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        TEAMS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:p-6">
        {teams.map((team, index) => (
          <div
            key={index}
            className="relative bg-[url('/team-bg.jpg')] ... transition-all duration-300 hover:scale-105"
          >

            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-30"></div>

            <div className="relative z-10 text-center">

              <img
                src={team.logo}
                alt="logo"
                className="w-16 h-16 mx-auto mb-4 rounded-full border border-red-500"
              />

              <h2 className="text-2xl font-bold text-red-400">
                {team.name}
              </h2>

              <p className="text-xs text-gray-400 mb-2">Squad</p>

              <ul className="space-y-2">
                {team.players.map((player, i) => (
                  <li key={i} className="text-gray-300">
                    🎮 {player}
                  </li>
                ))}
              </ul>

            </div>

          </div>
        ))}
      </div>

    </main>
  );
}
