"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Miben más az általad készített rendszer, mint a Salonic, BWNET vagy Fresha?",
    a: "A rendszer a saját domaineden fut, nem vagy platformhoz kötve. Egyszeri beüzemelés + fix havi díj, nem pedig havi előfizetés ami évről évre nő.",
  },
  {
    q: "Mi az a saját domain?",
    a: "A honlapod a saját márkaneved alatt érhető el, pl. sajatmarkaneved.hu, és az emailek is ezzel a domainnel végződnek, pl. info@sajatmarkaneved.hu.",
  },
  {
    q: "Mit jelent az, hogy 'a tiéd'?",
    a: "Emailben megbeszéljük, hogyan képzeled el a honlapodat. Én megépítem, a saját domainedre teszem, és kész. Nem egy közös platformon leszel több száz másik szalonnal, hanem a saját oldaladon.",
  },
  {
    q: "Kiknek ajánlod?",
    a: "Bárkinek, aki időpontfoglalásra épülő szolgáltatást nyújt.",
  },
  {
    q: "Mi történik, ha le akarok állni a szolgáltatással?",
    a: "Nincs hűségidő. Bármikor szólhatsz, hogy le szeretnéd állítani a szolgáltatást, mindössze egy havi díj extra fizetési kötelezettséged keletkezik.",
  },
  {
    q: "Mennyi idő mire elkészül?",
    a: "Általában 1-2 hét, attól függően mennyire egyedi az elképzelésed.",
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

