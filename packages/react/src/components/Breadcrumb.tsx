"use client";
import React, { useContext } from "react";
import styles from "./Breadcrumb.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  variant?: "default" | "minimal" | "outlined";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  onItemClick?: (item: BreadcrumbItem, index: number) => void;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  minimal: styles.minimal || "",
  outlined: styles.outlined || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  variant = "default",
  size = "md",
  className,
  style,
  onItemClick,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const breadcrumbClass = [
    styles.breadcrumb,
    variantStyles[variant],
    sizeStyles[size],
    className || "",
  ].filter(Boolean).join(" ");

  const handleItemClick = (item: BreadcrumbItem, index: number) => {
    if (item.disabled) return;
    onItemClick?.(item, index);
  };

  return (
    <nav
      className={breadcrumbClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
      aria-label="Breadcrumb"
    >
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {index > 0 && (
              <span className={styles.separator} aria-hidden="true">
                {separator}
              </span>
            )}
            {item.href && !item.disabled ? (
              <a
                href={item.href}
                className={styles.breadcrumbLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item, index);
                }}
              >
                {item.icon && <span className={styles.breadcrumbIcon}>{item.icon}</span>}
                <span className={styles.breadcrumbLabel}>{item.label}</span>
              </a>
            ) : (
              <span
                className={`${styles.breadcrumbText} ${item.disabled ? styles.disabled : ""} ${
                  index === items.length - 1 ? styles.current : ""
                }`}
                onClick={() => handleItemClick(item, index)}
              >
                {item.icon && <span className={styles.breadcrumbIcon}>{item.icon}</span>}
                <span className={styles.breadcrumbLabel}>{item.label}</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

