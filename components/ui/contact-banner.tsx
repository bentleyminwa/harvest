import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import Section from "./section";

export default function ContactBanner() {
  return (
    <Section className="relative w-11/12 h-[450px] mx-auto mt-20 pt-20 flex justify-center items-center">
      <Image
        src="/images/ui/farm.jpg"
        alt="Farm"
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30 via-black/30 -z-10" />
      <div className="w-2/3 mx-auto text-zinc-100 flex flex-col gap-7 items-center justify-center text-center">
        <h2 className="text-5xl font-bold">
          Visit Our Farm and Exlpore all kinds of Vegetables & Fruits
        </h2>
        <p className="w-1/2 font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          eaque quo tenetur.
        </p>
        <Button asChild>
          <Link href={"/contact"}>Contact Us</Link>
        </Button>
      </div>
    </Section>
  );
}
