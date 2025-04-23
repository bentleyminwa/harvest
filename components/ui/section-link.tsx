import Link from "next/link";

type SectionLinkProps = {
  category: string;
  icon: React.ReactNode;
  to: string;
  target?: string;
};

export default function SectionLink({
  category,
  icon,
  to,
  target,
}: SectionLinkProps) {
  return (
    <Link
      href={to}
      target={target}
      className="border-b-2 pb-2 flex justify-between items-center text-white group hover:border-b-lime-400 transition duration-300 ease-in-out"
    >
      <h3 className="uppercase font-semibold group-hover:text-lime-400 transition duration-300 ease-in-out">
        {category}
      </h3>
      <span className="text-2xl group-hover:text-lime-400 transition duration-300 ease-in-out">
        {icon}
      </span>
    </Link>
  );
}
