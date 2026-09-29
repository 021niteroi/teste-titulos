export type Status = "ok" | "warn" | "bad" | "muted";

export type TitleRow = {
  name: string;
  stats: string;
  status: Status;
  note?: string;
  grants?: string;
  pages?: number;
};

export type RankRow = {
  rank: string;
  item: string;
  pages: string;
  take: string;
};

export const statusLabel: Record<Status, string> = {
  ok: "confirmado",
  warn: "conflito de fonte",
  bad: "sem fonte pública",
  muted: "sem atributo / só visual",
};

export const COST = "Página de Registro: Assimilação";

export const packCost = {
  semLimites: 15,
  dezReinos: 30,
  desafioBoss: 25,
  pavilhao: 25,
  qingqiu: 10,
  desfiladeiro: 65,
  avanc6: 6,
  avanc12: 12,
} as const;

export const defesa: TitleRow[] = [
  {
    name: "Memórias de Inverno",
    stats: "DefF +4 · DefM +4 · Esq +4",
    status: "ok",
    pages: 2,
    note: "Receita: Registro: Memórias do Inverno",
  },
  {
    name: "Graça do Cisne",
    stats: "DefF +6 · DefM +6 · Esq +6",
    status: "ok",
    pages: 6,
    note: "Receita: Registro: Graciosa Garça",
  },
  {
    name: "Colecionador da Fortuna",
    stats: "DefF +8 · DefM +8 · Esq +8",
    status: "ok",
    pages: 10,
    note: "Receita: Registro: Milhares de Bençãos",
  },
  {
    name: "O Mais Glamoroso",
    stats: "DefF +10 · DefM +10 · Esq +10",
    status: "ok",
    pages: 14,
    note: "Receita: Registro: Elegância Absoluta",
  },
  {
    name: "O Viajante Rápido",
    stats: "DefF +12 · DefM +12 · Esq +12",
    status: "ok",
    pages: 18,
    note: "Receita: Registro: Dança das Plumas",
  },
];

export const ataque: TitleRow[] = [
  {
    name: "Amor Passageiro",
    stats: "AtqF +4 · AtqM +4 · Acerto +8",
    status: "ok",
    pages: 4,
    note: "Receita: Registro: Correnteza das Estaç.",
  },
  {
    name: "Solidão do Andarilho",
    stats: "AtqF +6 · AtqM +6 · Acerto +12",
    status: "ok",
    pages: 8,
    note: "Receita: Registro: Ervas Flutuantes",
  },
  {
    name: "Coração Pintado",
    stats: "AtqF +8 · AtqM +8 · Acerto +16",
    status: "ok",
    pages: 12,
    note: "Receita: Registro: Coração Claro",
  },
  {
    name: "Ressonância da Harmonia",
    stats: "AtqF +10 · AtqM +10 · Acerto +20",
    status: "ok",
    pages: 16,
    note: "Receita: Registro: Harmonioso",
  },
  {
    name: "Vigia Real",
    stats: "AtqF +12 · AtqM +12 · Acerto +24",
    status: "ok",
    pages: 20,
    note: "Receita: Registro: Orgulho do Mundo",
  },
];

export const unicosA: TitleRow[] = [
  {
    name: "Registro: Memórias do Inverno",
    grants: "Memórias de Inverno",
    stats: "DefF +4 · DefM +4 · Esq +4",
    status: "ok",
    pages: 2,
  },
  {
    name: "Registro: Correnteza das Estaç.",
    grants: "Amor Passageiro",
    stats: "AtqF +4 · AtqM +4 · Acerto +8",
    status: "ok",
    pages: 4,
  },
  {
    name: "Registro: Graciosa Garça",
    grants: "Graça do Cisne",
    stats: "DefF +6 · DefM +6 · Esq +6",
    status: "ok",
    pages: 6,
  },
  {
    name: "Registro: Ervas Flutuantes",
    grants: "Solidão do Andarilho",
    stats: "AtqF +6 · AtqM +6 · Acerto +12",
    status: "ok",
    pages: 8,
  },
  {
    name: "Registro: Milhares de Bençãos",
    grants: "Colecionador da Fortuna",
    stats: "DefF +8 · DefM +8 · Esq +8",
    status: "ok",
    pages: 10,
  },
];

