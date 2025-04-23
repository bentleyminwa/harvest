import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export default function Button({
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  return (
    <Link href={href || "#"}>
      <button
        {...props}
        className={`border-2 p-4 rounded-tl-3xl rounded-br-3xl font-bold uppercase tracking-wider cursor-pointer text-zinc-100 ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}

export function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className="bg-orange-900 hover:bg-orange-950 border-orange-900 hover:border-orange-950"
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className="border-zinc-100 hover:bg-zinc-100 hover:text-lime-900"
    >
      {children}
    </Button>
  );
}
