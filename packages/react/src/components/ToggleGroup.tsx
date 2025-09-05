"use client";
import React, { useContext, useState } from "react";
import styles from "./ToggleGroup.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface ToggleItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface ToggleGroupProps {
  items: ToggleItem[];
  value?: string[];
  defaultValue?: string[];
  type?: "single" | "multiple";
  variant?: "default" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: string[]) => void;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  outlined: styles.outlined || "",
  filled: styles.filled || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const orientationStyles: Record<string, string> = {
  horizontal: styles.horizontal || "",
  vertical: styles.vertical || "",
};

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  items,
  value,
  defaultValue = [],
  type = "multiple",
  variant = "default",
  size = "md",
  orientation = "horizontal",
  disabled = false,
  className,
  style,
  onChange,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const toggleGroupClass = [
    styles.toggleGroup,
    variantStyles[variant],
    sizeStyles[size],
    orientationStyles[orientation],
    disabled ? styles.disabled : "",
    className || "",
  ].filter(Boolean).join(" ");

  const handleToggle = (itemValue: string) => {
    if (disabled) return;

    let newValue: string[];
    
    if (type === "single") {
      newValue = currentValue.includes(itemValue) ? [] : [itemValue];
    } else {
      if (currentValue.includes(itemValue)) {
        newValue = currentValue.filter(v => v !== itemValue);
      } else {
        newValue = [...currentValue, itemValue];
      }
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue);
  };

  return (
    <div
      className={toggleGroupClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
      role="group"
      aria-label="Toggle group"
    >
      {items.map((item) => {
        const isSelected = currentValue.includes(item.value);
        const isDisabled = disabled || item.disabled;
        
        return (
          <button
            key={item.value}
            type="button"
            className={`${styles.toggleItem} ${
              isSelected ? styles.selected : ""
            } ${isDisabled ? styles.itemDisabled : ""}`}
            onClick={() => handleToggle(item.value)}
            disabled={isDisabled}
            aria-pressed={isSelected}
            aria-label={item.label}
          >
            {item.icon && <span className={styles.toggleIcon}>{item.icon}</span>}
            <span className={styles.toggleLabel}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

