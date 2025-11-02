// app/artigos/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Artigos Jurídicos - Advogado Nômade",
  description: "Artigos e conteúdos jurídicos sobre direito trabalhista, trânsito, LGPD, pensão alimentícia e mais. Atendimento online em todo Brasil.",
};

export default function Artigos() {
  const artigos = [
    {
      slug: "lgpd-ecommerce-checklist-2025",
      titulo: "LGPD para E-commerce: Checklist Rápido 2025",
      descricao: "Checklist LGPD obrigatório para e-commerce 2025. Metas tags, cookies, política de privacidade, direitos do titular.",
      data: "30/09/2025",
      tempoLeitura: "7 min",
    },
    {
      slug: "multa-velocidade",
      titulo: "Multa de trânsito por excesso de velocidade – quando pode ser anulada?",
      descricao: "Radar mal sinalizado, laudo vencido, fotos borradas... Recurso passo a passo.",
      data: "20/07/2025",
      tempoLeitura: "12 min",
    },
    {
      slug: "direitos-demissao",
      titulo: "5 direitos que todo trabalhador esquece ao pedir demissão",
      descricao: "Saiba o que você NÃO pode perder: 13º, feiras, FGTS, aviso prévio e multa de 40%.",
      data: "22/07/2025",
      tempoLeitura: "10 min",
    },
    {
      slug: "pensao-maior-idade",
      titulo: "Como calcular pensão de filho maior de 18 anos?",
      descricao: "Universitário, cursinho, intercâmbio, deficiência. Entenda quando continua e como calcular.",
      data: "18/07/2025",
      tempoLeitura: "11 min",
    },
    {
      slug: "nomade-digital",
      titulo: "O que é ser nômade digital e como o Advogado Nômade se encaixa nesse contexto",
      descricao: "Entenda o conceito, vantagens e desafios de viver e trabalhar de qualquer lugar do Brasil.",
      data: "15/09/2025",
      tempoLeitura: "8 min",
    },
  ];

  return (
    <>
      {/* Header Interno */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Artigos Jurídicos</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Direito descomplicado para creators e empresas.
          </p>
        </div>
      </section>

      {/* Lista de Artigos */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <span className="text-sm text-green-600 font-medium">{artigo.data}</span>
                    <span className="text-sm text-gray-500">{artigo.tempoLeitura} de leitura</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    <Link href={`/artigos/${artigo.slug}`} className="hover:text-green-600 transition-colors">
                      {artigo.titulo}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{artigo.descricao}</p>
                  <Link 
                    href={`/artigos/${artigo.slug}`} 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                  >
                    Ler mais <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Precisa de ajuda jurídica?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Envie sua dúvida e receba uma resposta personalizada em até 5 minutos.
          </p>
          <a
            href="https://wa.me/5571986482241?text=Tenho%20uma%20d%C3%BAvida%20jur%C3%ADdica"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <i className="fab fa-whatsapp"></i> Falar com advogado no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
