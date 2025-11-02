"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          {/* Logo */}
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">AN</span>
          </div>
          <div>
            <div className="text-xl font-bold text-blue-900 leading-tight">
              Advogado <span className="text-yellow-600">Nômade</span>
            </div>
            <div className="text-xs text-gray-500 leading-tight">
              Dr. Reginaldo Oliveira
            </div>
          </div>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Início</Link></li>
            <li><Link href="/artigos" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Artigos</Link></li>
            <li><Link href="/modelos" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Modelos</Link></li>
            <li><Link href="/calculadoras" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Calculadoras</Link></li>
            <li><Link href="/consultoria" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Consultoria</Link></li>
            <li><Link href="/contato" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contato</Link></li>
            <li><Link href="/onde-estou" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Onde Estou</Link></li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl text-gray-800">
            ☰
          </button>
          {open && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="flex flex-col p-4 space-y-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium">Início</Link>
                <Link href="/artigos" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium">Artigos</Link>
                <Link href="/modelos" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium">Modelos</Link>
                <Link href="/calculadoras" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium">Calculadoras</Link>
                <Link href="/consultoria" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium">Consultoria</Link>
                <Link href="/contato" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium">Contato</Link>
                <Link href="/onde-estou" onClick={() => setOpen(false)} className="text-gray-800 hover:text-blue-600 font-medium">Onde Estou</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
