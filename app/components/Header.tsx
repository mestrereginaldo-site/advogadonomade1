"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
          Advogado Nômade
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 text-base font-semibold text-white">
          <Link href="/" className="hover:text-green-400">Início</Link>
          <Link href="/artigos" className="hover:text-green-400">Artigos</Link>
          <Link href="/modelos" className="hover:text-green-400">Modelos</Link>
          <Link href="/consultoria" className="hover:text-green-400">Consultoria</Link>
          <Link href="/contato" className="hover:text-green-400">Contato</Link>
          <Link href="/onde-estou" className="hover:text-green-400">Onde Estou</Link>
        </nav>

        {/* MOBILE HAMBÚRGUER FUNCIONAL */}
        <div className="md:hidden relative">
          <button onClick={() => setOpen(!open)} className="text-white text-2xl">☰</button>
          {open && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded p-4 space-y-2 text-sm text-white">
              <Link href="/" onClick={() => setOpen(false)} className="block hover:text-green-400">Início</Link>
              <Link href="/artigos" onClick={() => setOpen(false)} className="block hover:text-green-400">Artigos</Link>
              <Link href="/modelos" onClick={() => setOpen(false)} className="block hover:text-green-400">Modelos</Link>
              <Link href="/consultoria" onClick={() => setOpen(false)} className="block hover:text-green-400">Consultoria Premium</Link>
              <Link href="/contato" onClick={() => setOpen(false)} className="block hover:text-green-400">Contato</Link>
              <Link href="/onde-estou" onClick={() => setOpen(false)} className="block hover:text-green-400">Onde Estou</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
