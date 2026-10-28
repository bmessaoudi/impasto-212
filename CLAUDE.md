# Impasto 212 - Pizzeria Menu Website

## Panoramica

Sito web del menu per **Pizzeria Impasto 212**, una pizzeria halal a Bergamo, Italia. Il progetto mostra il menu completo, informazioni di contatto, orari di apertura e integra funzionalita PWA per un'esperienza app-like.

**Scopo**: Fornire ai clienti un menu digitale accessibile da mobile con informazioni aggiornate su pizze, prezzi e disponibilita.

---

## Stack Tecnologico

| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| Next.js | 14.2.20 | Framework React con App Router |
| React | 18 | Libreria UI |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4.1 | Styling utility-first |
| Radix UI | - | Componenti accessibili (dialog, separator) |
| Lucide React | 0.525.0 | Icone |
| react-qr-code | 2.0.17 | Generazione QR code per recensioni |

---

## Struttura Directory

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Layout root con metadata SEO
│   ├── page.tsx            # Pagina principale del menu
│   ├── globals.css         # Stili globali e variabili CSS
│   └── manifest.json       # Configurazione PWA
├── components/             # Componenti React riutilizzabili
│   └── SpecialPizzaBanner.tsx
├── constants/              # (riservato per costanti)
├── data/                   # (riservato per dati)
├── lib/                    # (riservato per utilities)
└── types/                  # (riservato per tipi TS)
public/                     # Asset statici (loghi, icone PWA)
```

---

## File Chiave

| File | Scopo |
|------|-------|
| `src/app/layout.tsx:11-92` | Metadata SEO completi (OG, Twitter, geo) |
| `src/app/page.tsx:83-382` | Dati menu (sezioni, prezzi, ingredienti) |
| `src/app/page.tsx:20-80` | Componenti riutilizzabili (Logo, HalalBadge, QRCode) |
| `src/components/SpecialPizzaBanner.tsx` | Banner promozionale pizze speciali |
| `tailwind.config.ts` | Configurazione tema (font Montserrat, colori) |
| `src/app/manifest.json` | Configurazione PWA con shortcuts |

---

## Comandi Essenziali

```bash
npm run dev       # Server di sviluppo (localhost:3000)
npm run build     # Build produzione
npm run start     # Avvia server produzione
npm run lint      # Esegui ESLint
```

---

## Dati del Menu

I dati del menu sono inline in `src/app/page.tsx`:

- **Interfacce TypeScript**: `MenuItem` (linea 6), `MenuSection` (linea 13)
- **Sezioni menu**: linee 83-382
  - PIZZE CLASSICHE (14 items)
  - LE NOSTRE PIZZE SPECIALI (17 items)
  - PIZZE BIANCHE (5 items)
  - PANUOZZI (4 items)
  - CALZONI (3 items)
  - FRITTURE (5 items)
- **Bevande**: linee 384-388
- **Info speciali** (baby pizza, extra, supplemento consegna): linee 390-406

---

## Informazioni Business

- **Indirizzo**: Via della Vittoria, 1D, Bergamo 24126
- **Telefono**: +39 035 0644 605
- **Orari**: Lun, Mer-Ven: 17:30-22:00 | Sab-Dom: 17:30-22:00 | Martedi chiuso
- **Social**: Instagram @impasto212

---

## Path Alias

Configurato in `tsconfig.json`:
- `@/*` -> `./src/*`

---

## Documentazione Aggiuntiva

Consulta questi file per argomenti specifici:

| Documento | Quando consultare |
|-----------|-------------------|
| [.claude/docs/architectural_patterns.md](.claude/docs/architectural_patterns.md) | Pattern architetturali, decisioni di design, convenzioni componenti |

---

## Note per lo Sviluppo

1. **Aggiungere nuove pizze**: Modifica array in `src/app/page.tsx:83-382`
2. **Modificare orari/contatti**: Aggiorna `src/app/page.tsx:550-580` e metadata in `layout.tsx`
3. **Aggiungere banner promozionali**: Usa `SpecialPizzaBanner.tsx` come riferimento
4. **Modificare colori sezioni**: Aggiorna proprieta `color` in `menuSections` array
