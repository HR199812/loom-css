import tokens from "./tokens.json";

// Loom Design System: Core tokens and helpers
export { tokens };

// Example helper
export const getColor = (name: keyof typeof tokens.colors) =>
  tokens.colors[name];
