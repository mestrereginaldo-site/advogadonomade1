// app/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* HEADER */}
      <header className="w-full fixed top-0 left-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-green-400">
            Advogado Nômade
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/blog" className="hover:text-green-400 transition">
              Blog
            </Link>
            <Link href="/contratar" className="hover:text-green-400 transition">
              Contratar
            </Link>
            <Link
              href="https://wa.me/5588999999999?text=Quero%20falar%20com%20um%20advogado"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold"
            >
              WhatsApp
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-sm">
            <Link href="/blog" className="block hover:text-green-400">
              Blog
            </Link>
            <Link href="/contratar" className="block hover:text-green-400">
              Contratar
            </Link>
            <Link
              href="https://wa.me/5588999999999?text=Quero%20falar%20com%20um%20advogado"
              className="block bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold"
            >
              WhatsApp
            </Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <main className="pt-32 pb-16 px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Advogado Nômade
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Direito de qualquer lugar, para qualquer pessoa, em qualquer hora.
        </p>
        <p className="mb-8 text-amber-400">
          📍 Hoje atendendo de <span className="font-semibold">Maceió/AL</span> → resposta em 5 min
        </p>
        <Link
          href="https://wa.me/5588999999999?text=Preciso%20de%20um%20advogado%20agora"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Falar com advogado no WhatsApp
        </Link>
      </main>
    </div>
  );
}
