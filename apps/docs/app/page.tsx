"use client";
import { Button, Input, Alert, Calendar } from "@loom/react";
import { useState } from "react";

export default function LoomDocs() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", fontFamily: "var(--loom-font-family)" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1rem", color: "#1f2937" }}>
          Loom Design System
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#6b7280", marginBottom: "2rem" }}>
          A modern, open-source design system inspired by Tailwind CSS and shadcn/ui
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" style={{ padding: "0.75rem 1.5rem" }}>
            Get Started
          </Button>
          <Button variant="outline" style={{ padding: "0.75rem 1.5rem" }}>
            View on GitHub
          </Button>
        </div>
      </header>

      {/* Features */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem", color: "#1f2937" }}>
          Features
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div style={{ padding: "1.5rem", border: "2px solid #e5e7eb", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>🎨 Design Tokens</h3>
            <p style={{ color: "#6b7280" }}>Centralized color, spacing, and typography tokens for consistent design.</p>
          </div>
          <div style={{ padding: "1.5rem", border: "2px solid #e5e7eb", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>⚛️ React Components</h3>
            <p style={{ color: "#6b7280" }}>Accessible, customizable UI components built with TypeScript.</p>
          </div>
          <div style={{ padding: "1.5rem", border: "2px solid #e5e7eb", borderRadius: "12px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>🔧 TypeScript Support</h3>
            <p style={{ color: "#6b7280" }}>Fully typed for safety and autocompletion in your IDE.</p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem", color: "#1f2937" }}>
          Installation
        </h2>
        <div style={{ backgroundColor: "#f9fafb", padding: "1.5rem", borderRadius: "12px", border: "2px solid #e5e7eb" }}>
          <pre style={{ margin: 0, fontSize: "1rem", color: "#374151" }}>
            <code>npm install @loom/react @loom/core</code>
          </pre>
        </div>
      </section>

      {/* Components Demo */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "2rem", color: "#1f2937" }}>
          Components
        </h2>
        
        {/* Button Demo */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
            Button
          </h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
          <div style={{ backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "8px", fontSize: "0.875rem" }}>
            <pre style={{ margin: 0, color: "#374151" }}>
{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>`}
            </pre>
          </div>
        </div>

        {/* Input Demo */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
            Input
          </h3>
          <div style={{ marginBottom: "1rem" }}>
            <Input
              title="Email Address"
              placeholder="Enter your email"
              regex={/^[^@\s]+@[^@\s]+\.[^@\s]+$/}
              type="info"
              errorText="Please enter a valid email."
              width="300px"
              onChange={(val, isValid) => setEmail(val)}
            />
          </div>
          <div style={{ backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "8px", fontSize: "0.875rem" }}>
            <pre style={{ margin: 0, color: "#374151" }}>
{`<Input
  title="Email Address"
  placeholder="Enter your email"
  regex={/^[^@\s]+@[^@\s]+\\.[^@\s]+$/}
  type="info"
  errorText="Please enter a valid email."
  width="300px"
  onChange={(val, isValid) => console.log(val, isValid)}
/>`}
            </pre>
          </div>
        </div>

        {/* Alert Demo */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
            Alert
          </h3>
          <div style={{ marginBottom: "1rem" }}>
            {showAlert && (
              <Alert
                title="Welcome to Loom!"
                message="This is a demo of the Alert component with different types and features."
                type="success"
                closable
                onClose={() => setShowAlert(false)}
              />
            )}
            {!showAlert && (
              <Button variant="outline" onClick={() => setShowAlert(true)}>
                Show Alert
              </Button>
            )}
          </div>
          <div style={{ backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "8px", fontSize: "0.875rem" }}>
            <pre style={{ margin: 0, color: "#374151" }}>
{`<Alert
  title="Welcome to Loom!"
  message="This is a demo of the Alert component."
  type="success"
  closable
  onClose={() => console.log('Alert closed')}
/>`}
            </pre>
          </div>
        </div>

        {/* Calendar Demo */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#1f2937" }}>
            Calendar
          </h3>
          <div style={{ marginBottom: "1rem" }}>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              titleSize={20}
              titleWeight={700}
            />
          </div>
          <div style={{ backgroundColor: "#f9fafb", padding: "1rem", borderRadius: "8px", fontSize: "0.875rem" }}>
            <pre style={{ margin: 0, color: "#374151" }}>
{`<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
  titleSize={20}
  titleWeight={700}
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2rem 0", borderTop: "2px solid #e5e7eb", marginTop: "4rem" }}>
        <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
          Built with ❤️ by the Loom team
        </p>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://github.com/HR199812/loom-css" style={{ color: "#3b82f6", textDecoration: "none" }}>
            GitHub
          </a>
          <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
            Documentation
          </a>
          <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
            NPM
          </a>
        </div>
      </footer>
    </div>
  );
}
