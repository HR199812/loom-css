"use client";
import React, { useEffect, useContext } from "react";
import styles from "./Modal.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  variant?: "default" | "centered" | "bottom";
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  backdropBlur?: boolean;
}

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
  xl: styles.xl || "",
  full: styles.full || "",
};

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  centered: styles.centered || "",
  bottom: styles.bottom || "",
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  variant = "centered",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className,
  customColor,
  customBorder,
  titleSize = 20,
  titleWeight = 600,
  backdropBlur = true,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeOnEscape, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalClass = [
    styles.modal,
    sizeStyles[size],
    variantStyles[variant],
    className || "",
  ].filter(Boolean).join(" ");

  const backdropClass = [
    styles.backdrop,
    backdropBlur ? styles.blurred : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={backdropClass} onClick={handleBackdropClick}>
      <div
        className={modalClass}
        style={{
          fontFamily: effectiveFontFamily,
          borderColor: customBorder,
        }}
      >
        {(title || showCloseButton) && (
          <div className={styles.header}>
            {title && (
              <h2
                className={styles.title}
                style={{
                  fontSize: titleSize,
                  fontWeight: titleWeight,
                  color: customColor,
                }}
              >
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className={styles.closeButton}
                onClick={onClose}
                style={{ color: customColor }}
              >
                ×
              </button>
            )}
          </div>
        )}

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
