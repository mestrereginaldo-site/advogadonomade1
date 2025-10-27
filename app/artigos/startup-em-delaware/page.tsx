// app/artigos/startup-em-delaware/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Startup em Delaware: Como Abrir Sua Empresa nos EUA do Brasil (2025) - Advogado Nômade",
  description: "Passo a passo para abrir startup em Delaware do Brasil. C-Corp, cap-table, contrato de acionistas, política de privacidade. Consultoria online.",
  keywords: "abrir startup nos EUA, Delaware C-Corp, startup Brasil, advogado startup, abertura de empresa nos EUA, contrato de acionistas, consultoria online, advogado [cidade]",
  authors: [{ name: "Dr. Reginaldo Oliveira", url: "https://advogadonomade.com.br" }],
  openGraph: {
    title: "Startup em Delaware: Como Abrir Sua Empresa nos EUA do Brasil (2025)",
    description: "Passo a passo para abrir startup em Delaware do Brasil. Consultoria online.",
    url: "https://advogadonomade.com.br/artigos/startup-em-delaware",
    siteName: "Advogado Nômade",
    images: [{ url: "https://advogadonomade.com.br/images/startup-delaware-cover.jpg", width: 1200, height: 630, alt: "Startup Delaware" }],
    locale: "pt_BR",
    type: "article",
    publishedTime: "2025-10-15T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup em Delaware: Como Abrir Sua Empresa nos EUA do Brasil (2025)",
    description: "Passo a passo para abrir startup em Delaware do Brasil. Consultoria online.",
    images: ["https://advogadonomade.com.br/images/startup-delaware-cover.jpg"],
  },
};

export default function Artigo() {
  const tempoLeitura = "8 min";
  const dataPost = "15/10/2025";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* CABEÇALHO + SEO INTERNACIONAL */}
        <header className="mb-8">
          <img
            src="https://advogadonomade.com.br/images/startup-delaware-cover.jpg"
            alt="Startup Delaware"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Startup em Delaware: Como Abrir Sua Empresa nos EUA do Brasil (2025)
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • {dataPost} • {tempoLeitura} de leitura
          </div>
          <div className="text-sm text-green-600 mt-2">
            📍 Atendimento online do Brasil para o mundo • OAB/SC 57.879
          </div>
        </header>

        {/* INTRODUÇÃO COM PALAVRAS-CHAVE INTERNACIONAIS */}
        <article className="prose prose-slate max-w-none mb-8">
          <p>
            Se você é <strong>brasileiro e quer abrir uma startup nos EUA</strong>, Delaware é a escolha número 1. Neste artigo eu entrego um <strong>passo a passo completo 2025</strong> e mostro como o <strong>Advogado Nômade</strong> pode te ajudar <strong>online</strong>, sem sair do Brasil.
          </p>

          <h2>Por que Delaware?</h2>
          <ul>
            <li><strong>Isenção de impostos estaduais</strong> sobre receitas fora de Delaware.</li>
            <li><strong>Lei empresarial moderna</strong> (Delaware General Corporation Law).</li>
            <li><strong>Investidores preferem</strong> Delaware C-Corp para rodadas de investimento.</li>
            <li><strong>Processo 100% online</strong> – não precisa ir aos EUA.</li>
          </ul>

          <h2>Passo a passo rápido</h2>
          <ol>
            <li><strong>Reserve o nome</strong> da empresa (verifique disponibilidade em Delaware Division of Corporations).</li>
            <li><strong>Escolha o tipo</strong>: C-Corp (recomendado para investidores).</li>
            <li><strong>Contrato de acionistas</strong>: baixe o modelo no botão verde abaixo.</li>
            <li><strong>Registre a empresa</strong> em Delaware (online, em 24 horas).</li>
            <li><strong>Obtenha EIN</strong> (número de identificação fiscal) – também online.</li>
            <li><strong>Abra conta bancária</strong> nos EUA (remota, via fintech).</li>
            <li><strong>Assine contratos</strong> (modelo abaixo).</li>
          </ol>

          <h2>O que o modelo inclui?</h2>
          <ul>
            <li><strong>Cap-table:</strong> divisão de ações entre fundadores.</li>
            <li><strong>Vesting:</strong> regras de permanência dos sócios (4 anos com cliff de 1 ano).</li>
            <li><strong>Direitos de preferência:</strong> proteção contra diluição em rodadas futuras.</li>
            <li><strong>Drag-along / tag-along:</strong> proteção na venda da empresa.</li>
            <li><strong>Lei aplicável:</strong> Delaware General Corporation Law.</li>
            <li><strong>Multa por inadimplência:</strong> 2% ao dia, limitado a 10% do valor.</li>
          </ul>

          <h2>Exemplo real</h2>
          <p>
            Startup de SaaS de Florianópolis usou esse modelo e, em 72 horas, estava com a C-Corp aberta e cap-table assinado. O fundador disse: <em>“Fiz tudo pelo celular. O Advogado Nômade me deu segurança para fechar com investidor americano.”</em>
          </p>

          <h2>Como começar?</h2>
          <p>
            É simples: clique no botão verde abaixo, fale comigo no WhatsApp e diga <strong>“quero abrir startup nos EUA”</strong>. Vou te enviar o <strong>modelo completo</strong> e, se quiser, já agendamos sua consultoria.
          </p>
        </article>

        {/* DOWNLOAD + FORMULÁRIO (lead magnet) */}
        <section className="mb-8 p-6 border-2 border-green-500 rounded bg-green-50">
          <h3 className="text-xl font-semibold mb-4 text-green-800">📄 Baixe o contrato de acionistas em Word</h3>
          <p className="mb-4">Preencha o formulário abaixo e receba o contrato por WhatsApp em 30 segundos.</p>

          <form
            action={`https://wa.me/71986482241?text=Olá, Preciso de uma análise do meu caso.%0A%0ANome: ${encodeURIComponent(
              "NOME"
            )}%0AWhatsApp: ${encodeURIComponent("WHATSAPP")}%0AModelo: Startup-Delaware`}
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

        {/* CTA FINAL (upsell + SEO internacional) */}
        <div className="mt-10 text-center">
          <Link href="/consultoria" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg">
            Quer abrir startup nos EUA? Contrate aqui – atendo em qualquer cidade
          </Link>
        </div>
      </div>
    </main>
  );
}
