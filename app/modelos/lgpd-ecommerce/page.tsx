// app/modelos/lgpd-ecommerce/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade para E-commerce (Grátis) - Advogado Nômade",
  description: "Baixe política de privacidade LGPD para e-commerce 100% gratuita. Cláusulas obrigatórias, cookies, direitos do titular. Sem cadastro.",
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
            <li><strong
