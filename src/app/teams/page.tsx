"use client";

const teams = [
  {
    name: "White Walker",
    logo: "/default-logo.png",
    players: ["Soumya", "Pratham", "Atharva", "Vijay"],
  },
  {
    name: "The Royals",
    logo: "/team-royals.jpeg",
    players: ["Vansh", "Pranay", "Omkar", "Tushar"],
  },
  {
    name: "JAGERMIESTER",
    logo: "/default-logo.png",
    players: ["Nayankumar", "Kaif", "Anup", "Pranjal"],
  },
  {
    name: "LOL Squad",
    logo: "/team-lol.jpeg",
    players: ["ADI", "PAIN", "ASHWATTHAMA", "GAGAN"],
  },
  {
    name: "Team GRIMS",
    logo: "/team-grims.png",
    players: ["Aditya", "Ayush", "Jeetu", "Parth"],
  },
  {
    name: "Team DEFAULTER",
    logo: "/default-logo.png",
    players: ["Uddeshya", "Sumit", "Surya", "Soubhagya"],
  },
  {
    name: "CSE C",
    logo: "/default-logo.png",
    players: ["Sujal", "Saksham", "Samir", "Vedant"],
  },
  {
    name: "Team ELITE",
    logo: "/default-logo.png",
    players: ["Kshitij", "Krishna", "Pratik", "Nikharva"],
  },
  {
    name: "Bloodline X",
    logo: "/team-bloodline.png",
    players: ["Aarush", "Kshitij", "OM", "Shivam"],
  },
  {
    name: "Team WANTED",
    logo: "/default-logo.png",
    players: ["Yash", "Aryan", "Amol", "Atharva"],
  },
  {
    name: "Raising Stars",
    logo: "/default-logo.png",
    players: ["Krish", "Shourya", "Dishant", "Shivanshu"],
  },
  {
    name: "ETC DIGGERS",
    logo: "/team-diggers.jpg",
    players: ["Ved", "Rushikesh", "Shreyas", "Rudra"],
  },
  {
    name: "MEOW",
    logo: "/team-meow.jpg",
    players: ["Kshitij", "Dharmik"],
  },
  {
    name: "FF HIDGRE",
    logo: "/default-logo.png",
    players: ["Tanishk", "Stavan", "Raj", "Adarsh"],
  },
  {
    name: "Team Strikers",
    logo: "/default-logo.png",
    players: ["URAHARA", "BEAST", "NGP GAURAV", "NGP SEXY 007"],
  },
  {
    name: "Team MASUM",
    logo: "/default-logo.png",
    players: ["Masum", "Khushwant", "Nalin", "Shivam"],
  },
  {
    name: "Team ONEPIECE",
    logo: "/team-onepiece.jpg",
    players: ["Om", "Shourya", "Tilak", "Shantanu"],
  },
  {
    name: "Team FEARLESS",
    logo: "/default-logo.png",
    players: ["Rajveer", "Shantanu", "Piyush", "Harshal"],
  },
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

      {/* 🔥 GROUP A */}
      <h2 className="text-2xl text-red-500 mb-4">Group A</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {teams
          .slice(0, Math.ceil(teams.length / 2))
          .map((team, index) => (
            <div key={index} className="border border-red-500 p-4 rounded text-center">

              <img
                src={team.logo}
                alt="logo"
                className="w-16 h-16 mx-auto mb-4 rounded-full border border-red-500"
              />

              <h2 className="text-xl font-bold text-red-400">
                {team.name}
              </h2>

              <ul className="mt-2 text-sm text-gray-300">
                {team.players.map((player, i) => (
                  <li key={i}>🎮 {player}</li>
                ))}
              </ul>

            </div>
          ))}
      </div>

      {/* 🔥 GROUP B */}
      <h2 className="text-2xl text-blue-500 mb-4">Group B</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {teams
          .slice(Math.ceil(teams.length / 2))
          .map((team, index) => (
            <div key={index} className="border border-blue-500 p-4 rounded text-center">

              <img
                src={team.logo}
                alt="logo"
                className="w-16 h-16 mx-auto mb-4 rounded-full border border-blue-500"
              />

              <h2 className="text-xl font-bold text-blue-400">
                {team.name}
              </h2>

              <ul className="mt-2 text-sm text-gray-300">
                {team.players.map((player, i) => (
                  <li key={i}>🎮 {player}</li>
                ))}
              </ul>

            </div>
          ))}
      </div>

    </main>
  );
}
