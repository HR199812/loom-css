import React from "react";

type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="p-6 bg-neutral/5 rounded-lg shadow-sm">
    {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
    {children}
  </section>
);
