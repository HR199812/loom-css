"use client";
import React, { useContext } from "react";
import styles from "./Title.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TitleAlign = "left" | "center" | "right";

export interface TitleProps {
  level?: TitleLevel;
  children: React.ReactNode;
  align?: TitleAlign;
  color?: string;
  weight?: number | string;
  size?: number;
  margin?: string;
  customColor?: string;
  className?: string;
}

const levelStyles: Record<TitleLevel, string> = {
  h1: styles.h1 || "",
  h2: styles.h2 || "",
  h3: styles.h3 || "",
  h4: styles.h4 || "",
  h5: styles.h5 || "",
  h6: styles.h6 || "",
};

const alignStyles: Record<TitleAlign, string> = {
  left: styles.left || "",
  center: styles.center || "",
  right: styles.right || "",
};

export const Title: React.FC<TitleProps> = ({
  level = "h1",
  children,
  align = "left",
  color,
  weight,
  size,
  margin,
  customColor,
  className,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || 'var(--loom-font-family)';

  const titleClass = [
    styles.title,
    levelStyles[level],
    alignStyles[align],
    className || "",
  ].filter(Boolean).join(" ");

  const titleStyle = {
    fontFamily: effectiveFontFamily,
    color: customColor || color || undefined,
    fontWeight: weight || undefined,
    fontSize: size ? `${size}px` : undefined,
    margin: margin || undefined,
  };

  const Tag = level as keyof JSX.IntrinsicElements;

  return (
    <Tag className={titleClass} style={titleStyle}>
      {children}
    </Tag>
  );
};
