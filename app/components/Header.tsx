// app/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-400">
          Advogado Nômade
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-green-400 transition">
            Início
          </Link>
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
          <Link href="/" className="block hover:text-green-400">
            Início
          </Link>
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
  );
}
