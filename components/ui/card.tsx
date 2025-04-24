type CardProps = {
  icon: React.ReactNode;
  stat: string;
  description: string;
};

export default function Card({ icon, stat, description }: CardProps) {
  return (
    <div className="border-2 border-[#d6e0d2] w-fit rounded-tl-4xl rounded-br-4xl flex flex-col gap-4 pt-4 pr-4 pb-8 pl-8">
      <h3 className="p-5 w-fit self-end text-lime-800 bg-[#eaf0e8]">{icon}</h3>
      <h2 className="text-4xl font-bold">{stat}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}
