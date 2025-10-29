import Link from "next/link";

export const metadata = {
  title: "Como calcular pensão de filho maior de 18 anos?",
  description: "Universitário, cursinho, intercâmbio, deficiência, pós-graduação… Entenda quando a pensão continua e como calcular o valor correto.",
};

export default function Artigo() {
  const tempoLeitura = "11 min";
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-8">
          <img
            src="/images/graduation-cover.jpg"
            alt="Jovem formando com família"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Como calcular pensão de filho maior de 18 anos?
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • 18/07/2025 • {tempoLeitura} de leitura
          </div>
        </header>

        <article className="prose prose-slate max-w-none mb-8">
          <p>
            A lei diz que a obrigação alimentar cessa aos 18 anos – <strong>mas não é tão simples</strong>. Se o filho está na faculdade, tem deficiência ou faz cursinho, a pensão pode (e deve) continuar. Veja todas as hipóteses e aprenda a calcular o valor exato sem dor de cabeça.
          </p>

          <h2>1. Filho universitário (art. 1.694, § 2º, CC)</h2>
          <p>
            Curso superior presencial ou EAD conta? <strong>Conta.</strong> O STJ fixou o entendimento: até concluir a graduação ou atingir 24 anos (limite). Pós-graduação só se for stricto sensu (mestrado/doutorado).
          </p>

          <h2>2. Cursinho pré-vestibular</h2>
          <p>
            Período máximo: <strong>2 anos</strong> contados do término do ensino médio. Provas: comprovante de inscrição e frequência.
          </p>

          <h2>3. Intercâmbio acadêmico</h2>
          <p>
            Se o intercâmbio é obrigatório do curso (ex.: medicina), a pensão continua no valor integral. Se for opcional, pode-se reduzir 30 % (custos de moradia no exterior são maiores).
          </p>

          <h2>4. Deficiência física ou mental</h2>
          <p>
            Não há limite de idade. O valor deve cobrir <strong>terapias, medicamentos, aparelhos e cuidador</strong>. Use nossa <Link className="underline text-green-600" href="/calculadoras">calculadora de pensão</Link> e inclua esses gastos.
          </p>

          <h2>5. Pós-graduação stricto sensu</h2>
          <p>
            Mestrado (2 anos) ou doutorado (4 anos): a pensão continua se o filho comprovar <strong>dedicação exclusiva</strong> (bolsa ou matrícula full-time). Limite: 28 anos.
          </p>

          <h2>Como calcular o valor (passo a passo)</h2>
          <ol>
            <li><strong>Renda do pai/mãe pagador:</strong> use o último IRPF.</li>
            <li><strong>Número de filhos:</strong> divida proporcionalmente.</li>
            <li><strong>Gastos extras:</strong> mensalidade, moradia, plano de saúde, terapias.</li>
            <li><strong>Percentual:</strong> 20 % a 30 % por filho (limite 50 % da renda total).</li>
          </ol>

          <h2>Tabela prática – valores de referência (2025)</h2>
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">Situação</th>
                <th className="border px-2 py-1">% sobre renda</th>
                <th className="border px-2 py-1">Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Universitário (mensalidade 2 k)</td>
                <td className="border px-2 py-1">25 %</td>
                <td className="border px-2 py-1">+ 50 % dos gastos extras</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Cursinho + moradia</td>
                <td className="border px-2 py-1">20 %</td>
                <td className="border px-2 py-1">Máx. 2 anos</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Deficiência grave</td>
                <td className="border px-2 py-1">30 %</td>
                <td className="border px-2 py-1">Vitalício</td>
              </tr>
            </tbody>
          </table>

          <h2>Documentos que o juiz pede</h2>
          <ul>
            <li>Matrícula original (com carga horária)</li>
            <li>Declaração de frequência (mín. 75 %)</li>
            <li>Extrato bancário dos últimos 3 meses (comprova gastos)</li>
            <li>Laudo médico (caso de deficiência)</li>
          </ul>

          <h2>Como protocolar o pedido (sem advogado)</h2>
          <p>
            1. Acesse o <strong>Portal do PJe</strong> do seu estado.  
            2. Abra petição inicial (modelo abaixo).  
            3. Anexe os documentos em PDF.  
            4. Pague a taxa (geralmente R$ 300 – pode pedir isenção).  
            5. Aguarde a audiência (90 % dos casos são resolvidos por acordo).
          </p>

          <h2>Modelo de petição inicial (grátis)</h2>
          <pre className="bg-gray-100 p-3 rounded text-sm">
            {`EXMO. SR. JUIZ DE DIREITO DA ___ VARA DE FAMÍLIA DA COMARCA DE ______

            Petição inicial – revisão de pensão alimentícia

            1. Qualificação das partes (nome, CPF, endereço)
            2. Fundamentação: filho universitário, art. 1.694, § 2º, CC.
            3. Pedido: fixar pensão de 25 % sobre renda de R$ 5.000,00 + 50 % dos gastos 
            extras (comprovantes anexos).

            Anexos: matrícula, frequência, extratos, laudo (se houver).

            Local e data
            ___________________
            Assinatura do genitor`}
          </pre>
        </article>

        <div className="text-center">
          <Link
            href="https://wa.me/5571986482241?text=Quero%20revisar%20a%20pens%C3%A3o%20do%20meu%20filho%20maior"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Revisar pensão no WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}
