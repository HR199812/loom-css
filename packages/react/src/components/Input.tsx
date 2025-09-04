import React, { useState, useEffect, useContext, createContext } from "react";
import styles from "./Input.module.css";

export type InputType = "info" | "success" | "warning" | "danger";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  title?: string;
  placeholder?: string;
  regex?: RegExp;
  type?: InputType;
  errorText?: string;
  customColor?: string;
  customBorder?: string;
  width?: string | number;
  titleSize?: number;
  titleWeight?: number | string;
  errorSize?: number;
  errorWeight?: number | string;
  onChange?: (value: string, isValid: boolean) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onSelect?: React.SelectHTMLAttributes<HTMLInputElement>["onSelect"];
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const typeStyles: Record<InputType, string> = {
  info: styles.info || "",
  success: styles.success || "",
  warning: styles.warning || "",
  danger: styles.danger || "",
};

export const Input: React.FC<InputProps> = ({
  title,
  placeholder,
  regex,
  type = "info",
  errorText,
  customColor,
  customBorder,
  width,
  titleSize = 16,
  titleWeight = 500,
  errorSize = 16,
  errorWeight = 400,
  onChange,
  onClick,
  onSelect,
  onFocus,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const { fontFamily } = useLoomConfig();

  // Validate on blur only
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (regex && value) {
      setShowError(true);
      setError(regex.test(value) ? "" : errorText || "Invalid input");
    } else {
      setShowError(false);
      setError("");
    }
    onFocus?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    setShowError(false);
    let valid = true;
    if (regex) {
      valid = regex.test(val);
    }
    onChange?.(val, valid);
  };

  // Only show red border if error and value are non-empty and showError is true
  const borderClass = error && value && showError
    ? styles.danger
    : customBorder
    ? customBorder
    : typeStyles[type] || typeStyles.info;
  const colorClass = customColor ? customColor : "";
  const inputStyle = {
    width: typeof width === "number" ? `${width}px` : width || "100%",
    minWidth: "30%",
    minHeight: "32px",
    fontSize: "16px",
    fontFamily: fontFamily || undefined,
  };

  const effectiveFontFamily = fontFamily || 'var(--loom-font-family)';

  return (
    <div className={styles.wrapper}>
      {title && (
        <label
          className={styles.title}
          style={{ fontSize: titleSize, fontWeight: titleWeight, fontFamily: effectiveFontFamily }}
        >
          {title}
        </label>
      )}
      <input
        className={`${styles.input} ${borderClass} ${colorClass}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onClick={onClick}
        onSelect={onSelect}
        onFocus={onFocus}
        onBlur={handleBlur}
        style={{ ...inputStyle, fontFamily: effectiveFontFamily }}
        {...props}
      />
      {error && value && showError && (
        <span
          className={styles.error}
          style={{ fontSize: errorSize, fontWeight: errorWeight, fontFamily: effectiveFontFamily }}
        >
          {error}
        </span>
      )}
    </div>
  );
};
