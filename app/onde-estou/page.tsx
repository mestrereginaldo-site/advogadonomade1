export default function Onde() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Atualmente trabalhando de Salvador/BA • 01/11/2025
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Atendo online em qualquer cidade do Brasil. OAB/SC 57.879
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Atendimento Online Nacional
            </h2>
            <p className="text-gray-600 mb-6">
              Com ferramentas modernas de videoconferência e comunicação, 
              presto consultoria jurídica para clientes em todo o território nacional, 
              com a mesma qualidade e dedicação do atendimento presencial.
            </p>
            
            <a
              href="https://wa.me/71986482241?text=Olá, gostaria de agendar uma consultoria"
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
            >
              Falar comigo em qualquer cidade
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">📍 Atendimento Presencial</h3>
            <p className="text-blue-700">
              Florianópolis/SC<br/>
              Agendamento prévio necessário
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">💻 Atendimento Online</h3>
            <p className="text-green-700">
              Todo o Brasil<br/>
              Via WhatsApp, Zoom ou Google Meet
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
