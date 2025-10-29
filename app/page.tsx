import { Metadata } from "next";
import Link from "next/link";

// ---------- METADADOS GLOBAIS (SEO) ----------
export const metadata: Metadata = {
  title: "Advogado Nômade | Consultoria Jurídica 100% On-line em Todo Brasil",
  description:
    "Advogado on-line que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
  keywords:
    "advogado on-line, consultoria jurídica, direito digital, rescisão trabalhista, multa de trânsito, pensão alimentícia, LGPD, contrato influencer, advogado 24 horas",
  authors: [{ name: "Dr. Reginaldo Oliveira", url: "https://advogadonomade.com.br" }],
  creator: "Dr. Reginaldo Oliveira",
  publisher: "Advogado Nômade",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://advogadonomade.com.br"),
  alternates: { canonical: "https://advogadonomade.com.br" },
  openGraph: {
    title: "Advogado Nômade | Consultoria Jurídica 100% On-line em Todo Brasil",
    description:
      "Advogado on-line que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
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
    description:
      "Advogado on-line que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
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

      {/* BANNER ESCURO (H1) */}
      <section className="w-full bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Advogado Nômade</h1>
          <p className="text-lg md:text-xl mb-6">Direito de qualquer lugar, para qualquer pessoa, a qualquer hora.</p>
          <p className="mb-8 text-amber-400">
            📍 Hoje atendendo de <span className="font-semibold">Florianópolis/SC</span> → resposta em 5 min
          </p>
          <Link
            href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
            title="Falar com advogado no WhatsApp"
            aria-label="Falar com advogado no WhatsApp"
          >
            Falar com advogado no WhatsApp
          </Link>
        </div>
      </section>

      {/* CORPO BRANCO (H2, H3...) */}
      <section className="w-full bg-white text-black">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

          {/* H2 - Calculadoras */}
          <div>
            <h2 className="text-3xl font-bold mb-4">🧮 Calculadoras Jurídicas Grátis</h2>
            <p className="mb-6 text-gray-600">Estime valores em segundos. Resultados são referências – confirme com nosso advogado.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CardLink title="Rescisão Trabalhista" desc="13º, férias, FGTS e aviso prévio." href="/calculadoras" />
              <CardLink title="Multas de Trânsito" desc="Valor + pontos na CNH." href="/calculadoras" />
              <CardLink title="Indenização Moral" desc="Faixa para danos morais." href="/calculadoras" />
              <CardLink title="Pensão Alimentícia" desc="Por filho, com gastos extras." href="/calculadoras" />
            </div>
          </div>

          {/* H2 - Provas sociais */}
          <div>
            <h2 className="text-3xl font-bold mb-4">💬 Fale com quem entende</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>+2 mil atendimentos on-line</li>
              <li>97 % de clientes satisfeitos</li>
              <li>Atendimento em 47 cidades do Brasil</li>
            </ul>
            <Link
              href="https://wa.me/5571986482241?text=Quero%20minha%20consultoria%20jur%C3%ADdica"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
              title="Quero minha consultoria no WhatsApp"
              aria-label="Quero minha consultoria no WhatsApp"
            >
              Quero minha consultoria no WhatsApp
            </Link>
          </div>

          {/* H2 - Newsletter (com form funcional) */}
          <div>
            <h2 className="text-3xl font-bold mb-4">📬 Dicas jurídicas de graça</h2>
            <p className="mb-4 text-gray-600">1 e-mail por semana, 2 min de leitura, sempre útil.</p>

            <form action="https://api.staticforms.xyz/submit" method="POST" className="space-y-4 max-w-md">
              <input type="hidden" name="accessKey" value="1f2a3b4c-5d6e-7f8g-9h0i-1j2k3l4m5n6o" />
              <input type="hidden" name="subject" value="Novo lead – Newsletter Advogado Nômade" />
              <input type="hidden" name="redirectTo" value="https://advogadonomade.com.br/obrigado" />

              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
                aria-label="Seu melhor e-mail"
              />
              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">
                Cadastrar
              </button>
            </form>
          </div>

          {/* H2 - Artigos em destaque */}
          <div>
            <h2 className="text-3xl font-bold mb-4">📚 Artigos mais lidos</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <Link className="underline hover:text-green-600" href="/artigos/direitos-demissao" title="5 direitos que todo trabalhador esquece ao pedir demissão">5 direitos que todo trabalhador esquece ao pedir demissão</Link></li>
              <li>• <Link className="underline hover:text-green-600" href="/artigos/multa-velocidade" title="Multa por excesso de velocidade – quando pode ser anulada?">Multa por excesso de velocidade – quando pode ser anulada?</Link></li>
              <li>• <Link className="underline hover:text-green-600" href="/artigos/pensao-maior-idade" title="Como calcular pensão de filho maior de 18 anos?">Como calcular pensão de filho maior de 18 anos?</Link></li>
            </ul>
          </div>

          {/* H2 - Rodapé interno */}
          <div className="text-sm text-gray-500 border-t pt-8">
            <p>Dr. Reginaldo Oliveira | OAB/SC 57.879 | Atendimento on-line em todo Brasil</p>
            <div className="flex gap-4 mt-2">
              <Link className="hover:text-green-600" href="/privacidade">Política de Privacidade</Link>
              <Link className="hover:text-green-600" href="/termos">Termos de Uso</Link>
              <Link className="hover:text-green-600" href="/contato">Contato</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full shadow-lg"
          title="Falar com advogado no WhatsApp"
          aria-label="Falar com advogado no WhatsApp"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}

function CardLink({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block border border-gray-200 rounded p-4 hover:shadow-md transition" title={title}>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </Link>
  );
}