export const unicosB: TitleRow[] = [
  {
    name: "Registro: Coração Claro",
    grants: "Coração Pintado",
    stats: "AtqF +8 · AtqM +8 · Acerto +16",
    status: "ok",
    pages: 12,
  },
  {
    name: "Registro: Elegância Absoluta",
    grants: "O Mais Glamoroso",
    stats: "DefF +10 · DefM +10 · Esq +10",
    status: "ok",
    pages: 14,
    note: "No C pode aparecer Glamuroso.",
  },
  {
    name: "Registro: Harmonioso",
    grants: "Ressonância da Harmonia",
    stats: "AtqF +10 · AtqM +10 · Acerto +20",
    status: "ok",
    pages: 16,
  },
  {
    name: "Registro: Dança das Plumas",
    grants: "O Viajante Rápido",
    stats: "DefF +12 · DefM +12 · Esq +12",
    status: "ok",
    pages: 18,
  },
  {
    name: "Registro: Orgulho do Mundo",
    grants: "Vigia Real",
    stats: "AtqF +12 · AtqM +12 · Acerto +24",
    status: "ok",
    pages: 20,
  },
];

export const semLimites: TitleRow[] = [
  { name: "Fantasmas", stats: "AtqM +12", status: "ok" },
  { name: "Agente Duplo", stats: "AtqF +6", status: "ok" },
  { name: "Oculto", stats: "DefM +14", status: "ok" },
  { name: "Balanço", stats: "DefF +14", status: "ok" },
  {
    name: "Matador de Dragões",
    stats: "Ataque +40",
    status: "warn",
    note: "Trivia lista Precisão +40 no Classic.",
  },
  {
    name: "Avançado: Mestre do Universo",
    stats: "Precisão +60",
    status: "ok",
    note: "Automático ao completar o pack.",
  },
];

export const dezReinos: TitleRow[] = [
  { name: "Habitante da Sala da Terra", stats: "sem atributo", status: "muted" },
  { name: "Habitante da Sala da Água", stats: "sem atributo", status: "muted" },
  { name: "Habitante da Sala do Fogo", stats: "sem atributo", status: "muted" },
  { name: "Habitante da Sala do Vento", stats: "sem atributo", status: "muted" },
  { name: "Habitante da Sala do Trovão", stats: "sem atributo", status: "muted" },
  { name: "Habitante da Sala da Montanha", stats: "sem atributo", status: "muted" },
  { name: "Habitante da Sala do Lago", stats: "sem atributo", status: "muted" },
  { name: "Habitante da Sala do Céu", stats: "sem atributo", status: "muted" },
  { name: "Habitante da Sala do Universo", stats: "sem atributo", status: "muted" },
  {
    name: "Avançado: Senhor das Dimensões Divinas",
    stats: "AtqF +20 · AtqM +20 · DefF +30 · DefM +30",
    status: "ok",
    note: "Automático ao completar o pack.",
  },
];

export const desafioBoss: TitleRow[] = [
  { name: "Purgatório", stats: "AtqF +6", status: "ok" },
  { name: "Demônio Viajante", stats: "AtqM +12", status: "ok" },
  { name: "Condenação", stats: "Esq +30", status: "ok" },
  { name: "Duradouro", stats: "sem fonte pública", status: "bad" },
  { name: "Desobediente", stats: "sem fonte pública", status: "bad" },
  { name: "Fim da Luz Aurora", stats: "sem fonte pública", status: "bad" },
  {
    name: "Consegui Nota 10 Mãe!",
    stats: "só visual / cor",
    status: "muted",
    note: "Classic = Consegui 100, mãe!",
  },
];

export const pavilhao: TitleRow[] = [
  {
    name: "Montanha",
    stats: "DefF +12 · DefM +12",
    status: "ok",
    note: "Palácio dos Sonhos · Fácil",
  },
  {
    name: "Espírito",
    stats: "HP +20",
    status: "ok",
    note: "Palácio dos Sonhos · Difícil",
  },
  {
    name: "Embriagado",
    stats: "AtqF +10 · AtqM +10",
    status: "ok",
    note: "Palácio dos Sonhos · Lendário",
  },
];

export const qingqiu: TitleRow[] = [
  { name: "Recém-chegado de Qingqiu", stats: "HP +10", status: "ok" },
  { name: "Aventureiro de Qingqiu", stats: "HP +10", status: "ok" },
  { name: "Visitante de Qingqiu", stats: "HP +10", status: "ok" },
  { name: "Cidadão de Qingqiu", stats: "HP +10", status: "ok" },
  { name: "Herói de Qingqiu", stats: "HP +10", status: "ok" },
];

export const desfiladeiro: TitleRow[] = [
  { name: "Bênção do Sofrimento", stats: "sem fonte pública", status: "bad" },
  { name: "O Sofrimento", stats: "sem fonte pública", status: "bad" },
  { name: "Mestre do Sofrimento", stats: "sem fonte pública", status: "bad" },
  { name: "Ouro do Sofrimento", stats: "sem fonte pública", status: "bad" },
  { name: "Fogo do Sofrimento", stats: "sem fonte pública", status: "bad" },
  { name: "Pedra do Sofrimento", stats: "sem fonte pública", status: "bad" },
  { name: "Vento do Sofrimento", stats: "sem fonte pública", status: "bad" },
];

