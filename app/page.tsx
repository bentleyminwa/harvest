import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { ourFarmPath, productsPath } from "@/utils/paths";

export default function Homepage() {
  return (
    <section className="">
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
    </section>
  );
}
