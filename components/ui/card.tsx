// type CardProps = {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// };

// export default function Card({ icon, title, description }: CardProps) {
//   return (
//     <div className="border-2 border-[#d6e0d2] w-fit rounded-tl-4xl rounded-br-4xl flex flex-col gap-4 pt-4 pr-4 pb-8 pl-8">
//       <h3 className="p-5 w-fit self-end text-lime-800 bg-[#eaf0e8]">{icon}</h3>
//       <h2 className="text-4xl font-bold max-w-1/2">{title}</h2>
//       <p className="text-lg">{description}</p>
//     </div>
//   );
// }

import clsx from "clsx";
import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      "border-2 border-[#d6e0d2] w-fit rounded-tl-4xl rounded-br-4xl flex flex-col gap-4 p-8",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("p-5 w-fit text-lime-800 bg-[#eaf0e8]", className)}
    {...props}
  />
));
CardIcon.displayName = "CardIcon";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("font-bold", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardContent, CardIcon, CardTitle };
