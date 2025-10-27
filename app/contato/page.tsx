"use client";

export default function Contato() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Contato</h1>
        <p className="mb-6">Envie sua mensagem – resposta em 5 minutos via WhatsApp.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
            const whatsapp = (form.elements.namedItem("whatsapp") as HTMLInputElement).value;
            const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;
            window.open(`https://wa.me/71986482241?text=${nome}%0A${whatsapp}%0A${mensagem}`, "_blank");
          }}
          className="max-w-md mx-auto space-y-4"
        >
          <input name="nome" type="text" required placeholder="Nome" className="w-full px-3 py-2 border rounded" />
          <input name="whatsapp" type="tel" required placeholder="WhatsApp com DDD" className="w-full px-3 py-2 border rounded" />
          <textarea name="mensagem" required rows={4} placeholder="Sua mensagem..." className="w-full px-3 py-2 border rounded" />
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded">
            Enviar mensagem
          </button>
        </form>

        <div className="mt-10">
          <a href="https://wa.me/71986482241" target="_blank" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg">
            Quer uma consultoria completa? Contrate aqui
          </a>
        </div>
      </div>
    </main>
  );
}
