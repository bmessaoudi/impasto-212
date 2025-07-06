import { Star } from "lucide-react";
import { QRCodeComponent } from "./QRCodeComponent";
import { RecensioniGoogle } from "@/types/menu";

interface ReviewCardProps {
  reviewData: RecensioniGoogle;
}

export const ReviewCard = ({ reviewData }: ReviewCardProps) => {
  return (
    <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold mb-4 text-center font-montserrat">
        {reviewData.name}
      </h2>
      <div className="text-center">
        <p className="text-blue-200 text-sm mb-4">{reviewData.ingredients}</p>
        <div className="flex flex-col items-center space-y-4">
          <QRCodeComponent url={reviewData.url} size={120} />
          <a
            href={reviewData.url}
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
  );
};
