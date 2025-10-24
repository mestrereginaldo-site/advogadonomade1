// app/blog/page.tsx
import Link from "next/link";

export default function BlogIndex() {
  const posts = [
    {
      slug: "modelo-contrato-influencer",
      title: "Modelo de Contrato para Influencer Digital (Grátis)",
      date: "24/10/2025",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p className="mb-8">Artigos jurídicos para creators e empresas.</p>

        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="border border-slate-700 rounded p-4 hover:bg-slate-800">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-semibold text-white hover:text-green-400">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 mt-1">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
