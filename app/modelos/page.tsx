export default function Modelos() {
  const modelos = [
    {
      titulo: "Contrato Influencer",
      descricao: "Modelo de contrato para parcerias com influenciadores.",
      link: "/modelos/contrato-influencer"
    },
    {
      titulo: "LGPD E-commerce",
      descricao: "Política de privacidade para lojas virtuais.",
      link: "/modelos/lgpd-ecommerce"
    },
    {
      titulo: "Contrato Startup Delaware",
      descricao: "Modelo para abertura de startup nos EUA.",
      link: "/modelos/contrato-startup-delaware"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Modelos Jurídicos</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Modelos de contratos, peças e documentos jurídicos para creators e empresas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelos.map((modelo, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{modelo.titulo}</h3>
              <p className="text-gray-600 mb-4">{modelo.descricao}</p>
              <a
                href={modelo.link}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                Ver modelo
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Precisa de um modelo personalizado?</h2>
          <p className="text-blue-700 mb-6">
            Desenvolvemos modelos jurídicos específicos para o seu negócio.
          </p>
          <a
            href="/consultoria"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Solicitar Modelo Personalizado
          </a>
        </div>
      </div>
    </main>
  );
}
