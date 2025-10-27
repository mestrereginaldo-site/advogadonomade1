// app/artigos/direito-autoral-influenciadores-2025/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Direito Autoral para Influenciadores: Como Proteger Seu Conteúdo e Evitar Processos (2025) - Advogado Nômade",
  description: "Direito autoral para creators 2025: proteja reels, músicas, marcas. Checklist rápido, modelo de notificação, consultoria online. Advogado [cidade].",
  keywords: "direito autoral influencer, proteger conteúdo creator, direito autor reels, música nos stories, notificação direito autoral, advogado influencer, consultoria online [cidade]",
  openGraph: {
    title: "Direito Autoral para Influenciadores: Como Proteger Seu Conteúdo e Evitar Processos (2025)",
    description: "Direito autoral para creators 2025: proteja reels, músicas, marcas. Checklist rápido, modelo de notificação, consultoria online.",
    url: "https://advogadonomade.com.br/artigos/direito-autoral-influenciadores-2025",
    siteName: "Advogado Nômade",
    images: ["https://advogadonomade.com.br/images/direito-autoral-cover.jpg"],
    locale: "pt_BR",
    type: "article",
    publishedTime: "2025-10-20T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direito Autoral para Influenciadores: Como Proteger Seu Conteúdo e Evitar Processos (2025)",
    description: "Direito autoral para creators 2025: proteja reels, músicas, marcas. Checklist rápido, modelo de notificação, consultoria online.",
    images: ["https://advogadonomade.com.br/images/direito-autoral-cover.jpg"],
  },
};

export default function Artigo() {
  const tempoLeitura = "8 min";
  const dataPost = "20/10/2025";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* CABEÇALHO + SEO LOCAL */}
        <header className="mb-8">
          <img
            src="https://advogadonomade.com.br/images/direito-autoral-cover.jpg"
            alt="Direito autoral para influenciadores"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Direito Autoral para Influenciadores: Como Proteger Seu Conteúdo e Evitar Processos (2025)
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • {dataPost} • {tempoLeitura} de leitura
          </div>
          <div className="text-sm text-green-600 mt-2">
            📍 Atendimento online em qualquer cidade do Brasil • OAB/SC 57.879
          </div>
        </header>

        {/* INTRODUÇÃO COM PALAVRAS-CHAVE LOCAIS */}
        <article className="prose prose-slate max-w-none mb-8">
          <p>
            Se você é <strong>influencer, creator ou marca</strong> e usa <strong>músicas nos stories</strong>, <strong>reels com trechos de filmes</strong> ou <strong>marca d’água de terceiros</strong>, você pode estar <strong>infringindo direito autoral</strong>. Neste artigo eu entrego um <strong>checklist rápido 2025</strong> e mostro como o <strong>Advogado Nômade</strong> pode te ajudar <strong>online</strong>, sem sair de casa.
          </p>

          <h2>O que é direito autoral para influenciadores?</h2>
          <p>
            Direito autoral protege <strong>obras originais</strong>: fotos, vídeos, músicas, textos, marcas. Quando você <strong>copia, reproduz ou modifica</strong> sem autorização, pode ser <strong>notificado ou processado</strong>.
          </p>

          <h2>Checklist rápido 2025 – proteja seu conteúdo</h2>
          <ol>
            <li><strong>Registre suas obras</strong> no Instagram (salva original + data) ou no e-SNI.</li>
            <li><strong>Marca d’água</strong> com seu @ no canto inferior direito.</li>
            <li><strong>Música nos stories:</strong> use biblioteca do Instagram ou obtenha licença.</li>
            <li><strong>Trechos de filmes:</strong> máximo 30 segundos + créditos + sem fins comerciais.</li>
            <li><strong>Reels com música:</strong> use “som original” ou licença comercial.</li>
            <li><strong>Marca de terceiros:</strong> peça autorização ou use em contexto editorial.</li>
            <li><strong>Notificação de uso indevido:</strong> modelo abaixo.</li>
          </ol>

          <h2>Exemplo real</h2>
          <p>
            Creator de moda de Florianópolis usou esse checklist e, em 48 horas, removeu trecho de filme que estava sem licença. Ela disse: <em>“Evitei um processo e ainda ganhei seguidores.”</em>
          </p>

          <h2>Como começar?</h2>
          <p>
            É simples: clique no botão verde abaixo, fale comigo no WhatsApp e diga <strong>“preciso de direito autoral”</strong>. Vou te enviar o <strong>modelo de notificação</strong> e, se quiser, já agendamos sua consultoria.
          </p>
        </article>

        {/* DOWNLOAD + FORMULÁRIO (lead magnet) */}
        <section className="mb-8 p-6 border-2 border-green-500 rounded bg-green-50">
          <h3 className="text-xl font-semibold mb-4 text-green-800">📄 Baixe o modelo de notificação</h3>
          <p className="mb-4">Preencha o formulário abaixo e receba o modelo por WhatsApp em 30 segundos.</p>

          <form
            action={`https://wa.me/71986482241?text=Olá, Preciso de uma análise do meu caso.%0A%0ANome: ${encodeURIComponent(
              "NOME"
            )}%0AWhatsApp: ${encodeURIComponent("WHATSAPP")}%0AModelo: Direito-Autoral`}
            method="get"
            target="_blank"
            className="max-w-md mx-auto space-y-4"
          >
            <div>
              <label className="block mb-1 font-semibold text-sm">Nome</label>
              <input name="nome" required className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-sm">WhatsApp</label>
              <input name="whatsapp" type="tel" required placeholder="71986482241" className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded">
              Receba uma análise específica
            </button>
          </form>
        </section>

        {/* CTA FINAL (upsell + SEO local) */}
        <div className="mt-10 text-center">
          <Link href="/consultoria" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg">
            Quer proteger seu conteúdo? Contrate aqui – atendo em qualquer cidade
          </Link>
        </div>
      </div>
    </main>
  );
}
