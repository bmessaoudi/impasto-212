import { Phone, MapPin, Clock, Instagram, Star } from "lucide-react";
import { Logo } from "./Logo";
import { HalalBadge } from "./HalalBadge";
import { BUSINESS_INFO } from "@/constants/business";

export const Header = () => {
  return (
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
            <p className="text-red-200 text-sm">
              {BUSINESS_INFO.address.street}
            </p>
            <p className="text-red-200 text-sm">
              {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.zipCode}
            </p>
            <a
              href={BUSINESS_INFO.address.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-200 hover:text-white underline text-sm mt-1 inline-block"
            >
              Visualizza su Maps
            </a>
            <div className="mt-2">
              <a
                href={BUSINESS_INFO.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-semibold text-white text-sm"
              >
                <Instagram className="w-4 h-4 mr-2" />
                {BUSINESS_INFO.contact.instagram.handle}
              </a>
            </div>
            <div className="mt-2">
              <a
                href={BUSINESS_INFO.contact.googleReviews}
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
              <Logo className="w-14 h-14 mr-4" logoType="bianco" />
              <div className="flex items-center">
                <h1 className="text-3xl font-bold font-montserrat mr-3">
                  {BUSINESS_INFO.name.split(" ").map((word, index) => (
                    <span key={index}>
                      {word}
                      {index === 1 && <br />}
                      {index !== 1 &&
                        index < BUSINESS_INFO.name.split(" ").length - 1 &&
                        " "}
                    </span>
                  ))}
                </h1>
                <HalalBadge size="lg" />
              </div>
            </div>
            <p className="text-lg opacity-90 font-montserrat">
              {BUSINESS_INFO.description}
            </p>
          </div>

          {/* Right - Contact Info */}
          <div className="text-right">
            <div className="flex items-center justify-end mb-2">
              <Phone className="w-5 h-5 mr-2 text-red-200" />
              <span className="font-semibold font-montserrat">Contatti</span>
            </div>
            <p className="text-red-200 text-sm mb-3">
              Tel: {BUSINESS_INFO.contact.phone}
            </p>
            <div className="flex items-center justify-end mb-1">
              <Clock className="w-4 h-4 mr-2 text-red-200" />
              <span className="font-semibold font-montserrat">Orari:</span>
            </div>
            <div className="text-red-200 text-sm space-y-1">
              <p>Lun, Mer-Ven: {BUSINESS_INFO.hours.monday}</p>
              <p>Sab-Dom: {BUSINESS_INFO.hours.saturday}</p>
              <p className="font-semibold">
                Martedì: {BUSINESS_INFO.hours.tuesday}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center mb-3">
              <Logo className="w-12 h-12 mr-3" logoType="bianco" />
              <div className="flex items-center">
                <h1 className="text-2xl md:text-3xl font-bold font-montserrat mr-3">
                  {BUSINESS_INFO.name.split(" ").map((word, index) => (
                    <span key={index}>
                      {word}
                      {index === 1 && <br />}
                      {index !== 1 &&
                        index < BUSINESS_INFO.name.split(" ").length - 1 &&
                        " "}
                    </span>
                  ))}
                </h1>
                <HalalBadge size="md" />
              </div>
            </div>
            <p className="text-base md:text-lg opacity-90 font-montserrat">
              {BUSINESS_INFO.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            {/* Address Info */}
            <div>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-4 h-4 mr-2 text-red-200" />
                <span className="font-semibold font-montserrat">Indirizzo</span>
              </div>
              <p className="text-red-200 text-sm">
                {BUSINESS_INFO.address.street}
              </p>
              <p className="text-red-200 text-sm">
                {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.zipCode}
              </p>
              <a
                href={BUSINESS_INFO.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-200 hover:text-white underline text-sm mt-1 inline-block"
              >
                Visualizza su Maps
              </a>
              <div className="mt-2">
                <a
                  href={BUSINESS_INFO.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white text-sm font-semibold"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  {BUSINESS_INFO.contact.instagram.handle}
                </a>
              </div>
              <div className="mt-2">
                <a
                  href={BUSINESS_INFO.contact.googleReviews}
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
                <span className="font-semibold font-montserrat">Contatti</span>
              </div>
              <p className="text-red-200 text-sm mb-3">
                Tel: {BUSINESS_INFO.contact.phone}
              </p>
              <div className="flex items-center justify-center mb-1">
                <Clock className="w-4 h-4 mr-2 text-red-200" />
                <span className="font-semibold font-montserrat">Orari:</span>
              </div>
              <div className="text-red-200 text-sm space-y-1">
                <p>Lun, Mer-Ven: {BUSINESS_INFO.hours.monday}</p>
                <p>Sab-Dom: {BUSINESS_INFO.hours.saturday}</p>
                <p className="font-semibold">
                  Martedì: {BUSINESS_INFO.hours.tuesday}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
