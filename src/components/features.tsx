"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  Mail,
  BarChart3,
  Users,
  Clock,
  Star,
} from "lucide-react";
import { Lightbox } from "./lightbox";

const features = [
  {
    icon: CalendarCheck,
    title: "Online foglalás",
    description: "Vendégeid 0-24 foglalhatnak, te csak dolgozol.",
    screenshot: "/screenshots/01-booking-mobile.webp",
    screenshotCaption: "Foglalj mobilról 30 másodperc alatt",
  },
  {
    icon: Mail,
    title: "Email értesítések",
    description: "Foglalás megerősítés, emlékeztetők, értékelés kérés, heti összefoglaló, stb.",
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
    icon: Clock,
    title: "Várólista",
    description: "Ha minden időpont foglalt, a vendég feliratkozik és automatikusan értesítjük, ha felszabadul egy hely.",
    screenshot: "/screenshots/10-waitlist.webp",
  },
  {
    icon: Star,
    title: "Értékelések",
    description: "Vendégeid értékelhetik a fodrászt és a szalont. A legjobb reklám a saját oldaladon.",
    screenshot: "/screenshots/06-homepage.webp",
  },
];

export function Features() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="funkciok" className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">
          Minden funkció, amire egy szalonnak szüksége van
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Egyetlen időpontfoglaló rendszer, ami lefedi a teljes foglalási folyamatot.
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
                    onClick={() => setLightbox({ src: f.screenshot, alt: f.screenshotCaption || f.title })}
                    onKeyDown={(e) => e.key === "Enter" && setLightbox({ src: f.screenshot, alt: f.screenshotCaption || f.title })}
                    className="cursor-pointer overflow-hidden rounded-md border border-border p-1 shadow-sm transition hover:shadow-md"
                    style={{ position: "relative", zIndex: 10 }}
                  >
                    <Image
                      src={f.screenshot}
                      alt={f.title}
                      width={35}
                      height={35}
                      sizes="35px"
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
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
