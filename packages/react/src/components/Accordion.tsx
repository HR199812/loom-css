"use client";
import React, { useState, useContext } from "react";
import styles from "./Accordion.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  variant?: "default" | "bordered" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  onToggle?: (itemId: string, isOpen: boolean) => void;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  bordered: styles.bordered || "",
  filled: styles.filled || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenItems = [],
  variant = "default",
  size = "md",
  className,
  customColor,
  customBorder,
  titleSize = 16,
  titleWeight = 600,
  onToggle,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const toggleItem = (itemId: string) => {
    const isOpen = openItems.includes(itemId);
    let newOpenItems: string[];

    if (allowMultiple) {
      newOpenItems = isOpen
        ? openItems.filter((id) => id !== itemId)
        : [...openItems, itemId];
    } else {
      newOpenItems = isOpen ? [] : [itemId];
    }

    setOpenItems(newOpenItems);
    onToggle?.(itemId, !isOpen);
  };

  const accordionClass = [
    styles.accordion,
    variantStyles[variant],
    sizeStyles[size],
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div className={accordionClass} style={{ fontFamily: effectiveFontFamily }}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        const isDisabled = item.disabled;

        return (
          <div
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.open : ""} ${
              isDisabled ? styles.disabled : ""
            }`}
            style={{ borderColor: customBorder }}
          >
            <button
              className={styles.header}
              onClick={() => !isDisabled && toggleItem(item.id)}
              disabled={isDisabled}
              style={{ color: customColor }}
            >
              <span
                className={styles.title}
                style={{
                  fontSize: titleSize,
                  fontWeight: titleWeight,
                }}
              >
                {item.title}
              </span>
              <span
                className={`${styles.icon} ${isOpen ? styles.open : ""}`}
                style={{ color: customColor }}
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <div className={styles.content}>
                <div className={styles.contentInner}>{item.content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
