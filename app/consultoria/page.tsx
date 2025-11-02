import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Consultoria Jurídica - Advogado Nômade",
  description: "Consultoria jurídica especializada para advogados e escritórios"
};

export default function ConsultoriaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Consultoria Jurídica</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Serviços de Consultoria</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Consultoria para Escritórios</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Gestão de escritório</li>
              <li>Optimização de processos</li>
              <li>Technology legal</li>
              <li>Marketing jurídico</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Consultoria para Advogados</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Planejamento de carreira</li>
              <li>Especialização jurídica</li>
              <li>Atendimento ao cliente</li>
              <li>Ferramentas digitais</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
        <p className="mb-4">Agende uma consultoria personalizada para o seu caso.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Solicitar Consultoria
        </button>
      </div>
    </div>
  );
}
