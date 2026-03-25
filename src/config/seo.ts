const faqs = [
  {
    q: "Miben más az általad készített honlap, mint a Salonic, BWNET vagy Fresha?",
    a: "A rendszer a saját domaineden fut, nem vagy platformhoz kötve. Egyszeri beüzemelés + fix havi díj, nem pedig havi előfizetés ami évről évre nő.",
  },
  {
    q: "Mit jelent az, hogy 'a tiéd'?",
    a: "Emailben elküldöd, hogyan képzeled el a honlapodat: a szalonod nevét, helyszínét, szolgáltatásaidat, stb. Én megépítem, a saját domainedre teszem, és kész. Nem egy közös platformon leszel száz másik szalonnal, hanem a saját oldaladon.",
  },
  {
    q: "Milyen szalonoknak ajánlott?",
    a: "Bárkinek, aki időpontfoglalásra épülő szolgáltatást nyújt.",
  },
  {
    q: "Kapok saját domaint?",
    a: "Igen. A rendszer a te domaineden fut (pl. foglalj.szalonneved.hu), a te márkáddal, a te arculatoddal.",
  },
  {
    q: "Mi történik, ha le akarok állni a szolgáltatással?",
    a: "Nincs hűségidő. Bármikor leállíthatod a szolgáltatást, mindössze egy havi díj extra fizetési kötelezettséged keletkezik.",
  },
  {
    q: "Hogyan csökkenti a no-show-kat?",
    a: "Automatikus email emlékeztetőt küldünk a vendégeidnek a foglalásuk előtt, így kevesebb az elfelejtett időpont.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "IdőpontFoglalóm",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Online időpontfoglaló rendszer fodrász- és borbélyszalonok számára. Egyszeri beüzemelés, fix havi díj, teljes kontroll.",
  url: "https://idopontfoglalom.vercel.app",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "HUF",
    description: "Egyszeri beüzemelés",
  },
  author: {
    "@type": "Person",
    name: "Dahud Ali",
    url: "https://idopontfoglalom.vercel.app/rolam",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "IdőpontFoglalóm",
  description:
    "Online időpontfoglaló rendszer szalonoknak. Saját domain, saját rendszer, fix havi díj.",
  url: "https://idopontfoglalom.vercel.app",
  email: "alidahud@gmail.com",
  telephone: "+36307421723",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rákóczi utca 67",
    addressLocality: "Szekszárd",
    postalCode: "7100",
    addressCountry: "HU",
  },
  priceRange: "200 000 Ft + 4 000 Ft/hó",
  areaServed: {
    "@type": "Country",
    name: "HU",
  },
};
