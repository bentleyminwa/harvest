import { cardData } from "@/lib/data";
import Card from "./card";

export default function CardList() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {cardData.map((card) => (
        <Card
          key={card.stat}
          icon={card.icon}
          stat={card.stat}
          description={card.description}
        />
      ))}
    </div>
  );
}
