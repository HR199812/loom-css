import React, { useContext } from "react";
import styles from "./Button.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  customColor?: string;
  customBorder?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: styles.primary || "",
  secondary: styles.secondary || "",
  outline: styles.outline || "",
  ghost: styles.ghost || "",
  danger: styles.danger || "",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  customColor,
  customBorder,
  disabled,
  ...props
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || 'var(--loom-font-family)';

  const buttonClass = [
    styles.button,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? styles.fullWidth : "",
    loading ? styles.loading : "",
    customColor ? customColor : "",
    customBorder ? customBorder : "",
  ].filter(Boolean).join(" ");

  const isDisabled = disabled || loading;

  return (
    <button
      className={buttonClass}
      disabled={isDisabled}
      style={{ fontFamily: effectiveFontFamily }}
      {...props}
    >
      {loading && <span className={styles.spinner}>⟳</span>}
      {!loading && icon && iconPosition === "left" && (
        <span className={styles.iconLeft}>{icon}</span>
      )}
      <span className={styles.content}>{children}</span>
      {!loading && icon && iconPosition === "right" && (
        <span className={styles.iconRight}>{icon}</span>
      )}
    </button>
  );
};
