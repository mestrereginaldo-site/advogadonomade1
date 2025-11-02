"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 border-0">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center bg-white border-0">
        <Link href="/" className="flex items-center space-x-3 border-0">
          {/* Logo */}
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center border-0">
            <span className="text-white font-bold text-xl">AN</span>
          </div>
          <div className="border-0">
            <div className="text-2xl font-bold text-blue-900 leading-tight border-0">
              Advogado <span className="text-yellow-600">Nômade</span>
            </div>
            <div className="text-sm text-gray-500 leading-tight border-0">
              Dr. Reginaldo Oliveira
            </div>
          </div>
        </Link>

        <nav className="hidden md:block border-0">
          <ul className="flex space-x-8 border-0">
            <li className="border-0"><Link href="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-0">Início</Link></li>
            <li className="border-0"><Link href="/artigos" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-0">Artigos</Link></li>
            <li className="border-0"><Link href="/modelos" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-0">Modelos</Link></li>
            <li className="border-0"><Link href="/calculadoras" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-0">Calculadoras</Link></li>
            <li className="border-0"><Link href="/consultoria" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-0">Consultoria</Link></li>
            <li className="border-0"><Link href="/contato" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-0">Contato</Link></li>
            <li className="border-0"><Link href="/onde-estou" className="text-gray-800 hover:text-blue-600 font-medium transition-colors border-0">Onde Estou</Link></li>
          </ul>
        </nav>

        <div className="md:hidden border-0">
          <button onClick={() => setOpen(!open)} className="text-2xl text-gray-800 border-0">
            ☰
          </button>
          {open && (
            <div className="absolute top-full left-0 right-0 bg-white border-0">
              <div className="flex flex-col p-4 space-y-4 border-0">
                <Link href="/" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-0">Início</Link>
                <Link href="/artigos" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-0">Artigos</Link>
                <Link href="/modelos" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-0">Modelos</Link>
                <Link href="/calculadoras" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-0">Calculadoras</Link>
                <Link href="/consultoria" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-0">Consultoria</Link>
                <Link href="/contato" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-0">Contato</Link>
                <Link href="/onde-estou" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium border-0">Onde Estou</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
