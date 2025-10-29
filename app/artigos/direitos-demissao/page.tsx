import Link from "next/link";

export const metadata = {
  title: "5 direitos que todo trabalhador esquece ao pedir demissão",
  description: "Saiba o que você NÃO pode perder ao pedir conta: 13º proporcional, férias vencidas, FGTS, aviso prévio e multa de 40%. Guia completo com cálculos.",
};

export default function Artigo() {
  const tempoLeitura = "10 min";
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-8">
          <img
            src="/images/demissao-cover.jpg"
            alt="Trabalhador assinando rescisão"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            5 direitos que todo trabalhador esquece ao pedir demissão
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • 22/07/2025 • {tempoLeitura} de leitura
          </div>
        </header>

        <article className="prose prose-slate max-w-none mb-8">
          <p>
            Pedir demissão parece simples: avisa o chefe, cumpre aviso e sai. <strong>Erro.</strong> A CLT garante verbas que muita gente deixa na mesa. Neste guia eu mostro <strong>exatamente o que você deve receber</strong> e como calcular cada centavo.
          </p>

          <h2>1. Saldo de salário (dias trabalhados no mês)</h2>
          <p>
            Você tem direito aos dias corridos do mês até a data final. Ex.: pede conta dia 15/07 → recebe 15 dias + DSR’s.
          </p>

          <h2>2. 13º salário proporcional</h2>
          <p>
            Regra: 1/12 avos por mês completo. Trabalhou 7 meses e 10 dias? Leva 7/12 do valor integral. Use nossa <Link className="underline text-green-600" href="/calculadoras">calculadora de rescisão</Link> e descubra o valor exato.
          </p>

          <h2>3. Férias vencidas + ⅓ constitucional</h2>
          <p>
            Se você não gozou o período aquisitivo anterior, leva 30 dias + ⅓. Nunca expire esse direito: depois de 2 anos a empresa pode converter em dinheiro, mas só se você concordar.
          </p>

          <h2>4. Aviso prévio indenizado (quando não cumpre)</h2>
          <p>
            Quem pede demissão <strong>não é obrigado</strong> a cumprir 30 dias, mas a empresa pode exigir. Se ela dispensar, deve pagar os 30 dias. Negocie!
          </p>

          <h2>5. Multa de 40 % sobre o FGTS</h2>
          <p>
            <strong>Mito:</strong> “quem pede não recebe multa”. <strong>Verdade:</strong> você não recebe a multa rescisória (40 %), mas pode sacar todo o saldo FGTS + rendimentos. Use o dinheiro para bancar a transição.
          </p>

          <h2>Bônus: cheque-list antes de entregar o crachá</h2>
          <ul>
            <li>☐ Peça cópia da rescisão assinada</li>
            <li>☐ Confira extrato FGTS (app Caixa)</li>
            <li>☐ Guarde comprovante de entrega de uniforme/ferramentas</li>
            <li>☐ Anote senha do PIS (para seguro-desemprego, se aplicar)</li>
          </ul>

          <h2>Quando vale a pena pedir demissão?</h2>
          <p>
            Se você tem outra vaga garantida, plano de saúde familiar ou quer abrir seu negócio. Em valetes financeiros, peça <strong>acordo mutual</strong> (dispensa sem justa causa) – assim você mantém a multa de 40 %.
          </p>
        </article>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://wa.me/5571986482241?text=Quero%20revisar%20minha%20rescisão"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Revisar minha rescisão no WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}
