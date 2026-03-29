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
  {
    name: "Team Phantom",
    logo: "/default-logo.png",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Vortex",
    logo: "/default-logo.png",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Inferno",
    logo: "/default-logo.png",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
];

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        TEAMS
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div
            key={index}
            className="relative bg-[url('/team-bg.jpg')] bg-cover bg-center p-6 rounded-xl border border-red-500 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer overflow-hidden"
          >

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_rgba(255,0,0,0.3)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

            <div className="relative z-10">
              <img
                src={team.logo}
                alt="team logo"
                className="w-16 h-16 mx-auto mb-4 rounded-full border border-red-500"
              />

              <h2 className="text-2xl font-bold mb-4 text-red-400">
                {team.name}
              </h2>

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
