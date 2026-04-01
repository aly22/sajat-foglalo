import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { RoiCalculatorLazy as RoiCalculator } from "@/components/roi-calculator-lazy";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { softwareJsonLd, localBusinessJsonLd, faqJsonLd, websiteJsonLd } from "@/config/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="flex-1">
        <Hero />
        <Features />
        <RoiCalculator />
        <Pricing />
        <Faq />
        <ContactForm />
      </main>
      <p className="sr-only">
        Az IdőpontFoglalóm keretében saját online időpontfoglaló rendszert
        építek fodrászoknak, borbélyoknak és szépségszalonoknak. Nem egy közös
        platformon osztozol más szalonokkal, hanem a saját domaineden fut, a
        saját márkáddal. Egyszeri beüzemelési- és fix havi díjat fizetsz, nincs
        platformfüggés, és bármikor leállíthatod. A rendszerben van online
        foglalás, automatikus emlékeztetők, ügyfél CRM, statisztikák, várólista
        és értékelési rendszer.
      </p>
    </>
  );
}
