// app/modelos/contrato-influencer/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: "Modelo de Contrato para Influencer Digital (Grátis) - Advogado Nômade",
  description: "Baixe modelo de contrato influencer 100% gratuito. Cláusulas LGPD, direito de imagem, entrega de conteúdo e mais. Sem cadastro.",
};

export default function ModeloContratoInfluencer() {
  const tempoLeitura = "6 min";
  const dataPost = "20/10/2025";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* CABEÇALHO */}
        <header className="mb-8">
          <img
            src="/images/modelo-influencer-cover.jpg"
            alt="Modelo de contrato influencer"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Modelo de Contrato para Influencer Digital (Grátis)
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • {dataPost} • {tempoLeitura} de leitura
          </div>
        </header>

        {/* RESUMO RÁPIDO */}
        <section className="mb-8 p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800 font-semibold mb-2">✅ O que você vai baixar:</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Contrato em Word (4 páginas)</li>
            <li>Cláusulas LGPD, direito de imagem, entrega, prazo, multa</li>
            <li>Adaptável para Instagram, TikTok, YouTube, Kwai</li>
            <li>Sem cadastro – download direto</li>
          </ul>
        </section>

        {/* TEXTO EXPLICATIVO (lead magnet) */}
        <article className="prose prose-slate max-w-none mb-8">
          <h2>Por que você precisa de um contrato?</h2>
          <p>
            Um contrato de influencer não é "firma em papel" – é a <strong>prova</strong> do que foi combinado: valores, prazos, formato do conteúdo, exclusividade, direitos de uso e multa por atraso. Sem ele, você pode:
          </p>
          <ul>
            <li>Perder o direito de usar a própria imagem</li>
            <li>Receber menos que o combinado</li>
            <li>Ser processado por uso indevido de marca</li>
            <li>Ficar sem receber porque "não ficou bom"</li>
          </ul>

          <h2>O que o modelo inclui?</h2>
          <ul>
            <li><strong>Objeto:</strong> descreve o que será entregue (post, story, reel, link na bio).</li>
            <li><strong>Prazo:</strong> data de publicação e duração do conteúdo no ar.</li>
            <li><strong>Valor e forma de pagamento:</strong> pix, boleto, transferência, 50% na assinatura e 50% na entrega.</li>
            <li><strong>Direito de imagem:</strong> autorização para uso da foto/vídeo pela marca (período e canal).</li>
            <li><strong>Exclusividade:</strong> pode ou não impedir que você poste concorrentes (negociável).</li>
            <li><strong>LGPD:</strong> autorização para uso de dados (nome, imagem, voz) conforme a Lei 13.709/18.</li>
            <li><strong>Multa por atraso:</strong> 2% ao dia, limitado a 10% do valor total.</li>
            <li><strong>Rescisão:</strong> como encerrar o contrato antes do prazo (com ou sem culpa).</li>
          </ul>

          <h2>Como usar o modelo?</h2>
          <ol>
            <li>Baixe o Word no botão verde abaixo.</li>
            <li>Altere os campos em amarelo (nome, valor, datas, redes).</li>
            <li>Envie para a marca assinar (pode ser por PDF com certificado digital).</li>
            <li>Guarde o contrato assinado – é sua prova.</li>
          </ol>

          <h2>Exemplo real</h2>
          <p>
            Marina, creator de lifestyle, usou esse modelo para fechar com uma marca de protetor solar. Em 48 horas o contrato estava assinado e o dinheiro caiu na conta. Ela disse: <em>“Nunca mais trabalho sem contrato. Me senti segura e profissional.”</em>
          </p>
        </article>

        {/* DOWNLOAD + FORMULÁRIO (lead magnet) */}
        <section className="mb-8 p-6 border border-gray-300 rounded bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">Baixe o modelo agora</h3>
          <p className="mb-4">Preencha o formulário abaixo e receba o contrato por WhatsApp em 30 segundos.</p>

          <form
            action={`https://wa.me/5571986482241?text=Olá, Preciso de uma análise do meu caso.%0A%0ANome: ${encodeURIComponent(
              "NOME"
            )}%0AWhatsApp: ${encodeURIComponent("WHATSAPP")}`}
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
              <input name="whatsapp" type="tel" required placeholder="88999999999" className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded">
              Receba uma análise específica
            </button>
          </form>
        </section>

        {/* CTA FINAL */}
        <div className="text-center">
          <Link href="/consultoria" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg">
            Quer um contrato sob medida? Contrate aqui
          </Link>
        </div>
      </div>
    </main>
  );
}
