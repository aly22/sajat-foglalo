"use client";

import { useState } from "react";
import { faqs } from "@/config/seo";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gyik" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">
          Gyakran ismételt kérdések
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-background shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold">{faq.q}</span>
                <span className="ml-4 shrink-0 text-muted-foreground" aria-hidden="true">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div id={`faq-answer-${i}`} role="region" className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

