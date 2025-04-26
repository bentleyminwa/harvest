import { NAVLINKS, SOCIALS } from "@/lib/data";
import Link from "next/link";
import Logo from "../ui/logo";
import SubscribeEmailForm from "../ui/subscribe-email-form";

export default function Footer() {
  return (
    <footer className="w-full mt-5 bg-[#566d4c] p-20 grid grid-cols-4 gap-10">
      <div>
        <Logo />
        <p>
          HARVEST Farm is family-owned and operated, growing high quality hops,
          produce, and pasture-raised meats
        </p>
      </div>

      <div>
        <h2>Navigation</h2>
        <ul>
          {NAVLINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Our Socials</h2>
        <ul>
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <Link href={social.path}>{social.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SubscribeEmailForm />
      </div>
    </footer>
  );
}
