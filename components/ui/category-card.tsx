import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  label: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  path: string;
};

export default function CategoryCard({
  label,
  image,
  description,
  path,
}: CategoryCardProps) {
  return (
    <Link
      href={path}
      className="relative w-full h-[300px] group overflow-hidden"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 via-black/15 " />
      <div className="absolute left-10 bottom-5 text-zinc-100 w-1/2 space-y-5">
        <h2 className="text-3xl font-bold">{label}</h2>
        <p className="font-semibold">{description}</p>
      </div>
    </Link>
  );
}
