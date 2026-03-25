"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "./lightbox";

export function Hero() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent" />
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          A saját online időpontfoglaló rendszered.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          A tiéd. Egyszeri beüzemelés, fix havi díj, teljes kontroll.
        </p>
        <div className="relative mt-14">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setLightbox(true)}
            onKeyDown={(e) => e.key === "Enter" && setLightbox(true)}
            className="cursor-zoom-in"
            style={{ position: "relative", zIndex: 10 }}
          >
            <Image
              src="/screenshots/07-admin-calendar.webp"
              alt="Naptár, minden szakember egy helyen"
              width={1200}
              height={750}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              className="rounded-xl border border-border shadow-2xl"
            />
          </div>
          <div className="hidden sm:flex absolute inset-x-0 bottom-0 justify-center -translate-y-1/2" style={{ zIndex: 20 }}>
            <a
              href="#kapcsolat"
              className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg transition hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Érdekel
            </a>
          </div>
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <a
            href="#kapcsolat"
            className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg transition hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Érdekel
          </a>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src="/screenshots/07-admin-calendar.webp"
          alt="Naptár, minden szakember egy helyen"
          onClose={() => setLightbox(false)}
        />
      )}
    </section>
  );
}
