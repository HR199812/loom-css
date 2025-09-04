import React, { useContext } from "react";
import styles from "./Radio.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioProps {
  name: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  variant?: "default" | "card" | "button";
  className?: string;
  customColor?: string;
  customBorder?: string;
  labelSize?: number;
  labelWeight?: number | string;
}

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  card: styles.card || "",
  button: styles.button || "",
};

export const Radio: React.FC<RadioProps> = ({
  name,
  options,
  value,
  defaultValue,
  onChange,
  direction = "vertical",
  size = "md",
  variant = "default",
  className,
  customColor,
  customBorder,
  labelSize = 14,
  labelWeight = 500,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (optionValue: string) => {
    if (value === undefined) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
  };

  const radioClass = [
    styles.radio,
    sizeStyles[size],
    variantStyles[variant],
    direction === "horizontal" ? styles.horizontal : styles.vertical,
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div className={radioClass} style={{ fontFamily: effectiveFontFamily }}>
      {options.map((option) => {
        const isSelected = currentValue === option.value;
        const isDisabled = option.disabled;

        return (
          <label
            key={option.value}
            className={`${styles.option} ${isSelected ? styles.selected : ""} ${
              isDisabled ? styles.disabled : ""
            }`}
            style={{ borderColor: customBorder }}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => handleChange(option.value)}
              disabled={isDisabled}
              className={styles.input}
            />
            <span
              className={styles.radioButton}
              style={{ borderColor: customBorder }}
            >
              <span
                className={styles.radioDot}
                style={{ backgroundColor: customColor || "#3b82f6" }}
              />
            </span>
            <span
              className={styles.label}
              style={{
                fontSize: labelSize,
                fontWeight: labelWeight,
                color: customColor,
              }}
            >
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};
