# Pizzeria Impasto 212

Sito e menu digitale della Pizzeria Impasto 212, pizzeria halal in Via della Vittoria 1D a Bergamo.

**Sito live: [pizzeriaimpasto212.it](https://pizzeriaimpasto212.it)**

## Cosa contiene

- Menu completo con prezzi e ingredienti: pizze classiche, pizze speciali, pizze bianche, panuozzi, calzoni, fritture e bibite
- Banner per le novità del menu
- Contatti, orari, link a Google Maps e Instagram
- QR code per lasciare una recensione su Google
- Manifest PWA, per aggiungere il sito alla schermata home del telefono
- Metadata SEO (Open Graph, dati di contatto e posizione)

## Stack

- [Next.js 14](https://nextjs.org/) con App Router
- React 18 e TypeScript
- Tailwind CSS
- Radix UI (dialog, separator) e Lucide per le icone
- react-qr-code

## Sviluppo locale

Il progetto usa [pnpm](https://pnpm.io/) (versione indicata nel campo `packageManager` di `package.json`).

```bash
pnpm install
pnpm dev
```

Poi apri [http://localhost:3000](http://localhost:3000).

| Comando | Cosa fa |
|---------|---------|
| `pnpm dev` | Server di sviluppo |
| `pnpm build` | Build di produzione |
| `pnpm start` | Avvia la build di produzione |
| `pnpm lint` | ESLint |

## Modificare il menu

I dati del menu sono in `src/app/page.tsx`:

- le sezioni e i prodotti sono nell'array `menuData`, con nome, ingredienti e prezzo di ogni voce
- contatti e orari sono nel footer della stessa pagina; i dati di contatto usati per la SEO sono in `src/app/layout.tsx`
- il banner delle novità è in `src/components/SpecialPizzaBanner.tsx`

## Struttura

```
src/
├── app/
│   ├── layout.tsx      # Layout e metadata SEO
│   ├── page.tsx        # Pagina del menu e dati
│   ├── globals.css     # Stili globali
│   └── manifest.json   # Manifest PWA
└── components/
    └── SpecialPizzaBanner.tsx
public/                 # Loghi e icone
```

## Deploy

Il sito è pubblicato su Vercel: ogni push su `main` va in produzione su [pizzeriaimpasto212.it](https://pizzeriaimpasto212.it).

## Licenza

Codice e contenuti sono di proprietà della Pizzeria Impasto 212. Tutti i diritti riservati.
