"use client";
import Link from 'next/link';
import { Menu, X, Crosshair } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Teams', path: '/teams' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Results', path: '/results' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gaming-surface/90 backdrop-blur-md border-b border-gaming-card shadow-neon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Crosshair className="text-gaming-neonOrange w-8 h-8" />
            <Link href="/" className="font-bold text-2xl tracking-wider uppercase bg-glow-gradient bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,85,0,0.8)]">
              FF Tourney
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-gray-300 hover:text-white hover:bg-gaming-card hover:shadow-neon px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 border border-transparent hover:border-gaming-neonRed/50 uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gaming-card focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-gaming-neonOrange" /> : <Menu className="h-6 w-6 text-gaming-neonOrange" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gaming-surface border-b border-gaming-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase border-l-4 border-transparent hover:border-gaming-neonOrange hover:bg-gaming-card transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
