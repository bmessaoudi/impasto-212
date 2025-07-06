import { MenuSection, BibiteItem, InfoSpeciale, RecensioniGoogle } from "@/types/menu";

export const menuData: MenuSection[] = [
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

export const bibite: BibiteItem[] = [
    { name: "ACQUA 0,33", price: 1.0 },
    { name: "LATTINE VARIE", price: 2.0 },
    { name: "COCA COLA 1,5 L", price: 3.5 },
];

export const infoSpeciali: InfoSpeciale[] = [
    {
        name: "FORMATO BABY PIZZA",
        ingredients: "Sconto su tutte le pizze",
        price: -1.0,
    },
    {
        name: "AGGIUNTA INGREDIENTI EXTRA",
        ingredients: "Qualsiasi ingrediente extra",
        price: 1.0,
    },
    {
        name: "ASPORTO",
        ingredients: "Supplemento per il servizio da asporto",
        price: 1.5,
    },
];

export const recensioniGoogle: RecensioniGoogle = {
    name: "RECENSIONI GOOGLE",
    ingredients: "Lascia una recensione sulla nostra pagina Google",
    url: "https://g.page/r/CdGalCMU3JvMEBM/review",
}; 