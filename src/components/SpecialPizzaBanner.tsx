import { Megaphone, Star } from "lucide-react";

export const SpecialPizzaBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-red-900 shadow-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transform rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

      <div className="container mx-auto py-6 px-4 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Megaphone className="w-8 h-8 mr-3 animate-bounce" />
          <h2 className="font-bold text-2xl md:text-3xl font-montserrat text-center uppercase tracking-wide">
            Le Nostre Novità
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Calabrese 2.0 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-2 border-red-800/20 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-xl font-montserrat text-red-800">
                CALABRESE 2.0
              </h3>
              <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                € 10.50
              </span>
            </div>
            <p className="text-gray-800 font-medium mb-3">
              pomodoro, mozzarella fior di latte, olive taggiasche, spianata
              Calabra, peperoni
            </p>
            <div className="flex items-center text-sm text-red-700 font-semibold">
              <Star className="w-4 h-4 mr-1 fill-current" />
              Gusto deciso
            </div>
          </div>

          {/* Milanese */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border-2 border-red-800/20 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-xl font-montserrat text-red-800">
                MILANESE
              </h3>
              <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                € 10.00
              </span>
            </div>
            <p className="text-gray-800 font-medium mb-3">
              panna, mozzarella fior di latte, Salame Milano
            </p>
            <div className="flex items-center text-sm text-red-700 font-semibold">
              <Star className="w-4 h-4 mr-1 fill-current" />
              Cremosa e saporita
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
