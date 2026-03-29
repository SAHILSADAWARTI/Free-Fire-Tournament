"use client";
import { useState } from "react";

export default function AdminPage() {

  const [teams, setTeams] = useState([
    { name: "Team Alpha", m1: 0, m2: 0, m3: 0, kills: 0 },
    { name: "Team Blaze", m1: 0, m2: 0, m3: 0, kills: 0 },
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...teams];
    updated[index][field] = Number(value);
    setTeams(updated);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      <h1 className="text-3xl text-red-500 font-bold text-center mb-8">
        ADMIN PANEL
      </h1>

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
