import type { ReactNode } from "react";
import type { RankRow, Status, TitleRow } from "@/lib/titles";
import { statusLabel } from "@/lib/titles";

function Pill({ status }: { status: Status }) {
  return <span className={`pill pill-${status}`}>{statusLabel[status]}</span>;
}

export function Ledger({
  kicker,
  title,
  subtitle,
  rows,
  total,
  cost,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  rows: TitleRow[];
  total?: string;
  cost?: number;
}) {
  const mapped = rows.some((row) => row.grants);
  const showPages = rows.some((row) => row.pages != null);
  const pageSum = rows.reduce((sum, row) => sum + (row.pages ?? 0), 0);
  const headerCost = cost ?? (showPages ? pageSum : undefined);

  return (
    <section className="ledger h-full">
      <header className="ledger-head">
        <div className="min-w-0">
          <p className="mb-1 text-xs font-medium tracking-[0.14em] text-subtle uppercase">{kicker}</p>
          <h2 className="font-display text-xl leading-tight tracking-tight text-fg">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
        </div>
        {headerCost != null ? (
          <p className="cost-mark">
            <span className="font-display text-2xl leading-none text-accent">{headerCost}</span>
            <span className="mt-1 block text-[0.65rem] tracking-[0.12em] text-subtle uppercase">
              pág.
            </span>
          </p>
        ) : null}
      </header>
      <div className="overflow-x-auto">
        <table className="stat-table">
          <thead>
            <tr>
              <th>{mapped ? "Receita" : "Título"}</th>
              {mapped ? <th>Título no C</th> : null}
              {showPages ? <th className="col-pages">Pág.</th> : null}
              <th>Atributos</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-fg">{row.name}</span>
                    <Pill status={row.status} />
                  </div>
                  {row.note ? <div className="mt-1 text-xs text-muted">{row.note}</div> : null}
                </td>
                {mapped ? <td className="font-medium text-fg">{row.grants}</td> : null}
                {showPages ? <td className="col-pages font-mono text-accent">{row.pages}</td> : null}
                <td className="font-mono text-accent">{row.stats}</td>
              </tr>
            ))}
            {total ? (
              <tr className="total">
                <td colSpan={mapped ? 2 : 1}>Total</td>
                {showPages ? <td className="col-pages font-mono">{pageSum}</td> : null}
                <td className="font-mono">{total}</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Pair({ children, captureId }: { children: ReactNode; captureId: string }) {
  return (
    <div id={captureId} className="grid grid-cols-1 items-stretch gap-4 xl:grid-cols-2 xl:gap-5">
      {children}
    </div>
  );
}

export function RankTable({
  kicker,
  title,
  rows,
}: {
  kicker: string;
  title: string;
  rows: RankRow[];
}) {
  return (
    <section className="ledger">
      <header className="ledger-head">
        <div>
          <p className="mb-1 text-xs font-medium tracking-[0.14em] text-subtle uppercase">{kicker}</p>
          <h2 className="font-display text-xl leading-tight tracking-tight text-fg">{title}</h2>
        </div>
      </header>
      <div className="overflow-x-auto">
        <table className="stat-table">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th>Item</th>
              <th className="col-pages">Pág.</th>
              <th>O que leva</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.rank}>
                <td className="font-display text-lg text-accent">{row.rank}</td>
                <td className="font-medium">{row.item}</td>
                <td className="col-pages font-mono text-accent">{row.pages}</td>
                <td className="font-mono text-accent">{row.take}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}