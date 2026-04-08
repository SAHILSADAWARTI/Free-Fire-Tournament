
"use client";
import { useState, useEffect } from "react";
type Team = {
  name: string;
  logo?: string;
  m1: number;
  m2: number;
  m3: number;
  kills: number;
};
export default function AdminPage() {

const [isAuth, setIsAuth] = useState(false);
const [password, setPassword] = useState("");
const handleLogin = () => {
  if (password === "Sahoo") {
    setIsAuth(true);
  } else {
    alert("Wrong Password");
  }
};
  const [teams, setTeams] = useState<Team[]>([
    { name: "Team Alpha", logo: "/default-logo.png", m1: 0, m2: 0, m3: 0, kills: 0 },
    { name: "Team Blaze", logo: "/default-logo.png", m1: 0, m2: 0, m3: 0, kills: 0 },
  ]);
  
  const [rounds, setRounds] = useState<any[]>([]);
  
  useEffect(() => {
  const saved = localStorage.getItem("teams");
  if (saved) {
    const parsed = JSON.parse(saved).map((team: any) => ({
      ...team,
      logo: team.logo || "/default-logo.png",
    }));
    setTeams(parsed);
  }

  const savedRounds = localStorage.getItem("rounds");
  if (savedRounds) {
    setRounds(JSON.parse(savedRounds));
  }

}, []);

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...teams];

    if (field === "m1") updated[index].m1 = Number(value);
    if (field === "m2") updated[index].m2 = Number(value);
    if (field === "m3") updated[index].m3 = Number(value);
    if (field === "kills") updated[index].kills = Number(value);

    setTeams(updated);
    localStorage.setItem("teams", JSON.stringify(updated));
  };

  if (!isAuth) {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="border border-red-500 p-6 rounded-lg text-center">

        <h1 className="text-xl mb-4">Admin Login</h1>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 bg-black border border-red-500"
        />

        <br />

        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-red-600 rounded"
        >
          Login
        </button>

      </div>
    </main>
  );
}
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

     <h1 className="...">ADMIN PANEL</h1>

     <button
       onClick={() => {
         const newRound = {
           round: `Round ${rounds.length + 1}`,
           data: teams.map((_, i) => ({
            teamIndex: i,
            position: 0,
            points: 0,
          })),
        };

        const updatedRounds = [...rounds, newRound];
        setRounds(updatedRounds);
        localStorage.setItem("rounds", JSON.stringify(updatedRounds));
      }}
      className="px-4 py-2 bg-blue-600 rounded mb-4"
    >
      ➕ Add Round
    </button>
      
      <div className="flex justify-center mb-6">
  <button
    onClick={() => {
      const newTeam: Team = {
        name: `Team ${teams.length + 1}`,
        logo: "/default-logo.png", // ✅ IMPORTANT
        m1: 0,
        m2: 0,
        m3: 0,
        kills: 0,
      };
      const updated = [...teams, newTeam];
      setTeams(updated);
      localStorage.setItem("teams", JSON.stringify(updated));
    }}
    className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
  >
    ➕ Add Team
  </button>
</div>
      <div className="space-y-6">

        {teams.map((team, index) => (
          <div key={index} className="border border-red-500 p-4 rounded-lg">
            <button
              onClick={() => {
                const updated = teams.filter((_, i) => i !== index);
                setTeams(updated);
                localStorage.setItem("teams", JSON.stringify(updated));
              }}
              className="px-3 py-1 bg-red-600 rounded mt-2"
            >
              ❌ Delete Team
            </button>
            <input
              value={team.name}
              onChange={(e) => {
                const updated = [...teams];
                updated[index].name = e.target.value;
                setTeams(updated);
                localStorage.setItem("teams", JSON.stringify(updated));
              }}
              className="p-2 bg-black border border-red-500 w-full text-center mb-2"
            />
          
            <div className="grid grid-cols-2 gap-4">

              <input placeholder="M1" onChange={(e) => handleChange(index, "m1", e.target.value)} className="p-2 bg-black border border-red-500" />
              <input placeholder="M2" onChange={(e) => handleChange(index, "m2", e.target.value)} className="p-2 bg-black border border-red-500" />
              <input placeholder="M3" onChange={(e) => handleChange(index, "m3", e.target.value)} className="p-2 bg-black border border-red-500" />
              <input placeholder="Kills" onChange={(e) => handleChange(index, "kills", e.target.value)} className="p-2 bg-black border border-red-500" />

            </div>
           {/* 🔥 ROUND EDIT SECTION */}
            {rounds.map((round, rIndex) => (
              <div key={rIndex} className="border border-blue-500 p-4 rounded mb-6">
                 <h2 className="...">{round.round}</h2>

                  <button
                    onClick={() => {
                      const updated = rounds.filter((_, i) => i !== rIndex);
                      setRounds(updated);
                      localStorage.setItem("rounds", JSON.stringify(updated));
                    }}
                    className="px-3 py-1 bg-red-600 rounded mb-3"
                  >
                    ❌ Delete Round
                  </button>
                <h2 className="text-xl mb-3 text-blue-400">{round.round}</h2>
            
               {round.data.map((team: any, tIndex: number) => (
                  <div key={tIndex} className="flex gap-2 mb-2 items-center">
            
                    {/* TEAM NAME */}
                    <span className="w-32">
                      {teams[team.teamIndex]?.name}
                    </span>
            
                    {/* POSITION INPUT */}
                    <input
                      type="number"
                      placeholder="Pos"
                      value={team.position}
                      onChange={(e) => {
                        const updated = [...rounds];
                        updated[rIndex].data[tIndex].position = Number(e.target.value);
                        setRounds(updated);
                        localStorage.setItem("rounds", JSON.stringify(updated));
                      }}
                      className="p-1 bg-black border border-blue-500 w-16"
                    />
            
                    {/* POINTS INPUT */}
                    <input
                      type="number"
                      placeholder="Pts"
                      value={team.points}
                      onChange={(e) => {
                        const updated = [...rounds];
                        updated[rIndex].data[tIndex].points = Number(e.target.value);
                        setRounds(updated);
                        localStorage.setItem("rounds", JSON.stringify(updated));
                      }}
                      className="p-1 bg-black border border-blue-500 w-16"
                    />
            
                  </div>
                ))}
            
              </div>
            ))}
          </div>
        ))}

      </div>

    </main>
  );
}
