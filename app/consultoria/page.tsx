// app/consultoria/page.tsx
"use client";

import { useState } from "react";

export default function Consultoria() {
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
      {/* Header Interno */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Consultoria Premium</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Análise jurídica personalizada em até 24 horas, com orientação por escrito e suporte via WhatsApp.
          </p>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Básico</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">R$ 197</div>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>1 tema</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Orientação escrita</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>7 dias WhatsApp</span>
                </li>
              </ul>
              <button
                onClick={() => handlePlanoClick("Básico R$197")}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Quero este
              </button>
            </div>

            {/* Plano Intermediário */}
            <div className="bg-white rounded-lg shadow-xl border-2 border-green-500 p-8 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Intermediário</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">R$ 497</div>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>3 temas</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Modelo personalizado</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>14 dias WhatsApp</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Revisão de documento</span>
                </li>
              </ul>
              <button
                onClick={() => handlePlanoClick("Intermediário R$497")}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Quero este
              </button>
            </div>

            {/* Plano Premium */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-green-600 mb-4">R$ 997</div>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>30 dias ilimitado</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Modelos personalizados</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  <span>Call 30 min</span>
                </li>
              </ul>
              <button
                onClick={() => handlePlanoClick("Premium R$997")}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                Receba uma análise específica
              </button>
            </form>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <p className="text-green-800 font-semibold">✅ 7 dias ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
