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
    screenshots: [{ src: "/screenshots/booking-form.webp", caption: "Foglalj mobilról 30 másodperc alatt" }],
  },
  {
    icon: Mail,
    title: "Email értesítések",
    description: "Foglalás megerősítés, emlékeztetők, értékelés kérés, heti összesítő, stb.",
    screenshots: [
      { src: "/screenshots/weekly-summary.webp", caption: "Minden vasárnap reggel megtudod, milyen volt a heted" },
      { src: "/screenshots/email-confirmation.webp", caption: "Foglalás megerősítés" },
      { src: "/screenshots/email-reminder.webp", caption: "Időpont emlékeztető" },
      { src: "/screenshots/email-reminder-today.webp", caption: "Ma találkozunk!" },
      { src: "/screenshots/email-rating.webp", caption: "Értékeld az élményed!" },
      { src: "/screenshots/email-reschedule.webp", caption: "Időpont átütemezve" },
      { src: "/screenshots/email-cancellation.webp", caption: "Időpont lemondva" },
    ],
  },
  {
    icon: BarChart3,
    title: "Statisztikák",
    description: "Bevétel, kihasználtság, visszatérési arány egy helyen.",
    screenshots: [{ src: "/screenshots/05-statistics.webp", caption: "Statisztikák" }],
  },
  {
    icon: Users,
    title: "Ügyfélkezelés",
    description:
      "CRM: ki mennyit költött, hányszor jött, mikor volt utoljára.",
    screenshots: [{ src: "/screenshots/08-crm.webp", caption: "Lásd ki mennyit költött, milyen gyakran jön és mikor volt utoljára" }],
  },
  {
    icon: Clock,
    title: "Várólista",
    description: "Ha minden időpont foglalt, a vendég feliratkozik és automatikusan értesítjük, ha felszabadul egy hely.",
    screenshots: [
      { src: "/screenshots/10-waitlist.webp", caption: "Várólista" },
      { src: "/screenshots/email-waitlist.webp", caption: "Felszabadult egy hely!" }
    ],
  },
  {
    icon: Star,
    title: "Értékelések",
    description: "Vendégeid értékelhetik a szakembert és a szalont. A legjobb reklám a saját oldaladon.",
    screenshots: [{ src: "/screenshots/06-homepage.webp", caption: "Értékelések a saját oldaladon" }],
  },
];

export function Features() {
  const [lightbox, setLightbox] = useState<{ images: { src: string; caption: string }[]; index: number } | null>(null);

  return (
    <section id="funkciok" className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">
          Minden funkció, amire egy szalonnak szüksége van
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
                {f.screenshots.length > 0 && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightbox({ images: f.screenshots, index: 0 })}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setLightbox({ images: f.screenshots, index: 0 })}
                    aria-label={`Képernyőkép nagyítása: ${f.title}`}
                    className="cursor-pointer overflow-hidden rounded-md border border-border p-1 shadow-sm transition hover:shadow-md"
                    style={{ position: "relative", zIndex: 10 }}
                  >
                    <Image
                      src={f.screenshots[0].src}
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
          src={lightbox.images[lightbox.index].src}
          alt={lightbox.images[lightbox.index].caption}
          onClose={() => setLightbox(null)}
          onPrev={lightbox.images.length > 1 && lightbox.index > 0
            ? () => setLightbox({ ...lightbox, index: lightbox.index - 1 })
            : undefined}
          onNext={lightbox.images.length > 1 && lightbox.index < lightbox.images.length - 1
            ? () => setLightbox({ ...lightbox, index: lightbox.index + 1 })
            : undefined}
          counter={lightbox.images.length > 1 ? `${lightbox.index + 1} / ${lightbox.images.length}` : undefined}
        />
      )}
    </section>
  );
}
