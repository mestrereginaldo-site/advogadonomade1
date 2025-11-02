// app/artigos/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artigos Jurídicos - Advogado Nômade",
  description: "Artigos jurídicos atualizados sobre direito trabalhista, trânsito, família, LGPD e mais. Conteúdo especializado do Advogado Nômade.",
  keywords: "artigos jurídicos, direito trabalhista, direito trânsito, LGPD, pensão alimentícia, advogado online",
};

const artigos = [
  {
    title: "5 direitos que todo trabalhador esquece ao pedir demissão",
    description: "Descubra quais são os direitos trabalhistas que muitos profissionais deixam de exigir ao sair de um emprego.",
    link: "/artigos/direitos-demissao",
    readTime: "5 min"
  },
  {
    title: "Multa por excesso de velocidade – quando pode ser anulada?",
    description: "Entenda em quais situações é possível recorrer de multas por excesso de velocidade com chances de sucesso.",
    link: "/artigos/multa-velocidade",
    readTime: "7 min"
  },
  {
    title: "Como calcular pensão de filho maior de 18 anos?",
    description: "Saiba como é feito o cálculo da pensão alimentícia para filhos que já atingiram a maioridade.",
    link: "/artigos/pensao-maior-idade",
    readTime: "6 min"
  }
];

export default function Artigos() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">📚 Artigos Jurídicos</h1>
          <p className="text-xl mb-4">Informações jurídicas atualizadas para esclarecer suas dúvidas</p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos.map((artigo, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-900">{artigo.title}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{artigo.readTime}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{artigo.description}</p>
                  <Link href={artigo.link} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
                    Ler mais <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
