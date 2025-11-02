"use client";

import { useState } from "react";

export default function CalculadorasContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card title="Rescisão Trabalhista" desc="Estime sua rescisão em minutos.">
        <RescisaoCalculator />
      </Card>
      <Card title="Multa de Trânsito" desc="Valor e pontos na CNH.">
        <MultaTransitoCalculator />
      </Card>
      <Card title="Indenização Moral" desc="Faixa de valores para danos morais.">
        <IndenizacaoCalculator />
      </Card>
      <Card title="Pensão Alimentícia" desc="Estime pensão por filho.">
        <PensaoAlimenticiaCalculator />
      </Card>
    </div>
  );
}

function Card({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      {children}
    </div>
  );
}

function RescisaoCalculator() {
  const [salario, setSalario] = useState("");
  const [anos, setAnos] = useState("");
  const [meses, setMeses] = useState("");
  const [aviso, setAviso] = useState("sim");
  const [ferias, setFerias] = useState("nao");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    if (!salario || !anos) return;
    const s = parseFloat(salario.replace(",", "."));
    const a = parseInt(anos) || 0;
    const m = parseInt(meses) || 0;
    let total = 0;

    total += s * 0.5;
    total += (s / 12) * (a * 12 + m);
    total += (s / 12) * (new Date().getMonth() + 1);
    total += s * (a * 12 + m) * 0.08 * 1.4;
    if (aviso === "sim") total += s;
    if (ferias === "sim") total += s * 4 / 3;

    setResultado(total);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Salário Bruto (R$)</label>
        <input
          type="text"
          placeholder="Ex: 2500,00"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Anos</label>
          <input
            type="number"
            placeholder="2"
            value={anos}
            onChange={(e) => setAnos(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Meses</label>
          <input
            type="number"
            placeholder="6"
            value={meses}
            onChange={(e) => setMeses(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Aviso Prévio?</label>
          <select 
            value={aviso} 
            onChange={(e) => setAviso(e.target.value)} 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Férias Vencidas?</label>
          <select 
            value={ferias} 
            onChange={(e) => setFerias(e.target.value)} 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
        </div>
      </div>
      
      <button 
        onClick={calcular} 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Calcular Rescisão
      </button>
      
      {resultado !== null && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="font-bold text-blue-800">Resultado Estimado:</p>
          <p className="text-xl font-bold text-blue-900">R$ {resultado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
        </div>
      )}
    </div>
  );
}

// [MANTENHA OS OUTROS COMPONENTES DE CALCULADORA IGUAIS, APENAS MUDANDO AS CORES DOS BOTÕES PARA AZUL]
// Para MultaTransitoCalculator, IndenizacaoCalculator e PensaoAlimenticiaCalculator:
// Mude bg-green-500 para bg-blue-600 e hover:bg-green-600 para hover:bg-blue-700
// Mude bg-green-50 para bg-blue-50 e border-green-200 para border-blue-200
// Mude text-green-800 para text-blue-800
