import Header from "@/components/ui/header";

export default function OurFarmPage() {
  return (
    <section>
      <Header
        image={{
          src: "/images/ui/farm-hero.jpg",
          alt: "Farm",
        }}
        pageHeader="--- Our Farm"
        title="Discover the Farm and our Product Range"
        className="h-[70vh]"
      />
    </section>
  );
}
