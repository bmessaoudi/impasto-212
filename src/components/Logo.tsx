import Image from "next/image";

interface LogoProps {
  className?: string;
  logoType?: "bianco" | "nero";
}

export const Logo = ({ className, logoType = "bianco" }: LogoProps) => {
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
