// app/components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Moderna */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-extrabold tracking-tight text-gray-900">
            Advogado <span className="text-green-600">Nômade</span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-base font-semibold">
          <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Início</Link>
          <Link href="/artigos" className="text-gray-700 hover:text-green-600 transition-colors">Artigos</Link>
          <Link href="/modelos" className="text-gray-700 hover:text-green-600 transition-colors">Modelos</Link>
          <Link href="/calculadoras" className="text-gray-700 hover:text-green-600 transition-colors">Calculadoras</Link>
          <Link href="/consultoria" className="text-gray-700 hover:text-green-600 transition-colors">Consultoria</Link>
          <Link href="/contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</Link>
        </nav>

        {/* MOBILE MENU */}
        <div className="md:hidden relative">
          <button 
            onClick={() => setOpen(!open)} 
            className="text-gray-700 text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          {open && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl p-4 space-y-3 text-sm">
              <Link href="/" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium py-1">Início</Link>
              <Link href="/artigos" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium py-1">Artigos</Link>
              <Link href="/modelos" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium py-1">Modelos</Link>
              <Link href="/calculadoras" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium py-1">Calculadoras</Link>
              <Link href="/consultoria" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium py-1">Consultoria</Link>
              <Link href="/contato" onClick={() => setOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium py-1">Contato</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
