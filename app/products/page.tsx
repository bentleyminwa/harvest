import Header from "@/components/ui/header";
import SectionLink from "@/components/ui/section-link";
import SectionNav from "@/components/ui/section-nav";
import { LucideCherry, LucideSalad, LucideShoppingBasket } from "lucide-react";

export default function ProductsPage() {
  return (
    <section>
      <Header
        image={{
          src: "/images/ui/products-hero.jpg",
          alt: "Products",
        }}
        pageHeader="--- Products"
        title="High Quality Products Locally Grown"
        className="h-[70vh]"
      >
        <SectionNav>
          <SectionLink category="Fruits" icon={<LucideCherry />} to="#fruits" />
          <SectionLink
            category="Vegetables"
            icon={<LucideSalad />}
            to="#vegetables"
          />
          <SectionLink
            category="Gathering"
            icon={<LucideShoppingBasket />}
            to="#gathering"
          />
        </SectionNav>
      </Header>
    </section>
  );
}
