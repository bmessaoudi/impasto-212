# Pizzeria Impasto 212

Un sito web moderno e responsive per la Pizzeria Impasto 212, costruito con Next.js 14, React 18, TypeScript e Tailwind CSS.

## Caratteristiche

- **Responsive Design**: Ottimizzato per desktop, tablet e mobile
- **Menu Completo**: Visualizza tutte le categorie di pizza e prodotti
- **Design Moderno**: Interfaccia pulita e accattivante
- **Performance**: Costruito con Next.js 14 per prestazioni ottimali
- **Accessibilità**: Progettato seguendo le best practices per l'accessibilità

## Menu Disponibile

- **Pizze Classiche**: Marinara, Margherita, Diavola, e altre specialità tradizionali
- **Pizze Speciali**: Creazioni uniche della casa come 212 Sign e Spicy Crunch
- **Pizze Bianche**: Selezione di pizze senza pomodoro
- **Panuozzi**: Panini napoletani tradizionali
- **Calzoni**: Pizze chiuse ripiene
- **Fritture**: Antipasti fritti
- **Bibite**: Selezione di bevande

## Tecnologie Utilizzate

- **Next.js 14**: Framework React per applicazioni moderne
- **React 18**: Libreria per interfacce utente
- **TypeScript**: Tipizzazione statica per JavaScript
- **Tailwind CSS**: Framework CSS utility-first
- **Radix UI**: Componenti accessibili
- **Lucide React**: Icone moderne

## Installazione e Avvio

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

## Comandi Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Costruisce l'applicazione per la produzione
- `npm run start` - Avvia il server di produzione
- `npm run lint` - Esegue il linting del codice

## Personalizzazione

Per personalizzare il menu o le informazioni della pizzeria, modifica i dati nel file `src/app/page.tsx`:

- **Menu Items**: Modifica l'array `menuData` per aggiungere/rimuovere elementi del menu
- **Prezzi**: Aggiorna i prezzi nell'oggetto `price` di ogni elemento
- **Informazioni Contatto**: Aggiorna il footer con i dettagli corretti della pizzeria

## Struttura del Progetto

```
src/
├── app/
│   ├── fonts/          # Font personalizzati
│   ├── globals.css     # Stili globali
│   ├── layout.tsx      # Layout principale
│   └── page.tsx        # Pagina principale del menu
```

## Contribuzioni

Per contribuire al progetto:

1. Fai un fork del repository
2. Crea un branch per la tua feature
3. Commit delle tue modifiche
4. Push al branch
5. Apri una Pull Request

## Licenza

Questo progetto è proprietà della Pizzeria Impasto 212. Tutti i diritti riservati.

---

**Pizzeria Impasto 212** - La nostra cucina rispetta i principi italiani per garantirti qualità e fiducia.
