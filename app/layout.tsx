// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advogado Nômade | Consultoria Jurídica 100% On-line em Todo Brasil",
  description: "Advogado on-line que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="logo">
              <h1 className="text-2xl font-bold text-blue-900">Advogado <span className="text-yellow-600">Nômade</span></h1>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><Link href="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Início</Link></li>
                <li><Link href="/calculadoras" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Calculadoras</Link></li>
                <li><Link href="/sobre" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Sobre</Link></li>
                <li><Link href="/artigos" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Artigos</Link></li>
                <li><Link href="/contato" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contato</Link></li>
              </ul>
            </nav>
            <div className="mobile-menu md:hidden text-2xl">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-500">Institucional</h3>
                <ul className="space-y-2">
                  <li><Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</Link></li>
                  <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-500">Serviços</h3>
                <ul className="space-y-2">
                  <li><Link href="/consultoria" className="text-gray-300 hover:text-white transition-colors">Consultoria</Link></li>
                  <li><Link href="/calculadoras" className="text-gray-300 hover:text-white transition-colors">Calculadoras</Link></li>
                  <li><Link href="/modelos" className="text-gray-300 hover:text-white transition-colors">Modelos</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-500">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/politica-de-privacidade" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</Link></li>
                  <li><Link href="/termos-de-uso" className="text-gray-300 hover:text-white transition-colors">Termos de Uso</Link></li>
                  <li><Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookies</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-yellow-500">Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-user mt-1 mr-3 text-yellow-500"></i>
                    <div>
                      <strong>Dr. Reginaldo Oliveira</strong><br />
                      OAB/SC 57.879
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone mr-3 text-yellow-500"></i>
                    <div>(71) 98454-2241</div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope mr-3 text-yellow-500"></i>
                    <div>contato@advogadonomade.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-blue-700 text-center text-gray-400">
              <p>&copy; 2023 Advogado Nômade. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full shadow-lg flex items-center gap-2"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
