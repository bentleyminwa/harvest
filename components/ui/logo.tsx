import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/images/icons/LogoIcon.png"}
        alt=""
        width={30}
        height={30}
        priority
      />
      <h1 className={`font-bold uppercase ${className}`}>Harvest</h1>
    </div>
  );
}
