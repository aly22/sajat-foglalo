const faqs = [
  {
    q: "Miben más az általad készített rendszer, mint a Salonic, BWNET vagy Fresha?",
    a: "A saját domaineden fut, nem vagy platformhoz kötve. Egyszeri beüzemelési- és fix havi díj, nem pedig havi előfizetés ami évről évre nő.",
  },
  {
    q: "Mi az a saját domain?",
    a: "A honlapod a saját márkaneved alatt érhető el, pl. sajatmarkaneved.hu, és az emailek is ezzel a domainnel végződnek, pl. info@sajatmarkaneved.hu.",
  },
  {
    q: "Mit jelent az, hogy 'a tiéd'?",
    a: "Emailben megbeszéljük hogyan képzeled el a honlapodat. Én megépítem, a saját domainedre teszem, és kész. Nem egy közös platformon leszel több száz másik szalonnal, hanem a saját oldaladon.",
  },
  {
    q: "Kiknek ajánlod?",
    a: "Bárkinek, aki időpontfoglalásra épülő szolgáltatást nyújt.",
  },
  {
    q: "Mi történik, ha le akarok állni a szolgáltatással?",
    a: "Nincs hűségidő. Bármikor szólhatsz, hogy le szeretnéd állítani a szolgáltatást, mindössze egy havi díj extra fizetési kötelezettséged keletkezik.",
  },
  {
    q: "Mennyi idő mire elkészül?",
    a: "Általában 1-2 hét, attól függően mennyire egyedi az elképzelésed.",
  },
  {
    q: "Mennyibe kerülnek az egyedi funkciók?",
    a: "– Bankkártyás fizetés + automatikus számlázás: 150 E Ft\n– Hűségprogram: 50 E Ft-tól\n– Egyéb funkciókról egyeztetés után tudok árat mondani.",
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
    "Online időpontfoglaló rendszer fodrászoknak, szalonoknak és edzőknek. Egyszeri beüzemelési- és fix havi díj, teljes kontroll.",
  url: "https://idopontfoglalom.hu",
  offers: {
    "@type": "Offer",
    price: "200000",
    priceCurrency: "HUF",
    description: "Egyszeri beüzemelés",
  },
  author: {
    "@type": "Person",
    name: "Dahud Ali",
    url: "https://idopontfoglalom.hu/rolam",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "IdőpontFoglalóm",
  description:
    "Online időpontfoglaló rendszer szalonoknak. Saját domain, saját rendszer, fix havi díj.",
  url: "https://idopontfoglalom.hu",
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

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IdőpontFoglalóm",
  alternateName: ["IF", "Időpontfoglalóm"],
  url: "https://idopontfoglalom.hu",
};

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
