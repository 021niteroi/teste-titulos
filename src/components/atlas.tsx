"use client";

import { useState } from "react";
import { Ledger, Pair, RankTable } from "@/components/ledger";
import {
  COST,
  anzol,
  ataque,
  avanc12A,
  avanc12B,
  avancAuto,
  barco,
  bateBate,
  carrossel,
  desafioBoss,
  defesa,
  desfiladeiro,
  dezReinos,
  exploracao,
  garrafa,
  marmota,
  packCost,
  pavilhao,
  ptero,
  polvo,
  qingqiu,
  ranking,
  rankingAvanc,
  roda,
  salto,
  semLimites,
  tigre,
  tiro,
  unicosA,
  unicosB,
} from "@/lib/titles";

type Tab = "avanc" | "coletar";

export function Atlas() {
  const [tab, setTab] = useState<Tab>("avanc");

  return (
    <main className="mx-auto min-h-dvh max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <header className="mb-8 border-b border-border pb-7 lg:mb-10">
        <p className="mb-3 text-xs font-medium tracking-[0.18em] text-accent uppercase">
          Gerente de Eventos · Fabricar · {tab === "avanc" ? "Avanç." : "Coletar"}
        </p>
        <h1 className="font-display max-w-3xl text-2xl leading-tight tracking-tight text-fg sm:text-[2.35rem]">
          Atlas de títulos — Página de Registro
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Moeda: {COST}. Custos lidos no Gerente. Packs 1× por personagem. Atributos somam mesmo
          desequipados. Receita ≠ nome no C — conferido in-game.
        </p>
        <div className="tab-bar mt-5" role="tablist" aria-label="Aba do NPC">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "avanc"}
            className={tab === "avanc" ? "tab tab-on" : "tab"}
            onClick={() => setTab("avanc")}
          >
            Avanç.
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "coletar"}
            className={tab === "coletar" ? "tab tab-on" : "tab"}
            onClick={() => setTab("coletar")}
          >
            Coletar
          </button>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          <li className="pill pill-ok">confirmado</li>
          <li className="pill pill-warn">conflito de fonte</li>
          <li className="pill pill-bad">sem fonte pública</li>
          <li className="pill pill-muted">sem atributo / só visual</li>
        </ul>
      </header>

      {tab === "avanc" ? <AvancTab /> : <ColetarTab />}

      <footer className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-subtle">
        Fontes: Wiki PW · Trivia PW (Mundo da Fantasia) · conferência in-game no Gerente. Custos e
        nomes de receita: dump Classic. Atributos individuais: Trivia. Avançados automáticos: Wiki +
        Trivia (Acerto = Precisão). Variantes de nome (Classic × wiki) ficam na nota da linha.
      </footer>
    </main>
  );
}

