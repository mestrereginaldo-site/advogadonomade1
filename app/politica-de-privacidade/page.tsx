// app/politica-de-privacidade/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - Advogado Nômade",
  description: "Política de privacidade e proteção de dados do Advogado Nômade. Conformidade com LGPD.",
};

export default function Politica() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-xl mb-4">Acesso em: {new Date().toLocaleDateString("pt-BR")}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Dados coletados</h2>
            <p className="mb-8">
              Coletamos nome, WhatsApp e descrição do caso – apenas para responder sua solicitação.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Uso dos dados</h2>
            <p className="mb-8">
              Os dados são usados exclusivamente para prestar consultoria jurídica e nunca são vendidos ou compartilhados com terceiros.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Cookies</h2>
            <p className="mb-8">
              Utilizamos apenas cookies essenciais para funcionamento do site (Next.js/Vercel).
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Exclusão</h2>
            <p className="mb-8">
              Para apagar seus dados, envie "apagar meus dados" no WhatsApp 71 98648-2241.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Contato</h2>
            <p className="mb-8">
              Dr. Reginaldo Oliveira – OAB/SC: 57.879 – WhatsApp:{" "}
              <a href="https://wa.me/5571986482241" className="text-blue-600 underline font-semibold">
                71 98648-2241
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
