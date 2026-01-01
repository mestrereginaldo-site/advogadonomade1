import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "./components/EmailCapture";
import AdSenseScript from "./components/AdSenseScript";

export const metadata: Metadata = {
  title: "Advogado Nômade | Inteligência em Ativos e Auditoria de Carteiras",
  description: "Tecnologia para recuperação de ativos judiciais e saneamento de carteiras de massa. Auditoria em PJe, eProc e Projudi.",
};

export default function Home() {
  return (
    <>
      <AdSenseScript />
      
      {/* Hero Section: Foco Total em B2B e Tecnologia */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Inteligência de <span className="text-yellow-500">Ativos</span> Jurídicos
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300">
            Tecnologia de Auditoria para Identificação de Liquidez e Saneamento de Carteiras de Alta Escala.
          </p>
          
          {/* Especialidades Corporativas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-lg font-medium">
            <div className="bg-white/10 p-3 rounded-lg border border-white/20">
              🔍 Mapeamento de Réus Solventes
            </div>
            <div className="bg-white/10 p-3 rounded-lg border border-white/20">
              📊 Saneamento de Inércia Processual
            </div>
            <div className="bg-white/10 p-3 rounded-lg border border-white/20">
              🚀 Recuperação de Crédito Judicial
            </div>
          </div>

          <a 
            href="https://wa.me/5571986482241?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20da%20minha%20carteira." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-lg text-xl transition duration-300 shadow-2xl"
          >
            Solicitar Auditoria Gratuita
          </a>
        </div>
      </section>

      {/* NOVIDADE: Dashboard de Ativos em Tempo Real */}
      <section className="py-12 bg-blue-50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Ativos Mapeados (Mês)</p>
              <h3 className="text-4xl font-black text-blue-900">R$ 14.250.840</h3>
              <p className="text-green-600 font-bold">↑ 12% em relação a Dezembro</p>
            </div>
            <div className="p-6 border-x border-gray-200">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Inércia Detectada</p>
              <h3 className="text-4xl font-black text-blue-900">8.420 Dias</h3>
              <p className="text-gray-600">Total de tempo de processos parados</p>
            </div>
            <div className="p-6">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Eficiência de Liquidez</p>
              <h3 className="text-4xl font-black text-blue-900">94.8%</h3>
              <p className="text-blue-600 font-bold">Assertividade em Réus de Ouro</p>
            </div>
          </div>
        </div>
      </section>

      {/* INOVAÇÃO: Área do Cliente - Portal de Auditoria */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-900 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Portal de Auditoria SaaS</h2>
              <p className="text-gray-400 text-lg mb-6">
                Acesse nossa plataforma exclusiva para parceiros. Suba seus relatórios brutos e receba o saneamento completo em minutos.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> Diagnóstico Automático (eProc/PJe/Projudi)</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> Priorização por Solvência de Réu</li>
                <li className="flex items-center"><span className="text-yellow-500 mr-2">✔</span> Relatórios Executivos para Sócio-Gestor</li>
              </ul>
            </div>
            <div className="md:w-1/3 bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <h3 className="text-xl font-bold mb-4">Área Restrita</h3>
              <p className="text-sm text-gray-400 mb-6">Acesso exclusivo para escritórios cadastrados em SP e SC.</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold transition">Acessar Painel</button>
              <p className="mt-4 text-xs text-gray-500 underline cursor-pointer">Esqueci minha senha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section: Mudança de Mentalidade */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Infraestrutura Jurídica Digital</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatItem number="+4.5 Mi" text="Processos Auditados em 2025" />
            <StatItem number="120+" text="Escritórios Parceiros" />
            <StatItem number="24h" text="Tempo Médio de Resposta" />
          </div>
        </div>
      </section>

      {/* Newsletter Estratégica */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Relatório de Mercado Judiciário</h2>
          <p className="text-gray-600 mb-8">Receba semanalmente insights sobre liquidez e tendências de tribunais brasileiros.</p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}

// Componentes Auxiliares (Mantendo a compatibilidade)
function StatItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="p-8 bg-white/5 rounded-2xl">
      <h3 className="text-5xl font-black mb-2 text-yellow-500">{number}</h3>
      <p className="text-xl opacity-80">{text}</p>
    </div>
  );
}
