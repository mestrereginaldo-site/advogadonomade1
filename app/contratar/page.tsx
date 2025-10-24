// app/contratar/page.tsx
"use client";

export default function Contratar() {
  const handleClick = () => {
    // Redireciona para o Checkout de TESTE da Stripe
    window.location.href = "https://buy.stripe.com/test_3cs6qx7N95lS9cU4gg";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white px-8">
      <section className="max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Consultoria Jurídica Express
        </h1>
        <p className="text-lg mb-6">
          Em até 24 horas você recebe:</p>
        <ul className="list-disc list-inside mb-6 text-left">
          <li>Análise completa do seu caso</li>
          <li>Orientação jurídica por escrito</li>
          <li>Modelo de petição ou contrato (se necessário)</li>
          <li>Suporte via WhatsApp por 7 dias</li>
        </ul>
        <p className="mb-8 text-amber-400 font-semibold">
          Valor promocional: R$ 197 (via Pix ou cartão)
        </p>
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Pagar R$ 197 agora
        </button>
        <p className="text-xs mt-4 text-gray-400">
          Dúvidas? Chame no WhatsApp:{" "}
          <a
            href="https://wa.me/5588999999999"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            88 99999-9999
          </a>
        </p>
      </section>
    </main>
  );
}
