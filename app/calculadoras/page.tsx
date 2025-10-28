"use client";
import Link from "next/link";

export default function Calculadoras() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Calculadoras Jurídicas</h1>
        <p className="text-lg text-gray-600 mb-8">
          Estime valores de rescisão, multas, indenizações e pensão. Use por sua conta e risco – sempre consulte um advogado.
        </p>

        {/* Botão para WhatsApp */}
        <div className="mb-8 text-center">
          <Link
            href="https://wa.me/71986482241?text=Olá, quero uma consultoria jurídica"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Falar com advogado
          </Link>
        </div>

        {/* Cards simples (sem Shadcn) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded p-6">
            <h3 className="text-xl font-bold mb-2">Rescisão Trabalhista</h3>
            <p className="text-sm text-gray-600 mb-4">Estime sua rescisão em minutos.</p>
            <Link href="/calculadoras/rescisao">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                Calcular
              </button>
            </Link>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-xl font-bold mb-2">Multa de Trânsito</h3>
            <p className="text-sm text-gray-600 mb-4">Valor e pontos na CNH.</p>
            <Link href="/calculadoras/multa-transito">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                Calcular
              </button>
            </Link>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-xl font-bold mb-2">Indenização Moral</h3>
            <p className="text-sm text-gray-600 mb-4">Faixa de valores para danos morais.</p>
            <Link href="/calculadoras/indenizacao">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                Calcular
              </button>
            </Link>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-xl font-bold mb-2">Pensão Alimentícia</h3>
            <p className="text-sm text-gray-600 mb-4">Estime pensão por filho.</p>
            <Link href="/calculadoras/pensao">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                Calcular
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
