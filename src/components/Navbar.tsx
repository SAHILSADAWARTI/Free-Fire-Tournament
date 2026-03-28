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
        <div className="mt-4 flex flex-col gap-2">
          <Link href="/">Home</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/results">Results</Link>
        </div>
      )}
    </nav>
  );
}