"use client";
import React, { useContext } from "react";
import styles from "./Card.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  hoverable?: boolean;
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  subtitleSize?: number;
  subtitleWeight?: number | string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  elevated: styles.elevated || "",
  outlined: styles.outlined || "",
  filled: styles.filled || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  header,
  footer,
  variant = "default",
  size = "md",
  hoverable = false,
  className,
  customColor,
  customBorder,
  titleSize = 18,
  titleWeight = 600,
  subtitleSize = 14,
  subtitleWeight = 400,
  onClick,
  style,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const cardClass = [
    styles.card,
    variantStyles[variant],
    sizeStyles[size],
    hoverable ? styles.hoverable : "",
    onClick ? styles.clickable : "",
    className || "",
  ].filter(Boolean).join(" ");

  const cardStyle = {
    fontFamily: effectiveFontFamily,
    borderColor: customBorder || undefined,
    color: customColor || undefined,
    ...(style || {}),
  };

  return (
    <div className={cardClass} style={cardStyle} onClick={onClick}>
      {(title || subtitle || header) && (
        <div className={styles.header}>
          {header || (
            <>
              {title && (
                <h3
                  className={styles.title}
                  style={{
                    fontSize: titleSize,
                    fontWeight: titleWeight,
                    color: customColor,
                  }}
                >
                  {title}
                </h3>
              )}
              {subtitle && (
                <p
                  className={styles.subtitle}
                  style={{
                    fontSize: subtitleSize,
                    fontWeight: subtitleWeight,
                    color: customColor,
                  }}
                >
                  {subtitle}
                </p>
              )}
            </>
          )}
        </div>
      )}

      <div className={styles.content}>{children}</div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};
