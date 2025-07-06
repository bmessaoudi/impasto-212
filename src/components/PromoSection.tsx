import { Gift } from "lucide-react";
import { BUSINESS_INFO } from "@/constants/business";

export const PromoSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center mb-2">
          <Gift className="w-5 h-5 mr-2" />
          <span className="font-bold text-lg font-montserrat">
            {BUSINESS_INFO.promotion.title}
          </span>
        </div>
        <p className="text-sm md:text-base font-montserrat">
          {BUSINESS_INFO.promotion.description}
        </p>
      </div>
    </div>
  );
};
