import { NAVLINKS } from "@/lib/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-3 left-[50%] -translate-x-[50%] flex items-center justify-between p-4 border w-3/4">
      <Link href={"/"}>Harvest</Link>
      <ul className="flex gap-4">
        {NAVLINKS.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
