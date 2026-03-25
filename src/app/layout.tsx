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
  metadataBase: new URL("https://sajatfoglalo.hu"),
  title: "SajátFoglaló | A saját online foglalód",
  description:
    "Online foglalórendszer fodrász- és borbélyszalonok számára. Egyszeri beüzemelés, fix havi díj, teljes kontroll.",
  openGraph: {
    title: "SajátFoglaló",
    description: "A saját online foglalód.",
    url: "https://sajatfoglalo.hu",
    siteName: "SajátFoglaló",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "hu_HU",
    type: "website",
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
