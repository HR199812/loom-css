"use client";
import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./OTPInput.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  variant?: "default" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  type?: "text" | "number" | "password";
  autoFocus?: boolean;
  className?: string;
  style?: React.CSSProperties;
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

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value = "",
  onChange,
  onComplete,
  disabled = false,
  variant = "default",
  size = "md",
  type = "text",
  autoFocus = false,
  className,
  style,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [internalValue, setInternalValue] = useState(value);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const values = currentValue.split("").slice(0, length);

  const otpInputClass = [
    styles.otpInput,
    variantStyles[variant],
    sizeStyles[size],
    disabled ? styles.disabled : "",
    className || "",
  ].filter(Boolean).join(" ");

  const handleChange = (index: number, inputValue: string) => {
    if (disabled) return;

    const newValues = [...values];
    newValues[index] = inputValue.slice(-1); // Only take the last character
    
    const newValue = newValues.join("");
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue);

    // Move to next input if current input is filled
    if (inputValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all inputs are filled
    if (newValues.every(v => v !== "")) {
      onComplete?.(newValue);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "Backspace":
        if (!values[index] && index > 0) {
          // Move to previous input if current is empty
          inputRefs.current[index - 1]?.focus();
        }
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
        break;
      case "ArrowRight":
        e.preventDefault();
        if (index < length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
        break;
      case "Delete":
        e.preventDefault();
        const newValues = [...values];
        newValues[index] = "";
        const newValue = newValues.join("");
        
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
        break;
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    if (disabled) return;
    
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    
    if (type === "number" && !/^\d+$/.test(pastedData)) {
      return;
    }
    
    const newValues = pastedData.split("");
    const newValue = newValues.join("");
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue);
    
    // Focus the next empty input or the last input
    const nextEmptyIndex = newValues.findIndex(v => v === "");
    const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  // Auto focus first input
  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  return (
    <div
      className={otpInputClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
    >
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type={type}
          value={values[index] || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          disabled={disabled}
          maxLength={1}
          className={`${styles.input} ${
            focusedIndex === index ? styles.focused : ""
          } ${values[index] ? styles.filled : ""}`}
          autoComplete="off"
          inputMode={type === "number" ? "numeric" : "text"}
        />
      ))}
    </div>
  );
};

