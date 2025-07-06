import {
  Header,
  PromoSection,
  MenuCard,
  ReviewCard,
  Footer,
} from "@/components";
import { menuData, bibite, infoSpeciali, recensioniGoogle } from "@/data/menu";
import { BibiteItem } from "@/types/menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />
      <PromoSection />

      {/* Menu Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((section, index) => (
            <MenuCard
              key={index}
              title={section.title}
              items={section.items}
              titleColor={section.color}
            />
          ))}

          {/* Bibite Section */}
          <MenuCard
            title="BIBITE"
            items={bibite.map((item: BibiteItem) => ({
              name: item.name,
              ingredients: "",
              price: item.price,
            }))}
            titleColor="text-red-700"
          />

          {/* Informazioni Speciali Section */}
          <MenuCard
            title="INFORMAZIONI SPECIALI"
            items={infoSpeciali}
            titleColor="text-white"
            backgroundColor="bg-red-800"
            textColor="text-white"
          />

          {/* Recensioni Google Section */}
          <ReviewCard reviewData={recensioniGoogle} />
        </div>

        {/* Note Allergeni */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-gray-700 font-montserrat">
            <span className="font-semibold">Nota:</span> Alcuni prodotti possono
            contenere: glutine, lattosio, frutta e gusci di uova, pesce,
            crostacei. Info dettagliate in pizzeria.
          </p>
        </div>

        <Footer />
      </main>
    </div>
  );
}
