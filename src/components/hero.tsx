"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export function Hero() {
  const [lightbox, setLightbox] = useState(false);

  const closeLightbox = useCallback(() => setLightbox(false), []);

  useEffect(() => {
    if (!lightbox) return;
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
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent" />
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          A saját online időpontfoglalód.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          Nem bérled. A tiéd. Egyszeri beüzemelés, fix havi díj, teljes
          kontroll.
        </p>
        <div className="relative mt-14">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setLightbox(true)}
            onKeyDown={(e) => e.key === "Enter" && setLightbox(true)}
            className="cursor-zoom-in" style={{ position: "relative", zIndex: 10 }}
          >
            <Image
              src="/screenshots/07-admin-calendar.webp"
              alt="Naptár, minden szakember egy helyen"
              width={1200}
              height={750}
              priority
              className="rounded-xl border border-border shadow-2xl"
            />
          </div>
          <div className="hidden sm:flex absolute inset-x-0 bottom-0 justify-center -translate-y-1/2">
            <a
              href="#kapcsolat"
              className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg transition hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Ajánlatot kérek
            </a>
          </div>
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <a
            href="#kapcsolat"
            className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg transition hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Ajánlatot kérek
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src="/screenshots/07-admin-calendar.webp"
              alt="Naptár, minden szakember egy helyen"
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
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
