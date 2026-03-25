"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const screenshots = [
  { src: "/screenshots/06-homepage.webp", caption: "Publikus weboldal értékelésekkel", wide: true },
  { src: "/screenshots/01-booking-mobile.webp", caption: "Foglalás mobilról 30 másodperc alatt", wide: false },
  { src: "/screenshots/02-email-confirmation.webp", caption: "Automatikus email megerősítés", wide: false },
  { src: "/screenshots/07-admin-calendar.webp", caption: "Naptár, minden szakember egy helyen", wide: true },
  { src: "/screenshots/03-admin-mobile.webp", caption: "Mobilról is kezelhető", wide: false },
  { src: "/screenshots/05-statistics.webp", caption: "Statisztikák és bevétel áttekintés", wide: true },
  { src: "/screenshots/08-crm.webp", caption: "Ügyfél CRM: látogatások, bevétel, visszatérés", wide: true },
  { src: "/screenshots/04-appointments.webp", caption: "Foglalások listája", wide: false },
  { src: "/screenshots/09-booking-modal.webp", caption: "Foglalás részletei egy kattintásra", wide: true },
];
// Grid layout on lg (3 cols):
// Row 1: homepage(2) + booking-mobile(1) = 3
// Row 2: email-confirmation(1) + admin-calendar(2) = 3
// Row 3: admin-mobile(1) + statistics(2) = 3
// Row 4: crm(2) + appointments(1) = 3
// Row 5: booking-modal(2) + empty(1) = fine, last row

export function Screenshots() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, closeLightbox]);

  return (
    <section id="kepek" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">
          Így néz ki a gyakorlatban
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Valódi képernyőképek az Alisca Barber foglalórendszeréből.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-xl border border-border bg-muted transition hover:shadow-lg ${
                s.wide ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <Image
                src={s.src}
                alt={s.caption}
                width={s.wide ? 800 : 400}
                height={s.wide ? 500 : 700}
                className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-sm font-medium text-white">
                {s.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={screenshots[lightbox].src}
              alt={screenshots[lightbox].caption}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/80">
              {screenshots[lightbox].caption}
            </p>
            <button
              onClick={closeLightbox}
              aria-label="Bezárás"
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
