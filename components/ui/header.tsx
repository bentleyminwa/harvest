import Image from "next/image";

export type ImageProps = {
  src: string;
  alt: string;
};

type HeaderProps = {
  children?: React.ReactNode;
  image: ImageProps;
  title: string;
  pageHeader?: React.ReactNode;
  description?: string;
  className?: string;
};

export default function Header({
  image,
  title,
  pageHeader,
  description,
  children,
  className,
}: HeaderProps) {
  return (
    <header className={`relative w-full ${className}`}>
      {/* hero image */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover -z-10"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30 via-black/30 -z-10" />
      {/* content */}
      <div className="text-white w-3/4 mx-auto pt-52">
        <div className="w-2/3 space-y-7">
          <h2>{pageHeader}</h2>
          <h1 className="text-6xl font-bold">{title}</h1>
          <p className="w-2/3 font-semibold text-lg">{description}</p>
          <div>{children}</div>
        </div>
      </div>
    </header>
  );
}
