"use client";
import React, { useContext } from "react";
import styles from "./ProgressBar.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  shape?: "rounded" | "square" | "pill";
  showLabel?: boolean;
  showPercentage?: boolean;
  label?: string;
  animated?: boolean;
  striped?: boolean;
  className?: string;
  style?: React.CSSProperties;
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
  info: styles.info || "",
};

const shapeStyles: Record<string, string> = {
  rounded: styles.rounded || "",
  square: styles.square || "",
  pill: styles.pill || "",
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = "md",
  variant = "default",
  shape = "rounded",
  showLabel = false,
  showPercentage = false,
  label,
  animated = false,
  striped = false,
  className,
  style,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const progressBarClass = [
    styles.progressBar,
    sizeStyles[size],
    shapeStyles[shape],
    className || "",
  ].filter(Boolean).join(" ");

  const progressFillClass = [
    styles.progressFill,
    variantStyles[variant],
    animated ? styles.animated : "",
    striped ? styles.striped : "",
  ].filter(Boolean).join(" ");

  const displayLabel = label || (showLabel ? `${value}/${max}` : "");
  const displayPercentage = showPercentage ? `${Math.round(percentage)}%` : "";

  return (
    <div
      className={progressBarClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={displayLabel || "Progress"}
    >
      {(displayLabel || displayPercentage) && (
        <div className={styles.progressHeader}>
          {displayLabel && (
            <span className={styles.progressLabel}>{displayLabel}</span>
          )}
          {displayPercentage && (
            <span className={styles.progressPercentage}>{displayPercentage}</span>
          )}
        </div>
      )}
      
      <div className={styles.progressTrack}>
        <div
          className={progressFillClass}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};