export const ranking: RankRow[] = [
  { rank: "1", item: "Sem Limites", pages: "15", take: "Melhor pack. Precisão +60 + Matador" },
  { rank: "2", item: "A Cidade Qingqiu", pages: "10", take: "Pack mais barato. HP +50" },
  { rank: "3", item: "Domínio dos 10 Reinos", pages: "30", take: "AtqF/M +20 · DefF/M +30 automático" },
  { rank: "4", item: "Pavilhão dos Sonhos", pages: "25", take: "Atq +10/10 · Def +12/12 · HP +20" },
  { rank: "5", item: "Desafio de BOSS", pages: "25", take: "Confirmado: AtqF +6 · AtqM +12 · Esq +30" },
  { rank: "6", item: "Individuais 2–10", pages: "30", take: "Cinco primeiros. Depois o preço dispara" },
  { rank: "7", item: "Individuais 12–20", pages: "80", take: "Caro demais frente aos packs" },
  { rank: "8", item: "Desfiladeiro do S.", pages: "65", take: "Só se o C mostrar atributo" },
];

export const avanc12A: TitleRow[] = [
  {
    name: "Registro: Seu Nome",
    grants: "Colecionador de Nomes",
    stats: "AtqF +20",
    status: "ok",
    pages: 12,
    note: "Colorido. Melhor AtqF unitário da Gerente.",
  },
  {
    name: "Registro: Conexão Efêmera",
    grants: "Karma na Ponta dos Dedos",
    stats: "AtqM +20",
    status: "ok",
    pages: 12,
  },
];

export const avanc12B: TitleRow[] = [
  {
    name: "Registro: Atravessando Oceanos",
    grants: "Visita de um Lugar Distante",
    stats: "DefF +30",
    status: "ok",
    pages: 12,
  },
  {
    name: "Registro: Não me Esqueça",
    grants: "Sonho da Memória",
    stats: "DefM +30",
    status: "ok",
    pages: 12,
    note: "Colorido.",
  },
];

export const avancAuto: TitleRow[] = [
  {
    name: "Arrasa! Bebê!",
    stats: "AtqF +15 · AtqM +15 · Acerto +100",
    status: "ok",
    pages: 24,
    note: "Automático. Marmota + Tiro + Bate-Bate + Tigre. Wiki: Arraza!",
  },
  {
    name: "Complicação Romântica",
    stats: "AtqF +20 · AtqM +20 · Acerto +200",
    status: "ok",
    pages: 18,
    note: "Automático. Garrafa + Anzol + Exploração.",
  },
  {
    name: "Nunca Enjoa",
    stats: "AtqF +25 · AtqM +25 · Acerto +300",
    status: "ok",
    pages: 36,
    note: "Automático. 6 atrações. Wiki lista Precisão +300 = Acerto.",
  },
];

export const marmota: TitleRow[] = [
  { name: "Beijo de um Martelo", stats: "sem atributo", status: "muted", note: "Colorido." },
  { name: "Peso do Martelo", stats: "sem atributo", status: "muted" },
  { name: "Purê de Marmota", stats: "AtqF +4 · AtqM +4", status: "ok", note: "Colorido." },
];

export const tiro: TitleRow[] = [
  { name: "Atirador", stats: "sem atributo", status: "muted", note: "Colorido." },
  { name: "Atirador Explosivo", stats: "sem atributo", status: "muted" },
  { name: "Atirador de Elite", stats: "AtqF +4 · AtqM +4", status: "ok", note: "Colorido." },
];

export const bateBate: TitleRow[] = [
  { name: "Batidas Divertidas", stats: "sem atributo", status: "muted", note: "Colorido." },
  { name: "Paixão da Batida", stats: "sem atributo", status: "muted" },
  {
    name: "Dominador da Batida",
    stats: "AtqF +4 · AtqM +4",
    status: "ok",
    note: "Colorido. Wiki: Conquistador da Batida.",
  },
];

export const tigre: TitleRow[] = [
  {
    name: "Força do Desejo",
    stats: "sem atributo",
    status: "muted",
    note: "Colorido. Wiki: Minha Determinação é Meu Poder.",
  },
  {
    name: "A Liberdade é a minha guia",
    stats: "sem atributo",
    status: "muted",
    note: "Wiki: A Liberdade é Minha Guia.",
  },
  {
    name: "Alcance dos sonhos",
    stats: "AtqF +4 · AtqM +4",
    status: "ok",
    note: "Colorido. Wiki: Meus Sonhos são Minhas Asas.",
  },
];

export const garrafa: TitleRow[] = [
  { name: "Areia na Garrafa", stats: "Acerto +8 · Esq +7", status: "ok", note: "Colorido." },
  { name: "Palavras de Esperança", stats: "DefF +3 · DefM +3", status: "ok" },
  { name: "Amor e Tristeza", stats: "sem atributo", status: "muted", note: "Colorido. Precisa pra Complicação." },
  { name: "Uma Canção de Espera", stats: "AtqF +2 · AtqM +2", status: "ok", note: "Colorido." },
];

