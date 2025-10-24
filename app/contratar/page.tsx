// app/contratar/page.tsx
"use client";
import { useState } from "react";

export default function Contratar() {
  const [step, setStep] = useState<"form" | "quote">("form");
  const [data, setData] = useState({
    nome: "",
    whatsapp: "",
    caso: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envia os dados para você (por enquanto via WhatsApp)
    const msg = `NOVO LEAD - Contratar Advogado Nômade%0A%0ANome: ${data.nome}%0AWhatsApp: ${data.whatsapp}%0ACaso: ${data.caso}`;
    window.open(`https://wa.me/5588999999999?text=${msg}`, "_blank");
    setStep("quote");
  };

  if (step === "quote") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white px-8">
        <section className="max-w-2xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Obrigado!</h1>
          <p className="text-lg mb-6">
            Responderemos em até <strong>5 minutos</strong> com o valor e o passo a passo para pagamento.
          </p>
          <p className="text-amber-400">📲 Verifique seu WhatsApp.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white px-8">
      <section className="max-w-2xl w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Consultoria Jurídica Express
        </h1>
        <p className="text-lg mb-6 text-center">
          Preencha o formulário abaixo e receba um orçamento personalizado em até 5 minutos.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Nome completo</label>
            <input
              name="nome"
              required
              value={data.nome}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">WhatsApp (com DDD)</label>
            <input
              name="whatsapp"
              type="tel"
              required
              value={data.whatsapp}
              onChange={handleChange}
              placeholder="88999999999"
              className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Resumo do caso (ou dúvida)</label>
            <textarea
              name="caso"
              required
              rows={4}
              value={data.caso}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg"
          >
            Receber orçamento no WhatsApp
          </button>
        </form>

        <p className="text-xs text-center mt-4 text-gray-400">
          Sem compromisso. Seu dados nunca serão compartilhados.
        </p>
      </section>
    </main>
  );
}
