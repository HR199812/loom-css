"use client";
import React, { useContext, useState } from "react";
import styles from "./ThemeSwitch.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface ThemeSwitchProps {
  theme?: "light" | "dark";
  defaultTheme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "outlined";
  showLabel?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (theme: "light" | "dark") => void;
}

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  minimal: styles.minimal || "",
  outlined: styles.outlined || "",
};

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  theme,
  defaultTheme = "light",
  size = "md",
  variant = "default",
  showLabel = false,
  className,
  style,
  onChange,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [internalTheme, setInternalTheme] = useState(defaultTheme);
  const isControlled = theme !== undefined;
  const currentTheme = isControlled ? theme : internalTheme;

  const themeSwitchClass = [
    styles.themeSwitch,
    sizeStyles[size],
    variantStyles[variant],
    currentTheme === "dark" ? styles.dark : styles.light,
    className || "",
  ].filter(Boolean).join(" ");

  const handleToggle = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    if (!isControlled) {
      setInternalTheme(newTheme);
    }
    
    onChange?.(newTheme);
  };

  return (
    <div
      className={themeSwitchClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
    >
      {showLabel && (
        <span className={styles.label}>
          {currentTheme === "light" ? "Light" : "Dark"}
        </span>
      )}
      
      <button
        className={styles.switch}
        onClick={handleToggle}
        aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} theme`}
      >
        <div className={styles.track}>
          <div className={styles.thumb}>
            <div className={styles.icon}>
              {currentTheme === "light" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5041M17.6859 17.69L18.5 18.5041M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3542 15.3542C19.3176 15.7708 18.1856 16 17 16C12.5817 16 9 12.4183 9 8C9 6.81441 9.22924 5.68241 9.64585 4.64585C5.33673 5.22662 2 8.92037 2 13.5C2 18.1944 5.80558 22 10.5 22C15.0796 22 18.7734 18.6633 19.3542 14.3542C19.6824 14.7708 20.0732 15.1364 20.3542 15.3542Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

