"use client";
import React, { useContext, useState } from "react";
import styles from "./Checkbox.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "warning" | "danger";
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
  primary: styles.primary || "",
  success: styles.success || "",
  warning: styles.warning || "",
  danger: styles.danger || "",
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked = false,
  disabled = false,
  indeterminate = false,
  label,
  description,
  size = "md",
  variant = "default",
  className,
  style,
  onChange,
  onFocus,
  onBlur,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const checkboxClass = [
    styles.checkbox,
    sizeStyles[size],
    variantStyles[variant],
    isChecked ? styles.checked : "",
    disabled ? styles.disabled : "",
    indeterminate ? styles.indeterminate : "",
    className || "",
  ].filter(Boolean).join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    const newChecked = e.target.checked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (!disabled) {
        const newChecked = !isChecked;
        if (!isControlled) {
          setInternalChecked(newChecked);
        }
        onChange?.(newChecked);
      }
    }
  };

  return (
    <div
      className={styles.checkboxContainer}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
    >
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          className={styles.checkboxInput}
          aria-describedby={description ? `${label}-description` : undefined}
        />
        <span className={checkboxClass}>
          {isChecked && !indeterminate && (
            <svg
              className={styles.checkmark}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5L6 12L2.5 8.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {indeterminate && (
            <svg
              className={styles.indeterminateMark}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
        {(label || description) && (
          <div className={styles.checkboxContent}>
            {label && (
              <span className={styles.checkboxLabelText}>{label}</span>
            )}
            {description && (
              <span
                id={`${label}-description`}
                className={styles.checkboxDescription}
              >
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    </div>
  );
};

