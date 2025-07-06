export interface MenuItem {
    name: string;
    ingredients: string;
    price: number;
    hasHalal?: boolean;
}

export interface MenuSection {
    title: string;
    items: MenuItem[];
    color: string;
}

export interface BibiteItem {
    name: string;
    price: number;
}

export interface InfoSpeciale {
    name: string;
    ingredients: string;
    price: number;
}

export interface RecensioniGoogle {
    name: string;
    ingredients: string;
    url: string;
} 