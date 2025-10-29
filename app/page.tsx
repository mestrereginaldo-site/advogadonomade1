"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* BANNER ESCURO (hero) */}
      <section className="w-full bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Advogado Nômade</h1>
          <p className="text-lg md:text-xl mb-6">Direito de qualquer lugar, para qualquer pessoa, a qualquer hora.</p>
          <p className="mb-8 text-amber-400">📍 Hoje atendendo de <span className="font-semibold">Florianópolis/SC</span> → resposta em 5 min</p>
          <Link
            href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Falar com advogado no WhatsApp
          </Link>
        </div>
      </section>

      {/* CORPO BRANCO (conteúdo novo) */}
      <section className="w-full bg-white text-black">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

          {/* Bloco 1 – Calculadoras */}
          <div>
            <h2 className="text-3xl font-bold mb-4">🧮 Calculadoras Jurídicas Grátis</h2>
            <p className="mb-6 text-gray-600">Estime valores em segundos. Resultados são referências – confirme com nosso advogado.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CardLink
                title="Rescisão Trabalhista"
                desc="13º, férias, FGTS e aviso prévio."
                href="/calculadoras"
              />
              <CardLink
                title="Multas de Trânsito"
                desc="Valor + pontos na CNH."
                href="/calculadoras"
              />
              <CardLink
                title="Indenização Moral"
                desc="Faixa para danos morais."
                href="/calculadoras"
              />
              <CardLink
                title="Pensão Alimentícia"
                desc="Por filho, com gastos extras."
                href="/calculadoras"
              />
            </div>
          </div>

          {/* Bloco 2 – Provas sociais */}
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
            >
              Quero minha consultoria no WhatsApp
            </Link>
          </div>

          {/* Bloco 3 – Newsletter */}
          <div>
            <h2 className="text-3xl font-bold mb-4">📬 Dicas jurídicas de graça</h2>
            <p className="mb-4 text-gray-600">1 e-mail por semana, 2 min de leitura, sempre útil.</p>
            <form
              action="https://api.staticforms.xyz/submit"
              method="POST"
              className="space-y-4 max-w-md"
            >
              <input type="hidden" name="accessKey" value="SUA-ACCESS-KEY-STATICFORMS" />
              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
              >
                Cadastrar
              </button>
            </form>
          </div>

          {/* Bloco 4 – Artigos em destaque */}
          <div>
            <h2 className="text-3xl font-bold mb-4">📚 Artigos mais lidos</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <Link className="underline hover:text-green-600" href="/artigos/direitos-demissao">5 direitos que todo trabalhador esquece ao pedir demissão</Link></li>
              <li>• <Link className="underline hover:text-green-600" href="/artigos/multa-velocidade">Multa por excesso de velocidade – quando pode ser anulada?</Link></li>
              <li>• <Link className="underline hover:text-green-600" href="/artigos/pensao-maior-idade">Como calcular pensão de filho maior de 18 anos?</Link></li>
            </ul>
          </div>

          </div>
        </div>
      </section>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full shadow-lg"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}

// ---------- COMPONENTE AUXILIAR ----------

function CardLink({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block border border-gray-200 rounded p-4 hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </Link>
  );
}
