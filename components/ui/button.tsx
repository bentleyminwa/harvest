import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

const buttonVariants = cva(
  "border-2 rounded-tl-3xl rounded-br-3xl font-bold uppercase tracking-wider text-white w-fit",
  {
    variants: {
      variant: {
        default:
          "bg-orange-900 hover:bg-orange-950 border-orange-900 hover:border-orange-950 cursor-pointer",
        secondary:
          "border-zinc-100 hover:bg-zinc-100 hover:text-lime-900 cursor-pointer",
        disabled: "cursor-not-allowed opacity-50",
      },
      size: {
        default: "p-4",
        sm: "p-2",
        md: "p-3",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
