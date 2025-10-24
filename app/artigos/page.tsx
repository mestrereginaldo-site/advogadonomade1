// app/artigos/page.tsx
import Link from "next/link";

const artigos = [
  {
    slug: "o-que-e-ser-nomade-digital",
    titulo: "O que é ser nômade digital e como o Advogado Nômade se encaixa nesse contexto",
    data: "15/09/2025",
    tempo: "8 min",
    img: "/images/nomad-digital-banner.jpg",
  },
];

export default function ArtigosIndex() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Artigos</h1>
        <p className="mb-8">Direito descomplicado para creators e empresas.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artigos.map((art) => (
            <Link key={art.slug} href={`/artigos/${art.slug}`} className="group block">
              <div className="border border-gray-200 rounded overflow-hidden hover:shadow-lg transition">
                <img src={art.img} alt={art.titulo} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-green-600">{art.titulo}</h3>
                  <div className="text-sm text-gray-500 mt-2">{art.data} • {art.tempo}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
