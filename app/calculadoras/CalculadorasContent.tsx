// app/calculadoras/CalculadorasContent.tsx

// Se você tiver esses componentes, importe-os. Caso contrário, vamos criar um placeholder.
// Como não tenho certeza se existem, vou criar um componente placeholder para evitar erros.

import React from 'react';

// Componente de Card para envolver cada calculadora
const Card: React.FC<{ title: string; desc: string; children?: React.ReactNode }> = ({ title, desc, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      {children}
    </div>
  );
};

// Componente placeholder para MuitaTransitoCalculator
const MuitaTransitoCalculator: React.FC = () => {
  return (
    <div>
      <p>Calculadora de Multa de Trânsito - Em desenvolvimento</p>
      {/* Aqui você pode adicionar a lógica da calculadora no futuro */}
    </div>
  );
};

// Componente placeholder para IndenizaçãoCalculator
const IndenizaçãoCalculator: React.FC = () => {
  return (
    <div>
      <p>Calculadora de Indenização Moral - Em desenvolvimento</p>
      {/* Aqui você pode adicionar a lógica da calculadora no futuro */}
    </div>
  );
};

// Componente principal
const CalculadorasContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Calculadoras Jurídicas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Multa de Trânsito" desc="Valor e pontos na CNH.">
          <MuitaTransitoCalculator />
        </Card>
        <Card title="Indenização Moral" desc="Faixa de valores para danos morais.">
          <IndenizaçãoCalculator />
        </Card>
        {/* Adicione mais cards conforme necessário */}
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
};

export default CalculadorasContent;
