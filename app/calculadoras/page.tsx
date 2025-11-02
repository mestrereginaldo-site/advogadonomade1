// app/calculadoras/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Calculadoras() {
  return (
    <>
      {/* Header Interno */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculadoras Jurídicas</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Estime valores de rescisão, multas, indenizações e pensão. Sempre consulte um advogado.
          </p>
        </div>
      </section>

      {/* Calculadoras */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RescisaoCalculator />
            <MultaTransitoCalculator />
            <IndenizacaoCalculator />
            <PensaoAlimenticiaCalculator />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Precisa de um cálculo preciso?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Nossas calculadoras são para estimativa. Para valores exatos e orientação jurídica personalizada, consulte nosso advogado.
          </p>
          <a
            href="https://wa.me/5571986482241?text=Preciso%20de%20um%20c%C3%A1lculo%20jur%C3%ADdico%20preciso"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <i className="fab fa-whatsapp"></i> Falar com advogado no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

// Componente para Rescisão Trabalhista
function RescisaoCalculator() {
  const [salario, setSalario] = useState("");
  const [anos, setAnos] = useState("2");
  const [meses, setMeses] = useState("6");
  const [aviso, setAviso] = useState("sim");
  const [ferias, setFerias] = useState("nao");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    if (!salario) return;
    const s = parseFloat(salario.replace(",", "."));
    const a = parseInt(anos) || 0;
    const m = parseInt(meses) || 0;
    let total = 0;

    total += s * 0.5; // 13º proporcional
    total += (s / 12) * (a * 12 + m); // férias proporcionais
    total += (s / 12) * (new Date().getMonth() + 1); // 13º vencido
    total += s * (a * 12 + m) * 0.08 * 1.4; // FGTS + 40%
    if (aviso === "sim") total += s;
    if (ferias === "sim") total += s * 4 / 3;

    setResultado(total);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <div className="text-center mb-6">
        <div className="text-3xl text-green-600 mb-2">
          <i className="fas fa-balance-scale"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Rescisão Trabalhista</h2>
        <p className="text-gray-600">Estime sua rescisão em minutos</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Salário Bruto (R$)</label>
          <input
            type="text"
            placeholder="Ex: 2500,00"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Anos</label>
            <input
              type="number"
              placeholder="2"
              value={anos}
              onChange={(e) => setAnos(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meses</label>
            <input
              type="number"
              placeholder="6"
              value={meses}
              onChange={(e) => setMeses(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Aviso Prévio?</label>
            <select 
              value={aviso} 
              onChange={(e) => setAviso(e.target.value)} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Férias Vencidas?</label>
            <select 
              value={ferias} 
              onChange={(e) => setFerias(e.target.value)} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="nao">Não</option>
              <option value="sim">Sim</option>
            </select>
          </div>
        </div>
        
        <button 
          onClick={calcular}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Calcular Rescisão
        </button>
        
        {resultado !== null && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-bold text-green-800">Resultado Estimado:</p>
            <p className="text-2xl font-bold text-green-600">
              R$ {resultado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para Multa de Trânsito
function MultaTransitoCalculator() {
  const [tipo, setTipo] = useState("");
  const [pontos, setPontos] = useState(0);
  const [reincidente, setReincidente] = useState("nao");
  const [resultado, setResultado] = useState<{ valor: number; pontos: number } | null>(null);

  const calcular = () => {
    if (!tipo) return;
    const valores: Record<string, number> = {
      leve: 88.38,
      media: 130.16,
      grave: 195.23,
      gravissima: 293.47,
    };
    let valor = valores[tipo];
    if (reincidente === "sim") valor *= 1.1;
    setResultado({
      valor,
      pontos: parseInt(pontos.toString()) + (tipo === "leve" ? 3 : tipo === "media" ? 4 : tipo === "grave" ? 5 : 7),
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <div className="text-center mb-6">
        <div className="text-3xl text-green-600 mb-2">
          <i className="fas fa-car"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Multa de Trânsito</h2>
        <p className="text-gray-600">Valor e pontos na CNH</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Infração</label>
          <select 
            value={tipo} 
            onChange={(e) => setTipo(e.target.value)} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Selecione</option>
            <option value="leve">Leve</option>
            <option value="media">Média</option>
            <option value="grave">Grave</option>
            <option value="gravissima">Gravíssima</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pontos atuais na CNH</label>
          <input
            type="number"
            placeholder="0"
            value={pontos}
            onChange={(e) => setPontos(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Reincidente?</label>
          <select 
            value={reincidente} 
            onChange={(e) => setReincidente(e.target.value)} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
        </div>
        
        <button 
          onClick={calcular}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Calcular Multa
        </button>
        
        {resultado && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-bold text-green-800">Multa: R$ {resultado.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
            <p className="text-sm text-green-700">Total de pontos na CNH: {resultado.pontos}</p>
            {resultado.pontos >= 20 && <p className="text-red-600 text-sm font-medium">Atenção: risco de suspensão da CNH!</p>}
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para Indenização Moral
function IndenizacaoCalculator() {
  const [tipo, setTipo] = useState("");
  const [gravidade, setGravidade] = useState(5);
  const [duracao, setDuracao] = useState("temporario");
  const [resultado, setResultado] = useState<{ min: number; max: number } | null>(null);

  const calcular = () => {
    if (!tipo) return;
    const base: Record<string, [number, number]> = {
      "negativacao-indevida": [5000, 15000],
      "acidente-transito": [10000, 50000],
      "falha-produto": [3000, 20000],
      "demissao-injusta": [5000, 30000],
      "erro-medico": [20000, 100000],
    };
    let [min, max] = base[tipo];
    const fator = gravidade / 5;
    min *= fator;
    max *= fator;
    if (duracao === "permanente") {
      min *= 1.5;
      max *= 1.5;
    }
    setResultado({ min: Math.round(min), max: Math.round(max) });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <div className="text-center mb-6">
        <div className="text-3xl text-green-600 mb-2">
          <i className="fas fa-gavel"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Indenização Moral</h2>
        <p className="text-gray-600">Faixa de valores para danos morais</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Situação</label>
          <select 
            value={tipo} 
            onChange={(e) => setTipo(e.target.value)} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Selecione</option>
            <option value="negativacao-indevida">Negativação indevida</option>
            <option value="acidente-transito">Acidente de trânsito</option>
            <option value="falha-produto">Falha de produto/serviço</option>
            <option value="demissao-injusta">Demissão injusta</option>
            <option value="erro-medico">Erro médico</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gravidade (1-10)</label>
          <input
            type="range"
            min="1"
            max="10"
            value={gravidade}
            onChange={(e) => setGravidade(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Leve</span>
            <span>Moderada</span>
            <span>Grave</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Duração do Dano</label>
          <select 
            value={duracao} 
            onChange={(e) => setDuracao(e.target.value)} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="temporario">Temporário</option>
            <option value="permanente">Permanente</option>
          </select>
        </div>
        
        <button 
          onClick={calcular}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Estimar Indenização
        </button>
        
        {resultado && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-bold text-green-800">Faixa estimada:</p>
            <p className="text-2xl font-bold text-green-600">
              R$ {resultado.min.toLocaleString("pt-BR")} a R$ {resultado.max.toLocaleString("pt-BR")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para Pensão Alimentícia
function PensaoAlimenticiaCalculator() {
  const [renda, setRenda] = useState("");
  const [filhos, setFilhos] = useState("1");
  const [idade, setIdade] = useState("crianca");
  const [gastos, setGastos] = useState("");
  const [resultado, setResultado] = useState<{ valor: number; perc: number } | null>(null);

  const calcular = () => {
    if (!renda) return;
    const r = parseFloat(renda.replace(",", "."));
    const f = parseInt(filhos);
    const g = parseFloat(gastos.replace(",", ".")) || 0;
    let perc = 30;
    if (f > 1) perc = Math.max(20, 50 / f);
    const mult = { bebe: 1.2, crianca: 1, adolescente: 1.1, universitario: 1.3 } as Record<string, number>;
    perc *= mult[idade];
    perc = Math.min(perc, 60);
    const valor = (r * perc / 100) + g / 2;
    setResultado({ valor, perc });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <div className="text-center mb-6">
        <div className="text-3xl text-green-600 mb-2">
          <i className="fas fa-hand-holding-usd"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Pensão Alimentícia</h2>
        <p className="text-gray-600">Estime pensão por filho</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Renda Mensal do Pagador (R$)</label>
          <input
            type="text"
            placeholder="Ex: 3500,00"
            value={renda}
            onChange={(e) => setRenda(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Número de Filhos</label>
          <select 
            value={filhos} 
            onChange={(e) => setFilhos(e.target.value)} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="1">1 filho</option>
            <option value="2">2 filhos</option>
            <option value="3">3 filhos</option>
            <option value="4">4 filhos</option>
            <option value="5">5 ou mais</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Faixa Etária</label>
          <select 
            value={idade} 
            onChange={(e) => setIdade(e.target.value)} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="bebe">Bebê (0-2 anos)</option>
            <option value="crianca">Criança (3-12 anos)</option>
            <option value="adolescente">Adolescente (13-17 anos)</option>
            <option value="universitario">Universitário (18+ anos)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gastos Extraordinários (R$)</label>
          <input
            type="text"
            placeholder="Ex: escola, plano de saúde..."
            value={gastos}
            onChange={(e) => setGastos(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <button 
          onClick={calcular}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Calcular Pensão
        </button>
        
        {resultado && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-bold text-green-800">Valor Estimado:</p>
            <p className="text-2xl font-bold text-green-600">
              R$ {resultado.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-green-700">Equivalente a {resultado.perc.toFixed(1)}% da renda informada.</p>
          </div>
        )}
      </div>
    </div>
  );
}
