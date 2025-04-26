"use client";

import Button from "./button";

export default function SubscribeEmailForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email" className="hidden">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="p-2 border rounded"
      />
      <Button primary type="submit" onClick={() => alert("Subscribed!")}>
        Subsribe
      </Button>
    </form>
  );
}
