"use client";

import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const SETUP_COST = 200_000;
const MONTHLY_COST = 4_000;

function formatHuf(value: number): string {
  return value.toLocaleString("hu-HU") + " Ft";
}

function parseInput(raw: string): number {
  const cleaned = raw.replace(/\s/g, "").replace(/[^\d]/g, "");
  return parseInt(cleaned, 10) || 0;
}

function periodLabel(months: number): string {
  const years = Math.floor(months / 12);
  const remaining = months % 12;
  if (years === 0) return `${remaining} hónap`;
  if (remaining === 0) return years === 1 ? "1 év" : `${years} év`;
  return `${years} év ${remaining} hónap`;
}

export function RoiCalculator() {
  const [rawInput, setRawInput] = useState("15 000");

  const monthlyFee = parseInput(rawInput);

  const { data, breakEvenMonth, savingsMilestones, isCheaper } =
    useMemo(() => {
      const diff = monthlyFee - MONTHLY_COST;
      const breakEven = diff > 0 ? Math.ceil(SETUP_COST / diff) : null;

      // Dynamic chart range: 12 months before break-even to 12 months after
      const startMonth = breakEven ? Math.max(0, breakEven - 12) : 0;
      const endMonth = breakEven ? breakEven + 12 : 24;

      const points = [];
      for (let m = startMonth; m <= endMonth; m++) {
        points.push({
          month: m,
          "Jelenlegi rendszer": monthlyFee * m,
          IdőpontFoglalóm: SETUP_COST + MONTHLY_COST * m,
        });
      }

      // Find year milestones where savings are positive (after break-even)
      const milestones: { label: string; savings: number }[] = [];
      for (const months of [12, 24, 36, 48, 60, 72, 84, 96]) {
        const savings = monthlyFee * months - (SETUP_COST + MONTHLY_COST * months);
        if (savings > 0) {
          const years = months / 12;
          milestones.push({ label: `a ${years}. évben`, savings });
        }
        if (milestones.length >= 2) break;
      }

      return {
        data: points,
        breakEvenMonth: breakEven,
        savingsMilestones: milestones,
        isCheaper: monthlyFee > 0 && monthlyFee <= MONTHLY_COST,
      };
    }, [monthlyFee]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^\d]/g, "");
    if (!digits) {
      setRawInput("");
      return;
    }
    const formatted = parseInt(digits, 10).toLocaleString("hu-HU");
    setRawInput(formatted);
  };

  return (
    <section id="kalkulator" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">
          Mennyit spórolhatsz egy saját időpontfoglalóval?
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Írd be, mennyit fizetsz havonta a jelenlegi időpontfoglaló rendszeredért.
        </p>

        <div className="mx-auto mt-8 max-w-sm">
          <label
            htmlFor="monthly-fee"
            className="block text-sm font-medium text-muted-foreground"
          >
            Jelenlegi havi díj (Ft)
          </label>
          <div className="relative mt-1">
            <input
              id="monthly-fee"
              type="text"
              inputMode="numeric"
              value={rawInput}
              onChange={handleChange}
              placeholder="pl. 15 000"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-lg font-semibold shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              Ft/hó
            </span>
          </div>
        </div>

        {monthlyFee === 0 && rawInput !== "" && (
          <div className="mx-auto mt-6 max-w-xl rounded-lg border border-border bg-muted p-4 text-center text-sm">
            Jelenleg nem fizetsz a rendszeredért, de nálunk nincs
            platformfüggés és a rendszer a tiéd.
          </div>
        )}

        {monthlyFee === 0 && rawInput === "" && (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Add meg a jelenlegi havi díjad a kalkulációhoz.
          </p>
        )}

        {isCheaper && (
          <div className="mx-auto mt-6 max-w-xl rounded-lg border border-border bg-muted p-4 text-center text-sm">
            A jelenlegi rendszered már olcsóbb havidíjban, de nálunk nincs
            platformfüggés és a rendszer a tiéd.
          </div>
        )}

        {monthlyFee > MONTHLY_COST && (
          <>
            <div className="mt-10 h-80 w-full sm:h-96">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="month"
                    tickFormatter={(v) => periodLabel(Number(v))}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    tickFormatter={(v) =>
                      `${Math.round(Number(v) / 1000)} E Ft`
                    }
                    tick={{ fontSize: 12 }}
                    width={70}
                  />
                  <Tooltip
                    formatter={(value) => formatHuf(Number(value))}
                    labelFormatter={(label) => periodLabel(Number(label))}
                    position={{ y: 35 }}
                    contentStyle={{
                      fontSize: 11,
                      backgroundColor: "rgba(255, 255, 255, 0.25)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      borderRadius: 8,
                      border: "1px solid #e5e7eb",
                    }}
                    labelStyle={{ fontSize: 11 }}
                    itemStyle={{ fontSize: 11 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Jelenlegi rendszer"
                    stroke="#dc2626"
                    fill="#dc2626"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="IdőpontFoglalóm"
                    stroke="#2563eb"
                    fill="#2563eb"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  {breakEvenMonth && (
                    <ReferenceLine
                      x={breakEvenMonth}
                      stroke="#15803d"
                      strokeDasharray="4 4"
                      strokeWidth={2}
                      label={{
                        value: `Megtérülés: ${periodLabel(breakEvenMonth)}`,
                        position: "insideTopRight",
                        fontSize: 12,
                        fill: "#15803d",
                        offset: 10,
                      }}
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {breakEvenMonth && (
                <div className="rounded-xl border border-border bg-muted p-5 text-center">
                  <p className="text-sm text-muted-foreground">Megtérülés</p>
                  <p
                    className="mt-1 font-heading text-2xl font-bold"
                    style={{ color: "#15803d" }}
                  >
                    {periodLabel(breakEvenMonth)}
                  </p>
                </div>
              )}
              {savingsMilestones.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border bg-muted p-5 text-center"
                >
                  <p className="text-sm text-muted-foreground">
                    Megtakarítás {m.label}
                  </p>
                  <p
                    className="mt-1 font-heading text-2xl font-bold"
                    style={{ color: "#15803d" }}
                  >
                    {formatHuf(m.savings)}
                  </p>
                </div>
              ))}
              <div className="rounded-xl border border-border bg-muted p-5 text-center">
                <p className="text-sm text-muted-foreground">
                  Évente ennyivel nő
                </p>
                <p
                  className="mt-1 font-heading text-2xl font-bold"
                  style={{ color: "#15803d" }}
                >
                  {formatHuf((monthlyFee - MONTHLY_COST) * 12)}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
