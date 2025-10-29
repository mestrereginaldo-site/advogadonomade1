import Link from "next/link";

export const metadata = {
  title: "Multa de trânsito por excesso de velocidade – quando pode ser anulada?",
  description: "Radar mal sinalizado, laudo vencido, fotos borradas... Saiba todos os defeitos que anulam a multa e como recorrer passo a passo.",
};

export default function Artigo() {
  const tempoLeitura = "12 min";
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-8">
          <img
            src="/images/radar-cover.jpg"
            alt="Radar de velocidade na rodovia"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Multa de trânsito por excesso de velocidade – quando pode ser anulada?
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • 20/07/2025 • {tempoLeitura} de leitura
          </div>
        </header>

        <article className="prose prose-slate max-w-none mb-8">
          <p>
            Você abre o aplicativo do Detran e... <strong>multa de 293,47 reais</strong> por excesso de velocidade. Calma: antes de pagar, saiba que <strong>46 % dos recursos são aceitos</strong> por defeitos formais. Abaixo eu listo os erros mais comuns e ensino como recorrer sem sair de casa.
          </p>

          <h2>1. Radar sem sinalização prévia (Art. 301 CTB)</h2>
          <p>
            A sinalização deve estar <strong>500 m antes</strong> em rodovias e <strong>200 m antes</strong> em vias urbanas. Sem placa? Multa é <strong>nula absoluta</strong>. Anexe foto da via no recurso.
          </p>

          <h2>2. Laudo de calibração vencido</h2>
          <p>
            Equipamentos precisam de <strong>certificado válido de 12 meses</strong>. Peça ao Detran o laudo (Lei 12.527/2011) – se estiver vencido, peça anulação.
          </p>

          <h2>3. Fotos borradas ou sem data/hora</h2>
          <p>
            A imagem deve mostrar <strong>placa do veículo, velocidade capturada e timestamp</strong>. GPS errado? Já dá ganho.
          </p>

          <h2>4. Velocidade abaixo do limite + tolerância</h2>
          <p>
            Tolerância é <strong>7 km/h em radar fixo</strong> e <strong>10 km/h em móvel</strong>. Ex.: limite 80 km/h → só gera multa a partir de 87 km/h. Use nossa <Link className="underline text-green-600" href="/calculadoras">calculadora de multa</Link> e confira.
          </p>

          <h2>5. Duplicidade de autuação</h2>
          <p>
            Mesmo radar, mesma hora, mesma placa? Só vale uma. Peça cancelamento da segunda.
          </p>

          <h2>Passo a passo para recorrer (sem sair de casa)</h2>
          <ol>
            <li>1. Baixe o aplicativo do Detran da sua UF.</li>
            <li>2. Salve as fotos da multa em PDF.</li>
            <li>3. Abra o site <strong>Recorrida Fácil</strong> (gratuito) ou use nosso modelo pronto.</li>
            <li>4. Anexe prints da via (Google Street View) e laudo (se vencido).</li>
            <li>5. Envie em até <strong>30 dias</strong> (contados da notificação).</li>
          </ol>

          <h2>Prazos e multa de trânsito – resumo visual</h2>
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">Recurso</th>
                <th className="border px-2 py-1">Prazo</th>
                <th className="border px-2 py-1">Desconto se aceito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">1ª instância</td>
                <td className="border px-2 py-1">30 dias</td>
                <td className="border px-2 py-1">100 % (multa cancelada)</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2ª instância (CETRAN)</td>
                <td className="border px-2 py-1">30 dias</td>
                <td className="border px-2 py-1">100 %</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Juizado Especial</td>
                <td className="border px-2 py-1">5 anos</td>
                <td className="border px-2 py-1">100 % + custas</td>
              </tr>
            </tbody>
          </table>

          <h2>Modelo de recurso pronto (copie, cole e personalize)</h2>
          <pre className="bg-gray-100 p-3 rounded text-sm">
            {`Exmo. Sr. Presidente da JARI,

            1. Dados da autuação: nº ______, data _____, via ______.
            2. Fundamentação: art. 301 CTB – ausência de sinalização conforme foto anexa.
            3. Pedido: anulação da multa e dos pontos.

            Anexos: prints da via (Google Street View) e laudo de calibração vencido.

            Atenciosamente,
            Seu nome + CNH`}
          </pre>
        </article>

        <div className="text-center">
          <Link
            href="https://wa.me/5571986482241?text=Quero%20o%20modelo%20de%20recurso%20pronto"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Receber modelo de recurso no WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}
