"use client";

import { useState } from "react";

export default function CalculadorasContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Rescisão Trabalhista" desc="Estime sua rescisão em minutos."><RescisaoCalculator /></Card>
      <Card title="Multa de Trânsito" desc="Valor e pontos na CNH."><MultaTransitoCalculator /></Card>
      <Card title="Indenização Moral" desc="Faixa de valores para danos morais."><IndenizacaoCalculator /></Card>
      <Card title="Pensão Alimentícia" desc="Estime pensão por filho."><PensaoAlimenticiaCalculator /></Card>
    </div>
  );
}

function Card({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>
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

    total += s * 0.5; // 13º proporcional
    total += (s / 12) * (a * 12 + m); // férias proporcionais
    total += (s / 12) * (new Date().getMonth() + 1); // 13º vencido
    total += s * (a * 12 + m) * 0.08 * 1.4; // FGTS + 40%
    if (aviso === "sim") total += s;
    if (ferias === "sim") total += s * 4 / 3;

    setResultado(total);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold">Salário Bruto (R$)</label>
      <input
        type="text"
        placeholder="Ex: 2500,00"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold">Anos</label>
          <input
            type="number"
            placeholder="2"
            value={anos}
            onChange={(e) => setAnos(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Meses</label>
          <input
            type="number"
            placeholder="6"
            value={meses}
            onChange={(e) => setMeses(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold">Aviso Prévio?</label>
          <select value={aviso} onChange={(e) => setAviso(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold">Férias Vencidas?</label>
          <select value={ferias} onChange={(e) => setFerias(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
        </div>
      </div>
      <button onClick={calcular} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">
        Calcular Rescisão
      </button>
      {resultado !== null && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
          <p className="font-bold text-green-800">Resultado Estimado:</p>
          <p className="text-xl font-bold">R$ {resultado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
        </div>
      )}
    </div>
  );
}

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
    <div className="space-y-4">
      <label className="block text-sm font-semibold">Tipo de Infração</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
        <option value="">Selecione</option>
        <option value="leve">Leve</option>
        <option value="media">Média</option>
        <option value="grave">Grave</option>
        <option value="gravissima">Gravíssima</option>
      </select>
      <label className="block text-sm font-semibold">Pontos atuais na CNH</label>
      <input
        type="number"
        placeholder="0"
        value={pontos}
        onChange={(e) => setPontos(parseInt(e.target.value) || 0)}
        className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
      />
      <label className="block text-sm font-semibold">Reincidente?</label>
      <select value={reincidente} onChange={(e) => setReincidente(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
        <option value="nao">Não</option>
        <option value="sim">Sim</option>
      </select>
      <button onClick={calcular} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">
        Calcular Multa
      </button>
      {resultado && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
          <p className="font-bold text-green-800">Multa: R$ {resultado.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
          <p className="text-sm">Total de pontos na CNH: {resultado.pontos}</p>
          {resultado.pontos >= 20 && <p className="text-red-600 text-sm">Atenção: risco de suspensão!</p>}
        </div>
      )}
    </div>
  );
}

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
    <div className="space-y-4">
      <label className="block text-sm font-semibold">Tipo de Situação</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
        <option value="">Selecione</option>
        <option value="negativacao-indevida">Negativação indevida</option>
        <option value="acidente-transito">Acidente de trânsito</option>
        <option value="falha-produto">Falha de produto/serviço</option>
        <option value="demissao-injusta">Demissão injusta</option>
        <option value="erro-medico">Erro médico</option>
      </select>
      <label className="block text-sm font-semibold">Gravidade (1-10)</label>
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
      <label className="block text-sm font-semibold">Duração do Dano</label>
      <select value={duracao} onChange={(e) => setDuracao(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
        <option value="temporario">Temporário</option>
        <option value="permanente">Permanente</option>
      </select>
      <button onClick={calcular} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">
        Estimar Indenização
      </button>
      {resultado && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
          <p className="font-bold text-green-800">Faixa estimada:</p>
          <p className="text-xl font-bold">R$ {resultado.min.toLocaleString("pt-BR")} a R$ {resultado.max.toLocaleString("pt-BR")}</p>
        </div>
      )}
    </div>
  );
}

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
    <div className="space-y-4">
      <label className="block text-sm font-semibold">Renda Mensal do Pagador (R$)</label>
      <input
        type="text"
        placeholder="Ex: 3500,00"
        value={renda}
        onChange={(e) => setRenda(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
      />
      <label className="block text-sm font-semibold">Número de Filhos</label>
      <select value={filhos} onChange={(e) => setFilhos(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
        <option value="1">1 filho</option>
        <option value="2">2 filhos</option>
        <option value="3">3 filhos</option>
        <option value="4">4 filhos</option>
        <option value="5">5 ou mais</option>
      </select>
      <label className="block text-sm font-semibold">Faixa Etária</label>
      <select value={idade} onChange={(e) => setIdade(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black">
        <option value="bebe">Bebê (0-2 anos)</option>
        <option value="crianca">Criança (3-12 anos)</option>
        <option value="adolescente">Adolescente (13-17 anos)</option>
        <option value="universitario">Universitário (18+ anos)</option>
      </select>
      <label className="block text-sm font-semibold">Gastos Extraordinários (R$)</label>
      <input
        type="text"
        placeholder="Ex: escola, plano de saúde..."
        value={gastos}
        onChange={(e) => setGastos(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
      />
      <button onClick={calcular} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">
        Calcular Pensão
      </button>
      {resultado && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
          <p className="font-bold text-green-800">Valor Estimado:</p>
          <p className="text-xl font-bold">R$ {resultado.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
          <p className="text-sm">Equivalente a {resultado.perc.toFixed(1)}% da renda informada.</p>
        </div>
      )}
    </div>
  );
}
