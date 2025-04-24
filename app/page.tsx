import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import CardList from "@/components/ui/card-list";
import CategoryList from "@/components/ui/category-list";
import Header from "@/components/ui/header";
import { aboutUsPath, ourFarmPath, productsPath } from "@/utils/paths";

export default function Homepage() {
  return (
    <>
      {/* Hero section */}
      <Header
        image={{ src: "/images/ui/hero.jpg", alt: "Three cows hero image" }}
        title="Only Organic and Free Range Products"
        description="HARVEST Farm is family-owned and operated, growing high quality hops, produce, and pasture-raised meats"
        className="h-screen"
      >
        <div className="flex gap-7">
          <PrimaryButton href={productsPath}>Products</PrimaryButton>
          <SecondaryButton href={ourFarmPath}>Our Farm</SecondaryButton>
        </div>
      </Header>
      {/* section A */}
      <section className="grid grid-cols-2 gap-10 w-3/4 mx-auto py-20">
        {/* card collection */}
        <CardList />
        {/* section content */}
        <div className="flex items-center">
          <div className="space-y-5">
            <h3 className="uppercase text-lg font-bold text-[#8da583]">
              --- Who We Are
            </h3>
            <h2 className="text-5xl font-bold">
              We Started as a Cow Farm in 1980
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              aspernatur, nemo in odio officia ab? Pariatur molestias sequi
              aspernatur magni illo dolorum labore quos nobis, officia,
              doloribus, nemo error! Quae, vel perspiciatis!
            </p>
            <PrimaryButton href={aboutUsPath}>About Us</PrimaryButton>
          </div>
        </div>
      </section>
      {/* section B */}
      <section>
        <CategoryList />
      </section>
    </>
  );
}
