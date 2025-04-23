import { NAVLINKS } from "@/lib/data";
import Link from "next/link";
import Logo from "../ui/logo";

export default function Navbar() {
  return (
    <nav className="fixed top-3 left-[50%] -translate-x-[50%] flex items-center justify-between p-4 w-3/4 z-20 bg-zinc-100 shadow-lg">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="flex items-center gap-5">
        <ul className="flex gap-5">
          {NAVLINKS.map(({ label, path }) => (
            <li
              key={label}
              className="font-semibold text-lime-700 hover:text-lime-500 uppercase text-sm"
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <Link href={"/contact"}>
          <button className="bg-orange-900 hover:bg-orange-950 p-4 rounded-tl-3xl rounded-br-3xl text-zinc-100 font-bold uppercase tracking-wider cursor-pointer">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}
