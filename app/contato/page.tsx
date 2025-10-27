"use client";

import Link from "next/link";

export const metadata = {
  title: "Contato - Advogado Nômade",
  description: "Fale com Dr. Reginaldo Oliveira – consultoria online em qualquer cidade do Brasil.",
  keywords: "contato advogado, formulário de contato, consultoria online, advogado [cidade], OAB SC 57.879",
  openGraph: {
    title: "Contato - Advogado Nômade",
    description: "Fale com Dr. Reginaldo Oliveira – consultoria online em qualquer cidade do Brasil.",
    url: "https://advogadonomade.com.br/contato",
    siteName: "Advogado Nômade",
    images: ["https://advogadonomade.com.br/images/contato-cover.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const whatsapp = (form.elements.namedItem("whatsapp") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;
    const msg = `NOVO CONTATO - Advogado Nômade%0A%0ANome: ${nome}%0AWhatsApp: ${whatsapp}%0AMensagem: ${mensagem}`;
    window.open(`https://wa.me/71986482241?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* CABEÇALHO + SEO LOCAL */}
        <header className="mb-8">
          <img
            src="https://advogadonomade.com.br/images/contato-cover.jpg"
            alt="Contato Advogado Nômade"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contato</h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • OAB/SC 57.879 • Atendimento online em qualquer cidade do Brasil
          </div>
        </header>

        {/* INTRODUÇÃO */}
        <article className="prose prose-slate max-w-none mb-8">
          <p>
            Preencha o formulário abaixo e receba resposta em até 5 minutos via WhatsApp. Sem burocracia, sem fila.
          </p>
          <ul>
            <li>Resposta em até 5 minutos via WhatsApp</li>
            <li>Sem fila, sem burocracia</li>
            <li>Atendo em qualquer cidade do Brasil</li>
            <li>Consultoria online com OAB/SC 57.879</li>
          </ul>
        </article>

        {/* FORMULÁRIO COMPLETO */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-sm">Nome</label>
            <input name="nome" required className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-sm">WhatsApp (com DDD)</label>
            <input name="whatsapp" type="tel" required placeholder="71986482241" className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-sm">Mensagem</label>
            <textarea name="mensagem" required rows={5} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" placeholder="Descreva sua dúvida ou caso..." />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded">
            Enviar mensagem
          </button>
        </form>

        {/* CTA FINAL (upsell) */}
        <div className="mt-10 text-center">
          <Link href="/consultoria" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg">
            Quer uma consultoria completa? Contrate aqui
          </Link>
        </div>
      </div>
    </main>
  );
}
