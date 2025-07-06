# Pizzeria Impasto 212

Un sito web moderno e responsive per la Pizzeria Impasto 212, costruito con Next.js 14, React 18, TypeScript e Tailwind CSS. Specializzata in cucina **halal** a Bergamo.

## 🌟 Caratteristiche

- **Responsive Design**: Ottimizzato per desktop, tablet e mobile
- **Menu Completo**: Visualizza tutte le categorie di pizza e prodotti
- **Certificazione Halal**: Bollini halal per i prodotti certificati
- **QR Code Recensioni**: Integrazione con Google Reviews
- **Design Moderno**: Interfaccia pulita e accattivante
- **Performance**: Costruito con Next.js 14 per prestazioni ottimali
- **Accessibilità**: Progettato seguendo le best practices per l'accessibilità
- **Architettura Modulare**: Struttura del codice organizzata e manutenibile

## 🍕 Menu Disponibile

- **Pizze Classiche** (13 varietà): Marinara, Margherita, Diavola, Tonno e Cipolle, Vegetariana, Napoli, 4 Formaggi, Capricciosa, Bresaolina, Ciccia, Bufalina, Romana, Americana
- **Pizze Speciali** (5 varietà): 212 Sign, Spicy Crunch, Salame Lover, Caciona, Wurstel and Co
- **Pizze Bianche** (5 varietà): Porcina, Verano, 212 Bianca, Burrata and Co, Rustica
- **Panuozzi** (4 varietà): Bled 1-4
- **Calzoni** (3 varietà): Taxi 1-3
- **Fritture** (4 varietà): Patatine fritte, Mozzarelline, Steak House, Crocchette di patate
- **Bibite** (3 varietà): Acqua, Lattine varie, Coca Cola

## 🏢 Informazioni Pizzeria

- **Indirizzo**: Via della Vittoria, 1/D, Bergamo 24126
- **Telefono**: +39 035 0644 605
- **Instagram**: [@impasto212](https://www.instagram.com/impasto212?igsh=OWo1dzh1a3E5M242)
- **Orari**:
  - Lun, Mer-Ven: 17:30-22:00
  - Sab-Dom: 17:30-22:00
  - Martedì: Chiuso

## 🚀 Tecnologie Utilizzate

- **Next.js 14**: Framework React per applicazioni moderne
- **React 18**: Libreria per interfacce utente
- **TypeScript**: Tipizzazione statica per JavaScript
- **Tailwind CSS**: Framework CSS utility-first
- **Radix UI**: Componenti accessibili
- **Lucide React**: Icone moderne
- **React QR Code**: Generazione QR codes

## 📦 Installazione e Avvio

1. Clona il repository
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```
4. Apri [http://localhost:3000](http://localhost:3000) nel tuo browser

## 🎯 Comandi Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Costruisce l'applicazione per la produzione
- `npm run start` - Avvia il server di produzione
- `npm run lint` - Esegue il linting del codice

## 🔧 Personalizzazione

Il progetto utilizza un'architettura modulare che facilita la manutenzione e la personalizzazione:

### Modifica del Menu

- **Dati Menu**: Modifica `src/data/menu.ts` per aggiungere/rimuovere elementi
- **Prezzi**: Aggiorna i prezzi negli oggetti del menu
- **Tipi**: I tipi TypeScript in `src/types/menu.ts` garantiscono la consistenza

### Informazioni Aziendali

- **Costanti**: Modifica `src/constants/business.ts` per aggiornare contatti, orari e informazioni
- **Componenti**: I componenti in `src/components/` sono riutilizzabili e modulari

## 📁 Struttura del Progetto

```
src/
├── app/
│   ├── globals.css     # Stili globali
│   ├── layout.tsx      # Layout principale
│   └── page.tsx        # Pagina principale del menu
├── components/
│   ├── Header.tsx      # Header con informazioni aziendali
│   ├── PromoSection.tsx # Sezione promozione
│   ├── MenuCard.tsx    # Card per elementi del menu
│   ├── ReviewCard.tsx  # Card per recensioni Google
│   ├── Logo.tsx        # Componente logo
│   ├── HalalBadge.tsx  # Bollino halal
│   ├── QRCodeComponent.tsx # Componente QR code
│   ├── Footer.tsx      # Footer con copyright
│   └── index.ts        # Export centralizzato
├── data/
│   └── menu.ts         # Dati del menu
├── types/
│   └── menu.ts         # Tipi TypeScript
├── constants/
│   └── business.ts     # Costanti aziendali
└── public/
    ├── logo-bianco.png # Logo bianco
    ├── logo-nero.png   # Logo nero
    └── halal-logo.svg  # Logo halal
```

## 🏗️ Architettura

Il progetto segue i principi di **Clean Architecture** con:

- **Separazione delle responsabilità**: Componenti, dati e tipi separati
- **Riusabilità**: Componenti modulari e configurabili
- **Manutenibilità**: Struttura chiara e documentata
- **Scalabilità**: Facile aggiunta di nuove funzionalità
- **Type Safety**: TypeScript per prevenire errori

## 🤝 Contribuzioni

Per contribuire al progetto:

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/nuova-feature`)
3. Commit delle tue modifiche (`git commit -m 'Aggiungi nuova feature'`)
4. Push al branch (`git push origin feature/nuova-feature`)
5. Apri una Pull Request

## 📱 Features Implementate

- ✅ Menu completo con prezzi aggiornati
- ✅ Certificazioni halal visibili
- ✅ QR Code per recensioni Google
- ✅ Link social media (Instagram)
- ✅ Informazioni complete (indirizzo, telefono, orari)
- ✅ Promozione apertura
- ✅ Note allergeni
- ✅ Design responsive
- ✅ Architettura modulare

## 📄 Licenza

Questo progetto è proprietà della **Pizzeria Impasto 212**. Tutti i diritti riservati.

---

**Pizzeria Impasto 212** - La nostra cucina rispetta i principi halal per garantirti qualità e fiducia.

_Sviluppato con ❤️ da [BM](https://www.instagram.com/bilel.it?igsh=c3M2cHNqcGJybHF3&utm_source=qr)_
