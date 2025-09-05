"use client";
import React, { useContext } from "react";
import styles from "./Separator.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "thick" | "dashed" | "dotted";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}

const orientationStyles: Record<string, string> = {
  horizontal: styles.horizontal || "",
  vertical: styles.vertical || "",
};

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  thick: styles.thick || "",
  dashed: styles.dashed || "",
  dotted: styles.dotted || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  variant = "default",
  size = "md",
  className,
  style,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const separatorClass = [
    styles.separator,
    orientationStyles[orientation],
    variantStyles[variant],
    sizeStyles[size],
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div
      className={separatorClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
      role="separator"
      aria-orientation={orientation}
    />
  );
};

