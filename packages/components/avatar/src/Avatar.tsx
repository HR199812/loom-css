"use client";
import React, { useContext } from "react";
import styles from "./Avatar.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "circle" | "square" | "rounded";
  fallback?: string;
  icon?: React.ReactNode;
  status?: "online" | "offline" | "away" | "busy";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const sizeStyles: Record<string, string> = {
  xs: styles.xs || "",
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
  xl: styles.xl || "",
};

const variantStyles: Record<string, string> = {
  circle: styles.circle || "",
  square: styles.square || "",
  rounded: styles.rounded || "",
};

const statusStyles: Record<string, string> = {
  online: styles.online || "",
  offline: styles.offline || "",
  away: styles.away || "",
  busy: styles.busy || "",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = "md",
  variant = "circle",
  fallback,
  icon,
  status,
  className,
  style,
  onClick,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const avatarClass = [
    styles.avatar,
    sizeStyles[size],
    variantStyles[variant],
    status ? statusStyles[status] : "",
    onClick ? styles.clickable : "",
    className || "",
  ].filter(Boolean).join(" ");

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const renderContent = () => {
    if (src) {
      return (
        <img
          src={src}
          alt={alt || name || "Avatar"}
          className={styles.avatarImage}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const fallbackElement = target.nextElementSibling as HTMLElement;
            if (fallbackElement) {
              fallbackElement.style.display = "flex";
            }
          }}
        />
      );
    }

    if (icon) {
      return <div className={styles.avatarIcon}>{icon}</div>;
    }

    if (name) {
      return <div className={styles.avatarInitials}>{getInitials(name)}</div>;
    }

    if (fallback) {
      return <div className={styles.avatarFallback}>{fallback}</div>;
    }

    return <div className={styles.avatarDefault}>?</div>;
  };

  return (
    <div
      className={avatarClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
      onClick={onClick}
    >
      {renderContent()}
      {!src && (name || fallback) && (
        <div className={styles.avatarFallback} style={{ display: "none" }}>
          {name ? getInitials(name) : fallback}
        </div>
      )}
      {status && <div className={styles.statusIndicator} />}
    </div>
  );
};

