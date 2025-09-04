"use client";
import { Button, Input } from "@my-ds/react";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">My Design System</h1>
      <Button>Click Me</Button>
      <Input placeholder="Type here..." />
    </main>
  );
}
