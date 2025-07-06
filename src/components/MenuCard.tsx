import { MenuItem } from "@/types/menu";
import { HalalBadge } from "./HalalBadge";

interface MenuCardProps {
  title: string;
  items: MenuItem[];
  titleColor: string;
  backgroundColor?: string;
  textColor?: string;
}

export const MenuCard = ({
  title,
  items,
  titleColor,
  backgroundColor = "bg-white",
  textColor = "text-gray-800",
}: MenuCardProps) => {
  return (
    <div
      className={`${backgroundColor} rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow`}
    >
      <h2
        className={`text-2xl font-bold mb-4 ${titleColor} text-center font-montserrat`}
      >
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, itemIndex) => (
          <div key={itemIndex} className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center">
                <h3
                  className={`font-semibold ${textColor} text-sm md:text-base font-montserrat mr-2`}
                >
                  {item.name}
                </h3>
                {item.hasHalal && <HalalBadge size="sm" />}
              </div>
              {item.ingredients && (
                <p
                  className={`${
                    textColor === "text-gray-800"
                      ? "text-gray-600"
                      : "text-red-200"
                  } text-xs md:text-sm mt-1`}
                >
                  {item.ingredients}
                </p>
              )}
            </div>
            <div className="text-right ml-4">
              <span
                className={`font-bold ${
                  textColor === "text-gray-800"
                    ? "text-green-600"
                    : "text-yellow-300"
                } font-montserrat`}
              >
                {item.price < 0 ? "-" : ""}€ {Math.abs(item.price).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
