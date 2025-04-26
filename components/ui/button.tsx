import clsx from "clsx";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    className?: string;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    disabled?: boolean;
  };

export default function Button({
  children,
  className,
  href,
  primary,
  outline,
  disabled,
  ...props
}: ButtonProps) {
  return href ? (
    <Link
      {...props}
      href={href}
      className={clsx(
        "border-2 p-4 rounded-tl-3xl rounded-br-3xl font-bold uppercase tracking-wider text-white",
        {
          "bg-orange-900 hover:bg-orange-950 border-orange-900 hover:border-orange-950 cursor-pointer":
            primary,
          "border-zinc-100 hover:bg-zinc-100 hover:text-lime-900 cursor-pointer":
            outline,
          "cursor-not-allowed opacity-50": disabled,
        },
        className
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      {...props}
      className={clsx(
        "border-2 p-4 rounded-tl-3xl rounded-br-3xl font-bold uppercase tracking-wider text-white",
        {
          "bg-orange-900 hover:bg-orange-950 border-orange-900 hover:border-orange-950 cursor-pointer":
            primary,
          "border-zinc-100 hover:bg-zinc-100 hover:text-lime-900 cursor-pointer":
            outline,
          "cursor-not-allowed opacity-50": disabled,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
