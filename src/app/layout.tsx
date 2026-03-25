import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sajatfoglalo.vercel.app"),
  title: {
    default: "SajátFoglaló | Online időpontfoglaló rendszer szalonoknak",
    template: "%s | SajátFoglaló",
  },
  description:
    "Online időpontfoglaló rendszer fodrász- és borbélyszalonok számára. A tiéd. Egyszeri beüzemelés, fix havi díj, teljes kontroll.",
  authors: [{ name: "Dahud Ali" }],
  creator: "Dahud Ali",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SajátFoglaló | Online időpontfoglaló rendszer szalonoknak",
    description:
      "A saját online időpontfoglalód. Egyszeri beüzemelés, fix havi díj, teljes kontroll.",
    url: "https://sajatfoglalo.vercel.app",
    siteName: "SajátFoglaló",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SajátFoglaló" }],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SajátFoglaló | Online időpontfoglaló rendszer szalonoknak",
    description:
      "A saját online időpontfoglalód. Egyszeri beüzemelés, fix havi díj, teljes kontroll.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sajatfoglalo.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
