import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { RoiCalculator } from "@/components/roi-calculator";
import { Pricing } from "@/components/pricing";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Features />
        <RoiCalculator />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
