"use client";
import {
  Alert,
  Button,
  Calendar,
  Input,
  Title,
  Range,
  Lists,
  ListItem,
  Table
} from "@loom/react";

export default function Home() {
  return (
    <main className="p-10">
      <Title level="h1" align="center" color="#333">
        My Title
      </Title>

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

      <Table
        columns={[
          { key: "name", title: "Name", sortable: true },
          { key: "age", title: "Age", align: "center" },
        ]}
        data={[{ name: "John", age: 25 }]}
        striped
        hoverable
      />

      <Range
        title="Volume"
        description="Adjust the volume level"
        min={0}
        max={100}
        onChange={(val) => console.log(val)}
      />

      <Lists type="ul" style="disc" spacing="normal">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </Lists>
    </main>
  );
}
