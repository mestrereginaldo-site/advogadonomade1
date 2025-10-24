// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white px-8">
      <section className="text-center max-w-3xl">
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
      </section>
    </main>
  )
}
