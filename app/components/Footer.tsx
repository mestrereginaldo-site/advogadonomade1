export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Início</a></li>
              <li><a href="/artigos" className="text-gray-300 hover:text-white transition">Artigos</a></li>
              <li><a href="/modelos" className="text-gray-300 hover:text-white transition">Modelos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="/consultoria" className="text-gray-300 hover:text-white transition">Consultoria</a></li>
              <li><a href="/calculadoras" className="text-gray-300 hover:text-white transition">Calculadoras</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/politica-de-privacidade" className="text-gray-300 hover:text-white transition">Política de Privacidade</a></li>
              <li><a href="/termos-de-uso" className="text-gray-300 hover:text-white transition">Termos de Uso</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-white transition">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="text-gray-300">
              <p className="font-semibold text-white">Dr. Reginaldo Oliveira</p>
              <p>OAB/SC 57.879</p>
              <p>
                <a href="tel:+5571986482241" className="hover:text-white transition">
                  71 98648-2241
                </a>
              </p>
              <p>Salvador/BA – Brasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © 2025 Advogado Nômade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
