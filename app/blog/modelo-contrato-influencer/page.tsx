// app/blog/modelo-contrato-influencer/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Modelo de Contrato para Influencer Digital (Grátis) - Advogado Nômade",
  description: "Baixe modelo de contrato influencer 100 % gratuito e adaptável. Cláusulas LGPD, direito de imagem, entrega de conteúdo e mais. Sem cadastro.",
};

export default function Post() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-4 py-8">
      <div className="max-w-3xl mx-auto prose prose-invert prose-green">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Modelo de Contrato para Influencer Digital (Grátis)
          </h1>
          <p className="text-sm text-gray-400">
            Por Reginaldo Silva Santos | Atualizado em {new Date().toLocaleDateString("pt-BR")}
          </p>
        </header>

        <section>
          <p>
            Se você é <strong>influencer, creator ou marca</strong>, precisa de um contrato que
            garanta entrega, valor, prazo e uso de imagem. Baixe nosso modelo em Word
            (100 % gratuito) e adapte em 5 minutos.
          </p>

          <h2>O que o modelo inclui?</h2>
          <ul>
            <li>Objeto e escopo da parceria</li>
            <li>Valor, forma e prazo de pagamento</li>
            <li>Entregas (posts, stories, reels, links)</li>
            <li>Direito de imagem e propriedade intelectual</li>
            <li>Cláusula LGPD (uso de dados)</li>
            <li>Multa por atraso ou não entrega</li>
            <li>Prazo de vigência e rescisão</li>
          </ul>

          <h2>Baixe agora – sem cadastro</h2>
          <div className="my-6 p-4 bg-green-900/20 border border-green-500 rounded">
            <p className="font-semibold text-green-400">
              📄 Modelo-Contrato-Influencer.docx (4 páginas)
            </p>
            <Link
              href="https://wa.me/5588999999999?text=Quero%20o%20modelo%20de%20contrato%20influencer"
              className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              Obter pelo WhatsApp
            </Link>
          </div>

          <h2>Precisa de contrato sob medida?</h2>
          <p>
            Se sua parceria tem cláusulas específicas (exclusividade, sorteios, códigos promocionais),
            entre em contato e receba orçamento em 5 minutos.
          </p>
          <Link
            href="/contratar"
            className="inline-block mt-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded"
          >
            Solicitar consultoria
          </Link>

          <h2>Posts relacionados</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link className="underline text-green-400" href="/blog/lgpd-para-ecommerce">
                LGPD para e-commerce: checklist rápido
              </Link>
            </li>
            <li>
              <Link className="underline text-green-400" href="/blog/direito-autoral-reels">
                Direito autoral em reels: o que você precisa saber
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
