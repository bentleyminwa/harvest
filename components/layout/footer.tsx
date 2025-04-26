import { NAVLINKS, SOCIALS } from "@/lib/data";
import Link from "next/link";
import Logo from "../ui/logo";
import SubscribeEmailForm from "../ui/subscribe-email-form";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-5 text-zinc-100">
      <div className="grid grid-cols-3 gap-10 bg-[#566d4c] p-20 ">
        <div className="col-span-1 flex flex-col gap-5">
          <Logo className="text-3xl" />
          <p className="text-sm font-semibold text-zinc-200">
            HARVEST Farm is family-owned and operated, growing high quality
            hops, produce, and pasture-raised meats
          </p>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-5">
          <div>
            <h2 className="text-xl font-semibold">Navigation</h2>
            <ul className="flex flex-col gap-3 mt-6 text-sm text-zinc-200 font-semibold">
              {NAVLINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Our Socials</h2>
            <ul className="flex flex-col gap-3 mt-6 text-sm text-zinc-200 font-semibold">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <Link href={social.path}>{social.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <SubscribeEmailForm />
        </div>
      </div>
      <div className="px-20 py-3 bg-[#171e15] flex items-center justify-between">
        <div className="text-sm">&copy; All Rights Reserved {currentYear}</div>
        <Logo />
      </div>
    </footer>
  );
}
