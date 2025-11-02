"use client";
import Link from "next/link";

export default function Consultoria() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const whatsapp = (form.elements.namedItem("whatsapp") as HTMLInputElement).value;
    const msg = `Olá, Preciso de uma análise do meu caso.%0A%0ANome: ${nome}%0AWhatsApp: ${whatsapp}`;
    window.open(`https://wa.me/71986482241?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Consultoria Premium</h1>
        <p className="text-lg mb-6 text-center">Análise jurídica personalizada em até 24 horas, com orientação por escrito e suporte via WhatsApp.</p>

        {/* PREÇOS (mesmos 3 cards compactos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* CARD R$ 197 */}
          <div className="border border-gray-300 rounded p-4 text-center">
            <h3 className="text-lg font-semibold mb-1">Básico</h3>
            <p className="text-2xl font-bold text-green-600 mb-2">R$ 197</p>
            <ul className="text-sm text-left space-y-1 mb-4"><li>✅ 1 tema</li><li>✅ Orientação escrita</li><li>✅ 7 dias WhatsApp</li></ul>
            <button onClick={() => window.open("https://wa.me/71986482241?text=Quero%20Básico%20R%24197", "_blank")} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">Quero este</button>
          </div>

          {/* CARD R$ 497 */}
          <div className="border-2 border-green-500 rounded p-4 text-center bg-green-50">
            <h3 className="text-lg font-semibold mb-1">Intermediário</h3>
            <p className="text-2xl font-bold text-green-600 mb-2">R$ 497</p>
            <ul className="text-sm text-left space-y-1 mb-4"><li>✅ 3 temas</li><li>✅ Modelo personalizado</li><li>✅ 14 dias WhatsApp</li><li>✅ Revisão de doc</li></ul>
            <button onClick={() => window.open("https://wa.me/71986482241?text=Quero%20Intermediário%20R%24497", "_blank")} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">Quero este</button>
          </div>

          {/* CARD R$ 997 */}
          <div className="border border-gray-300 rounded p-4 text-center">
            <h3 className="text-lg font-semibold mb-1">Premium</h3>
            <p className="text-2xl font-bold text-green-600 mb-2">R$ 997</p>
            <ul className="text-sm text-left space-y-1 mb-4"><li>✅ 30 dias ilimitado</li><li>✅ Modelos personalizados</li><li>✅ Suporte prioritário</li><li>✅ Call 30 min</li></ul>
            <button onClick={() => window.open("https://wa.me/71986482241?text=Quero%20Premium%20R%24997", "_blank")} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">Quero este</button>
          </div>
        </div>

        {/* FORMULÁRIO CENTRALIZADO E CURTO */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div><label className="block mb-1 font-semibold text-sm">Nome</label><input name="nome" required className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" /></div>
          <div><label className="block mb-1 font-semibold text-sm">WhatsApp</label><input name="whatsapp" type="tel" required placeholder="88999999999" className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" /></div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded">Receba uma análise específica</button>
        </form>

        {/* GARANTIA PEQUENA */}
        <div className="mt-8 max-w-md mx-auto p-3 bg-green-50 border border-green-200 rounded text-center"><p className="text-green-800 font-semibold text-sm">✅ 7 dias ou seu dinheiro de volta</p></div>
      </div>
    </main>
  );
}
