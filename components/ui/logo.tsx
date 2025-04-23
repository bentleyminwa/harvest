import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/images/icons/LogoIcon.png"}
        alt=""
        width={30}
        height={30}
        priority
      />
      <h1 className="text-xl font-bold uppercase">Harvest</h1>
    </div>
  );
}
