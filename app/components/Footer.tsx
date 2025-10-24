// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Coluna 1 - Institucional */}
        <div>
          <h3 className="font-bold text-green-400 mb-2">Institucional</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-green-400">Início</Link></li>
            <li><Link href="/sobre" className="hover:text-green-400">Sobre</Link></li>
            <li><Link href="/blog" className="hover:text-green-400">Blog</Link></li>
            <li><Link href="/contratar" className="hover:text-green-400">Contratar</Link></li>
          </ul>
        </div>

        {/* Coluna 2 - Políticas */}
        <div>
          <h3 className="font-bold text-green-400 mb-2">Políticas</h3>
          <ul className="space-y-1">
            <li><Link href="/politica-de-privacidade" className="hover:text-green-400">Política de Privacidade</Link></li>
            <li><Link href="/termos-de-uso" className="hover:text-green-400">Termos de Uso</Link></li>
            <li><Link href="/cookies" className="hover:text-green-400">Política de Cookies</Link></li>
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <h3 className="font-bold text-green-400 mb-2">Contato</h3>
          <ul className="space-y-1">
            <li>Dr. Reginaldo Oliveira</li>
            <li>OAB/AL 12345</li>
            <li>
              <a href="https://wa.me/5588999999999" className="hover:text-green-400">
                WhatsApp: 88 99999-9999
              </a>
            </li>
            <li>Maceió/AL - Brasil</li>
          </ul>
        </div>

        {/* Coluna 4 - Direitos */}
        <div>
          <h3 className="font-bold text-green-400 mb-2">© 2025 Advogado Nômade</h3>
          <p className="text-xs text-gray-400">
            Todos os direitos reservados. O conteúdo é protegido por direitos autorais.
          </p>
        </div>
      </div>
    </footer>
  );
}
