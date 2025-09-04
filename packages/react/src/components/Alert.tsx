import React, { useContext } from "react";
import styles from "./Alert.module.css";

export type AlertType = "info" | "success" | "warning" | "danger";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface AlertProps {
  title?: string;
  message: string;
  type?: AlertType;
  closable?: boolean;
  onClose?: () => void;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  messageSize?: number;
  messageWeight?: number | string;
  icon?: React.ReactNode;
}

const typeStyles: Record<AlertType, string> = {
  info: styles.info || "",
  success: styles.success || "",
  warning: styles.warning || "",
  danger: styles.danger || "",
};

const typeIcons: Record<AlertType, string> = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  danger: "❌",
};

export const Alert: React.FC<AlertProps> = ({
  title,
  message,
  type = "info",
  closable = false,
  onClose,
  customColor,
  customBorder,
  titleSize = 16,
  titleWeight = 600,
  messageSize = 14,
  messageWeight = 400,
  icon,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || 'var(--loom-font-family)';

  const borderClass = customBorder
    ? customBorder
    : typeStyles[type] || typeStyles.info;
  const colorClass = customColor ? customColor : "";
  const displayIcon = icon || typeIcons[type];

  return (
    <div className={`${styles.alert} ${borderClass} ${colorClass}`}>
      <div className={styles.content}>
        <div className={styles.icon}>{displayIcon}</div>
        <div className={styles.text}>
          {title && (
            <div
              className={styles.title}
              style={{ fontSize: titleSize, fontWeight: titleWeight, fontFamily: effectiveFontFamily }}
            >
              {title}
            </div>
          )}
          <div
            className={styles.message}
            style={{ fontSize: messageSize, fontWeight: messageWeight, fontFamily: effectiveFontFamily }}
          >
            {message}
          </div>
        </div>
      </div>
      {closable && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          style={{ fontFamily: effectiveFontFamily }}
        >
          ×
        </button>
      )}
    </div>
  );
};
