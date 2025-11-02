"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch('https://formsubmit.co/ajax/adv.regi.silva@gmail.com', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage("✅ Cadastrado com sucesso! Redirecionando...");
        // Redireciona para a página de obrigado após 2 segundos
        setTimeout(() => {
          window.location.href = "/obrigado";
        }, 2000);
      } else {
        setMessage("❌ Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      setMessage("❌ Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
      
      {message && (
        <div className={`mt-4 p-3 rounded-lg text-center ${
          message.includes("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}
