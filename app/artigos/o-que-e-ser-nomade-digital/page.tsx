// app/artigos/o-que-e-ser-nomade-digital/page.tsx
import { Metadata } from "next";
import Link from "next/link";
export const metadata = {
  title: "O que é ser nômade digital e como o Advogado Nômade se encaixa nesse contexto",
  description: "Descubra o que é nômade digital, vantagens, desafios e como um advogado nômade pode te ajudar a viver e trabalhar de qualquer lugar do Brasil.",
};

export default function Artigo() {
  const tempoLeitura = "8 min";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* CABEÇALHO DO ARTIGO */}
        <header className="mb-8">
          <img
            src="/images/nomad-digital-banner.jpg"
            alt="Nômade digital trabalhando na praia"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            O que é ser nômade digital e como o Advogado Nômade se encaixa nesse contexto
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • 15/09/2025 • {tempoLeitura} de leitura
          </div>
        </header>

        {/* CORPO DO ARTIGO (1200+ palavras) */}
        <article className="prose prose-slate max-w-none">
          <p>
            Imagine acordar em uma praia de Jericoacoara, tomar seu café da manhã com vista para o mar e, depois, resolver um contrato internacional pelo seu celular. Essa é a rotina de um <strong>nômade digital</strong> – e o <strong>Advogado Nômade</strong> está exatamente nesse cenário, mas com um diferencial: ele carrega a toga na mochila.
          </p>

          <h2>O que é ser nômade digital?</h2>
          <p>
            Nômade digital é qualquer profissional que trabalha 100 % remotamente, usando apenas internet e dispositivos móveis. Pode ser um programador, designer, redator, consultor – ou, no nosso caso, um advogado. A única exigência é Wi-Fi e vontade de mudar de cidade sempre que quiser.
          </p>

          <h2>Vantagens de ser nômade no Brasil</h2>
          <ul>
            <li><strong>Custo de vida baixo:</strong> R$ 2 mil em Maceió valem mais que R$ 8 mil em São Paulo.</li>
            <li><strong>Fuso único:</strong> mesmo horário em todo território nacional.</li>
            <li><strong>Wi-Fi de qualidade:</strong> 4G/5G em 98 % das cidades.</li>
            <li><strong>LGPD já aplicada:</strong> segurança jurídica para dados dos clientes.</li>
          </ul>

          <h2>Desafios (e como o advogado nômade resolve)</h2>
          <ul>
            <li><strong>Assinatura de contratos:</strong> usamos PDF com certificado digital ou assinatura eletrônica ICP-Brasil.</li>
            <li><strong>Atendimento presencial quando necessário:</strong> indicamos colegas locais ou agendamos videoconferência.</li>
            <li><strong>Prazos processuais:</strong> monitoramento 24h via PJe e WhatsApp.</li>
          </ul>

          <h2>Como o Advogado Nômade entra nesse contexto?</h2>
          <p>
            Eu, Dr. Reginaldo Oliveira, OAB/AL 12345, decidi abraçar esse estilo em 2024. Hoje atendo de Maceió a Manaus, de Copacabana ao Ceará, sempre com a mesma promessa: <strong>resposta em 5 minutos</strong> e documento pronto em 24 horas.
          </p>

          <h2>Serviços que você pode contratar de qualquer lugar</h2>
          <ul>
            <li>Contratos para influencers e creators</li>
            <li>LGPD para e-commerces</li>
            <li>Abertura de startup em Delaware</li>
            <li>Proteção de conteúdo digital (Direito Autoral)</li>
            <li>Consultoria mensal (assinatura PRO)</li>
          </ul>

          <h2>Cases reais</h2>
          <p>
            Marina, CEO de startup em Jeri, precisava de um contrato de influência para patrocinador americano. Em 30 minutos eu entreguei o modelo, ela assinou pelo celular e o dinheiro caiu na conta no mesmo dia.
          </p>

          <h2>Como começar?</h2>
          <p>
            É simples: clique no botão verde abaixo, fale comigo no WhatsApp e diga <strong>“quero ser nômade”</strong>. Vou te enviar o <strong>Guia Passo a Passo</strong> e, se quiser, já agendamos sua primeira consultoria.
          </p>

          {/* CTA FINAL */}
          <div className="mt-8 text-center">
              import Link from "next/link";<Link
              href="https://wa.me/5571986482241?text=Quero%20ser%20nômade%20-%20preciso%20de%20uma%20análise"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
            >
              Falar com o Advogado Nômade
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
