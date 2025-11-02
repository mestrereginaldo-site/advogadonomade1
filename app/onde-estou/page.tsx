import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onde Estou - Advogado Nômade",
  description: "Advogado nômade atendendo atualmente em Florianópolis/SC. Atendimento online em todo Brasil. OAB/SC 57.879.",
  keywords: "advogado Florianópolis, advogado online, atendimento jurídico online, OAB/SC",
};

const cidadeAtual = "Florianópolis/SC";
const dataAtual = "15/10/2025";

export default function OndeEstou() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Onde Estou Hoje</h1>
          <p className="text-xl mb-4">
            Atendimento online em <strong>qualquer cidade do Brasil</strong>. Hoje estou em:
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* PIN COLORIDO (sem imagem) */}
          <div className="flex justify-center mb-6">
            <svg viewBox="0 0 800 600" className="w-full max-w-2xl h-auto">
              <rect width="800" height="600" fill="#f3f4f6" />
              <path d="M100 100 L700 100 L700 500 L100 500 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
              <circle cx="400" cy="300" r="12" fill="#3b82f6" />
              <text x="400" y="330" textAnchor="middle" className="text-sm font-semibold fill-blue-600">
                {cidadeAtual}
              </text>
            </svg>
          </div>

          {/* INFO + CTA */}
          <div className="mb-8">
            <p className="text-lg">
              📍 <strong>{cidadeAtual}</strong> • {dataAtual}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Atendo online em qualquer cidade do Brasil. OAB/SC 57.879
            </p>
          </div>

          {/* CTA FINAL (lead magnet) */}
          <div className="text-center">
            <Link href="/consultoria" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Falar comigo em qualquer cidade
            </Link>
          </div>

          {/* ATUALIZAÇÃO MANUAL (opcional) */}
          <div className="mt-10 p-6 border border-gray-300 rounded bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Atualização manual</h3>
            <p className="text-sm mb-4">
              Envie um WhatsApp com sua cidade e eu atualizo o mapa em 24 horas.
            </p>
            <Link
              href="https://wa.me/71986482241?text=Olá, estou em [CIDADE] e quero saber mais sobre consultoria."
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Enviar localização
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
