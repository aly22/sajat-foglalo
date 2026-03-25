export const privacyConfig = {
  // Company
  companyName: "SajátFoglaló",
  companyFullName: "Dahud Ali egyéni vállalkozó",
  companyLegalName: "Dahud Ali ev.",
  companyAddress: "7100 Szekszárd, Rákóczi utca 67",
  companyRegisteredAddress: "7100 Szekszárd, Rákóczi utca 67",
  taxNumber: "48973650-1-37",
  email: "alidahud@gmail.com",
  phone: "+36 30 742 1723",
  phoneRaw: "06307421723",

  // Website
  siteUrl: "https://sajatfoglalo.vercel.app",
  privacyUrl: "https://sajatfoglalo.vercel.app/adatkezelesi-tajekoztato",

  // Data processors
  processors: [
    {
      activity: "Tárhely-szolgáltatás",
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
      email: "privacy@vercel.com",
    },
    {
      activity: "Email küldés",
      name: "Google LLC (Gmail SMTP)",
      address: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
      email: "support@google.com",
    },
    {
      activity: "Számlázás",
      name: "Billcity.hu",
      address: "1065 Budapest, Révay köz 4",
      email: "info@billcity.hu",
    },
  ],

  // Accountant
  accountant: {
    name: "Pető Lajos (könyvelő) egyéni vállalkozó",
    email: "plb9509@gmail.com",
    address: "MAGYARORSZÁG, 6050 Lajosmizse, Deák Ferenc utca 17.",
    taxId: "48212539-1-23",
    registrationNumber: "58499698",
  },

  // Social media (set to null to omit a platform)
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    tiktok: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
  },

  // Date
  effectiveDate: "2026. március 24.",
  effectiveCity: "Szekszárd",
};
