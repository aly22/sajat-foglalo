"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  Mail,
  BarChart3,
  Users,
  Globe,
  Link2,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Online foglalás",
    description: "Vendégeid 0-24 foglalhatnak, te csak dolgozol.",
    screenshot: "/screenshots/01-booking-mobile.webp",
  },
  {
    icon: Mail,
    title: "Email értesítések",
    description: "Automatikus megerősítés, emlékeztető, lemondás.",
    screenshot: "/screenshots/02-email-confirmation.webp",
  },
  {
    icon: BarChart3,
    title: "Statisztikák",
    description: "Bevétel, kihasználtság, visszatérési arány egy helyen.",
    screenshot: "/screenshots/05-statistics.webp",
  },
  {
    icon: Users,
    title: "Ügyfélkezelés",
    description:
      "CRM: ki mennyit költött, hányszor jött, mikor volt utoljára.",
    screenshot: "/screenshots/08-crm.webp",
  },
  {
    icon: Globe,
    title: "Többnyelvű",
    description: "Magyar és angol nyelv, egy kattintással váltható.",
    screenshot: null,
  },
  {
    icon: Link2,
    title: "Saját domain",
    description:
      "A te neved, a te márkád, nem egy harmadik fél platformja.",
    screenshot: "/screenshots/06-homepage.webp",
  },
];

export function Features() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
    <section id="funkciok" className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">
          Minden, amire szükséged van
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Egyetlen rendszer, ami lefedi a teljes foglalási folyamatot.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative rounded-xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <f.icon className="h-5 w-5 text-accent" />
                </div>
                {f.screenshot && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightbox(f.screenshot)}
                    onKeyDown={(e) => e.key === "Enter" && setLightbox(f.screenshot)}
                    className="cursor-pointer overflow-hidden rounded-md border border-border p-1 shadow-sm transition hover:shadow-md" style={{ position: "relative", zIndex: 10 }}
                  >
                    <Image
                      src={f.screenshot}
                      alt={f.title}
                      width={35}
                      height={35}
                      className="h-[35px] w-[35px] object-cover"
                    />
                  </div>
                )}
              </div>
              <h3 className="font-heading text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          ...és még sok más.
        </p>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt=""
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
