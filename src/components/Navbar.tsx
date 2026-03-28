"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-black text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">FREE FIRE TOURNAMENT</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
  <div className="absolute top-16 right-4 bg-black border border-red-500 rounded-lg p-4 w-40 shadow-lg shadow-red-500/30">

    <div className="flex flex-col gap-3 text-center">
      <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
      <Link href="/teams" onClick={() => setIsOpen(false)}>Teams</Link>
      <Link href="/leaderboard" onClick={() => setIsOpen(false)}>Leaderboard</Link>
      <Link href="/results" onClick={() => setIsOpen(false)}>Results</Link>
    </div>

  </div>
)}
    </nav>
  );
}
