// app/modelos/page.tsx
export default function Modelos() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Modelos</h1>
        <p className="mb-8">Modelos de contratos, peças e documentos jurídicos para creators e empresas.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Contrato Influencer</h3>
            <p className="text-sm text-gray-600">Modelo de contrato para parcerias com influenciadores.</p>
            <a href="/modelos/contrato-influencer" className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Ver modelo
            </a>
          </div>

          <div className="border border-gray-200 rounded p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">LGPD E-commerce</h3>
            <p className="text-sm text-gray-600">Política de privacidade para lojas virtuais.</p>
            <a href="/modelos/lgpd-ecommerce" className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Ver modelo
            </a>
          </div>

          <div className="border border-gray-200 rounded p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Contrato Startup Delaware</h3>
            <p className="text-sm text-gray-600">Modelo para abertura de startup nos EUA.</p>
            <a href="/modelos/contrato-startup-delaware" className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Ver modelo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
