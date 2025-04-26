import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import CardList from "@/components/ui/card-list";
import CategoryList from "@/components/ui/category-list";
import ContactBanner from "@/components/ui/contact-banner";
import Header from "@/components/ui/header";
import Section from "@/components/ui/section";
import SectionContent from "@/components/ui/section-content";
import SectionImage from "@/components/ui/sectionImage";
import { productInfoCardData } from "@/lib/data";
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
          <Button primary href={productsPath}>
            Products
          </Button>
          <Button outline href={ourFarmPath}>
            Our Farm
          </Button>
        </div>
      </Header>

      <Section className="grid-cols-2 gap-10 w-3/4 mx-auto py-20">
        <CardList />
        <SectionContent
          sectionHeading="Who We Are"
          sectionTitle="We Started as a Cow Farm in 1980"
          sectionDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur, nemo in odio officia ab? Pariatur molestias sequi aspernatur magni illo dolorum labore quos nobis, officia, doloribus, nemo error! Quae, vel perspiciatis!"
          sectionButton={
            <Button primary href={aboutUsPath}>
              About Us
            </Button>
          }
        />
      </Section>

      <CategoryList />

      <Section className="grid-cols-2 gap-10 w-3/4 mx-auto py-20">
        <SectionContent
          sectionHeading="Story Behind the Farm"
          sectionTitle="Farming for Today and the Future"
          sectionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          sectionButton={
            <Button primary href={ourFarmPath}>
              Our Farm
            </Button>
          }
        />
        <SectionImage
          primaryImage={{ src: "/images/ui/cow.jpg", alt: "Cow" }}
          secondaryImage={{ src: "/images/ui/chicken1.jpg", alt: "Chicken" }}
          className="w-2/3"
        />
      </Section>

      <Section className="w-11/12 mx-auto grid-cols-2 gap-8 py-20">
        <SectionContent
          sectionHeading="What We Do"
          sectionTitle="Our produce is grown naturally, with sustainable, organic principles."
          sectionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          className="bg-lime-900 text-white p-24"
        />
        <SectionImage
          primaryImage={{ src: "/images/ui/harvest.jpg", alt: "Farm" }}
          className="w-full"
        />
      </Section>

      <Section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <SectionContent
            sectionHeading="What We Stand For"
            sectionTitle="What We Grow, Plus a Whole Lot More!"
          />
          <Button primary href={productsPath}>
            Products
          </Button>
        </div>
        <Section className="grid-cols-4 gap-8 pb-20">
          {productInfoCardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Section>
      </Section>

      <ContactBanner />
    </>
  );
}
