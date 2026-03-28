"use client";
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free Fire Tournament',
  description: 'Survive. Dominate. Conquer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} bg-gaming-bg text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  )
}
