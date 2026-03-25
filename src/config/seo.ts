const faqs = [
  {
    q: "Miben más a SajátFoglaló, mint a Salonic, BWNET vagy Fresha?",
    a: "A SajátFoglaló nem egy harmadik fél felülete. A rendszer a tiéd, a saját domaineden fut, és nem vagy platformhoz kötve. Egyszeri beüzemelés + fix havi díj, nem pedig havi előfizetés ami évről évre nő.",
  },
  {
    q: "Mennyibe kerül az időpontfoglaló rendszer?",
    a: "Egyszeri beüzemelési díj 200 000 Ft, utána fix havi 4 000 Ft a szerver, domain és email költségekre. Nincs rejtett díj, nincs platformfüggés.",
  },
  {
    q: "Milyen szalonoknak ajánlott?",
    a: "Fodrász- és borbélyszalonoknak, szépségszalonoknak, kozmetikusoknak, személyi edzőknek. Bárkinek, aki időpontfoglalásra épülő szolgáltatást nyújt.",
  },
  {
    q: "Kapok saját domaint?",
    a: "Igen. A rendszer a te domaineden fut (pl. foglalj.szalonneved.hu), a te márkáddal, a te arculatoddal.",
  },
  {
    q: "Mi történik, ha le akarok állni a szolgáltatással?",
    a: "Nincs hűségidő. A rendszer a tiéd, az adatok a tiéd. Bármikor dönthetsz úgy, hogy magad üzemelteted tovább.",
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
  name: "SajátFoglaló",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Online időpontfoglaló rendszer fodrász- és borbélyszalonok számára. Egyszeri beüzemelés, fix havi díj, teljes kontroll.",
  url: "https://sajatfoglalo.vercel.app",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "HUF",
    description: "Egyszeri beüzemelés",
  },
  author: {
    "@type": "Person",
    name: "Dahud Ali",
    url: "https://sajatfoglalo.vercel.app/rolam",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SajátFoglaló",
  description:
    "Online időpontfoglaló rendszer szalonoknak. Saját domain, saját rendszer, fix havi díj.",
  url: "https://sajatfoglalo.vercel.app",
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
