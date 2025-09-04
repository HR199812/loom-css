import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./Dropdown.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string, option: DropdownOption) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  maxHeight?: string;
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
  filled: styles.filled || "",
  outlined: styles.outlined || "",
};

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = "Select an option",
  onChange,
  disabled = false,
  size = "md",
  variant = "default",
  maxHeight = "200px",
  className,
  customColor,
  customBorder,
  labelSize = 14,
  labelWeight = 500,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionSelect = (option: DropdownOption) => {
    if (!option.disabled) {
      onChange?.(option.value, option);
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    const enabledOptions = options.filter((option) => !option.disabled);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < enabledOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : enabledOptions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && enabledOptions[highlightedIndex]) {
          handleOptionSelect(enabledOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const dropdownClass = [
    styles.dropdown,
    sizeStyles[size],
    variantStyles[variant],
    isOpen ? styles.open : "",
    disabled ? styles.disabled : "",
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div className={styles.container} style={{ fontFamily: effectiveFontFamily }}>
      <button
        ref={triggerRef}
        type="button"
        className={dropdownClass}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        style={{ borderColor: customBorder, color: customColor }}
      >
        <span
          className={styles.label}
          style={{
            fontSize: labelSize,
            fontWeight: labelWeight,
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span
          className={`${styles.icon} ${isOpen ? styles.open : ""}`}
          style={{ color: customColor }}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={styles.menu}
          style={{ maxHeight, borderColor: customBorder }}
        >
          {options.map((option, index) => {
            const isHighlighted = options.findIndex(
              (opt) => !opt.disabled && options.indexOf(opt) === index
            ) === highlightedIndex;

            return (
              <div
                key={option.value}
                className={`${styles.option} ${
                  option.disabled ? styles.disabled : ""
                } ${isHighlighted ? styles.highlighted : ""}`}
                onClick={() => handleOptionSelect(option)}
                style={{ color: customColor }}
              >
                {option.icon && (
                  <span className={styles.optionIcon}>{option.icon}</span>
                )}
                <span
                  className={styles.optionLabel}
                  style={{
                    fontSize: labelSize,
                    fontWeight: labelWeight,
                  }}
                >
                  {option.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
