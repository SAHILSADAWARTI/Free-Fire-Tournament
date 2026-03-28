"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative p-4 bg-black text-white flex justify-between items-center">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">FREE FIRE TOURNAMENT</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
  <div className="absolute right-4 top-14 bg-black border border-red-500 rounded-lg p-4 w-44 shadow-lg shadow-red-500/30 z-50">

    <div className="flex flex-col gap-3">
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
