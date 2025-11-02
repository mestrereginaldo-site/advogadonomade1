"use client";

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const whatsapp = (form.elements.namedItem("whatsapp") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;
    
    const msg = `Olá, gostaria de mais informações.%0A%0ANome: ${nome}%0AWhatsApp: ${whatsapp}%0AMensagem: ${mensagem}`;
    window.open(`https://wa.me/71986482241?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contato</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Envie sua mensagem – resposta em 5 minutos via WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 rounded-xl p-8 shadow-sm">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
            <input
              name="nome"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp com DDD</label>
            <input
              name="whatsapp"
              type="tel"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sua mensagem</label>
            <textarea
              name="mensagem"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Descreva sua dúvida ou necessidade..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label className="ml-2 text-sm text-gray-600">
              Preencho este campo
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg"
          >
            Enviar mensagem
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Quer uma consultoria completa?</p>
          <a
            href="/consultoria"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contrate aqui
          </a>
        </div>
      </div>
    </main>
  );
}
