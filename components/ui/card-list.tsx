"use client";

import { aboutUsCardData } from "@/lib/data";
import * as React from "react";
import { Card, CardContent, CardIcon, CardTitle } from "./card";

export default function CardList() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {aboutUsCardData.map((card) => (
        <Card key={card.title}>
          <CardIcon className="self-end">{card.icon}</CardIcon>
          <CardTitle className="text-4xl">{card.title}</CardTitle>
          <CardContent>{card.description}</CardContent>
        </Card>
      ))}
    </div>
  );
}
