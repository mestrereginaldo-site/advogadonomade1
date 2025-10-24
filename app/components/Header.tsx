// app/components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - fonte elegante + branco */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-black">
          Advogado Nômade
        </Link>

        {/* Desktop Menu - fonte limpa e moderna */}
        <nav className="hidden md:flex items-center gap-6 text-base text-black font-medium">
          <Link href="/" className="hover:text-green-600">Início</Link>
          <Link href="/artigos" className="hover:text-green-600">Artigos</Link>
          <Link href="/blog" className="hover:text-green-600">Blog</Link>
          <Link href="/consultoria" className="hover:text-green-600">Consultoria Premium</Link>
          <Link href="/contato" className="hover:text-green-600">Contato</Link>
          <Link
            href="https://wa.me/5588999999999?text=Quero%20falar%20com%20um%20advogado"
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold"
          >
            WhatsApp
          </Link>
        </nav>

        {/* Mobile Hambúrguer */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-base text-black font-medium">
          <Link href="/" className="block hover:text-green-600">Início</Link>
          <Link href="/artigos" className="block hover:text-green-600">Artigos</Link>
          <Link href="/blog" className="block hover:text-green-600">Blog</Link>
          <Link href="/consultoria" className="block hover:text-green-600">Consultoria Premium</Link>
          <Link href="/contato" className="block hover:text-green-600">Contato</Link>
          <Link
            href="https://wa.me/5588999999999?text=Quero%20falar%20com%20um%20advogado"
            className="block bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold"
          >
            WhatsApp
          </Link>
        </div>
      )}
    </header>
  );
}
