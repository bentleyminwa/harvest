import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Header from "@/components/ui/header";
import { ourFarmPath, productsPath } from "@/utils/paths";
import {
  LucideCarrot,
  LucideFlower2,
  LucideRabbit,
  LucideUsers,
} from "lucide-react";

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
      {/* section */}
      <section className="grid grid-cols-2 gap-4 w-3/4 mx-auto py-20">
        {/* card collection */}
        <div className="grid grid-cols-2 gap-4">
          <Card
            icon={<LucideCarrot />}
            stat="450+"
            description="Different fruits & vegetables  for every season"
          />
          <Card
            icon={<LucideRabbit />}
            stat="23+"
            description="Variations of animals that roam free on the farm"
          />
          <Card
            icon={<LucideFlower2 />}
            stat="10"
            description="Hectare of land where we grow our organic products on"
          />
          <Card
            icon={<LucideUsers />}
            stat="6000+"
            description="Customers that visit our farm and buy our products"
          />
        </div>
        {/* section content */}
        <div></div>
      </section>
    </>
  );
}
