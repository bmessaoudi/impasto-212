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
  keywords:
    "pizzeria bergamo, pizza bergamo, impasto 212, cucina halal bergamo, pizza halal, calzoni, panuozzi, via della vittoria bergamo",
  authors: [{ name: "Pizzeria Impasto 212" }],
  openGraph: {
    title: "Pizzeria Impasto 212 - Bergamo | Autentica Cucina Halal",
    description:
      "Pizzeria Impasto 212 a Bergamo offre autentica cucina halal con ingredienti di qualità. Via della Vittoria, 1D",
    type: "website",
    locale: "it_IT",
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
