"use client";
import React, { useContext } from "react";
import styles from "./Text.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export type TextVariant = "body" | "caption" | "small" | "large" | "lead";
export type TextAlign = "left" | "center" | "right" | "justify";
export type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";

export interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  align?: TextAlign;
  weight?: TextWeight;
  color?: string;
  size?: number;
  lineHeight?: number | string;
  className?: string;
  customColor?: string;
  as?: "p" | "span" | "div" | "strong" | "em";
  truncate?: boolean;
  italic?: boolean;
  underline?: boolean;
  style?: React.CSSProperties;
}

const variantStyles: Record<TextVariant, string> = {
  body: styles.body || "",
  caption: styles.caption || "",
  small: styles.small || "",
  large: styles.large || "",
  lead: styles.lead || "",
};

const alignStyles: Record<TextAlign, string> = {
  left: styles.left || "",
  center: styles.center || "",
  right: styles.right || "",
  justify: styles.justify || "",
};

const weightStyles: Record<TextWeight, string> = {
  light: styles.light || "",
  normal: styles.normal || "",
  medium: styles.medium || "",
  semibold: styles.semibold || "",
  bold: styles.bold || "",
};

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  align = "left",
  weight = "normal",
  color,
  size,
  lineHeight,
  className,
  customColor,
  as = "p",
  truncate = false,
  italic = false,
  underline = false,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const textClass = [
    styles.text,
    variantStyles[variant],
    alignStyles[align],
    weightStyles[weight],
    truncate ? styles.truncate : "",
    italic ? styles.italic : "",
    underline ? styles.underline : "",
    className || "",
  ].filter(Boolean).join(" ");

  const textStyle = {
    fontFamily: effectiveFontFamily,
    color: customColor || color || undefined,
    fontSize: size ? `${size}px` : undefined,
    lineHeight: lineHeight || undefined,
  };

  const Tag = as as keyof React.JSX.IntrinsicElements;

  return (
    <Tag className={textClass} style={textStyle}>
      {children}
    </Tag>
  );
};
