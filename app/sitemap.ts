import { MetadataRoute } from "next";

const cidades = [
  "sao-paulo",
  "rio-de-janeiro",
  "belo-horizonte",
  "brasilia",
  "salvador",
  "fortaleza",
  "curitiba",
  "manaus",
  "recife",
  "goiania",
  "maceio",
  "florianopolis",
  "vitoria",
  "natal",
  "joao-pessoa",
  "aracaju",
  "teresina",
  "campo-grande",
  "cuiaba",
  "porto-alegre",
  "boa-vista",
  "macapa",
  "palmas",
  "porto-velho",
  "rio-branco",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // páginas fixas
  const fixed: MetadataRoute.Sitemap = [
    { url: "https://advogadonomade.com.br", lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: "https://advogadonomade.com.br/artigos", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://advogadonomade.com.br/artigos/o-que-e-ser-nomade-digital", lastModified: new Date("2025-09-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://advogadonomade.com.br/artigos/lgpd-ecommerce-checklist-2025", lastModified: new Date("2025-09-30"), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://advogadonomade.com.br/artigos/startup-em-delaware", lastModified: new Date("2025-10-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://advogadonomade.com.br/modelos", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: "https://advogadonomade.com.br/modelos/contrato-influencer", lastModified: new Date("2025-10-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://advogadonomade.com.br/modelos/lgpd-ecommerce", lastModified: new Date("2025-10-25"), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://advogadonomade.com.br/contato", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://advogadonomade.com.br/onde-estou", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: "https://advogadonomade.com.br/consultoria", lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  // páginas dinâmicas por cidade
  const cityPages: MetadataRoute.Sitemap = cidades.map((cidade) => ({
    url: `https://advogadonomade.com.br/advogado/${cidade}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...fixed, ...cityPages];
}
