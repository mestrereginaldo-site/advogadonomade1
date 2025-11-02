import Link from "next/link";

export default function Obrigado() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Cadastro Confirmado!</h1>
        <p className="text-gray-600 mb-6">
          Obrigado por se cadastrar! Em breve você receberá nossas dicas jurídicas exclusivas no seu e-mail.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Enviamos um e-mail de confirmação para você. <strong>Verifique sua caixa de spam</strong> caso não encontre.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            ← Voltar para a página inicial
          </Link>
          
          <Link
            href="/artigos"
            className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            📚 Ler Artigos Jurídicos
          </Link>
          
          <Link
            href="/calculadoras"
            className="block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            🧮 Usar Calculadoras
          </Link>
        </div>
      </div>
    </main>
  );
}
