// app/cookies/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies - Advogado Nômade",
  description: "Como usamos cookies no site Advogado Nômade. Nenhum dado pessoal é armazenado.",
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
        <p className="mb-4">Atualizado em: {new Date().toLocaleDateString("pt-BR")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. O que são cookies?</h2>
        <p className="mb-4">
          Cookies são pequenos arquivos de texto que o navegador armazena no seu dispositivo para melhorar a experiência de navegação.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Cookies que usamos</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site (Next.js/Vercel).</li>
          <li><strong>Cookies de desempenho:</strong> anônimos, usados para medir velocidade de carregamento (Vercel Analytics).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Dados pessoais</h2>
        <p className="mb-4">
          Não usamos cookies para coletar nome, e-mail ou qualquer dado pessoal. As únicas informações capturadas são via formulário (nome, WhatsApp, caso) – com seu consentimento explícito.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Como desativar</h2>
        <p className="mb-4">
          Você pode bloquear cookies no navegador, mas parte do site pode não funcionar corretamente.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Contato</h2>
        <p>
          Dúvidas? Entre em contato:{" "}
          <a href="https://wa.me/5588999999999" className="text-green-600 underline">
            88 99999-9999
          </a>
        </p>
      </div>
    </main>
  );
}
