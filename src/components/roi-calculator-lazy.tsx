"use client";

import dynamic from "next/dynamic";

const RoiCalculator = dynamic(
  () => import("./roi-calculator").then((m) => m.RoiCalculator),
  { ssr: false }
);

export function RoiCalculatorLazy() {
  return <RoiCalculator />;
}
