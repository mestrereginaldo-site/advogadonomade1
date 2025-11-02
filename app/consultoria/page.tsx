import { Metadata } from "next";
import ConsultoriaClient from "./ConsultoriaClient";

export const metadata: Metadata = {
  title: "Consultoria Jurídica Premium - Advogado Nômade",
  description: "Consultoria jurídica premium com análise personalizada em até 24 horas. Planos básico, intermediário e premium. Suporte via WhatsApp.",
  keywords: "consultoria jurídica, advogado online, plano consultoria, análise jurídica, suporte WhatsApp",
};

export default function Consultoria() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Consultoria Premium</h1>
          <p className="text-xl mb-8">Análise jurídica personalizada em até 24 horas, com orientação por escrito e suporte via WhatsApp.</p>
        </div>
      </section>

      <ConsultoriaClient />
    </>
  );
}
