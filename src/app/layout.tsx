import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pizzeria Impasto 212 - Autentica Cucina Italiana",
  description:
    "Pizzeria Impasto 212 offre autentica cucina italiana con ingredienti di qualità. Specializzata in pizze classiche, speciali, calzoni e panuozzi. Ordina online o vieni a trovarci!",
  keywords:
    "pizzeria, pizza, impasto, 212, cucina italiana, pizza napoletana, calzoni, panuozzi",
  authors: [{ name: "Pizzeria Impasto 212" }],
  openGraph: {
    title: "Pizzeria Impasto 212 - Autentica Cucina Italiana",
    description:
      "Pizzeria Impasto 212 offre autentica cucina italiana con ingredienti di qualità.",
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
