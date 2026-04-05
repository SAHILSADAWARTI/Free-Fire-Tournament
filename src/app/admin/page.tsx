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
  const [teams, setTeams] = useState([
    { name: "Team Alpha", logo: "/default-logo.png", m1: 0, m2: 0, m3: 0, kills: 0 },
    { name: "Team Blaze", logo: "/default-logo.png", m1: 0, m2: 0, m3: 0, kills: 0 },
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("teams");
    if (saved) {
      setTeams(JSON.parse(saved));
    }
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuth(true);
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

      <h1 className="text-3xl text-red-500 font-bold text-center mb-8">
        ADMIN PANEL
      </h1>
      
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

            <h2 className="text-xl mb-3">{team.name}</h2>

            <div className="grid grid-cols-2 gap-4">

              <input placeholder="M1" onChange={(e) => handleChange(index, "m1", e.target.value)} className="p-2 bg-black border border-red-500" />
              <input placeholder="M2" onChange={(e) => handleChange(index, "m2", e.target.value)} className="p-2 bg-black border border-red-500" />
              <input placeholder="M3" onChange={(e) => handleChange(index, "m3", e.target.value)} className="p-2 bg-black border border-red-500" />
              <input placeholder="Kills" onChange={(e) => handleChange(index, "kills", e.target.value)} className="p-2 bg-black border border-red-500" />

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}
