"use client";
import { useEffect } from "react";

export default function Consultoria() {
  useEffect(() => {
    // Adiciona metadata via useEffect para páginas client-side
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Consultoria jurídica premium com análise personalizada do seu caso. Planos básico, intermediário e premium com suporte via WhatsApp.';
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

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
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Consultoria Jurídica Premium</h1>
        <p className="text-lg mb-8 text-center text-gray-600">Análise jurídica personalizada em até 24 horas, com orientação por escrita e suporte via WhatsApp.</p>

        {/* PREÇOS - Cards maiores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* CARD R$ 197 */}
          <div className="border border-gray-300 rounded-xl p-8 text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Consulta Jurídica Estratégica</h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">R$ 450</p>
            <ul className="text-left space-y-3 mb-8 text-gray-700">
              <li className="flex items-center">✅ <span className="ml-2">Análise personalizada do seu caso</span></li>
              <li className="flex items-center">✅ <span className="ml-2">Estratégia defensiva por escrito</span></li>
              <li className="flex items-center">✅ <span className="ml-2">Prazo: 24-48 horas</span></li>
              <li className="flex items-center">✅ <span className="ml-2">15min de suporte por WhatsApp</span></li>
            </ul>
            <button onClick={() => window.open("https://wa.me/71986482241?text=Quero%20o%20Plano%20Básico%20R%24197", "_blank")} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg">
              Quero Esta Consultoria
            </button>
          </div>

          {/* CARD R$ 497 - DESTAQUE */}
          <div className="border-2 border-blue-500 rounded-xl p-8 text-center bg-blue-50 shadow-xl transform hover:scale-105 transition duration-300">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              MAIS POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Orientação Jurídica Mensal  </h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">R$ 1.200/mês</p>
            <ul className="text-left space-y-3 mb-8 text-gray-700">
              <li className="flex items-center">✅ <span className="ml-2">Até 3 consultas por mês</span></li>
              <li className="flex items-center">✅ <span className="ml-2">Resposta em 12 horas</span></li>
              <li className="flex items-center">✅ <span className="ml-2">Modelos de peças jurídicas</span></li>
              <li className="flex items-center">✅ <span className="ml-2">Revisão de 2 documentos</span></li>
            </ul>
            <button onClick={() => window.open("https://wa.me/71986482241?text=Quero%20o%20Plano%20Intermediário%20R%24497", "_blank")} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg">
              Contratar Plano Mensal
            </button>
          </div>

          {/* CARD R$ 997 */}
          <div className="border border-gray-300 rounded-xl p-8 text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Assessoria Completa</h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">R$ 2.500/mês</p>
            <ul className="text-left space-y-3 mb-8 text-gray-700">
              <li className="flex items-center">✅ <span className="ml-2">Suporte jurídico prioritário</span></li>
              <li className="flex items-center">✅ <span className="ml-2">Calls semanais de 30min</span></li>
              <li className="flex items-center">✅ <span className="ml-2">Elaboração de modelos</span></li>
              <li className="flex items-center">✅ <span className="ml-2">Análise preventiva de riscos</span></li>
            </ul>
            <button onClick={() => window.open("https://wa.me/71986482241?text=Quero%20o%20Plano%20Premium%20R%24997", "_blank")} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg">
              Falar Sobre Assessoria
            </button>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Solicitar Análise Personalizada</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Nome Completo</label>
              <input 
                name="nome" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">WhatsApp</label>
              <input 
                name="whatsapp" 
                type="tel" 
                required 
                placeholder="(11) 99999-9999" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg">
              Receber Análise Específica do Meu Caso
            </button>
          </form>
        </div>

        {/* GARANTIA */}
        <div className="mt-12 max-w-md mx-auto p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
          <p className="text-blue-800 font-bold text-lg">✅ Garantia de 7 dias ou seu dinheiro de volta</p>
          <p className="text-blue-600 text-sm mt-2">Se não ficar satisfeito, devolvemos 100% do seu investimento</p>
        </div>
      </div>
    </main>
  );
}
