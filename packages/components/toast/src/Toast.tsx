"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "./Toast.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface ToastProps {
  id?: string;
  title?: string;
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  closable?: boolean;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
  className?: string;
  style?: React.CSSProperties;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const typeStyles: Record<string, string> = {
  success: styles.success || "",
  error: styles.error || "",
  warning: styles.warning || "",
  info: styles.info || "",
};

const positionStyles: Record<string, string> = {
  "top-right": styles.topRight || "",
  "top-left": styles.topLeft || "",
  "bottom-right": styles.bottomRight || "",
  "bottom-left": styles.bottomLeft || "",
  "top-center": styles.topCenter || "",
  "bottom-center": styles.bottomCenter || "",
};

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  message,
  type = "info",
  duration = 5000,
  closable = true,
  position = "top-right",
  className,
  style,
  onClose,
  action,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const toastClass = [
    styles.toast,
    typeStyles[type],
    positionStyles[position],
    isVisible ? styles.visible : "",
    isExiting ? styles.exiting : "",
    className || "",
  ].filter(Boolean).join(" ");

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  useEffect(() => {
    // Show toast with animation
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Auto-hide toast
    const hideTimer = setTimeout(() => {
      if (duration > 0) {
        handleClose();
      }
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
      default:
        return "ℹ";
    }
  };

  return (
    <div
      className={toastClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
      role="alert"
      aria-live="polite"
    >
      <div className={styles.toastContent}>
        <div className={styles.toastIcon}>
          {getIcon()}
        </div>
        
        <div className={styles.toastBody}>
          {title && (
            <div className={styles.toastTitle}>{title}</div>
          )}
          <div className={styles.toastMessage}>{message}</div>
        </div>
        
        {action && (
          <button
            className={styles.toastAction}
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
        
        {closable && (
          <button
            className={styles.toastClose}
            onClick={handleClose}
            aria-label="Close notification"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

// Toast Container Component
export interface ToastContainerProps {
  toasts: ToastProps[];
  position?: ToastProps["position"];
  className?: string;
  style?: React.CSSProperties;
  onRemoveToast: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position = "top-right",
  className,
  style,
  onRemoveToast,
}) => {
  const containerClass = [
    styles.toastContainer,
    positionStyles[position],
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClass} style={style}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => toast.id && onRemoveToast(toast.id)}
        />
      ))}
    </div>
  );
};

