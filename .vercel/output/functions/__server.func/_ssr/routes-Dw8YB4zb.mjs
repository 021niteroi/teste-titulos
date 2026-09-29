import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dw8YB4zb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusLabel = {
	ok: "confirmado",
	warn: "conflito de fonte",
	bad: "sem fonte pública",
	muted: "sem atributo / só visual"
};
var COST = "Página de Registro: Assimilação";
var packCost = {
	semLimites: 15,
	dezReinos: 30,
	desafioBoss: 25,
	pavilhao: 25,
	qingqiu: 10,
	desfiladeiro: 65,
	avanc6: 6,
	avanc12: 12
};
var defesa = [
	{
		name: "Memórias de Inverno",
		stats: "DefF +4 · DefM +4 · Esq +4",
		status: "ok",
		pages: 2,
		note: "Receita: Registro: Memórias do Inverno"
	},
	{
		name: "Graça do Cisne",
		stats: "DefF +6 · DefM +6 · Esq +6",
		status: "ok",
		pages: 6,
		note: "Receita: Registro: Graciosa Garça"
	},
	{
		name: "Colecionador da Fortuna",
		stats: "DefF +8 · DefM +8 · Esq +8",
		status: "ok",
		pages: 10,
		note: "Receita: Registro: Milhares de Bençãos"
	},
	{
		name: "O Mais Glamoroso",
		stats: "DefF +10 · DefM +10 · Esq +10",
		status: "ok",
		pages: 14,
		note: "Receita: Registro: Elegância Absoluta"
	},
	{
		name: "O Viajante Rápido",
		stats: "DefF +12 · DefM +12 · Esq +12",
		status: "ok",
		pages: 18,
		note: "Receita: Registro: Dança das Plumas"
	}
];
var ataque = [
	{
		name: "Amor Passageiro",
		stats: "AtqF +4 · AtqM +4 · Acerto +8",
		status: "ok",
		pages: 4,
		note: "Receita: Registro: Correnteza das Estaç."
	},
	{
		name: "Solidão do Andarilho",
		stats: "AtqF +6 · AtqM +6 · Acerto +12",
		status: "ok",
		pages: 8,
		note: "Receita: Registro: Ervas Flutuantes"
	},
	{
		name: "Coração Pintado",
		stats: "AtqF +8 · AtqM +8 · Acerto +16",
		status: "ok",
		pages: 12,
		note: "Receita: Registro: Coração Claro"
	},
	{
		name: "Ressonância da Harmonia",
		stats: "AtqF +10 · AtqM +10 · Acerto +20",
		status: "ok",
		pages: 16,
		note: "Receita: Registro: Harmonioso"
	},
	{
		name: "Vigia Real",
		stats: "AtqF +12 · AtqM +12 · Acerto +24",
		status: "ok",
		pages: 20,
		note: "Receita: Registro: Orgulho do Mundo"
	}
];
var unicosA = [
	{
		name: "Registro: Memórias do Inverno",
		grants: "Memórias de Inverno",
		stats: "DefF +4 · DefM +4 · Esq +4",
		status: "ok",
		pages: 2
	},
	{
		name: "Registro: Correnteza das Estaç.",
		grants: "Amor Passageiro",
		stats: "AtqF +4 · AtqM +4 · Acerto +8",
		status: "ok",
		pages: 4
	},
	{
		name: "Registro: Graciosa Garça",
		grants: "Graça do Cisne",
		stats: "DefF +6 · DefM +6 · Esq +6",
		status: "ok",
		pages: 6
	},
	{
		name: "Registro: Ervas Flutuantes",
		grants: "Solidão do Andarilho",
		stats: "AtqF +6 · AtqM +6 · Acerto +12",
		status: "ok",
		pages: 8
	},
	{
		name: "Registro: Milhares de Bençãos",
		grants: "Colecionador da Fortuna",
		stats: "DefF +8 · DefM +8 · Esq +8",
		status: "ok",
		pages: 10
	}
];
var unicosB = [
	{
		name: "Registro: Coração Claro",
		grants: "Coração Pintado",
		stats: "AtqF +8 · AtqM +8 · Acerto +16",
		status: "ok",
		pages: 12
	},
	{
		name: "Registro: Elegância Absoluta",
		grants: "O Mais Glamoroso",
		stats: "DefF +10 · DefM +10 · Esq +10",
		status: "ok",
		pages: 14,
		note: "No C pode aparecer Glamuroso."
	},
	{
		name: "Registro: Harmonioso",
		grants: "Ressonância da Harmonia",
		stats: "AtqF +10 · AtqM +10 · Acerto +20",
		status: "ok",
		pages: 16
	},
	{
		name: "Registro: Dança das Plumas",
		grants: "O Viajante Rápido",
		stats: "DefF +12 · DefM +12 · Esq +12",
		status: "ok",
		pages: 18
	},
	{
		name: "Registro: Orgulho do Mundo",
		grants: "Vigia Real",
		stats: "AtqF +12 · AtqM +12 · Acerto +24",
		status: "ok",
		pages: 20
	}
];
var semLimites = [
	{
		name: "Fantasmas",
		stats: "AtqM +12",
		status: "ok"
	},
	{
		name: "Agente Duplo",
		stats: "AtqF +6",
		status: "ok"
	},
	{
		name: "Oculto",
		stats: "DefM +14",
		status: "ok"
	},
	{
		name: "Balanço",
		stats: "DefF +14",
		status: "ok"
	},
	{
		name: "Matador de Dragões",
		stats: "Ataque +40",
		status: "warn",
		note: "Trivia lista Precisão +40 no Classic."
	},
	{
		name: "Avançado: Mestre do Universo",
		stats: "Precisão +60",
		status: "ok",
		note: "Automático ao completar o pack."
	}
];
var dezReinos = [
	{
		name: "Habitante da Sala da Terra",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Habitante da Sala da Água",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Habitante da Sala do Fogo",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Habitante da Sala do Vento",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Habitante da Sala do Trovão",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Habitante da Sala da Montanha",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Habitante da Sala do Lago",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Habitante da Sala do Céu",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Habitante da Sala do Universo",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Avançado: Senhor das Dimensões Divinas",
		stats: "AtqF +20 · AtqM +20 · DefF +30 · DefM +30",
		status: "ok",
		note: "Automático ao completar o pack."
	}
];
var desafioBoss = [
	{
		name: "Purgatório",
		stats: "AtqF +6",
		status: "ok"
	},
	{
		name: "Demônio Viajante",
		stats: "AtqM +12",
		status: "ok"
	},
	{
		name: "Condenação",
		stats: "Esq +30",
		status: "ok"
	},
	{
		name: "Duradouro",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "Desobediente",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "Fim da Luz Aurora",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "Consegui Nota 10 Mãe!",
		stats: "só visual / cor",
		status: "muted",
		note: "Classic = Consegui 100, mãe!"
	}
];
var pavilhao = [
	{
		name: "Montanha",
		stats: "DefF +12 · DefM +12",
		status: "ok",
		note: "Palácio dos Sonhos · Fácil"
	},
	{
		name: "Espírito",
		stats: "HP +20",
		status: "ok",
		note: "Palácio dos Sonhos · Difícil"
	},
	{
		name: "Embriagado",
		stats: "AtqF +10 · AtqM +10",
		status: "ok",
		note: "Palácio dos Sonhos · Lendário"
	}
];
var qingqiu = [
	{
		name: "Recém-chegado de Qingqiu",
		stats: "HP +10",
		status: "ok"
	},
	{
		name: "Aventureiro de Qingqiu",
		stats: "HP +10",
		status: "ok"
	},
	{
		name: "Visitante de Qingqiu",
		stats: "HP +10",
		status: "ok"
	},
	{
		name: "Cidadão de Qingqiu",
		stats: "HP +10",
		status: "ok"
	},
	{
		name: "Herói de Qingqiu",
		stats: "HP +10",
		status: "ok"
	}
];
var desfiladeiro = [
	{
		name: "Bênção do Sofrimento",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "O Sofrimento",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "Mestre do Sofrimento",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "Ouro do Sofrimento",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "Fogo do Sofrimento",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "Pedra do Sofrimento",
		stats: "sem fonte pública",
		status: "bad"
	},
	{
		name: "Vento do Sofrimento",
		stats: "sem fonte pública",
		status: "bad"
	}
];
var ranking = [
	{
		rank: "1",
		item: "Sem Limites",
		pages: "15",
		take: "Melhor pack. Precisão +60 + Matador"
	},
	{
		rank: "2",
		item: "A Cidade Qingqiu",
		pages: "10",
		take: "Pack mais barato. HP +50"
	},
	{
		rank: "3",
		item: "Domínio dos 10 Reinos",
		pages: "30",
		take: "AtqF/M +20 · DefF/M +30 automático"
	},
	{
		rank: "4",
		item: "Pavilhão dos Sonhos",
		pages: "25",
		take: "Atq +10/10 · Def +12/12 · HP +20"
	},
	{
		rank: "5",
		item: "Desafio de BOSS",
		pages: "25",
		take: "Confirmado: AtqF +6 · AtqM +12 · Esq +30"
	},
	{
		rank: "6",
		item: "Individuais 2–10",
		pages: "30",
		take: "Cinco primeiros. Depois o preço dispara"
	},
	{
		rank: "7",
		item: "Individuais 12–20",
		pages: "80",
		take: "Caro demais frente aos packs"
	},
	{
		rank: "8",
		item: "Desfiladeiro do S.",
		pages: "65",
		take: "Só se o C mostrar atributo"
	}
];
var avanc12A = [{
	name: "Registro: Seu Nome",
	grants: "Colecionador de Nomes",
	stats: "AtqF +20",
	status: "ok",
	pages: 12,
	note: "Colorido. Melhor AtqF unitário da Gerente."
}, {
	name: "Registro: Conexão Efêmera",
	grants: "Karma na Ponta dos Dedos",
	stats: "AtqM +20",
	status: "ok",
	pages: 12
}];
var avanc12B = [{
	name: "Registro: Atravessando Oceanos",
	grants: "Visita de um Lugar Distante",
	stats: "DefF +30",
	status: "ok",
	pages: 12
}, {
	name: "Registro: Não me Esqueça",
	grants: "Sonho da Memória",
	stats: "DefM +30",
	status: "ok",
	pages: 12,
	note: "Colorido."
}];
var avancAuto = [
	{
		name: "Arrasa! Bebê!",
		stats: "AtqF +15 · AtqM +15 · Acerto +100",
		status: "ok",
		pages: 24,
		note: "Automático. Marmota + Tiro + Bate-Bate + Tigre. Wiki: Arraza!"
	},
	{
		name: "Complicação Romântica",
		stats: "AtqF +20 · AtqM +20 · Acerto +200",
		status: "ok",
		pages: 18,
		note: "Automático. Garrafa + Anzol + Exploração."
	},
	{
		name: "Nunca Enjoa",
		stats: "AtqF +25 · AtqM +25 · Acerto +300",
		status: "ok",
		pages: 36,
		note: "Automático. 6 atrações. Wiki lista Precisão +300 = Acerto."
	}
];
var marmota = [
	{
		name: "Beijo de um Martelo",
		stats: "sem atributo",
		status: "muted",
		note: "Colorido."
	},
	{
		name: "Peso do Martelo",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Purê de Marmota",
		stats: "AtqF +4 · AtqM +4",
		status: "ok",
		note: "Colorido."
	}
];
var tiro = [
	{
		name: "Atirador",
		stats: "sem atributo",
		status: "muted",
		note: "Colorido."
	},
	{
		name: "Atirador Explosivo",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Atirador de Elite",
		stats: "AtqF +4 · AtqM +4",
		status: "ok",
		note: "Colorido."
	}
];
var bateBate = [
	{
		name: "Batidas Divertidas",
		stats: "sem atributo",
		status: "muted",
		note: "Colorido."
	},
	{
		name: "Paixão da Batida",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Dominador da Batida",
		stats: "AtqF +4 · AtqM +4",
		status: "ok",
		note: "Colorido. Wiki: Conquistador da Batida."
	}
];
var tigre = [
	{
		name: "Força do Desejo",
		stats: "sem atributo",
		status: "muted",
		note: "Colorido. Wiki: Minha Determinação é Meu Poder."
	},
	{
		name: "A Liberdade é a minha guia",
		stats: "sem atributo",
		status: "muted",
		note: "Wiki: A Liberdade é Minha Guia."
	},
	{
		name: "Alcance dos sonhos",
		stats: "AtqF +4 · AtqM +4",
		status: "ok",
		note: "Colorido. Wiki: Meus Sonhos são Minhas Asas."
	}
];
var garrafa = [
	{
		name: "Areia na Garrafa",
		stats: "Acerto +8 · Esq +7",
		status: "ok",
		note: "Colorido."
	},
	{
		name: "Palavras de Esperança",
		stats: "DefF +3 · DefM +3",
		status: "ok"
	},
	{
		name: "Amor e Tristeza",
		stats: "sem atributo",
		status: "muted",
		note: "Colorido. Precisa pra Complicação."
	},
	{
		name: "Uma Canção de Espera",
		stats: "AtqF +2 · AtqM +2",
		status: "ok",
		note: "Colorido."
	}
];
var anzol = [
	{
		name: "Memória Eterna",
		stats: "Acerto +8 · Esq +7",
		status: "ok",
		note: "Colorido. Trivia: A Memória do Encontro."
	},
	{
		name: "A Esperança do Tempo",
		stats: "DefF +3 · DefM +3",
		status: "ok"
	},
	{
		name: "Destino da Vida",
		stats: "AtqF +2 · AtqM +2",
		status: "ok",
		note: "Colorido. Wiki: Destino da Minha Vida."
	}
];
var exploracao = [
	{
		name: "Explorador Divertido",
		stats: "Esq +12",
		status: "ok",
		note: "Colorido. Extra — não entra na Complicação."
	},
	{
		name: "Nada Alem Disso",
		stats: "sem atributo",
		status: "muted",
		note: "Colorido. Wiki: Nada Além Disso."
	},
	{
		name: "Curtindo a Cada Segundo",
		stats: "sem atributo",
		status: "muted"
	},
	{
		name: "Estrela do Futuro",
		stats: "DefF +16 · DefM +16",
		status: "ok",
		note: "Colorido."
	}
];
var roda = [
	{
		name: "A Melhor Vista",
		stats: "Acerto +10",
		status: "ok",
		note: "Colorido. Wiki: A Melhor Vista de Todas."
	},
	{
		name: "Eu Canto para Sempre",
		stats: "DefF +6",
		status: "ok",
		note: "Colorido."
	},
	{
		name: "Estrelas no Bolso",
		stats: "AtqF +2 · AtqM +2",
		status: "ok",
		note: "Colorido."
	}
];
var barco = [
	{
		name: "Pirata Coletor",
		stats: "Esq +10",
		status: "ok",
		note: "Colorido."
	},
	{
		name: "Quebrando as Ondas",
		stats: "DefM +6",
		status: "ok"
	},
	{
		name: "Senhor do Oceano",
		stats: "AtqF +2 · AtqM +2",
		status: "ok",
		note: "Colorido."
	}
];
var carrossel = [
	{
		name: "Andando nos Sonhos",
		stats: "Acerto +10",
		status: "ok",
		note: "Colorido."
	},
	{
		name: "Brisa de Primavera",
		stats: "DefM +6",
		status: "ok"
	},
	{
		name: "No Sonho de Felicidade",
		stats: "AtqF +2 · AtqM +2",
		status: "ok",
		note: "Colorido."
	}
];
var salto = [
	{
		name: "Sozinho no Topo",
		stats: "Esq +10",
		status: "ok",
		note: "Colorido."
	},
	{
		name: "Salto da Coragem",
		stats: "DefF +6",
		status: "ok"
	},
	{
		name: "Viva a Liberdade",
		stats: "AtqF +2 · AtqM +2",
		status: "ok",
		note: "Colorido."
	}
];
var polvo = [
	{
		name: "Sonho Brilhante",
		stats: "Acerto +10",
		status: "ok",
		note: "Colorido."
	},
	{
		name: "Mito Estrelado",
		stats: "DefF +6",
		status: "ok"
	},
	{
		name: "Estrela Brilhante",
		stats: "AtqF +2 · AtqM +2",
		status: "ok",
		note: "Colorido. Wiki: A Estrela Mais Brilhante."
	}
];
var ptero = [
	{
		name: "O Alto das Nuvens",
		stats: "Esq +10",
		status: "ok",
		note: "Colorido."
	},
	{
		name: "O Mundo Pertence a Mim",
		stats: "DefM +6",
		status: "ok"
	},
	{
		name: "Voando no Universo",
		stats: "AtqF +2 · AtqM +2",
		status: "ok",
		note: "Colorido. Wiki: Próxima Parada: O Universo."
	}
];
var rankingAvanc = [
	{
		rank: "1",
		item: "Seu Nome",
		pages: "12",
		take: "Colecionador de Nomes. AtqF +20 sozinho"
	},
	{
		rank: "2",
		item: "Conexão Efêmera",
		pages: "12",
		take: "Karma. AtqM +20 sozinho"
	},
	{
		rank: "3",
		item: "Atravessando Oceanos",
		pages: "12",
		take: "Visita Distante. DefF +30"
	},
	{
		rank: "4",
		item: "Não me Esqueça",
		pages: "12",
		take: "Sonho da Memória. DefM +30"
	},
	{
		rank: "5",
		item: "Complicação (3 receitas)",
		pages: "18",
		take: "Avançado +20/20 · Acerto +200 + packs"
	},
	{
		rank: "6",
		item: "Arrasa (4 receitas)",
		pages: "24",
		take: "Avançado +15/15 · Acerto +100 + 16/16 de atq"
	},
	{
		rank: "7",
		item: "Nunca Enjoa (6 receitas)",
		pages: "36",
		take: "Avançado +25/25 · Acerto +300 + passeios"
	},
	{
		rank: "8",
		item: "Os 4 de 12 juntos",
		pages: "48",
		take: "Mesmo teto do 10 Reinos, 18 pág. a mais"
	}
];
function Pill({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `pill pill-${status}`,
		children: statusLabel[status]
	});
}
function Ledger({ kicker, title, subtitle, rows, total, cost }) {
	const mapped = rows.some((row) => row.grants);
	const showPages = rows.some((row) => row.pages != null);
	const pageSum = rows.reduce((sum, row) => sum + (row.pages ?? 0), 0);
	const headerCost = cost ?? (showPages ? pageSum : void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "ledger h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "ledger-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs font-medium tracking-[0.14em] text-subtle uppercase",
						children: kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl leading-tight tracking-tight text-fg",
						children: title
					}),
					subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: subtitle
					}) : null
				]
			}), headerCost != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "cost-mark",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl leading-none text-accent",
					children: headerCost
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-[0.65rem] tracking-[0.12em] text-subtle uppercase",
					children: "pág."
				})]
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "stat-table",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: mapped ? "Receita" : "Título" }),
					mapped ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Título no C" }) : null,
					showPages ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "col-pages",
						children: "Pág."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Atributos" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-fg",
							children: row.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { status: row.status })]
					}), row.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-muted",
						children: row.note
					}) : null] }),
					mapped ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-medium text-fg",
						children: row.grants
					}) : null,
					showPages ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "col-pages font-mono text-accent",
						children: row.pages
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-mono text-accent",
						children: row.stats
					})
				] }, row.name)), total ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "total",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: mapped ? 2 : 1,
							children: "Total"
						}),
						showPages ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "col-pages font-mono",
							children: pageSum
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "font-mono",
							children: total
						})
					]
				}) : null] })]
			})
		})]
	});
}
function Pair({ children, captureId }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: captureId,
		className: "grid grid-cols-1 items-stretch gap-4 xl:grid-cols-2 xl:gap-5",
		children
	});
}
function RankTable({ kicker, title, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "ledger",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "ledger-head",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-xs font-medium tracking-[0.14em] text-subtle uppercase",
				children: kicker
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl leading-tight tracking-tight text-fg",
				children: title
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "stat-table",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "w-12",
						children: "#"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Item" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "col-pages",
						children: "Pág."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "O que leva" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-display text-lg text-accent",
						children: row.rank
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-medium",
						children: row.item
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "col-pages font-mono text-accent",
						children: row.pages
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-mono text-accent",
						children: row.take
					})
				] }, row.rank)) })]
			})
		})]
	});
}
function Atlas() {
	const [tab, setTab] = (0, import_react.useState)("avanc");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-dvh max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8 border-b border-border pb-7 lg:mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 text-xs font-medium tracking-[0.18em] text-accent uppercase",
						children: ["Gerente de Eventos · Fabricar · ", tab === "avanc" ? "Avanç." : "Coletar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display max-w-3xl text-2xl leading-tight tracking-tight text-fg sm:text-[2.35rem]",
						children: "Atlas de títulos — Página de Registro"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base",
						children: [
							"Moeda: ",
							COST,
							". Custos lidos no Gerente. Packs 1× por personagem. Atributos somam mesmo desequipados. Receita ≠ nome no C — conferido in-game."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tab-bar mt-5",
						role: "tablist",
						"aria-label": "Aba do NPC",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": tab === "avanc",
							className: tab === "avanc" ? "tab tab-on" : "tab",
							onClick: () => setTab("avanc"),
							children: "Avanç."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": tab === "coletar",
							className: tab === "coletar" ? "tab tab-on" : "tab",
							onClick: () => setTab("coletar"),
							children: "Coletar"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pill pill-ok",
								children: "confirmado"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pill pill-warn",
								children: "conflito de fonte"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pill pill-bad",
								children: "sem fonte pública"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pill pill-muted",
								children: "sem atributo / só visual"
							})
						]
					})
				]
			}),
			tab === "avanc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvancTab, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColetarTab, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-10 border-t border-border pt-6 text-xs leading-relaxed text-subtle",
				children: "Fontes: Wiki PW · Trivia PW (Mundo da Fantasia) · conferência in-game no Gerente. Custos e nomes de receita: dump Classic. Atributos individuais: Trivia. Avançados automáticos: Wiki + Trivia (Acerto = Precisão). Variantes de nome (Classic × wiki) ficam na nota da linha."
			})
		]
	});
}
function AvancTab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5 lg:gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-avanc-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Avanç. · 12 páginas · ataque",
					title: "Seu Nome · Conexão",
					subtitle: "Um título cada. Melhor custo de atq da Gerente.",
					rows: avanc12A
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Avanç. · 12 páginas · defesa",
					title: "Oceanos · Não me Esqueça",
					subtitle: "DefF +30 e DefM +30 separados. 10 Reinos junta os quatro por 30.",
					rows: avanc12B
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
				kicker: "Avanç. · automático ao fechar o conjunto",
				title: "Títulos avançados",
				subtitle: "Não gasta página extra. Cai ao completar as receitas do grupo.",
				rows: avancAuto,
				total: "Se pegar os três conjuntos: AtqF +60 · AtqM +60 · Acerto +600"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-avanc-arrasa-a",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Arrasa · atração",
					title: "Registro: Bata na Marmota",
					subtitle: "3 títulos. Só o último tem atributo.",
					rows: marmota,
					cost: packCost.avanc6,
					total: "AtqF +4 · AtqM +4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Arrasa · atração",
					title: "Registro: Tiro ao Alvo",
					subtitle: "3 títulos. Só o Elite soma combate.",
					rows: tiro,
					cost: packCost.avanc6,
					total: "AtqF +4 · AtqM +4"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-avanc-arrasa-b",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Arrasa · atração",
					title: "Registro: Bate-Bate",
					subtitle: "Classic: Dominador. Wiki: Conquistador.",
					rows: bateBate,
					cost: packCost.avanc6,
					total: "AtqF +4 · AtqM +4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Arrasa · atração",
					title: "Registro: Maratona do Tigre",
					subtitle: "Fecha Arrasa! Bebê! junto com as outras 3.",
					rows: tigre,
					cost: packCost.avanc6,
					total: "AtqF +4 · AtqM +4"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-avanc-complic-a",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Complicação · garrafa",
					title: "Registro: Garrafa",
					subtitle: "4 títulos. Amor e Tristeza é visual, mas conta no avançado.",
					rows: garrafa,
					cost: packCost.avanc6,
					total: "AtqF +2 · AtqM +2 · DefF +3 · DefM +3 · Acerto +8 · Esq +7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Complicação · anzol",
					title: "Registro: Anzol para Mensagem",
					subtitle: "3 títulos. Memória Eterna no C.",
					rows: anzol,
					cost: packCost.avanc6,
					total: "AtqF +2 · AtqM +2 · DefF +3 · DefM +3 · Acerto +8 · Esq +7"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
				kicker: "Complicação · mapa do tesouro",
				title: "Registro: Exploração",
				subtitle: "Fecha Complicação Romântica. Explorador Divertido vem de brinde.",
				rows: exploracao,
				cost: packCost.avanc6,
				total: "DefF +16 · DefM +16 · Esq +12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-avanc-nunca-a",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Nunca Enjoa · atração",
					title: "Registro: Roda Gigante",
					subtitle: "Sem bilhete no Trivia. 30 / 60 / 180 voltas.",
					rows: roda,
					cost: packCost.avanc6,
					total: "AtqF +2 · AtqM +2 · DefF +6 · Acerto +10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Nunca Enjoa · atração",
					title: "Registro: Barco Lagostal",
					subtitle: "30 / 60 / 180 voltas.",
					rows: barco,
					cost: packCost.avanc6,
					total: "AtqF +2 · AtqM +2 · DefM +6 · Esq +10"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-avanc-nunca-b",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Nunca Enjoa · atração",
					title: "Registro: Perfeição-Carrosel",
					subtitle: "Carrossel do Peixe Dourado.",
					rows: carrossel,
					cost: packCost.avanc6,
					total: "AtqF +2 · AtqM +2 · DefM +6 · Acerto +10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Nunca Enjoa · atração",
					title: "Registro: Salto Sideral",
					subtitle: "30 / 60 / 180 saltos.",
					rows: salto,
					cost: packCost.avanc6,
					total: "AtqF +2 · AtqM +2 · DefF +6 · Esq +10"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-avanc-nunca-c",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Nunca Enjoa · atração",
					title: "Registro: Polvo Rodopiante",
					subtitle: "Classic: Estrela Brilhante. Wiki: A Estrela Mais Brilhante.",
					rows: polvo,
					cost: packCost.avanc6,
					total: "AtqF +2 · AtqM +2 · DefF +6 · Acerto +10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Nunca Enjoa · atração",
					title: "Registro: Voo de Pterossauro",
					subtitle: "Classic: Voando no Universo. Fecha Nunca Enjoa.",
					rows: ptero,
					cost: packCost.avanc6,
					total: "AtqF +2 · AtqM +2 · DefM +6 · Esq +10"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankTable, {
				kicker: "Prioridade de gasto · Avanç.",
				title: "Vale a página?",
				rows: rankingAvanc
			})
		]
	});
}
function ColetarTab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5 lg:gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-unicos",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Receita → título · escala 2–10",
					title: "Inverno → Bênçãos",
					subtitle: "Nome no Gerente à esquerda. O que cai no C, no meio.",
					rows: unicosA
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Receita → título · escala 12–20",
					title: "Coração Claro → Orgulho",
					subtitle: "Mesmas 10 da linha defesa / ataque. Não são pack.",
					rows: unicosB
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-individuais",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Individuais · ímpares",
					title: "Linha de defesa",
					subtitle: "Ímpares da coleção Coisas Misteriosas",
					rows: defesa,
					total: "DefF +40 · DefM +40 · Esq +40"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Individuais · pares",
					title: "Linha de ataque",
					subtitle: "Pares da coleção Coisas Misteriosas",
					rows: ataque,
					total: "AtqF +40 · AtqM +40 · Acerto +80"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Pack · melhor custo",
					title: "Registro: Sem Limites",
					subtitle: "Libera Mestre do Universo sozinho",
					rows: semLimites,
					cost: packCost.semLimites,
					total: "Classic: Atq +40 · AtqF +6 · AtqM +12 · DefF +14 · DefM +14 · Precisão +60"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Pack · segundo melhor combate",
					title: "Registro: Domínio dos 10 Reinos",
					subtitle: "Valor está no título avançado",
					rows: dezReinos,
					cost: packCost.dezReinos,
					total: "AtqF +20 · AtqM +20 · DefF +30 · DefM +30"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-mid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Pack · misto",
					title: "Registro: Desafio de BOSS",
					subtitle: "Não completa Habitante Perfeito sozinho",
					rows: desafioBoss,
					cost: packCost.desafioBoss,
					total: "Confirmado: AtqF +6 · AtqM +12 · Esq +30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Pack · Palácio dos Sonhos",
					title: "Registro: Pavilhão dos Sonhos",
					subtitle: "Fácil / Difícil / Lendário",
					rows: pavilhao,
					cost: packCost.pavilhao,
					total: "AtqF +10 · AtqM +10 · DefF +12 · DefM +12 · HP +20"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pair, {
				captureId: "pair-late",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Pack · mais barato",
					title: "Registro: A Cidade Qingqiu",
					subtitle: "Cinco missões da cidade · cada uma HP +10",
					rows: qingqiu,
					cost: packCost.qingqiu,
					total: "HP +50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ledger, {
					kicker: "Pack · Desfiladeiro do Sofrimento",
					title: "Registro: Desfiladeiro do S.",
					subtitle: "Troca existe no NPC — atributo não publicado",
					rows: desfiladeiro,
					cost: packCost.desfiladeiro
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankTable, {
				kicker: "Prioridade de gasto · Coletar",
				title: "Vale a página?",
				rows: ranking
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atlas, {});
}
//#endregion
export { Home as component };
