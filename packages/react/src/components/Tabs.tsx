"use client";
import React, { useContext, useState } from "react";
import styles from "./Tabs.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  activeTab?: string;
  variant?: "default" | "pills" | "underline" | "card";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
  onTabChange?: (tabId: string) => void;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  pills: styles.pills || "",
  underline: styles.underline || "",
  card: styles.card || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const orientationStyles: Record<string, string> = {
  horizontal: styles.horizontal || "",
  vertical: styles.vertical || "",
};

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  activeTab,
  variant = "default",
  size = "md",
  orientation = "horizontal",
  className,
  style,
  onTabChange,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultActiveTab || items[0]?.id || ""
  );
  
  const isControlled = activeTab !== undefined;
  const currentActiveTab = isControlled ? activeTab : internalActiveTab;

  const tabsClass = [
    styles.tabs,
    variantStyles[variant],
    sizeStyles[size],
    orientationStyles[orientation],
    className || "",
  ].filter(Boolean).join(" ");

  const handleTabClick = (tabId: string) => {
    const tab = items.find(item => item.id === tabId);
    if (tab?.disabled) return;
    
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    
    onTabChange?.(tabId);
  };

  const activeTabContent = items.find(item => item.id === currentActiveTab)?.content;

  return (
    <div
      className={tabsClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
    >
      <div className={styles.tabList} role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            className={`${styles.tab} ${
              currentActiveTab === item.id ? styles.activeTab : ""
            } ${item.disabled ? styles.disabledTab : ""}`}
            onClick={() => handleTabClick(item.id)}
            disabled={item.disabled}
            role="tab"
            aria-selected={currentActiveTab === item.id}
            aria-controls={`tabpanel-${item.id}`}
            id={`tab-${item.id}`}
          >
            {item.icon && <span className={styles.tabIcon}>{item.icon}</span>}
            <span className={styles.tabLabel}>{item.label}</span>
          </button>
        ))}
      </div>
      
      <div className={styles.tabContent}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.tabPanel} ${
              currentActiveTab === item.id ? styles.activePanel : ""
            }`}
            role="tabpanel"
            id={`tabpanel-${item.id}`}
            aria-labelledby={`tab-${item.id}`}
            hidden={currentActiveTab !== item.id}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

