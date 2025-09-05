"use client";
import React, { useContext, useState } from "react";
import styles from "./TextArea.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface TextAreaProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  title?: string;
  description?: string;
  errorText?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  maxLength?: number;
  minLength?: number;
  variant?: "default" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  resize?: "none" | "both" | "horizontal" | "vertical";
  autoResize?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
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

const resizeStyles: Record<string, string> = {
  none: styles.resizeNone || "",
  both: styles.resizeBoth || "",
  horizontal: styles.resizeHorizontal || "",
  vertical: styles.resizeVertical || "",
};

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  defaultValue = "",
  placeholder,
  title,
  description,
  errorText,
  disabled = false,
  readOnly = false,
  required = false,
  rows = 4,
  cols,
  maxLength,
  minLength,
  variant = "default",
  size = "md",
  resize = "vertical",
  autoResize = false,
  className,
  style,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);
  
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasError = showError && errorText;

  const textAreaClass = [
    styles.textArea,
    variantStyles[variant],
    sizeStyles[size],
    resizeStyles[resize],
    hasError ? styles.error : "",
    disabled ? styles.disabled : "",
    readOnly ? styles.readOnly : "",
    isFocused ? styles.focused : "",
    className || "",
  ].filter(Boolean).join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue);
    
    if (autoResize) {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + "px";
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    setShowError(true);
    onBlur?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    onKeyDown?.(e);
  };

  return (
    <div
      className={styles.textAreaContainer}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
    >
      {title && (
        <label className={styles.textAreaLabel}>
          {title}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      
      <textarea
        value={currentValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        minLength={minLength}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={textAreaClass}
        aria-describedby={
          description ? `${title}-description` : 
          hasError ? `${title}-error` : undefined
        }
        aria-invalid={hasError}
      />
      
      {description && !hasError && (
        <div id={`${title}-description`} className={styles.textAreaDescription}>
          {description}
        </div>
      )}
      
      {hasError && (
        <div id={`${title}-error`} className={styles.textAreaError}>
          {errorText}
        </div>
      )}
      
      {maxLength && (
        <div className={styles.characterCount}>
          {currentValue.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