function AvancTab() {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <Pair captureId="pair-avanc-12">
        <Ledger
          kicker="Avanç. · 12 páginas · ataque"
          title="Seu Nome · Conexão"
          subtitle="Um título cada. Melhor custo de atq da Gerente."
          rows={avanc12A}
        />
        <Ledger
          kicker="Avanç. · 12 páginas · defesa"
          title="Oceanos · Não me Esqueça"
          subtitle="DefF +30 e DefM +30 separados. 10 Reinos junta os quatro por 30."
          rows={avanc12B}
        />
      </Pair>

      <Ledger
        kicker="Avanç. · automático ao fechar o conjunto"
        title="Títulos avançados"
        subtitle="Não gasta página extra. Cai ao completar as receitas do grupo."
        rows={avancAuto}
        total="Se pegar os três conjuntos: AtqF +60 · AtqM +60 · Acerto +600"
      />

      <Pair captureId="pair-avanc-arrasa-a">
        <Ledger
          kicker="Arrasa · atração"
          title="Registro: Bata na Marmota"
          subtitle="3 títulos. Só o último tem atributo."
          rows={marmota}
          cost={packCost.avanc6}
          total="AtqF +4 · AtqM +4"
        />
        <Ledger
          kicker="Arrasa · atração"
          title="Registro: Tiro ao Alvo"
          subtitle="3 títulos. Só o Elite soma combate."
          rows={tiro}
          cost={packCost.avanc6}
          total="AtqF +4 · AtqM +4"
        />
      </Pair>

      <Pair captureId="pair-avanc-arrasa-b">
        <Ledger
          kicker="Arrasa · atração"
          title="Registro: Bate-Bate"
          subtitle="Classic: Dominador. Wiki: Conquistador."
          rows={bateBate}
          cost={packCost.avanc6}
          total="AtqF +4 · AtqM +4"
        />
        <Ledger
          kicker="Arrasa · atração"
          title="Registro: Maratona do Tigre"
          subtitle="Fecha Arrasa! Bebê! junto com as outras 3."
          rows={tigre}
          cost={packCost.avanc6}
          total="AtqF +4 · AtqM +4"
        />
      </Pair>

      <Pair captureId="pair-avanc-complic-a">
        <Ledger
          kicker="Complicação · garrafa"
          title="Registro: Garrafa"
          subtitle="4 títulos. Amor e Tristeza é visual, mas conta no avançado."
          rows={garrafa}
          cost={packCost.avanc6}
          total="AtqF +2 · AtqM +2 · DefF +3 · DefM +3 · Acerto +8 · Esq +7"
        />
        <Ledger
          kicker="Complicação · anzol"
          title="Registro: Anzol para Mensagem"
          subtitle="3 títulos. Memória Eterna no C."
          rows={anzol}
          cost={packCost.avanc6}
          total="AtqF +2 · AtqM +2 · DefF +3 · DefM +3 · Acerto +8 · Esq +7"
        />
      </Pair>

      <Ledger
        kicker="Complicação · mapa do tesouro"
        title="Registro: Exploração"
        subtitle="Fecha Complicação Romântica. Explorador Divertido vem de brinde."
        rows={exploracao}
        cost={packCost.avanc6}
        total="DefF +16 · DefM +16 · Esq +12"
      />

      <Pair captureId="pair-avanc-nunca-a">
        <Ledger
          kicker="Nunca Enjoa · atração"
          title="Registro: Roda Gigante"
          subtitle="Sem bilhete no Trivia. 30 / 60 / 180 voltas."
          rows={roda}
          cost={packCost.avanc6}
          total="AtqF +2 · AtqM +2 · DefF +6 · Acerto +10"
        />
        <Ledger
          kicker="Nunca Enjoa · atração"
          title="Registro: Barco Lagostal"
          subtitle="30 / 60 / 180 voltas."
          rows={barco}
          cost={packCost.avanc6}
          total="AtqF +2 · AtqM +2 · DefM +6 · Esq +10"
        />
      </Pair>

      <Pair captureId="pair-avanc-nunca-b">
        <Ledger
          kicker="Nunca Enjoa · atração"
          title="Registro: Perfeição-Carrosel"
          subtitle="Carrossel do Peixe Dourado."
          rows={carrossel}
          cost={packCost.avanc6}
          total="AtqF +2 · AtqM +2 · DefM +6 · Acerto +10"
        />
        <Ledger
          kicker="Nunca Enjoa · atração"
          title="Registro: Salto Sideral"
          subtitle="30 / 60 / 180 saltos."
          rows={salto}
          cost={packCost.avanc6}
          total="AtqF +2 · AtqM +2 · DefF +6 · Esq +10"
        />
      </Pair>

      <Pair captureId="pair-avanc-nunca-c">
        <Ledger
          kicker="Nunca Enjoa · atração"
          title="Registro: Polvo Rodopiante"
          subtitle="Classic: Estrela Brilhante. Wiki: A Estrela Mais Brilhante."
          rows={polvo}
          cost={packCost.avanc6}
          total="AtqF +2 · AtqM +2 · DefF +6 · Acerto +10"
        />
        <Ledger
          kicker="Nunca Enjoa · atração"
          title="Registro: Voo de Pterossauro"
          subtitle="Classic: Voando no Universo. Fecha Nunca Enjoa."
          rows={ptero}
          cost={packCost.avanc6}
          total="AtqF +2 · AtqM +2 · DefM +6 · Esq +10"
        />
      </Pair>

      <RankTable
        kicker="Prioridade de gasto · Avanç."
        title="Vale a página?"
        rows={rankingAvanc}
      />
    </div>
  );
}

