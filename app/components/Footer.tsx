// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Institucional */}
        <div>
          <h3 className="font-bold text-green-400 mb-2">Institucional</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="text-white hover:text-green-400">Início</Link></li>
            <li><Link href="/blog" className="text-white hover:text-green-400">Modelos</Link></li>
            <li><Link href="/contratar" className="text-white hover:text-green-400">Contratar</Link></li>
          </ul>
        </div>

        {/* Políticas */}
        <div>
          <h3 className="font-bold text-green-400 mb-2">Políticas</h3>
          <ul className="space-y-1">
            <li><Link href="/politica-de-privacidade" className="text-white hover:text-green-400">Política de Privacidade</Link></li>
            <li><Link href="/termos-de-uso" className="text-white hover:text-green-400">Termos de Uso</Link></li>
            <li><Link href="/cookies" className="text-white hover:text-green-400">Cookies</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-bold text-green-400 mb-2">Contato</h3>
          <ul className="space-y-1">
            <li>Dr. Reginaldo Oliveira</li>
            <li>OAB/SC 57.879</li>
            <li>
              <a href="https://wa.me/5588999999999" className="text-white hover:text-green-400">
                WhatsApp: 88 99999-9999
              </a>
            </li>
            <li>Maceió/AL – Brasil</li>
          </ul>
        </div>

        {/* Direitos */}
        <div>
          <h3 className="font-bold text-green-400 mb-2">© 2025 Advogado Nômade</h3>
          <p className="text-xs text-gray-400">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
