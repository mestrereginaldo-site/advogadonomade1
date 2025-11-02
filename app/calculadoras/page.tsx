import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Calculadoras Jurídicas Gratis - Advogado Nômade",
  description: "Calculadoras jurídicas gratuitas para auxiliar advogados e estudantes de direito"
};

export default function CalculadorasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Calculadoras Jurídicas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Calculadora 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Calculadora de Honorários</h3>
          <p className="text-gray-600 mb-4">Calcule valores de honorários advocatícios conforme a tabela OAB.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Acessar Calculadora
          </button>
        </div>

        {/* Calculadora 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Calculadora de Juros</h3>
          <p className="text-gray-600 mb-4">Calcule juros moratórios, compensatórios e legais.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Acessar Calculadora
          </button>
        </div>

        {/* Calculadora 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Calculadora de Precatórios</h3>
          <p className="text-gray-600 mb-4">Calcule valores e correção de precatórios.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Acessar Calculadora
          </button>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ferramentas para Advogados</h2>
        <p className="text-gray-700">
          Nossas calculadoras jurídicas são desenvolvidas para auxiliar no dia a dia do advogado, 
          proporcionando agilidade e precisão nos cálculos mais comuns da área jurídica.
        </p>
      </div>
    </div>
  );
}
