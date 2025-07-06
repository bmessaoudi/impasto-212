import { BUSINESS_INFO } from "@/constants/business";

export const Footer = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-gray-600 font-montserrat text-sm">
        &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Tutti i diritti
        riservati.
      </p>
      <p className="text-gray-500 font-montserrat text-xs mt-2">
        Made with ❤️ by{" "}
        <a
          href={BUSINESS_INFO.developer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          {BUSINESS_INFO.developer.name}
        </a>
      </p>
    </div>
  );
};
