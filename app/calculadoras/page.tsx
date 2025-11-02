// app/calculadoras/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import CalculadorasClient from "./CalculadorasClient";

export const metadata: Metadata = {
  title: "Calculadoras Jurídicas Grátis - Advogado Nômade",
  description: "Calculadoras jurídicas gratuitas para rescisão trabalhista, multas de trânsito, indenização moral e pensão alimentícia. Resultados instantâneos.",
  keywords: "calculadora trabalhista, rescisão cálculo, multa trânsito, pensão alimentícia, indenização moral, advogado online",
};

export default function Calculadoras() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">🧮 Calculadoras Jurídicas</h1>
          <p className="text-xl mb-8">Estime valores em segundos. Resultados são referências – confirme com nosso advogado.</p>
          
          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5571986482241?text=Olá, quero uma consultoria jurídica"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <i className="fab fa-whatsapp"></i> Falar com advogado
          </a>
        </div>
      </section>

      {/* Calculadoras Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <CalculadorasClient />
        </div>
      </section>
    </>
  );
}
