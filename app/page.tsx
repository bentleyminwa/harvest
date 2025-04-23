import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { ourFarmPath, productsPath } from "@/utils/paths";
import Image from "next/image";

export default function Homepage() {
  return (
    <section className="">
      <header className="relative w-full h-screen">
        {/* hero image */}
        <Image
          src={"/images/ui/hero.jpg"}
          alt="hero"
          fill
          priority
          className="object-cover -z-10"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30 via-black/30 -z-10"></div>
        {/* content */}
        <div className="text-white w-3/4 mx-auto pt-52">
          <div className="w-2/3 space-y-7">
            <h1 className="text-6xl font-bold">
              Only organic and free range products
            </h1>
            <p className="w-2/3 font-semibold text-lg">
              HARVEST Farm is family-owned and operated, growing high quality
              hops, produce, and pasture-raised meats
            </p>
            <div className="flex gap-10 items-center">
              <PrimaryButton href={productsPath}>Products</PrimaryButton>
              <SecondaryButton href={ourFarmPath}>Our Farm</SecondaryButton>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
