import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import CardList from "@/components/ui/card-list";
import CategoryList from "@/components/ui/category-list";
import Header from "@/components/ui/header";
import Section from "@/components/ui/section";
import SectionContent from "@/components/ui/section-content";
import SectionImage from "@/components/ui/sectionImage";
import { aboutUsPath, ourFarmPath, productsPath } from "@/utils/paths";

export default function Homepage() {
  return (
    <>
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

      <Section>
        <CardList />
        <SectionContent
          sectionHeading="Who We Are"
          sectionTitle="We Started as a Cow Farm in 1980"
          sectionDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur, nemo in odio officia ab? Pariatur molestias sequi aspernatur magni illo dolorum labore quos nobis, officia, doloribus, nemo error! Quae, vel perspiciatis!"
          sectionButton={
            <PrimaryButton href={aboutUsPath}>About Us</PrimaryButton>
          }
        />
      </Section>

      <CategoryList />

      <Section>
        <SectionContent
          sectionHeading="Story Behind the Farm"
          sectionTitle="Farming for Today and the Future"
          sectionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          sectionButton={
            <PrimaryButton href={ourFarmPath}>Our Farm</PrimaryButton>
          }
        />
        <SectionImage
          primaryImage={{ src: "/images/ui/cow.jpg", alt: "Cow" }}
          secondaryImage={{ src: "/images/ui/chicken1.jpg", alt: "Chicken" }}
          className="w-2/3"
        />
      </Section>
    </>
  );
}
