import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pizzeria Impasto 212 - Bergamo | Autentica Cucina Halal",
  description:
    "Pizzeria Impasto 212 a Bergamo offre autentica cucina halal con ingredienti di qualità. Specializzata in pizze classiche, speciali, calzoni e panuozzi. Via della Vittoria, 1D - Tel: 035 0644 605",
  keywords: [
    "pizzeria bergamo",
    "pizza bergamo",
    "impasto 212",
    "cucina halal bergamo",
    "pizza halal",
    "calzoni bergamo",
    "panuozzi bergamo",
    "via della vittoria bergamo",
    "ristorante halal bergamo",
    "pizzeria centro bergamo",
    "consegna pizza bergamo",
    "asporto pizza bergamo",
  ].join(", "),
  authors: [{ name: "Pizzeria Impasto 212" }],
  creator: "Pizzeria Impasto 212",
  publisher: "Pizzeria Impasto 212",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pizzeriaimpasto212.it/"),
  alternates: {
    canonical: "/",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    title: "Pizzeria Impasto 212 - Bergamo | Autentica Cucina Halal",
    description:
      "Pizzeria Impasto 212 a Bergamo offre autentica cucina halal con ingredienti di qualità. Specializzata in pizze classiche, speciali, calzoni e panuozzi. Via della Vittoria, 1D",
    url: "https://pizzeriaimpasto212.it",
    siteName: "Pizzeria Impasto 212",
    images: [
      {
        url: "/logo-nero.png",
        width: 1200,
        height: 630,
        alt: "Pizzeria Impasto 212 - Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizzeria Impasto 212 - Bergamo | Autentica Cucina Halal",
    description:
      "Pizzeria Impasto 212 a Bergamo offre autentica cucina halal con ingredienti di qualità. Specializzata in pizze classiche, speciali, calzoni e panuozzi.",
    images: ["/logo-nero.png"],
    creator: "@impasto212",
  },
  other: {
    "geo.region": "IT-BG",
    "geo.placename": "Bergamo",
    "geo.position": "45.6983;9.6773",
    ICBM: "45.6983, 9.6773",
    "business:contact_data:street_address": "Via della Vittoria, 1D",
    "business:contact_data:locality": "Bergamo",
    "business:contact_data:postal_code": "24121",
    "business:contact_data:country_name": "Italia",
    "business:contact_data:phone_number": "+39 035 0644 605",
    "business:contact_data:website": "https://pizzeriaimpasto212.it",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <meta name="apple-mobile-web-app-title" content="Impasto 212" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
