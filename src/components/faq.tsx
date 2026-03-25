"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Miben más a IdőpontFoglalóm, mint a Salonic, BWNET vagy Fresha?",
    a: "A IdőpontFoglalóm nem egy harmadik fél felülete. A rendszer a tiéd, a saját domaineden fut, és nem vagy platformhoz kötve. Egyszeri beüzemelés + fix havi díj, nem pedig havi előfizetés ami évről évre nő.",
  },
  {
    q: "Mennyibe kerül az időpontfoglaló rendszer?",
    a: "Egyszeri beüzemelési díj 200 000 Ft, utána fix havi 4 000 Ft a szerver, domain és email költségekre. Nincs rejtett díj, nincs platformfüggés.",
  },
  {
    q: "Milyen szalonoknak ajánlott?",
    a: "Bárkinek, aki időpontfoglalásra épülő szolgáltatást nyújt.",
  },
  {
    q: "Kapok saját domaint?",
    a: "Igen. A rendszer a te domaineden fut (pl. foglalj.szalonneved.hu), a te márkáddal, a te arculatoddal.",
  },
  {
    q: "Mi történik, ha le akarok állni a szolgáltatással?",
    a: "Nincs hűségidő. Bármikor leállíthatod a szolgáltatást, mindössze egy havi díj extra fizetési kötelezettséged keletkezik.",
  },
  {
    q: "Hogyan csökkenti a no-show-kat?",
    a: "Automatikus email emlékeztetőt küldünk a vendégeidnek a foglalásuk előtt, így kevesebb az elfelejtett időpont.",
  },
];

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
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold">{faq.q}</span>
                <span className="ml-4 shrink-0 text-muted-foreground">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
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

