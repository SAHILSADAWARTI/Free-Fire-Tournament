"use client";
import { useEffect, useState } from "react";

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


  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("teams");
    if (saved) {
      setTeams(JSON.parse(saved));
    }
  }, []);

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

    </main>
  );
}
