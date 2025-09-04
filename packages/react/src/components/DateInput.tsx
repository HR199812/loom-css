import React, { useState, useContext } from "react";
import styles from "./DateInput.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface DateInputProps {
  title?: string;
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date | null) => void;
  includeTime?: boolean;
  placeholder?: string;
  disabled?: boolean;
  min?: Date;
  max?: Date;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outlined" | "filled";
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  errorText?: string;
  showError?: boolean;
}

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  outlined: styles.outlined || "",
  filled: styles.filled || "",
};

export const DateInput: React.FC<DateInputProps> = ({
  title,
  value,
  defaultValue,
  onChange,
  includeTime = false,
  placeholder,
  disabled = false,
  min,
  max,
  size = "md",
  variant = "default",
  className,
  customColor,
  customBorder,
  titleSize = 16,
  titleWeight = 600,
  errorText,
  showError = false,
}) => {
  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue || null);
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const currentValue = value !== undefined ? value : internalValue;

  const formatDateForInput = (date: Date | null) => {
    if (!date) return "";
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    
    if (includeTime) {
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    if (!inputValue) {
      const newValue = null;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      return;
    }

    const newDate = new Date(inputValue);
    
    if (!isNaN(newDate.getTime())) {
      if (value === undefined) {
        setInternalValue(newDate);
      }
      onChange?.(newDate);
    }
  };

  const inputClass = [
    styles.dateInput,
    sizeStyles[size],
    variantStyles[variant],
    showError ? styles.error : "",
    disabled ? styles.disabled : "",
    className || "",
  ].filter(Boolean).join(" ");

  const inputType = includeTime ? "datetime-local" : "date";

  return (
    <div className={styles.wrapper} style={{ fontFamily: effectiveFontFamily }}>
      {title && (
        <label
          className={styles.title}
          style={{
            fontSize: titleSize,
            fontWeight: titleWeight,
            color: customColor,
          }}
        >
          {title}
        </label>
      )}
      
      <input
        type={inputType}
        value={formatDateForInput(currentValue)}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        min={min ? formatDateForInput(min) : undefined}
        max={max ? formatDateForInput(max) : undefined}
        className={inputClass}
        style={{
          borderColor: showError ? "#ef4444" : customBorder,
          color: customColor,
        }}
      />
      
      {showError && errorText && (
        <span className={styles.errorText} style={{ color: "#ef4444" }}>
          {errorText}
        </span>
      )}
    </div>
  );
};