function ColetarTab() {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <Pair captureId="pair-unicos">
        <Ledger
          kicker="Receita → título · escala 2–10"
          title="Inverno → Bênçãos"
          subtitle="Nome no Gerente à esquerda. O que cai no C, no meio."
          rows={unicosA}
        />
        <Ledger
          kicker="Receita → título · escala 12–20"
          title="Coração Claro → Orgulho"
          subtitle="Mesmas 10 da linha defesa / ataque. Não são pack."
          rows={unicosB}
        />
      </Pair>

      <Pair captureId="pair-individuais">
        <Ledger
          kicker="Individuais · ímpares"
          title="Linha de defesa"
          subtitle="Ímpares da coleção Coisas Misteriosas"
          rows={defesa}
          total="DefF +40 · DefM +40 · Esq +40"
        />
        <Ledger
          kicker="Individuais · pares"
          title="Linha de ataque"
          subtitle="Pares da coleção Coisas Misteriosas"
          rows={ataque}
          total="AtqF +40 · AtqM +40 · Acerto +80"
        />
      </Pair>

      <Pair captureId="pair-top">
        <Ledger
          kicker="Pack · melhor custo"
          title="Registro: Sem Limites"
          subtitle="Libera Mestre do Universo sozinho"
          rows={semLimites}
          cost={packCost.semLimites}
          total="Classic: Atq +40 · AtqF +6 · AtqM +12 · DefF +14 · DefM +14 · Precisão +60"
        />
        <Ledger
          kicker="Pack · segundo melhor combate"
          title="Registro: Domínio dos 10 Reinos"
          subtitle="Valor está no título avançado"
          rows={dezReinos}
          cost={packCost.dezReinos}
          total="AtqF +20 · AtqM +20 · DefF +30 · DefM +30"
        />
      </Pair>

      <Pair captureId="pair-mid">
        <Ledger
          kicker="Pack · misto"
          title="Registro: Desafio de BOSS"
          subtitle="Não completa Habitante Perfeito sozinho"
          rows={desafioBoss}
          cost={packCost.desafioBoss}
          total="Confirmado: AtqF +6 · AtqM +12 · Esq +30"
        />
        <Ledger
          kicker="Pack · Palácio dos Sonhos"
          title="Registro: Pavilhão dos Sonhos"
          subtitle="Fácil / Difícil / Lendário"
          rows={pavilhao}
          cost={packCost.pavilhao}
          total="AtqF +10 · AtqM +10 · DefF +12 · DefM +12 · HP +20"
        />
      </Pair>

      <Pair captureId="pair-late">
        <Ledger
          kicker="Pack · mais barato"
          title="Registro: A Cidade Qingqiu"
          subtitle="Cinco missões da cidade · cada uma HP +10"
          rows={qingqiu}
          cost={packCost.qingqiu}
          total="HP +50"
        />
        <Ledger
          kicker="Pack · Desfiladeiro do Sofrimento"
          title="Registro: Desfiladeiro do S."
          subtitle="Troca existe no NPC — atributo não publicado"
          rows={desfiladeiro}
          cost={packCost.desfiladeiro}
        />
      </Pair>

      <RankTable kicker="Prioridade de gasto · Coletar" title="Vale a página?" rows={ranking} />
    </div>
  );
}