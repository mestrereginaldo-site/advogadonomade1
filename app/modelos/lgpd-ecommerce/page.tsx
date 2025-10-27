// app/artigos/lgpd-ecommerce-checklist-2025/page.tsx
import Link from "next/link";

export const metadata = {
  title: "LGPD para E-commerce: Checklist Rápido 2025 - Advogado Nômade",
  description: "Checklist LGPD obrigatório para e-commerce 2025. Metas tags, cookies, política de privacidade, direitos do titular. Consultoria online em qualquer cidade do Brasil.",
  keywords: "advogado LGPD, consultoria LGPD, advogado online, advogado Brasil, advogado [cidade], LGPD e-commerce, política de privacidade, cookies, direito digital",
  authors: [{ name: "Dr. Reginaldo Oliveira", url: "https://advogadonomade.com.br" }],
  openGraph: {
    title: "LGPD para E-commerce: Checklist Rápido 2025",
    description: "Checklist LGPD obrigatório para e-commerce 2025. Consultoria online em qualquer cidade do Brasil.",
    url: "https://advogadonomade.com.br/artigos/lgpd-ecommerce-checklist-2025",
    siteName: "Advogado Nômade",
    images: [{ url: "https://advogadonomade.com.br/images/lgpd-ecommerce-cover.jpg", width: 1200, height: 630, alt: "LGPD para e-commerce" }],
    locale: "pt_BR",
    type: "article",
    publishedTime: "2025-09-30T00:00:00Z",
    modifiedTime: "2025-09-30T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "LGPD para E-commerce: Checklist Rápido 2025",
    description: "Checklist LGPD obrigatório para e-commerce 2025. Consultoria online em qualquer cidade do Brasil.",
    images: ["https://advogadonomade.com.br/images/lgpd-ecommerce-cover.jpg"],
  },
};

export default function Artigo() {
  const tempoLeitura = "7 min";
  const dataPost = "30/09/2025";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* CABEÇALHO + SEO LOCAL */}
        <header className="mb-8">
          <img
            src="https://advogadonomade.com.br/images/lgpd-ecommerce-cover.jpg"
            alt="LGPD para e-commerce"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            LGPD para E-commerce: Checklist Rápido 2025
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • {dataPost} • {tempoLeitura} de leitura
          </div>
          <div className="text-sm text-green-600 mt-2">
            📍 Atendimento online em qualquer cidade do Brasil • OAB/SC 57.879
          </div>
        </header>

        {/* INTRODUÇÃO COM PALAVRAS-CHAVE */}
        <article className="prose prose-slate max-w-none mb-8">
          <p>
            Se você tem uma loja virtual em <strong>qualquer cidade do Brasil</strong> e coleta nome, e-mail ou CPF dos clientes, <strong>você precisa estar em conformidade com a LGPD</strong>. Neste artigo eu entrego um <strong>checklist rápido 2025</strong> e mostro como o <strong>Advogado Nômade</strong> pode te ajudar <strong>online</strong>, sem sair de casa.
          </p>

          <h2>O que é LGPD para e-commerce?</h2>
          <p>
            A LGPD (Lei 13.709/18) obriga qualquer site que colete dados pessoais a informar ao usuário: o que é coletado, como é usado, quem são os responsáveis e como o cliente pode excluir ou alterar esses dados.
          </p>

          <h2>Checklist LGPD obrigatório (2025)</h2>
          <ol>
            <li><strong>Política de Privacidade:</strong> página com cláusulas obrigatórias (modelo abaixo).</li>
            <li><strong>Cookies:</strong> aviso de uso e opção de desativação.</li>
            <li><strong>Consentimento:</strong> checkbox no checkout (exemplo: “Li e concordo com a Política de Privacidade”).</li>
            <li><strong>Direitos do titular:</strong> informar que o cliente pode acessar, corrigir, excluir ou portar seus dados.</li>
            <li><strong>Canal de contato:</strong> e-mail e telefone para exercer direitos.</li>
            <li><strong>Retenção de dados:</strong> prazo e critérios para exclusão.</li>
            <li><strong>Segurança:</strong> HTTPS, certificado SSL, backup criptografado.</li>
          </ol>

          <h2>Exemplo real</h2>
          <p>
            Loja de roupas de Florianópolis usou esse checklist e, em 48 horas, estava em conformidade. A cliente disse: <em>“Me senti segura para vender para todo Brasil.”</em>
          </p>

          <h2>Como começar?</h2>
          <p>
            É simples: clique no botão verde abaixo, fale comigo no WhatsApp e diga <strong>“preciso de LGPD”</strong>. Vou te enviar o <strong>modelo completo</strong> e, se quiser, já agendamos sua consultoria.
          </p>
        </article>

        {/* DOWNLOAD + FORMULÁRIO (lead magnet) */}
        <section className="mb-8 p-6 border-2 border-green-500 rounded bg-green-50">
          <h3 className="text-xl font-semibold mb-4 text-green-800">📄 Baixe o modelo em Word</h3>
          <p className="mb-4">Preencha o formulário abaixo e receba a política por WhatsApp em 30 segundos.</p>

          <form
            action={`https://wa.me/71986482241?text=Olá, Preciso de uma análise do meu caso.%0A%0ANome: ${encodeURIComponent(
              "NOME"
            )}%0AWhatsApp: ${encodeURIComponent("WHATSAPP")}%0AModelo: LGPD-Ecommerce`}
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
        <div className="text-center">
          <Link href="/consultoria" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg">
            Quer LGPD sob medida? Contrate aqui – atendo em qualquer cidade
          </Link>
        </div>

        {/* DOWNLOAD DIRETO (opcional) */}
        <section className="mt-10 p-6 border border-gray-300 rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">📄 Modelo de Política de Privacidade (Word)</h3>
          <p className="text-sm mb-4">Clique abaixo e receba o arquivo .docx por WhatsApp.</p>
          <a
            href="https://wa.me/71986482241?text=Olá, Preciso de uma análise do meu caso.%0A%0AModelo: LGPD-Ecommerce"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Baixar modelo
          </a>
        </section>
      </div>
    </main>
  );
}
