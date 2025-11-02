"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 border-none shadow-none">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center bg-white border-none">
        <Link href="/" className="flex items-center space-x-3 border-none">
          {/* Logo */}
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center border-none">
            <span className="text-white font-bold text-xl">AN</span>
          </div>
          <div className="border-none">
            <div className="text-2xl font-bold text-blue-900 leading-tight border-none">
              Advogado <span className="text-yellow-600">Nômade</span>
            </div>
            <div className="text-sm text-gray-500 leading-tight border-none">
              Dr. Reginaldo Oliveira
            </div>
          </div>
        </Link>

        <nav className="hidden md:block border-none">
          <ul className="flex space-x-8 border-none">
            <li className="border-none"><Link href="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-none">Início</Link></li>
            <li className="border-none"><Link href="/artigos" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-none">Artigos</Link></li>
            <li className="border-none"><Link href="/modelos" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-none">Modelos</Link></li>
            <li className="border-none"><Link href="/calculadoras" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-none">Calculadoras</Link></li>
            <li className="border-none"><Link href="/consultoria" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-none">Consultoria</Link></li>
            <li className="border-none"><Link href="/contato" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-none">Contato</Link></li>
            <li className="border-none"><Link href="/onde-estou" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-none">Onde Estou</Link></li>
          </ul>
        </nav>

        <div className="md:hidden border-none">
          <button onClick={() => setOpen(!open)} className="text-2xl text-gray-800 border-none">
            ☰
          </button>
          {open && (
            <div className="absolute top-full left-0 right-0 bg-white border-none">
              <div className="flex flex-col p-4 space-y-4 border-none">
                <Link href="/" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-none">Início</Link>
                <Link href="/artigos" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-none">Artigos</Link>
                <Link href="/modelos" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-none">Modelos</Link>
                <Link href="/calculadoras" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-none">Calculadoras</Link>
                <Link href="/consultoria" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-none">Consultoria</Link>
                <Link href="/contato" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-none">Contato</Link>
                <Link href="/onde-estou" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-none">Onde Estou</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
