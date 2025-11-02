import { Metadata } from "next";
import Link from "next/link";

// ---------- METADADOS GLOBAIS (SEO) ----------
export const metadata: Metadata = {
  title: "Advogado Nômade | Consultoria Jurídica 100% On-line em Todo Brasil",
  description: "Advogado on-line que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
  keywords: "advogado on-line, consultoria jurídica, direito digital, rescisão trabalhista, multa de trânsito, pensão alimentícia, LGPD, contrato influencer, advogado 24 horas",
  authors: [{ name: "Dr. Reginaldo Oliveira", url: "https://advogadonomade.com.br" }],
  creator: "Dr. Reginaldo Oliveira",
  publisher: "Advogado Nômade",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://advogadonomade.com.br"),
  alternates: { canonical: "https://advogadonomade.com.br" },
  openGraph: {
    title: "Advogado Nômade | Consultoria Jurídica 100% On-line em Todo Brasil",
    description: "Advogado on-line que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
    url: "https://advogadonomade.com.br",
    siteName: "Advogado Nômade",
    images: [
      {
        url: "https://advogadonomade.com.br/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Reginaldo Oliveira - Advogado Nômade",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advogado Nômade | Consultoria Jurídica 100% On-line em Todo Brasil",
    description: "Advogado on-line que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
    images: ["https://advogadonomade.com.br/images/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ---------- SCHEMA.ORG (JSON-LD) ----------
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Advogado Nômade",
  url: "https://advogadonomade.com.br",
  logo: "https://advogadonomade.com.br/images/logo.png",
  sameAs: [
    "https://www.instagram.com/advogadonomade",
    "https://wa.me/5571986482241",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-71-98648-2241",
    contactType: "consultation",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD embutido */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold text-blue-900">Advogado <span className="text-yellow-600">Nômade</span></h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#inicio" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Início</a></li>
              <li><a href="#calculadoras" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Calculadoras</a></li>
              <li><a href="#sobre" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Sobre</a></li>
              <li><a href="#artigos" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Artigos</a></li>
              <li><a href="#contato" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contato</a></li>
            </ul>
          </nav>
          <div className="mobile-menu md:hidden text-2xl">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Direito de qualquer lugar, para qualquer pessoa, a qualquer hora.</h2>
          <p className="text-xl mb-8">Atendimento jurídico digital com agilidade e qualidade. Resolva suas questões jurídicas de forma prática e eficiente.</p>
          <p className="mb-8 text-yellow-300">
            📍 Hoje atendendo de <span className="font-semibold">Florianópolis/SC</span> → resposta em 5 min
          </p>
          <a
            href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <i className="fab fa-whatsapp"></i> Falar com advogado no WhatsApp
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="calculadoras" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">🧮 Calculadoras Jurídicas Grátis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Estime valores em segundos. Resultados são referências – confirme com nosso advogado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon="fas fa-balance-scale" 
              title="Rescisão Trabalhista" 
              description="Calcule 13º, férias, FGTS e aviso prévio de forma rápida e precisa." 
            />
            <FeatureCard 
              icon="fas fa-car" 
              title="Multas de Trânsito" 
              description="Verifique valor e pontos na CNH. Saiba como recorrer." 
            />
            <FeatureCard 
              icon="fas fa-gavel" 
              title="Indenização Moral" 
              description="Estime valores para danos morais em diferentes situações." 
            />
            <FeatureCard 
              icon="fas fa-hand-holding-usd" 
              title="Pensão Alimentícia" 
              description="Calcule valores considerando gastos extras e necessidades." 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="sobre" className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">💬 Fale com quem entende</h2>
            <p className="text-xl opacity-90">Atendimento jurídico de excelência com resultados comprovados</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatItem number="42 mil+" text="Atendimentos Online" />
            <StatItem number="97%" text="Clientes Satisfeitos" />
            <StatItem number="47" text="Cidades Atendidas" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">📬 Dicas jurídicas de graça</h2>
          <p className="text-gray-600 mb-8">1 e-mail por semana, 2 min de leitura, sempre útil.</p>
          <form
            action="https://api.staticforms.xyz/submit"
            method="POST"
            className="flex flex-col sm:flex-row gap-4"
          >
            <input type="hidden" name="accessKey" value="1f2a3b4c-5d6e-7f8g-9h0i-1j2k3l4m5n6o" />
            <input type="hidden" name="subject" value="Novo lead – Newsletter Advogado Nômade" />
            <input type="hidden" name="redirectTo" value="https://advogadonomade.com.br/obrigado" />
            
            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              required
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg bg-white text-black"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </section>

      {/* Articles */}
      <section id="artigos" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">📚 Artigos mais lidos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Informações jurídicas atualizadas para esclarecer suas dúvidas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard 
              title="5 direitos que todo trabalhador esquece ao pedir demissão" 
              description="Descubra quais são os direitos trabalhistas que muitos profissionais deixam de exigir ao sair de um emprego." 
              link="/artigos/direitos-demissao"
            />
            <ArticleCard 
              title="Multa por excesso de velocidade – quando pode ser anulada?" 
              description="Entenda em quais situações é possível recorrer de multas por excesso de velocidade com chances de sucesso." 
              link="/artigos/multa-velocidade"
            />
            <ArticleCard 
              title="Como calcular pensão de filho maior de 18 anos?" 
              description="Saiba como é feito o cálculo da pensão alimentícia para filhos que já atingiram a maioridade." 
              link="/artigos/pensao-maior-idade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-blue-900 text-white pt-16 pb-8">
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
    </>
  );
}

// Componente para os cards de features
function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="text-4xl text-blue-600 mb-4">
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Componente para os itens de estatística
function StatItem({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-xl opacity-90">{text}</p>
    </div>
  );
}

// Componente para os cards de artigos
function ArticleCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          Ler mais →
        </Link>
      </div>
    </div>
  );
}
