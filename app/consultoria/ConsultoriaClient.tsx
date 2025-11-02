"use client";

import { useState } from "react";

export default function ConsultoriaClient() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Preciso de uma análise do meu caso.%0A%0ANome: ${formData.nome}%0AWhatsApp: ${formData.whatsapp}`;
    window.open(`https://wa.me/5571986482241?text=${msg}`, "_blank");
  };

  const handlePlanoClick = (plano: string) => {
    const msg = `Olá, tenho interesse no plano ${plano}. Pode me enviar mais informações?`;
    window.open(`https://wa.me/5571986482241?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      {/* Planos */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Básico</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">R$ 197</div>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>1 tema</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>Orientação escrita</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>7 dias WhatsApp</span>
                </li>
              </ul>
              <button
                onClick={() => handlePlanoClick("Básico R$197")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Quero este
              </button>
            </div>

            {/* Plano Intermediário */}
            <div className="bg-white rounded-lg shadow-xl border-2 border-blue-500 p-8 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Intermediário</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">R$ 497</div>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>3 temas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>Modelo personalizado</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>14 dias WhatsApp</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>Revisão de documento</span>
                </li>
              </ul>
              <button
                onClick={() => handlePlanoClick("Intermediário R$497")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Quero este
              </button>
            </div>

            {/* Plano Premium */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">R$ 997</div>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>30 dias ilimitado</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>Modelos personalizados</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">✅</span>
                  <span>Call 30 min</span>
                </li>
              </ul>
              <button
                onClick={() => handlePlanoClick("Premium R$997")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Quero este
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Receba uma análise específica</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="71986482241"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                Receba uma análise específica
              </button>
            </form>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <p className="text-blue-800 font-semibold">✅ 7 dias ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
