const teams = [
  {
    name: "Team Alpha",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Blaze",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Shadow",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Phantom",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Vortex",
    players: ["Player1", "Player2", "Player3", "Player4"],
  },
  {
    name: "Team Inferno",
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
            <div className="relative z-10">
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
        ))}
      </div>

    </main>
  );
}
