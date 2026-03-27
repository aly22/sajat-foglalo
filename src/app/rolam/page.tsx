import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rólam",
  description: "Dahud Ali, az IdőpontFoglalóm fejlesztője. Saját időpontfoglaló rendszer szalonoknak, fix havi díjjal.",
  alternates: {
    canonical: "https://idopontfoglalom.hu/rolam",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-xl">
          <Image
            src="/pfp.webp"
            alt="Dahud Ali"
            width={120}
            height={120}
            className="rounded-full border-2 border-border shadow-md"
          />
          <h1 className="mt-6 font-heading text-3xl font-bold sm:text-4xl">
            Szia!
          </h1>
          <h2 className="mt-2 font-heading text-xl font-semibold text-muted-foreground sm:text-2xl">
            Dahud Ali vagyok.
          </h2>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              2022 óta foglalkozom különböző alkalmazások fejlesztésével. Az
              első alkalmazásom, a ServEase, az App Store-on és Play Store-on
              is elérhető volt, egy edző több mint 1600 foglalást
              bonyolított le rajta.
            </p>
            <p>
              Aztán a barátom, Sterczer Tamás megkért, hogy készítsek egy
              foglalórendszert a szalonjának menedzseléséhez. Így született az
              ötlet: egy rendszert készítek neked, ami a tiéd, és nem vagy
              platformhoz kötve.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="/#kapcsolat"
              className="inline-block rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-sm transition hover:bg-accent/90"
            >
              Érdekel
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
