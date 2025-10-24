// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advogado Nômade - Direito de Qualquer Lugar",
  description: "Consultoria jurídica online 24h. Contratos, LGPD, startups, direito digital. WhatsApp 5 min.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-900 text-white min-h-screen flex flex-col">
        {/* HEADER GLOBAL */}
        <header className="w-full bg-slate-900 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo = link para HOME */}
            <Link href="/" className="text-xl font-bold text-green-400">
              Advogado Nômade
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:flex gap-6 text-sm">
              <Link href="/" className="text-white hover:text-green-400">Início</Link>
              <Link href="/blog" className="text-white hover:text-green-400">Blog</Link>
              <Link href="/contratar" className="text-white hover:text-green-400">Contratar</Link>
              <Link
                href="https://wa.me/5588999999999?text=Quero%20falar%20com%20um%20advogado"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold"
              >
                WhatsApp
              </Link>
            </nav>

            {/* Mobile Menu (hambúrguer simples) */}
            <div className="md:hidden text-white text-2xl">☰</div>
          </div>
        </header>

        {/* CONTEÚDO DAS PÁGINAS */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">{children}</main>

        {/* FOOTER GLOBAL */}
        <footer className="w-full bg-slate-950 border-t border-slate-800 text-white">
          <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <h3 className="font-bold text-green-400 mb-2">Institucional</h3>
              <ul className="space-y-1">
                <li><Link href="/" className="text-white hover:text-green-400">Início</Link></li>
                <li><Link href="/blog" className="text-white hover:text-green-400">Blog</Link></li>
                <li><Link href="/contratar" className="text-white hover:text-green-400">Contratar</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-2">Políticas</h3>
              <ul className="space-y-1">
                <li><Link href="/politica-de-privacidade" className="text-white hover:text-green-400">Privacidade</Link></li>
                <li><Link href="/termos-de-uso" className="text-white hover:text-green-400">Termos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-2">Contato</h3>
              <ul className="space-y-1">
                <li>Dr. Reginaldo Oliveira</li>
                <li>OAB/AL 12345</li>
                <li><a href="https://wa.me/5588999999999" className="text-white hover:text-green-400">88 99999-9999</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-2">© 2025</h3>
              <p className="text-xs text-gray-400">Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