export const anzol: TitleRow[] = [
  {
    name: "Memória Eterna",
    stats: "Acerto +8 · Esq +7",
    status: "ok",
    note: "Colorido. Trivia: A Memória do Encontro.",
  },
  { name: "A Esperança do Tempo", stats: "DefF +3 · DefM +3", status: "ok" },
  {
    name: "Destino da Vida",
    stats: "AtqF +2 · AtqM +2",
    status: "ok",
    note: "Colorido. Wiki: Destino da Minha Vida.",
  },
];

export const exploracao: TitleRow[] = [
  { name: "Explorador Divertido", stats: "Esq +12", status: "ok", note: "Colorido. Extra — não entra na Complicação." },
  {
    name: "Nada Alem Disso",
    stats: "sem atributo",
    status: "muted",
    note: "Colorido. Wiki: Nada Além Disso.",
  },
  { name: "Curtindo a Cada Segundo", stats: "sem atributo", status: "muted" },
  { name: "Estrela do Futuro", stats: "DefF +16 · DefM +16", status: "ok", note: "Colorido." },
];

export const roda: TitleRow[] = [
  {
    name: "A Melhor Vista",
    stats: "Acerto +10",
    status: "ok",
    note: "Colorido. Wiki: A Melhor Vista de Todas.",
  },
  { name: "Eu Canto para Sempre", stats: "DefF +6", status: "ok", note: "Colorido." },
  { name: "Estrelas no Bolso", stats: "AtqF +2 · AtqM +2", status: "ok", note: "Colorido." },
];

export const barco: TitleRow[] = [
  { name: "Pirata Coletor", stats: "Esq +10", status: "ok", note: "Colorido." },
  { name: "Quebrando as Ondas", stats: "DefM +6", status: "ok" },
  { name: "Senhor do Oceano", stats: "AtqF +2 · AtqM +2", status: "ok", note: "Colorido." },
];

export const carrossel: TitleRow[] = [
  { name: "Andando nos Sonhos", stats: "Acerto +10", status: "ok", note: "Colorido." },
  { name: "Brisa de Primavera", stats: "DefM +6", status: "ok" },
  { name: "No Sonho de Felicidade", stats: "AtqF +2 · AtqM +2", status: "ok", note: "Colorido." },
];

export const salto: TitleRow[] = [
  { name: "Sozinho no Topo", stats: "Esq +10", status: "ok", note: "Colorido." },
  { name: "Salto da Coragem", stats: "DefF +6", status: "ok" },
  { name: "Viva a Liberdade", stats: "AtqF +2 · AtqM +2", status: "ok", note: "Colorido." },
];

export const polvo: TitleRow[] = [
  { name: "Sonho Brilhante", stats: "Acerto +10", status: "ok", note: "Colorido." },
  { name: "Mito Estrelado", stats: "DefF +6", status: "ok" },
  {
    name: "Estrela Brilhante",
    stats: "AtqF +2 · AtqM +2",
    status: "ok",
    note: "Colorido. Wiki: A Estrela Mais Brilhante.",
  },
];

export const ptero: TitleRow[] = [
  { name: "O Alto das Nuvens", stats: "Esq +10", status: "ok", note: "Colorido." },
  { name: "O Mundo Pertence a Mim", stats: "DefM +6", status: "ok" },
  {
    name: "Voando no Universo",
    stats: "AtqF +2 · AtqM +2",
    status: "ok",
    note: "Colorido. Wiki: Próxima Parada: O Universo.",
  },
];

export const rankingAvanc: RankRow[] = [
  { rank: "1", item: "Seu Nome", pages: "12", take: "Colecionador de Nomes. AtqF +20 sozinho" },
  { rank: "2", item: "Conexão Efêmera", pages: "12", take: "Karma. AtqM +20 sozinho" },
  { rank: "3", item: "Atravessando Oceanos", pages: "12", take: "Visita Distante. DefF +30" },
  { rank: "4", item: "Não me Esqueça", pages: "12", take: "Sonho da Memória. DefM +30" },
  { rank: "5", item: "Complicação (3 receitas)", pages: "18", take: "Avançado +20/20 · Acerto +200 + packs" },
  { rank: "6", item: "Arrasa (4 receitas)", pages: "24", take: "Avançado +15/15 · Acerto +100 + 16/16 de atq" },
  { rank: "7", item: "Nunca Enjoa (6 receitas)", pages: "36", take: "Avançado +25/25 · Acerto +300 + passeios" },
  { rank: "8", item: "Os 4 de 12 juntos", pages: "48", take: "Mesmo teto do 10 Reinos, 18 pág. a mais" },
];
