import Image from "next/image";

interface HalalBadgeProps {
  size?: "xs" | "sm" | "md" | "lg";
}

export const HalalBadge = ({ size = "sm" }: HalalBadgeProps) => {
  const sizeClasses = {
    xs: "w-5 h-5",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <Image
      src="/halal-logo.svg"
      alt="Halal"
      width={24}
      height={24}
      className={`${sizeClasses[size]} inline-block`}
    />
  );
};
