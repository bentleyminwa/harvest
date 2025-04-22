import Link from "next/link";

const navlinks = [
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Our Farm",
    path: "/our-farm",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav>
      <Link href={"/"}>Harvest</Link>
      <ul>
        {navlinks.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
