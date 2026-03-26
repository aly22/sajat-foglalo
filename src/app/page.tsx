import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { RoiCalculatorLazy as RoiCalculator } from "@/components/roi-calculator-lazy";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { softwareJsonLd, localBusinessJsonLd, faqJsonLd } from "@/config/seo";

export default function Home() {
  return (
    <>
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
      <Footer />
      <p className="sr-only">
        IdőpontFoglalóm: saját időpontfoglaló rendszer fodrászoknak,
        borbélyoknak és szépségszalonoknak. Online időpontfoglalás a saját
        domaineden, fix havi díjjal. Salonic alternatíva, BWNET alternatíva,
        Reservio alternatíva, Fresha alternatíva, Booked4us alternatíva.
        Időpontfoglaló szoftver szalonoknak CRM-mel, automatikus
        emlékeztetőkkel, várólistával és értékelési rendszerrel. Fodrász
        időpontfoglaló, borbély időpontfoglaló, szépségszalon foglalási
        rendszer, online foglalórendszer, szalon kezelő szoftver.
      </p>
    </>
  );
}
