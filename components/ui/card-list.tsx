import { aboutUsCardData } from "@/lib/data";
import Card from "./card";

export default function CardList() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {aboutUsCardData.map((card) => (
        <Card
          key={card.title}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
