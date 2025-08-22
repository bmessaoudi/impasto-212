import { Phone, MapPin, Clock, Gift, Instagram, Star } from "lucide-react";
import Image from "next/image";
import QRCode from "react-qr-code";

interface MenuItem {
  name: string;
  ingredients: string;
  price: number;
  hasHalal?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  color: string;
}

// Componente per il logo
const LogoComponent = ({
  className,
  logoType = "bianco",
}: {
  className?: string;
  logoType?: "bianco" | "nero";
}) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <Image
        src={`/logo-${logoType}.png`}
        alt="Logo Pizzeria Impasto 212"
        width={60}
        height={60}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
};

// Componente per il bollino halal
const HalalBadge = ({ size = "sm" }: { size?: "xs" | "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    xs: "w-5 h-5",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <Image
      src="/halal-logo.svg"
      alt="Halal"
      width={24}
      height={24}
      className={`${sizeClasses[size]} inline-block`}
    />
  );
};

// Componente per il QR Code
const QRCodeComponent = ({
  url,
  size = 128,
}: {
  url: string;
  size?: number;
}) => {
  return (
    <div className="bg-white p-2 rounded border border-gray-300">
      <QRCode
        size={size}
        value={url}
        fgColor="#000000"
        bgColor="#ffffff"
        title="QR Code Recensioni Google"
      />
    </div>
  );
};

