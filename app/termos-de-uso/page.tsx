// app/termos-de-uso/page.tsx
export default function Termos() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
        <p className="mb-4">Acesso em: {new Date().toLocaleDateString("pt-BR")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Aceitação</h2>
        <p className="mb-4">
          Ao navegar neste site você aceita, automaticamente, todos os termos descritos abaixo.
          Se não concordar, por favor, não utilize nossos serviços.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Finalidade</h2>
        <p className="mb-4">
          O site tem como única finalidade apresentar serviços jurídicos e capturar leads para
          consultoria remota. Nenhuma informação aqui configura relação contratual automática.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Propriedade intelectual</h2>
        <p className="mb-4">
          Todo conteúdo (textos, imagens, logotipos, PDFs) é de propriedade exclusiva de Dr. Reginaldo Oliveira,
          protegido por direitos autorais e pela Lei 9.610/98.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Uso permitido</h2>
        <p className="mb-4">
          É permitida a leitura, impressão e download para uso pessoal ou interno da empresa,
          desde que citada a fonte. É vetada a comercialização ou redistribuição.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitação de responsabilidade</h2>
        <p className="mb-4">
          As informações não substituem consulta presencial. O uso do conteúdo é de
          responsabilidade do usuário. Para orientação específica, contrate nossos serviços.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Links externos</h2>
        <p className="mb-4">
          Links para WhatsApp, Google Drive ou outros domínios são fornecidos em caráter
          complementar; não nos responsabilizamos por políticas externas.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Alterações</h2>
        <p className="mb-4">
          Podemos atualizar estes termos a qualquer momento. A data no topo indica a versão vigente.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Legislação</h2>
        <p className="mb-4">
          Estes termos seguem as leis brasileiras. Qualquer controvérsia será resolvida no foro de Maceió/AL.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contato</h2>
        <p>
          Dúvidas? Entre em contato via WhatsApp:{" "}
          <a href="https://wa.me/5571986482241" className="text-green-400 underline">
            71 98648-2241
          </a>
        </p>
      </div>
    </main>
  );
}
