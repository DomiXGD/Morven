import Image from "next/image";
import logoImg from "@/public/logo.png";

type LogoMarkProps = {
  alt: string;
  className: string;
};

export function LogoMark({ alt, className }: LogoMarkProps) {
  return (
    <Image
      alt={alt}
      className={className}
      src={logoImg}
      priority
    />
  );
}
