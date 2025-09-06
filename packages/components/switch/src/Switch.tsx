"use client";
import React, { useContext, useState } from "react";
import styles from "./Switch.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "error";
  label?: string;
  description?: string;
  required?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (checked: boolean) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  success: styles.success || "",
  warning: styles.warning || "",
  error: styles.error || "",
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  disabled = false,
  size = "md",
  variant = "default",
  label,
  description,
  required = false,
  className,
  style,
  onChange,
  onFocus,
  onBlur,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const [isFocused, setIsFocused] = useState(false);
  
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const switchClass = [
    styles.switch,
    sizeStyles[size],
    variantStyles[variant],
    isChecked ? styles.checked : "",
    disabled ? styles.disabled : "",
    isFocused ? styles.focused : "",
    className || "",
  ].filter(Boolean).join(" ");

  const handleChange = () => {
    if (disabled) return;
    
    const newChecked = !isChecked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleChange();
    }
  };

  return (
    <div
      className={styles.switchContainer}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
    >
      <div className={styles.switchWrapper}>
        <button
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-disabled={disabled}
          aria-required={required}
          aria-describedby={
            description ? `${label}-description` : undefined
          }
          className={switchClass}
          onClick={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        >
          <span className={styles.switchThumb} />
        </button>
        
        {(label || description) && (
          <div className={styles.switchContent}>
            {label && (
              <label className={styles.switchLabel}>
                {label}
                {required && <span className={styles.required}>*</span>}
              </label>
            )}
            {description && (
              <div id={`${label}-description`} className={styles.switchDescription}>
                {description}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};