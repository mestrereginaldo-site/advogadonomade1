"use client";
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xl">AN</span>
          </div>
          <div>
            <div className="text-2xl font-bold text-white leading-tight">
              Advogado <span className="text-yellow-300">Nômade</span>
            </div>
            <div className="text-sm text-blue-200 leading-tight">
              Dr. Reginaldo Oliveira
            </div>
          </div>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="/" className="text-white hover:text-yellow-300 font-medium transition-colors">Início</Link></li>
            <li><Link href="/artigos" className="text-white hover:text-yellow-300 font-medium transition-colors">Artigos</Link></li>
            <li><Link href="/modelos" className="text-white hover:text-yellow-300 font-medium transition-colors">Modelos</Link></li>
            <li><Link href="/calculadoras" className="text-white hover:text-yellow-300 font-medium transition-colors">Calculadoras</Link></li>
            <li><Link href="/consultoria" className="text-white hover:text-yellow-300 font-medium transition-colors">Consultoria</Link></li>
            <li><Link href="/contato" className="text-white hover:text-yellow-300 font-medium transition-colors">Contato</Link></li>
            <li><Link href="/onde-estou" className="text-white hover:text-yellow-300 font-medium transition-colors">Onde Estou</Link></li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl text-white">
            ☰
          </button>
          {open && (
            <div className="absolute top-full left-0 right-0 bg-blue-800">
              <div className="flex flex-col p-4 space-y-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300 font-medium">Início</Link>
                <Link href="/artigos" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300 font-medium">Artigos</Link>
                <Link href="/modelos" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300 font-medium">Modelos</Link>
                <Link href="/calculadoras" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300 font-medium">Calculadoras</Link>
                <Link href="/consultoria" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300 font-medium">Consultoria</Link>
                <Link href="/contato" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300 font-medium">Contato</Link>
                <Link href="/onde-estou" onClick={() => setOpen(false)} className="text-white hover:text-yellow-300 font-medium">Onde Estou</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
