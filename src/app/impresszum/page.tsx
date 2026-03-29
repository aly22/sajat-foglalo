import type { Metadata } from "next";
import { privacyConfig as c } from "@/config/privacy";
import { breadcrumbJsonLd } from "@/config/seo";

export const metadata: Metadata = {
  title: "Impresszum",
  description: `${c.companyFullName} impresszuma. A weboldal üzemeltetésével kapcsolatos legfontosabb információk.`,
  openGraph: {
    url: "https://idopontfoglalom.hu/impresszum",
    type: "website",
    locale: "hu_HU",
    siteName: "IdőpontFoglalóm",
  },
  alternates: {
    canonical: "https://idopontfoglalom.hu/impresszum",
  },
};

export default function ImpresszumPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "IdőpontFoglalóm", url: "https://idopontfoglalom.hu" },
    { name: "Impresszum", url: "https://idopontfoglalom.hu/impresszum" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <main className="flex-1 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-background p-8 shadow-sm sm:p-12">
            <header className="mb-10">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Adatlap
              </p>
              <h1 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
                Impresszum
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Az alábbiakban találod a weboldal üzemeltetésével kapcsolatos
                legfontosabb információkat.
              </p>
            </header>

            <div className="grid gap-8 sm:grid-cols-2">
              <section>
                <h2 className="font-heading text-lg font-semibold">
                  Az üzemeltető adatai
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <strong>Cégnév:</strong> {c.companyLegalName}
                  </li>
                  <li>
                    <strong>Székhely:</strong> {c.companyAddress}
                  </li>
                  <li>
                    <strong>Adószám:</strong> {c.taxNumber}
                  </li>
                  <li>
                    <strong>E-mail cím:</strong>{" "}
                    <a href={`mailto:${c.email}`} className="text-accent underline">
                      {c.email}
                    </a>
                  </li>
                  <li>
                    <strong>Nyilvántartásba vevő hatóság:</strong> Nemzeti Adó- és
                    Vámhivatal
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg font-semibold">
                  A weboldal üzemeltetésének adatai
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <strong>Weboldal neve:</strong>{" "}
                    <a
                      href={`https://${c.siteUrl.replace("https://", "")}`}
                      className="text-accent underline"
                    >
                      {c.siteUrl.replace("https://", "")}
                    </a>
                  </li>
                  <li>
                    <strong>Szolgáltatás típusa:</strong> online időpontfoglaló
                    rendszer fejlesztés
                  </li>
                  <li>
                    <strong>Felelős szerkesztő:</strong> Dahud Ali
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg font-semibold">
                  Kapcsolatfelvétel módja
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <strong>E-mail cím:</strong>{" "}
                    <a href={`mailto:${c.email}`} className="text-accent underline">
                      {c.email}
                    </a>
                  </li>
                  <li>
                    <strong>Kapcsolati űrlap:</strong>{" "}
                    <a href="/#kapcsolat" className="text-accent underline">
                      Töltsd ki a weboldalon
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-lg font-semibold">
                  Tárhelyszolgáltató
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Vercel Inc.</li>
                  <li>440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
                </ul>
              </section>
            </div>

            <footer className="mt-10">
              <a
                href="/adatkezelesi-tajekoztato"
                className="inline-block rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
              >
                Adatkezelési tájékoztató
              </a>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
