import Image from "next/image";

type LogoMarkProps = {
  alt: string;
  className: string;
};

export function LogoMark({ alt, className }: LogoMarkProps) {
  return (
    <Image
      alt={alt}
      className={className}
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFuzomhhPrQ-Fnt20BnRCym9jjpWZCiAi4Cl4fYdaleZGnTyXtxm0e11cjP8JylzV2lTOJVVkHQRJjjvRteMFdyUSwDESevOlMDz8Ups0QM2fHRDIlnLswMHR4ktwwbKBeV-djtC7mVUXsDs-JNwtPebCC8leGc9b13xuooPMBm-H7OsPLYw9C24kSGEf8ccGx6odk5HKFThzvXMX9IWoZpZUimekhtcgM8VSd3KEm2FT4vbEJG41g9aYGvOO9jf-nS12ELBgefSQ"
      width={320}
      height={160}
      priority
    />
  );
}
