// app/politica-de-privacidade/page.tsx
export default function Politica() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
        <p className="mb-4">Acesso em: {new Date().toLocaleDateString("pt-BR")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Dados coletados</h2>
        <p className="mb-4">
          Coletamos nome, WhatsApp e descrição do caso – apenas para responder sua solicitação.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso dos dados</h2>
        <p className="mb-4">
          Os dados são usados exclusivamente para prestar consultoria jurídica e nunca são vendidos ou compartilhados com terceiros.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
        <p className="mb-4">
          Utilizamos apenas cookies essenciais para funcionamento do site (Next.js/Vercel).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Exclusão</h2>
        <p className="mb-4">
          Para apagar seus dados, envie “apagar meus dados” no WhatsApp 88 99999-9999.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Contato</h2>
        <p>
          Dr. Reginaldo Oliveira – OAB/SC: 57.879 – WhatsApp:{" "}
          <a href="https://wa.me/5571986482241" className="text-green-400 underline">
            71 98648-2241
          </a>
        </p>
      </div>
    </main>
  );
}
