"use client";
import Link from "next/link";

export default function Consultoria() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const whatsapp = (form.elements.namedItem("whatsapp") as HTMLInputElement).value;
    const caso = (form.elements.namedItem("caso") as HTMLInputElement).value;
    const msg = `NOVO LEAD - Consultoria Premium%0A%0ANome: ${nome}%0AWhatsApp: ${whatsapp}%0ACaso: ${caso}`;
    window.open(`https://wa.me/5588999999999?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* HEADLINE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Consultoria Premium</h1>
        <p className="text-lg mb-6">
          Análise jurídica personalizada em até 24 horas, com orientação por escrito e suporte via WhatsApp por 7 dias.
        </p>

        {/* PREÇOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Plano Básico */}
          <div className="border border-gray-300 rounded p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Básico</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">R$ 197</p>
            <ul className="text-sm text-left space-y-1 mb-4">
              <li>✅ Análise de 1 tema</li>
              <li>✅ Orientação por escrito</li>
              <li>✅ Suporte 7 dias via WhatsApp</li>
            </ul>
            <button
              onClick={() => window.open("https://wa.me/5588999999999?text=Quero%20Consultoria%20Básica%20R%24%20197", "_blank")}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
            >
              Quero este
            </button>
          </div>

          {/* Plano Intermediário */}
          <div className="border-2 border-green-500 rounded p-6 text-center bg-green-50">
            <h3 className="text-xl font-semibold mb-2">Intermediário</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">R$ 497</p>
            <ul className="text-sm text-left space-y-1 mb-4">
              <li>✅ Análise de até 3 temas</li>
              <li>✅ Modelo de contrato ou petição</li>
              <li>✅ Suporte 14 dias via WhatsApp</li>
              <li>✅ Revisão de documento</li>
            </ul>
            <button
              onClick={() => window.open("https://wa.me/5588999999999?text=Quero%20Consultoria%20Intermediária%20R%24%20497", "_blank")}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
            >
              Quero este
            </button>
          </div>

          {/* Plano Premium */}
          <div className="border border-gray-300 rounded p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">R$ 997</p>
            <ul className="text-sm text-left space-y-1 mb-4">
              <li>✅ Análise ilimitada por 30 dias</li>
              <li>✅ Modelos personalizados</li>
              <li>✅ Suporte prioritário 30 dias</li>
              <li>✅ Call de 30 minutos</li>
            </ul>
            <button
              onClick={() => window.open("https://wa.me/5588999999999?text=Quero%20Consultoria%20Premium%20R%24%20997", "_blank")}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
            >
              Quero este
            </button>
          </div>
        </div>

        {/* FORMULÁRIO PERSONALIZADO */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Nome completo</label>
            <input name="nome" required className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">WhatsApp (com DDD)</label>
            <input name="whatsapp" type="tel" required className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Resumo do caso ou dúvida</label>
            <textarea name="caso" required rows={4} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded">
            Receber orçamento no WhatsApp
          </button>
        </form>

        {/* GARANTIA */}
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded text-center">
          <p className="text-green-800 font-semibold">✅ Garantia de 7 dias ou seu dinheiro de volta</p>
        </div>
      </div>
    </main>
  );
}
