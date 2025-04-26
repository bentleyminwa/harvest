"use client";

import type { CardData } from "@/utils/types";
import * as React from "react";
import { Card, CardContent, CardIcon, CardTitle } from "./card";

type CardListProps = {
  cardData: CardData;
  className?: string;
};

export default function CardList({
  cardData,
  className,
  ...props
}: CardListProps) {
  return (
    <div className={className} {...props}>
      {cardData.map((card) => (
        <Card key={card.title} className="flex-col gap-4 p-8">
          <CardIcon className="self-end">{card.icon}</CardIcon>
          <CardTitle className="text-2xl">{card.title}</CardTitle>
          <CardContent>{card.description}</CardContent>
        </Card>
      ))}
    </div>
  );
}
