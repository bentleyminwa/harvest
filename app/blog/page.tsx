import Header from "@/components/ui/header";

export default function BlogPage() {
  return (
    <section>
      <Header
        image={{
          src: "/images/ui/blog-hero.jpg",
          alt: "Blog",
        }}
        pageHeader="--- News Updates"
        title="Blog Posts and Articles"
        className="h-[50vh]"
      />
    </section>
  );
}
