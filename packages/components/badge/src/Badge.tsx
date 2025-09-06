"use client";
import React, { useContext } from "react";
import styles from "./Badge.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "pill" | "square";
  dot?: boolean;
  max?: number;
  showZero?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  primary: styles.primary || "",
  secondary: styles.secondary || "",
  success: styles.success || "",
  warning: styles.warning || "",
  danger: styles.danger || "",
  info: styles.info || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const shapeStyles: Record<string, string> = {
  rounded: styles.rounded || "",
  pill: styles.pill || "",
  square: styles.square || "",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  shape = "rounded",
  dot = false,
  max,
  showZero = false,
  className,
  style,
  onClick,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const badgeClass = [
    styles.badge,
    variantStyles[variant],
    sizeStyles[size],
    shapeStyles[shape],
    dot ? styles.dot : "",
    onClick ? styles.clickable : "",
    className || "",
  ].filter(Boolean).join(" ");

  const getDisplayValue = () => {
    if (dot) return null;
    
    const numValue = typeof children === "number" ? children : 0;
    
    if (max && numValue > max) {
      return `${max}+`;
    }
    
    if (numValue === 0 && !showZero) {
      return null;
    }
    
    return children;
  };

  const displayValue = getDisplayValue();

  if (dot) {
    return (
      <span
        className={badgeClass}
        style={{
          fontFamily: effectiveFontFamily,
          ...style,
        }}
        onClick={onClick}
      />
    );
  }

  if (!displayValue) {
    return null;
  }

  return (
    <span
      className={badgeClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
      onClick={onClick}
    >
      {displayValue}
    </span>
  );
};

