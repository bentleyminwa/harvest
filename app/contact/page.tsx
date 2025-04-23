import Header from "@/components/ui/header";
import SectionLink from "@/components/ui/section-link";
import SectionNav from "@/components/ui/section-nav";
import { LucideMail, LucideMapPin, LucidePhone } from "lucide-react";

export default function ContactPage() {
  return (
    <section>
      <Header
        image={{ src: "/images/ui/contact-hero.jpg", alt: "farm" }}
        pageHeader="--- Contact Us"
        title="How Can We Help You?"
        className="h-[70vh]"
      >
        <SectionNav>
          <SectionLink
            category="Harvest@Gmail.com"
            to="Harvest@Gmail.com"
            icon={<LucideMail />}
            target="_blank"
          />
          <SectionLink
            category="+254 743 053 331"
            to="Harvest@Gmail.com"
            icon={<LucidePhone />}
            target="_blank"
          />
          <SectionLink
            category="Nairobi, Kenya"
            to="Harvest@Gmail.com"
            icon={<LucideMapPin />}
            target="_blank"
          />
        </SectionNav>
      </Header>
    </section>
  );
}
