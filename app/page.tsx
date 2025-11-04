import { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "./components/EmailCapture";

export const metadata: Metadata = {
  title: "Advogado Nômade | Consultoria Jurídica 100% Online em Todo Brasil",
  description: "Advogado online que atende em qualquer cidade do Brasil. Contratos, LGPD, rescisão, multas, pensão, direito digital. Resposta em 5 min via WhatsApp.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Advogado Nômade</h1>
          <p className="text-xl mb-6">Proteção Penal & LGPD para Empresas</p>
          • Crimes de Colarinho Branco
          • Compliance Penal e LGPD  
          • Direito Digital e Defesa de Influencers
          
          <p className="mb-8 text-yellow-300">
          
          </p>
          <a
            href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            📱 DIAGNÓSTICO GRATUITO - 30 MIN
          </a>
        </div>
      </section>

      {/* Calculadoras Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">🧮 Calculadoras Jurídicas Grátis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Estime valores em segundos. Resultados são referências – confirme com nosso advogado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CardLink 
              title="Rescisão Trabalhista" 
              desc="13º, férias, FGTS e aviso prévio." 
              href="/calculadoras" 
            />
            <CardLink 
              title="Multas de Trânsito" 
              desc="Valor + pontos na CNH." 
              href="/calculadoras" 
            />
            <CardLink 
              title="Indenização Moral" 
              desc="Faixa para danos morais." 
              href="/calculadoras" 
            />
            <CardLink 
              title="Pensão Alimentícia" 
              desc="Por filho, com gastos extras." 
              href="/calculadoras" 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">💬 Fale com quem entende</h2>
            <p className="text-xl opacity-90">Atendimento jurídico de excelência com resultados comprovados</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatItem number="+2 mil" text="Atendimentos Online" />
            <StatItem number="97%" text="Clientes Satisfeitos" />
            <StatItem number="47" text="Cidades Atendidas" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">📬 Dicas jurídicas de graça</h2>
          <p className="text-gray-600 mb-8">1 e-mail por semana, 2 min de leitura, sempre útil.</p>
          <EmailCapture />
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">📚 Artigos mais lidos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Informações jurídicas atualizadas para esclarecer suas dúvidas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard 
              title="5 direitos que todo trabalhador esquece ao pedir demissão" 
              description="Descubra quais são os direitos trabalhistas que muitos profissionais deixam de exigir ao sair de um emprego." 
              link="/artigos/direitos-demissao"
            />
            <ArticleCard 
              title="Multa por excesso de velocidade – quando pode ser anulada?" 
              description="Entenda em quais situações é possível recorrer de multas por excesso de velocidade com chances de sucesso." 
              link="/artigos/multa-velocidade"
            />
            <ArticleCard 
              title="Como calcular pensão de filho maior de 18 anos?" 
              description="Saiba como é feito o cálculo da pensão alimentícia para filhos que já atingiram a maioridade." 
              link="/artigos/pensao-maior-idade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function CardLink({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </Link>
  );
}

function StatItem({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-xl opacity-90">{text}</p>
    </div>
  );
}

function ArticleCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          Ler mais →
        </Link>
      </div>
    </div>
  );
}
