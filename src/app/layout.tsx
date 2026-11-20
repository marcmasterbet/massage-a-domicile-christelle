import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  BRAND,
  PHONE_TEL,
  PRATICIENNE,
  SITE_URL,
  VILLES,
} from "@/lib/site";
import "./globals.css";

const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-latin-opsz-normal.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/fraunces-latin-opsz-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-titre",
  display: "swap",
});

const figtree = localFont({
  src: [{ path: "../fonts/figtree-latin-wght-normal.woff2", style: "normal", weight: "300 900" }],
  variable: "--font-texte",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Massage à domicile au Pays basque – Bayonne, Anglet, Biarritz | ${BRAND}`,
    template: `%s | ${BRAND}`,
  },
  description:
    "Massages bien-être à domicile à Bayonne, Anglet, Biarritz, Saint-Pierre-d’Irube et Tarnos, avec Christelle, praticienne du bien-être.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: BRAND,
    images: [{ url: "/images/massage-mains.jpg", width: 1837, height: 856 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#23291b",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: BRAND,
  description: "Massage à domicile au Pays basque",
  url: SITE_URL,
  telephone: PHONE_TEL.replace("tel:", ""),
  image: `${SITE_URL}/images/massage-mains.jpg`,
  logo: `${SITE_URL}/images/logo-lame-agit-o-corps.png`,
  founder: { "@type": "Person", name: PRATICIENNE },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "22:00",
  },
  areaServed: VILLES.map((v) => ({ "@type": "City", name: v })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${figtree.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
