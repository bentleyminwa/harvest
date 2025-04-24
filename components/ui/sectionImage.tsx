import Image from "next/image";
import { ImageProps } from "./header";

type SectionImageProps = {
  primaryImage: ImageProps;
  secondaryImage?: ImageProps;
  className?: string;
};

export default function SectionImage({
  primaryImage,
  secondaryImage,
  className,
}: SectionImageProps) {
  return (
    <div className={`relative h-full ${className}`}>
      <Image
        src={primaryImage.src}
        alt={primaryImage.alt}
        fill
        priority
        className="object-cover"
      />
      {secondaryImage && (
        <Image
          src={secondaryImage.src}
          alt={secondaryImage.alt}
          width={200}
          height={200}
          className="object-cover z-10 absolute -right-30 -bottom-15 rounded-tl-3xl rounded-br-3xl shadow-lg"
        />
      )}
    </div>
  );
}
