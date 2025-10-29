"use client";
import Link from "next/link";

export default function Artigos() {
  const posts = [
    {
      slug: "o-que-e-ser-nomade-digital",
      title: "O que é ser nômade digital e como o Advogado Nômade se encaixa nesse contexto",
      desc: "Entenda o conceito, vantagens e desafios de viver e trabalhar de qualquer lugar do Brasil.",
      date: "15/09/2025",
      tempo: "8 min",
    },
    {
      slug: "direitos-demissao",
      title: "5 direitos que todo trabalhador esquece ao pedir demissão",
      desc: "Saiba o que você NÃO pode perder: 13º, férias, FGTS, aviso prévio e multa de 40 %.",
      date: "22/07/2025",
      tempo: "10 min",
    },
    {
      slug: "multa-velocidade",
      title: "Multa de trânsito por excesso de velocidade – quando pode ser anulada?",
      desc: "Radar mal sinalizado, laudo vencido, fotos borradas... Recurso passo a passo.",
      date: "20/07/2025",
      tempo: "12 min",
    },
    {
      slug: "pensao-maior-idade",
      title: "Como calcular pensão de filho maior de 18 anos?",
      desc: "Universitário, cursinho, intercâmbio, deficiência. Entenda quando continua e como calcular.",
      date: "18/07/2025",
      tempo: "11 min",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Artigos</h1>
        <p className="text-gray-600 mb-10">Direito descomplicado para creators e empresas.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/artigos/${post.slug}`} className="group">
              <div className="border border-gray-200 rounded p-5 hover:shadow-lg transition">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-green-600">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">{post.desc}</p>
                <div className="text-xs text-gray-400">
                  {post.date} • {post.tempo} de leitura
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
