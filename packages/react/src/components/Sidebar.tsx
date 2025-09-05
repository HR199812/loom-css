"use client";
import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: string | number;
  children?: SidebarItem[];
  disabled?: boolean;
}

export interface SidebarProps {
  items: SidebarItem[];
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  variant?: "default" | "minimal" | "floating";
  size?: "sm" | "md" | "lg";
  position?: "left" | "right";
  collapsible?: boolean;
  defaultOpen?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onItemClick?: (item: SidebarItem) => void;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  minimal: styles.minimal || "",
  floating: styles.floating || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const positionStyles: Record<string, string> = {
  left: styles.left || "",
  right: styles.right || "",
};

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  isOpen,
  onToggle,
  variant = "default",
  size = "md",
  position = "left",
  collapsible = true,
  defaultOpen = true,
  className,
  style,
  onItemClick,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  
  const isControlled = isOpen !== undefined;
  const isSidebarOpen = isControlled ? isOpen : internalOpen;

  const sidebarClass = [
    styles.sidebar,
    variantStyles[variant],
    sizeStyles[size],
    positionStyles[position],
    isSidebarOpen ? styles.open : styles.closed,
    className || "",
  ].filter(Boolean).join(" ");

  const handleToggle = () => {
    const newOpen = !isSidebarOpen;
    
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    
    onToggle?.(newOpen);
  };

  const handleItemClick = (item: SidebarItem) => {
    if (item.disabled) return;
    
    if (item.children && item.children.length > 0) {
      const newExpanded = new Set(expandedItems);
      if (newExpanded.has(item.id)) {
        newExpanded.delete(item.id);
      } else {
        newExpanded.add(item.id);
      }
      setExpandedItems(newExpanded);
    }
    
    onItemClick?.(item);
  };

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isDisabled = item.disabled;

    return (
      <div key={item.id} className={styles.sidebarItemContainer}>
        <button
          className={`${styles.sidebarItem} ${
            isDisabled ? styles.disabled : ""
          } ${level > 0 ? styles.nested : ""}`}
          onClick={() => handleItemClick(item)}
          disabled={isDisabled}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          {item.icon && (
            <span className={styles.sidebarIcon}>{item.icon}</span>
          )}
          {isSidebarOpen && (
            <>
              <span className={styles.sidebarLabel}>{item.label}</span>
              {item.badge && (
                <span className={styles.sidebarBadge}>{item.badge}</span>
              )}
              {hasChildren && (
                <span className={`${styles.sidebarChevron} ${
                  isExpanded ? styles.expanded : ""
                }`}>
                  ›
                </span>
              )}
            </>
          )}
        </button>
        
        {hasChildren && isExpanded && isSidebarOpen && (
          <div className={styles.sidebarChildren}>
            {item.children!.map((child) => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={sidebarClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
    >
      {collapsible && (
        <button
          className={styles.sidebarToggle}
          onClick={handleToggle}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <span className={`${styles.toggleIcon} ${
            isSidebarOpen ? styles.open : ""
          }`}>
            ‹
          </span>
        </button>
      )}
      
      <div className={styles.sidebarContent}>
        <nav className={styles.sidebarNav} role="navigation">
          {items.map((item) => renderSidebarItem(item))}
        </nav>
      </div>
    </div>
  );
};

