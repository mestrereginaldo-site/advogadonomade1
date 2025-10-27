"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

// Lista de cidades (pode aumentar)
const cidadesValidas = [
  "sao-paulo",
  "rio-de-janeiro",
  "belo-horizonte",
  "brasilia",
  "salvador",
  "fortaleza",
  "curitiba",
  "manaus",
  "recife",
  "goiania",
  "maceio",
  "florianopolis",
  "vitoria",
  "natal",
  "joao-pessoa",
  "aracaju",
  "teresina",
  "campo-grande",
  " cuiaba",
  "porto-alegre",
  "boa-vista",
  "macapa",
  "palmas",
  "porto-velho",
  "rio-branco",
];

export default function AdvogadoCidade() {
  const params = useParams();
  const cidadeRaw = Array.isArray(params?.cidade) ? params.cidade[0] : params?.cidade;
  const cidade = cidadeRaw?.replace(/-/g, " ").toUpperCase() || "";

  if (!cidadesValidas.includes(cidadeRaw || "")) {
    return (
      <main className="min-h-screen bg-white text-black text-center p-10">
        <h1 className="text-2xl font-bold mb-4">Cidade não encontrada</h1>
        <Link href="/" className="text-green-600 underline">Voltar para home</Link>
      </main>
    );
  }

  const msg = `Olá, sou de ${cidade} e preciso de um advogado.`;

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* SEO LOCAL */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Advogado em {cidade}
          </h1>
          <p className="text-sm text-gray-500">
            Dr. Reginaldo Oliveira • OAB/SC 57.879 • Atendimento 100% online
          </p>
          <p className="text-green-600 mt-2">
            📍 Resposta em 5 minutos via WhatsApp
          </p>
        </header>

        {/* CONTEÚDO ÚNICO POR CIDADE */}
        <article className="prose prose-slate max-w-none mb-8">
          <p>
            Se você está em <strong>{cidade}</strong> e precisa de um <strong>advogado online</strong>, você está no lugar certo. Eu atendo <strong>em {cidade} e em todo o Brasil</strong>, sem sair de casa.
          </p>

          <h2>Por que contratar um advogado online?</h2>
          <ul>
            <li>Sem deslocamento – tudo pelo celular</li>
            <li>Documentos assinados digitalmente</li>
            <li>Resposta em até 5 minutos</li>
            <li>Preço justo e transparente</li>
          </ul>

          <h2>Como funciona?</h2>
          <ol>
            <li>Você clica no botão verde abaixo</li>
            <li>Me conta o caso pelo WhatsApp</li>
            <li>Recebe orçamento na hora</li>
            <li>Resolve tudo online</li>
          </ol>

          <h2>Exemplo real</h2>
          <p>
            Maria, de {cidade}, precisava de um contrato para influencer. Em 30 minutos eu entreguei o documento assinado digitalmente. Ela disse: <em>“Nunca mais vou procurar escritório físico.”</em>
          </p>
        </article>

        {/* CTA FINAL */}
        <div className="text-center">
          <a
            href={`https://wa.me/71986482241?text=${encodeURIComponent(msg)}`}
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Falar com advogado em {cidade}
          </a>
        </div>
      </div>
    </main>
  );
}
