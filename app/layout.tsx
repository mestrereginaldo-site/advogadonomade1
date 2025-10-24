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
      <body className="min-h-screen flex flex-col bg-white text-black">
        {/* HEADER ESCURO (global) */}
        <header className="w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
              Advogado Nômade
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex gap-6 text-base font-semibold text-white">
              <Link href="/" className="hover:text-green-400">Início</Link>
              <Link href="/artigos" className="hover:text-green-400">Artigos</Link>
              <Link href="/blog" className="hover:text-green-400">Blog</Link>
              <Link href="/consultoria" className="hover:text-green-400">Consultoria Premium</Link>
              <Link href="/contato" className="hover:text-green-400">Contato</Link>
            </nav>

            {/* MOBILE HAMBÚRGUER FUNCIONAL */}
            <div className="md:hidden relative">
              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 bg-white text-black">{children}</main>

        {/* FOOTER ESCURO (global) */}
        <footer className="w-full bg-slate-900 border-t border-slate-800 text-white">
          <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <h3 className="font-bold text-green-400 mb-2">Institucional</h3>
              <ul className="space-y-1">
                <li><Link href="/" className="text-white hover:text-green-400">Início</Link></li>
                <li><Link href="/artigos" className="text-white hover:text-green-400">Artigos</Link></li>
                <li><Link href="/blog" className="text-white hover:text-green-400">Blog</Link></li>
                <li><Link href="/consultoria" className="text-white hover:text-green-400">Consultoria Premium</Link></li>
                <li><Link href="/contato" className="text-white hover:text-green-400">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-2">Políticas</h3>
              <ul className="space-y-1">
                <li><Link href="/politica-de-privacidade" className="text-white hover:text-green-400">Privacidade</Link></li>
                <li><Link href="/termos-de-uso" className="text-white hover:text-green-400">Termos</Link></li>
                <li><Link href="/cookies" className="text-white hover:text-green-400">Cookies</Link></li>
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

        {/* BOTÃO WHATSAPP FLUTUANTE (global) */}
        <div className="fixed bottom-4 right-4 z-50">
          <a href="https://wa.me/5588999999999?text=Preciso%20de%20um%20advogado%20agora" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full shadow-lg">
            WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}

/* COMPONENTE MENU MOBILE (hambúrguer funcional) */
function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} className="text-white text-2xl">☰</button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded p-4 space-y-2 text-sm text-white">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:text-green-400">Início</Link>
          <Link href="/artigos" onClick={() => setOpen(false)} className="block hover:text-green-400">Artigos</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block hover:text-green-400">Blog</Link>
          <Link href="/consultoria" onClick={() => setOpen(false)} className="block hover:text-green-400">Consultoria Premium</Link>
          <Link href="/contato" onClick={() => setOpen(false)} className="block hover:text-green-400">Contato</Link>
        </div>
      )}
}
