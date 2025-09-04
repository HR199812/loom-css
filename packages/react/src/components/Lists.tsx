import React, { useContext } from "react";
import styles from "./Lists.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export type ListType = "ul" | "ol";
export type ListStyle = "disc" | "circle" | "square" | "decimal" | "lower-alpha" | "upper-alpha" | "none";

export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  customColor?: string;
  size?: number;
  weight?: number | string;
}

export interface ListsProps {
  type?: ListType;
  style?: ListStyle;
  children: React.ReactNode;
  className?: string;
  spacing?: "tight" | "normal" | "loose";
  customColor?: string;
  size?: number;
  weight?: number | string;
}

const spacingStyles: Record<string, string> = {
  tight: styles.tight || "",
  normal: styles.normal || "",
  loose: styles.loose || "",
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  customColor,
  size,
  weight,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || 'var(--loom-font-family)';

  return (
    <li
      className={`${styles.listItem} ${className || ''}`}
      style={{
        fontFamily: effectiveFontFamily,
        color: customColor || undefined,
        fontSize: size ? `${size}px` : undefined,
        fontWeight: weight || undefined,
      }}
    >
      {children}
    </li>
  );
};

export const Lists: React.FC<ListsProps> = ({
  type = "ul",
  style,
  children,
  className,
  spacing = "normal",
  customColor,
  size,
  weight,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || 'var(--loom-font-family)';

  const listClass = [
    styles.list,
    spacingStyles[spacing],
    className || "",
  ].filter(Boolean).join(" ");

  const listStyle = {
    fontFamily: effectiveFontFamily,
    color: customColor || undefined,
    fontSize: size ? `${size}px` : undefined,
    fontWeight: weight || undefined,
    listStyleType: style || undefined,
  };

  const Tag = type as keyof JSX.IntrinsicElements;

  return (
    <Tag className={listClass} style={listStyle}>
      {children}
    </Tag>
  );
};
