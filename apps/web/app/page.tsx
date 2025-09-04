"use client";
import { Alert, Button, Calendar, Input } from "@loom/react";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">My Design System</h1>
      <Button>Click Me</Button>
      <Input
        title="Email"
        width={"60%"}
        placeholder="Enter your email"
        regex={/^[^@\s]+@[^@\s]+\.[^@\s]+$/}
        type="info"
        errorText="Please enter a valid email."
        onChange={(val, isValid) => console.log(val, isValid)}
      />

      <Alert
        title="Success!"
        message="Your changes have been saved successfully."
        type="success"
        closable
        onClose={() => console.log("Alert closed")}
      />

      <Calendar
        selectedDate={new Date()}
        onDateSelect={(date) => console.log("Selected:", date)}
        titleSize={20}
        titleWeight={700}
      />
    </main>
  );
}
