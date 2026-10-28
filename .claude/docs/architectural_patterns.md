# Pattern Architetturali - Impasto 212

Questo documento descrive i pattern di design e le convenzioni utilizzate nel progetto.

---

## 1. Componenti Server-First (Next.js App Router)

Il progetto utilizza l'**App Router** di Next.js con componenti server di default.

**Dove applicato**:
- `src/app/layout.tsx` - Layout root (server component)
- `src/app/page.tsx` - Pagina menu (server component)

**Vantaggi**: Rendering lato server, SEO ottimizzato, nessun JavaScript client per contenuto statico.

---

## 2. Componenti Nested (Inline Subcomponents)

Componenti riutilizzabili definiti come funzioni all'interno del file principale.

**Riferimenti**:
- `src/app/page.tsx:20-39` - `LogoComponent`
- `src/app/page.tsx:42-59` - `HalalBadge`
- `src/app/page.tsx:62-80` - `QRCodeComponent`

**Pattern**:
```
const ComponentName = ({ prop1, prop2 }: Props) => (
  <JSX>...</JSX>
);
```

**Quando usare**: Componenti usati solo in un file, logica semplice, nessun stato.

---

## 3. Dati Inline Tipizzati

I dati del menu sono definiti inline con interfacce TypeScript.

**Riferimenti**:
- `src/app/page.tsx:6-11` - Interfaccia `MenuItem`
- `src/app/page.tsx:13-17` - Interfaccia `MenuSection`
- `src/app/page.tsx:83-382` - Array `menuSections`

**Struttura dati**:
```typescript
interface MenuItem {
  name: string;
  ingredients: string;
  price: number;
  hasHalal?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  color: string;  // Classe Tailwind per il colore
}
```

---

## 4. Sistema di Colori per Sezioni

Ogni sezione del menu ha un colore distintivo definito come classe Tailwind.

**Riferimenti**:
- `src/app/page.tsx:85` - Pizze classiche: `red-900`
- `src/app/page.tsx:146` - Pizze speciali: `teal-800`
- `src/app/page.tsx:268` - Pizze bianche: `red-800`
- `src/app/page.tsx:302` - Panuozzi: `orange-800`
- `src/app/page.tsx:333` - Calzoni: `green-800`
- `src/app/page.tsx:357` - Fritture: `purple-800`

**Utilizzo in rendering** (`src/app/page.tsx:589-591`):
```jsx
<div className={`bg-${section.color}`}>
```

---

## 5. Layout Responsive Mobile-First

Il design segue l'approccio mobile-first con breakpoint per desktop.

**Breakpoint utilizzati**:
- Default: Mobile (1 colonna)
- `md:` - Tablet
- `lg:` - Desktop (3 colonne)

**Riferimenti**:
- `src/app/page.tsx:421` - Layout desktop header (hidden su mobile)
- `src/app/page.tsx:499` - Layout mobile header (hidden su desktop)
- `src/app/page.tsx:587` - Grid menu: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## 6. Metadata SEO Centralizzati

Tutti i metadata SEO sono definiti nel layout root usando l'API Metadata di Next.js.

**Riferimento**: `src/app/layout.tsx:11-92`

**Elementi inclusi**:
- Title e description
- Open Graph (linee 34-54)
- Twitter Card (linee 55-63)
- Keywords (linee 64-76)
- Dati geografici (linee 77-90)
- Verification placeholders

---

## 7. PWA con Shortcuts

Configurazione PWA completa con shortcuts per azioni rapide.

**Riferimento**: `src/app/manifest.json`

**Shortcuts definiti**:
- Menu
- Prenota (prenotazioni)
- Consegna (delivery)

---

## 8. Componenti Banner Promozionali

Pattern per banner promozionali con animazioni.

**Riferimento**: `src/components/SpecialPizzaBanner.tsx`

**Caratteristiche**:
- Grid layout per prodotti in evidenza
- Icona animata con `animate-bounce`
- Hover effect con `hover:-translate-y-1`
- Gradient background

---

## 9. Badge Condizionale (Halal)

Visualizzazione condizionale del badge halal basata su flag.

**Riferimenti**:
- `src/app/page.tsx:42-59` - Componente `HalalBadge`
- `src/app/page.tsx:621-629` - Rendering condizionale

**Pattern**:
```jsx
{item.hasHalal && <HalalBadge size="small" />}
```

---

## 10. Variabili CSS per Theming

Sistema di theming basato su variabili CSS con supporto dark mode.

**Riferimento**: `src/app/globals.css:5-22`

**Variabili**:
- `--background` / `--foreground`
- Applicazione in `tailwind.config.ts` tramite `hsl(var(--variable))`

---

## Convenzioni di Naming

| Tipo | Convenzione | Esempio |
|------|-------------|---------|
| Componenti | PascalCase | `LogoComponent`, `HalalBadge` |
| Props interfaces | PascalCase con Props suffix | `MenuSection` |
| Array di dati | camelCase plurale | `menuSections`, `beverages` |
| Classi Tailwind colore | `{color}-{shade}` | `red-900`, `teal-800` |
