import Header from "@/components/ui/header";

export default function AboutUsPage() {
  return (
    <section>
      <Header
        image={{
          src: "/images/ui/about-hero1.jpg",
          alt: "Farm",
        }}
        pageHeader="--- About Us"
        title="The Mission and Story Behind the Farm"
        className="h-[70vh]"
      />
    </section>
  );
}
