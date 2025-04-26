"use client";

import { Button } from "./button";

export default function SubscribeEmailForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
      <label htmlFor="email" className="hidden">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="p-2 border rounded w-full"
      />
      <Button type="submit" className="w-full">
        Subsribe
      </Button>
    </form>
  );
}
