// app/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advogado Nômade | Consultoria Jurídica 100% On-line em Todo Brasil",
  description: "Advogado on-line que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
  keywords: "advogado on-line, consultoria jurídica, direito digital, rescisão trabalhista, multa de trânsito, pensão alimentícia, LGPD, contrato influencer, advogado 24 horas",
  authors: [{ name: "Dr. Reginaldo Oliveira", url: "https://advogadonomade.com.br" }],
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
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      {/* Hero Section Moderna */}
      <section className="w-full bg-gradient-to-br from-gray-900 to-green-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advogado <span className="text-green-400">Nômade</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Direito de qualquer lugar, para qualquer pessoa, a qualquer hora.
          </p>
          <p className="mb-8 text-green-300 text-lg">
            📍 Hoje atendendo de <span className="font-semibold">Florianópolis/SC</span> → resposta em 5 min
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Falar com advogado no WhatsApp
            </a>
            <Link
              href="/consultoria"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all"
            >
              Ver Planos
            </Link>
          </div>
        </div>
      </section>

      {/* Calculadoras Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🧮 Calculadoras Jurídicas Grátis</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Estime valores em segundos. Resultados são referências – confirme com nosso advogado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CalculatorCard 
              icon="fas fa-balance-scale" 
              title="Rescisão Trabalhista" 
              description="13º, férias, FGTS e aviso prévio." 
              href="/calculadoras"
            />
            <CalculatorCard 
              icon="fas fa-car" 
              title="Multas de Trânsito" 
              description="Valor + pontos na CNH." 
              href="/calculadoras"
            />
            <CalculatorCard 
              icon="fas fa-gavel" 
              title="Indenização Moral" 
              description="Faixa para danos morais." 
              href="/calculadoras"
            />
            <CalculatorCard 
              icon="fas fa-hand-holding-usd" 
              title="Pensão Alimentícia" 
              description="Por filho, com gastos extras." 
              href="/calculadoras"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💬 Fale com quem entende</h2>
            <p className="text-gray-600 text-lg">Atendimento jurídico de excelência com resultados comprovados</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">42 mil+</div>
              <div className="text-gray-700 font-medium">Atendimentos Online</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">97%</div>
              <div className="text-gray-700 font-medium">Clientes Satisfeitos</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">47</div>
              <div className="text-gray-700 font-medium">Cidades Atendidas</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://wa.me/5571986482241?text=Quero%20minha%20consultoria%20jur%C3%ADdica"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              <i className="fab fa-whatsapp"></i>
              Quero minha consultoria no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">📬 Dicas jurídicas de graça</h2>
          <p className="text-gray-600 mb-8 text-lg">1 e-mail por semana, 2 min de leitura, sempre útil.</p>
          
          <form
            action="https://api.staticforms.xyz/submit"
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="accessKey" value="1f2a3b4c-5d6e-7f8g-9h0i-1j2k3l4m5n6o" />
            <input type="hidden" name="subject" value="Novo lead – Newsletter Advogado Nômade" />
            <input type="hidden" name="redirectTo" value="https://advogadonomade.com.br/obrigado" />
            
            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              required
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </section>

      {/* Artigos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Artigos mais lidos</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Informações jurídicas atualizadas para esclarecer suas dúvidas
            </p>
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
    </>
  );
}

// Componente para Cards de Calculadora
function CalculatorCard({ icon, title, description, href }: { icon: string; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group-hover:border-green-300 h-full">
        <div className="text-3xl text-green-600 mb-4">
          <i className={icon}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

// Componente para Cards de Artigos
function ArticleCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all h-full">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <span className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
            Ler mais →
          </span>
        </div>
      </div>
    </Link>
  );
}
