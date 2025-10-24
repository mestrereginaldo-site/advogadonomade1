// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* BANNER ESCURO (só na home) */}
      <section className="w-full bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Advogado Nômade
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Direito de qualquer lugar, para qualquer pessoa, em qualquer hora.
          </p>
          <p className="mb-8 text-amber-400">
            📍 Hoje atendendo de <span className="font-semibold">Maceió/AL</span> → resposta em 5 min
          </p>
          <Link
            href="https://wa.me/5588999999999?text=Preciso%20de%20um%20advogado%20agora"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Falar com advogado no WhatsApp
          </Link>
        </div>
      </section>

      {/* MENU BRANCO (depois do banner) */}
      <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-extrabold tracking-tight text-black">
            Advogado Nômade
          </span>

          <div className="hidden md:flex gap-6 text-base text-black font-medium">
            <Link href="/" className="hover:text-green-600">Início</Link>
            <Link href="/artigos" className="hover:text-green-600">Artigos</Link>
            <Link href="/blog" className="hover:text-green-600">Blog</Link>
            <Link href="/consultoria" className="hover:text-green-600">Consultoria Premium</Link>
            <Link href="/contato" className="hover:text-green-600">Contato</Link>
          </div>

          <div className="md:hidden text-black text-2xl">☰</div>
        </div>
      </nav>

      {/* CORPO BRANCO (vazio para você preencher) */}
      <section className="w-full bg-white text-black">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-4">Bem-vindo ao Advogado Nômade</h2>
          <p className="mb-4">
            Em breve: artigos, calculadoras, consultoria jurídica e muito mais.
          </p>
        </div>
      </section>

      {/* MENU FLUTUANTE NO RODAPÉ (WhatsApp) */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="https://wa.me/5588999999999?text=Preciso%20de%20um%20advogado%20agora"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full shadow-lg"
        >
          <span>WhatsApp</span>
        </Link>
      </div>
    </>
  );
}
