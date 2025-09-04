import React, { useContext } from "react";
import styles from "./Grid.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
  className?: string;
  customColor?: string;
  customBorder?: string;
}

const gapStyles: Record<string, string> = {
  sm: styles.gapSm || "",
  md: styles.gapMd || "",
  lg: styles.gapLg || "",
  xl: styles.gapXl || "",
};

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = "md",
  responsive = true,
  className,
  customColor,
  customBorder,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const gridClass = [
    styles.grid,
    gapStyles[gap],
    responsive ? styles.responsive : "",
    className || "",
  ].filter(Boolean).join(" ");

  const gridStyle = {
    fontFamily: effectiveFontFamily,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    color: customColor || undefined,
    borderColor: customBorder || undefined,
  };

  return (
    <div className={gridClass} style={gridStyle}>
      {children}
    </div>
  );
};