export default function Home() {
  const menuData: MenuSection[] = [
    {
      title: "PIZZE CLASSICHE",
      color: "text-red-700",
      items: [
        {
          name: "MARINARA",
          ingredients: "pom, olio all'aglio, origano",
          price: 4.5,
        },
        {
          name: "MARGHERITA",
          ingredients: "pom, mozzarella fior di latte",
          price: 6.0,
        },
        {
          name: "DIAVOLA",
          ingredients: "pom, mozzarella fior di latte, salame piccante",
          price: 8.0,
          hasHalal: true,
        },
        {
          name: "TONNO E CIPOLLE",
          ingredients: "pom, mozzarella fior di latte, tonno, cipolle",
          price: 8.0,
        },
        {
          name: "VEGETARIANA",
          ingredients:
            "pom, mozz fior di latte, peperoni, radicchio, piselli, zucchine, spinaci",
          price: 8.0,
        },
        {
          name: "NAPOLI",
          ingredients: "pomodoro, mozzarella fior di latte, acciughe, origano",
          price: 7.0,
        },
        {
          name: "4 FORMAGGI",
          ingredients: "pom, mozz. fior di latte, gorgonzola, grana, scamorza",
          price: 8.5,
        },
        {
          name: "CAPRICCIOSA",
          ingredients:
            "pom, mozzarella fior di latte, funghi, carciofi, prosciutto",
          price: 8.0,
          hasHalal: true,
        },
        {
          name: "BRESAOLINA",
          ingredients:
            "pom, mozzarella fior di latte, rucola, grana a scaglie, bresaola",
          price: 9.5,
          hasHalal: true,
        },
        {
          name: "CICCIA",
          ingredients: "pom, mozzarella fior di latte, salsiccia, patatine",
          price: 8.5,
          hasHalal: true,
        },
        {
          name: "BUFALINA",
          ingredients: "pom, mozzarella fior di latte, pomodorini, bufala",
          price: 8.5,
        },
        {
          name: "ROMANA",
          ingredients:
            "pom, mozzarella fior di latte, capperi, acciughe, origano",
          price: 7.5,
        },
        {
          name: "AMERICANA",
          ingredients: "pom, mozzarella fior di latte, wurstel e patatine",
          price: 8.0,
          hasHalal: true,
        },
        {
          name: "SPECKOLANA",
          ingredients:
            "pom, mozzarella fior di latte, scamorza affumicata, speck",
          price: 9,
          hasHalal: true,
        },
        {
          name: "SELVAGGIA",
          ingredients:
            "pom, mozzarella fior di latte, funghi in asettico, crudo",
          price: 9.5,
          hasHalal: true,
        },
      ],
    },
    {
      title: "LE NOSTRE PIZZE SPECIALI",
      color: "text-teal-600",
      items: [
        {
          name: "212 SIGN",
          ingredients:
            "pomodoro, mozzarella fior di latte, salsiccia, cipolla rossa, prezzemolo",
          price: 9.5,
          hasHalal: true,
        },
        {
          name: "SPICY CRUNCH",
          ingredients:
            "pomodoro, mozzarella fior di latte, salame piccante, patate cheddar a scaglie",
          price: 10.0,
          hasHalal: true,
        },
        {
          name: "SALAME LOVER",
          ingredients:
            "mozzarella fior di latte, salame piccante, olive nere, grana a scaglie",
          price: 9.5,
          hasHalal: true,
        },
        {
          name: "CACIONA",
          ingredients:
            "mozzarella fior di latte, pomodorini secchi, pangrattato, crema cacio e pepe",
          price: 10.0,
        },
        {
          name: "WURSTEL AND CO",
          ingredients:
            "pomodoro, mozzarella fior di latte, wurstel, patate al forno e scamorza",
          price: 9.5,
          hasHalal: true,
        },
      ],
    },
    {
      title: "PIZZE BIANCHE",
      color: "text-teal-600",
      items: [
        {
          name: "PORCINA",
          ingredients:
            "mozzarella fior di latte, porcini, gorgonzola e olive taggiasche",
          price: 10.0,
        },
        {
          name: "VERANO",
          ingredients:
            "mozzarella fior di latte, chips di zucchine, grana a scaglie",
          price: 9.0,
        },
        {
          name: "212 BIANCA",
          ingredients:
            "mozzarella fior di latte, pomodorini, basilico, stracciatella",
          price: 10.0,
        },
        {
          name: "BURRATA AND CO",
          ingredients:
            "mozzarella fior di latte, zucchine, olive taggiasche e burrata",
          price: 10.5,
        },
        {
          name: "RUSTICA",
          ingredients:
            "mozzarella fior di latte, pancetta, patate al forno, cipolle rosse, taleggio",
          price: 10.5,
          hasHalal: true,
        },
      ],
    },
    {
      title: "PANUOZZI",
      color: "text-orange-500",
      items: [
        {
          name: "BLED 1",
          ingredients: "mozzarella fior di latte, prosciutto cotto",
          price: 7.5,
          hasHalal: true,
        },
        {
          name: "BLED 2",
          ingredients: "mozzarella fior di latte, bresaola, rucola, grana",
          price: 8.5,
          hasHalal: true,
        },
        {
          name: "BLED 3",
          ingredients: "mozzarella fior di latte, funghi, taleggio",
          price: 8.0,
        },
        {
          name: "BLED 4",
          ingredients: "mozzarella fior di latte, tonno e philadelphia",
          price: 7.5,
        },
      ],
    },
    {
      title: "CALZONI",
      color: "text-green-600",
      items: [
        {
          name: "TAXI 1",
          ingredients: "pomodoro, mozzarella fior di latte",
          price: 6.0,
        },
        {
          name: "TAXI 2",
          ingredients: "mozzarella fior di latte, funghi, carciofi, prosciutto",
          price: 8.0,
          hasHalal: true,
        },
        {
          name: "TAXI 3",
          ingredients: "mozzarella fior di latte, gorgonzola, scamorza e grana",
          price: 8.5,
        },
      ],
    },
    {
      title: "FRITTURE",
      color: "text-purple-600",
      items: [
        { name: "PATATINE FRITTE", ingredients: "", price: 4.0 },
        { name: "MOZZARELLINE", ingredients: "", price: 4.5 },
        { name: "STEAK HOUSE", ingredients: "", price: 5.0 },
        { name: "CROCCHETTE DI PATATE", ingredients: "", price: 4.5 },
      ],
    },
  ];

  const bibite = [
    { name: "ACQUA 0,33", price: 1.0 },
    { name: "LATTINE VARIE", price: 2.0 },
    { name: "COCA COLA 1,5 L", price: 3.5 },
  ];

  const infoSpeciali = [
    {
      name: "FORMATO BABY PIZZA",
      ingredients: "Sconto su tutte le pizze",
      price: -1.0,
    },
    {
      name: "AGGIUNTA INGREDIENTI EXTRA",
      ingredients: "Qualsiasi ingrediente extra a partire da",
      price: 1.0,
    },
    {
      name: "ASPORTO",
      ingredients: "Supplemento per il servizio da asporto",
      price: 1.5,
    },
  ];

  const recensioniGoogle = {
    name: "RECENSIONI GOOGLE",
    ingredients: "Lascia una recensione sulla nostra pagina Google",
    url: "https://g.page/r/CdGalCMU3JvMEBM/review",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-red-800 text-white py-6 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
            {/* Left - Address Info */}
            <div className="text-left">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-2 text-red-200" />
                <span className="font-semibold font-montserrat">Indirizzo</span>
              </div>
              <p className="text-red-200 text-sm">Via della Vittoria, 1/D</p>
              <p className="text-red-200 text-sm">Bergamo 24126</p>
              <a
                href="https://maps.app.goo.gl/A5xR3b1dqCBYkqGLA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-200 hover:text-white underline text-sm mt-1 inline-block"
              >
                Visualizza su Maps
              </a>
              <div className="mt-2">
                <a
                  href="https://www.instagram.com/impasto212?igsh=OWo1dzh1a3E5M242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-semibold text-white text-sm"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @impasto212
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="https://g.page/r/CdGalCMU3JvMEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-semibold text-white text-sm"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Lascia una recensione
                </a>
              </div>
            </div>

            {/* Center - Logo and Title */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <LogoComponent className="w-14 h-14 mr-4" logoType="bianco" />
                <div className="flex items-center">
                  <h1 className="text-3xl font-bold font-montserrat mr-3">
                    PIZZERIA <br /> IMPASTO 212
                  </h1>
                  <HalalBadge size="lg" />
                </div>
              </div>
              <p className="text-lg opacity-90 font-montserrat">
                La nostra cucina rispetta i principi halal per garantirti
                qualità e fiducia
              </p>
            </div>

            {/* Right - Contact Info */}
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <Phone className="w-5 h-5 mr-2 text-red-200" />
                <span className="font-semibold font-montserrat">Contatti</span>
              </div>
              <p className="text-red-200 text-sm mb-3">Tel: +39 035 0644 605</p>
              <div className="flex items-center justify-end mb-1">
                <Clock className="w-4 h-4 mr-2 text-red-200" />
                <span className="font-semibold font-montserrat">Orari:</span>
              </div>
              <div className="text-red-200 text-sm space-y-1">
                <p className="font-semibold text-white">PRANZO:</p>
                <p>Lun-Mer: 12:00-14:00</p>
                <p>Gio-Sab: 12:00-14:00</p>
                <p className="font-semibold text-white mt-2">CENA:</p>
                <p>Lun, Mer-Ven: 17:30-22:00</p>
                <p>Sab-Dom: 17:30-22:00</p>
                <p className="font-semibold">Martedì: Chiuso</p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center mb-3">
                <LogoComponent className="w-12 h-12 mr-3" logoType="bianco" />
                <div className="flex items-center">
                  <h1 className="text-2xl md:text-3xl font-bold font-montserrat mr-3">
                    PIZZERIA <br /> IMPASTO 212
                  </h1>
                  <HalalBadge size="md" />
                </div>
              </div>
              <p className="text-base md:text-lg opacity-90 font-montserrat">
                La nostra cucina rispetta i principi halal per garantirti
                qualità e fiducia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              {/* Address Info */}
              <div>
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-red-200" />
                  <span className="font-semibold font-montserrat">
                    Indirizzo
                  </span>
                </div>
                <p className="text-red-200 text-sm">Via della Vittoria, 1/D</p>
                <p className="text-red-200 text-sm">Bergamo 24126</p>
                <a
                  href="https://maps.app.goo.gl/A5xR3b1dqCBYkqGLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-200 hover:text-white underline text-sm mt-1 inline-block"
                >
                  Visualizza su Maps
                </a>
                <div className="mt-2">
                  <a
                    href="https://www.instagram.com/impasto212?igsh=OWo1dzh1a3E5M242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white text-sm font-semibold"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    @impasto212
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="https://g.page/r/CdGalCMU3JvMEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white text-sm font-semibold"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Lascia una recensione
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Phone className="w-4 h-4 mr-2 text-red-200" />
                  <span className="font-semibold font-montserrat">
                    Contatti
                  </span>
                </div>
                <p className="text-red-200 text-sm mb-3">
                  Tel: +39 035 0644 605
                </p>
                <div className="flex items-center justify-center mb-1">
                  <Clock className="w-4 h-4 mr-2 text-red-200" />
                  <span className="font-semibold font-montserrat">Orari:</span>
                </div>
                <div className="text-red-200 text-sm space-y-1">
                  <p className="font-semibold text-white">PRANZO:</p>
                  <p>Lun-Mer: 12:00-14:00</p>
                  <p>Gio-Sab: 12:00-14:00</p>
                  <p className="font-semibold text-white mt-2">CENA:</p>
                  <p>Lun, Mer-Ven: 17:30-22:00</p>
                  <p>Sab-Dom: 17:30-22:00</p>
                  <p className="font-semibold">Martedì: Chiuso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Promozione Nuova Apertura */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-2">
            <Gift className="w-5 h-5 mr-2" />
            <span className="font-bold text-lg font-montserrat">
              NUOVA APERTURA
            </span>
          </div>
          <p className="text-sm md:text-base font-montserrat">
            <span className="font-semibold">Fino al 31 AGOSTO</span> - Ogni 2
            pizze una bibita in omaggio
          </p>
        </div>
      </div>

      {/* Apertura Pranzo */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-bold text-lg font-montserrat">
              APERTURA PRANZO
            </span>
          </div>
          <p className="text-sm md:text-base font-montserrat">
            <span className="font-semibold">Dal Lunedì al Sabato</span> - Aperto
            anche a pranzo dalle 12:00 alle 14:00
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2
                className={`text-2xl font-bold mb-4 ${section.color} text-center font-montserrat`}
              >
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-start"
                  >
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base font-montserrat mr-2">
                          {item.name}
                        </h3>
                        {item.hasHalal && <HalalBadge size="sm" />}
                      </div>
                      {item.ingredients && (
                        <p className="text-gray-600 text-xs md:text-sm mt-1">
                          {item.ingredients}
                        </p>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <span className="font-bold text-green-600 font-montserrat">
                        € {item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bibite Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-red-700 text-center font-montserrat">
              BIBITE
            </h2>
            <div className="space-y-3">
              {bibite.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base font-montserrat">
                      {item.name}
                    </h3>
                  </div>
                  <div className="text-right ml-4">
                    <span className="font-bold text-green-600 font-montserrat">
                      € {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Informazioni Speciali Section */}
          <div className="bg-red-800 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-center font-montserrat">
              INFORMAZIONI SPECIALI
            </h2>
            <div className="space-y-3">
              {infoSpeciali.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm md:text-base font-montserrat">
                      {item.name}
                    </h3>
                    {item.ingredients && (
                      <p className="text-red-200 text-xs md:text-sm mt-1">
                        {item.ingredients}
                      </p>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    <span className="font-bold text-yellow-300 font-montserrat">
                      {item.price > 0 ? "+" : "-"} €{" "}
                      {item.price > 0
                        ? item.price.toFixed(2)
                        : (item.price * -1).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recensioni Google Section */}
          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-center font-montserrat">
              {recensioniGoogle.name}
            </h2>
            <div className="text-center">
              <p className="text-blue-200 text-sm mb-4">
                {recensioniGoogle.ingredients}
              </p>
              <div className="flex flex-col items-center space-y-4">
                <QRCodeComponent url={recensioniGoogle.url} size={120} />
                <a
                  href={recensioniGoogle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Lascia una recensione
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Note Allergeni */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-gray-700 font-montserrat">
            <span className="font-semibold">Nota:</span> Alcuni prodotti possono
            contenere: glutine, lattosio, frutta e gusci di uova, pesce,
            crostacei. Info dettagliate in pizzeria.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-montserrat text-sm">
            &copy; {new Date().getFullYear()} Pizzeria Impasto 212. Tutti i
            diritti riservati.
          </p>
          <p className="text-gray-500 font-montserrat text-xs mt-2">
            Made with ❤️ by{" "}
            <a
              href="https://www.instagram.com/bilel.it?igsh=c3M2cHNqcGJybHF3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              BM
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
