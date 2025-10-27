// app/modelos/lgpd-ecommerce/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade para E-commerce (Grátis) - Advogado Nômade",
  description: "Baixe política de privacidade LGPD para e-commerce 100% gratuita. Cláusulas obrigatórias LGPD, cookies, direitos do titular. Sem cadastro.",
};

export default function LgpdEcommerce() {
  const tempoLeitura = "5 min";
  const dataPost = "25/10/2025";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* CABEÇALHO */}
        <header className="mb-8">
          <img
            src="/images/lgpd-ecommerce-cover.jpg"
            alt="LGPD para e-commerce"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Política de Privacidade para E-commerce (Grátis)
          </h1>
          <div className="text-sm text-gray-500">
            Por Dr. Reginaldo Oliveira • {dataPost} • {tempoLeitura} de leitura
          </div>
        </header>

        {/* RESUMO RÁPIDO */}
        <section className="mb-8 p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800 font-semibold mb-2">✅ O que você vai baixar:</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Política de Privacidade em Word (3 páginas)</li>
            <li>Cláusulas obrigatórias LGPD (Lei 13.709/18)</li>
            <li>Cookies, direitos do titular, canal de contato</li>
            <li>Adaptável para Shopify, WooCommerce, Nuvemshop</li>
            <li>Sem cadastro – download direto</li>
          </ul>
        </section>

        {/* TEXTO EXPLICATIVO (lead magnet) */}
        <article className="prose prose-slate max-w-none mb-8">
          <h2>Por que seu e-commerce precisa de uma política de privacidade?</h2>
          <p>
            A LGPD (Lei 13.709/18) obriga qualquer site que colete dados pessoais (nome, e-mail, CPF, IP, cookies) a informar ao usuário:
          </p>
          <ul>
            <li>Quais dados são coletados</li>
            <li>Como são usados</li>
            <li>Quem são os responsáveis</li>
            <li>Como o usuário pode excluir ou alterar esses dados</li>
          </ul>

          <h2>O que o modelo inclui?</h2>
          <ul>
            <li><strong>Identificação do controlador:</strong> nome, CNPJ, endereço, e-mail de contato.</li>
            <li><strong>Finalidade do tratamento:</strong> venda, entrega, marketing, cookies.</li>
            <li><strong>Base legal:</strong> consentimento (art. 7º, I) e execução de contrato (art. 7º, V).</li>
            <li><strong>Direitos do titular:</strong> acesso, correção, exclusão, portabilidade, revogação do consentimento.</li>
            <li><strong>Cookies:</strong> aviso de uso e opção de desativação.</li>
            <li><strong>Canal de contato:</strong> e-mail e telefone para exercer direitos.</li>
            <li><strong>Retenção de dados:</strong> prazo e critérios para exclusão.</li>
            <li><strong>Alterações na política:</strong> como o cliente será informado.</li>
          </ul>

          <h2>Como usar o modelo?</h2>
          <ol>
            <li>Baixe o Word no botão verde abaixo.</li>
            <li>Altere os campos em amarelo (nome da loja, CNPJ, e-mail, telefone).</li>
            <li>Publique na página "Política de Privacidade" do seu site.</li>
            <li>Adicione link no rodapé e no checkout.</li>
            <li>Pronto: você está em conformidade com a LGPD.</li>
          </ol>

          <h2>Exemplo real</h2>
          <p>
            Loja de roupas de Florianópolis usou esse modelo e, em 48 horas, estava em conformidade. A cliente disse: <em>“Me senti segura para vender para todo Brasil.”</em>
          </p>
        </article>

        {/* DOWNLOAD + FORMULÁRIO (lead magnet) */}
        <section className="mt-10 p-6 border-2 border-green-500 rounded bg-green-50">
          <h3 className="text-xl font-semibold mb-4 text-green-800">📄 Baixe o modelo em Word</h3>
          <p className="mb-4">Preencha o formulário abaixo e receba a política por WhatsApp em 30 segundos.</p>

          <form
            action={`https://wa.me/71986482241?text=Olá, Preciso de uma análise do meu caso.%0A%0ANome: ${encodeURIComponent(
              "NOME"
            )}%0AWhatsApp: ${encodeURIComponent("WHATSAPP")}%0AModelo: LGPD-Ecommerce`}
            method="get"
            target="_blank"
            className="max-w-md mx-auto space-y-4"
          >
            <div>
              <label className="block mb-1 font-semibold text-sm">Nome</label>
              <input name="nome" required className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-sm">WhatsApp</label>
              <input name="whatsapp" type="tel" required placeholder="71986482241" className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black" />
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded">
              Receba uma análise específica
            </button>
          </form>
        </section>

        {/* CTA FINAL (upsell) */}
        <div className="mt-10 text-center">
          <Link href="/consultoria" className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg">
            Quer uma política sob medida? Contrate aqui
          </Link>
        </div>
      </div>
    </main>
  );
}
