"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./CommandPalette.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  keywords?: string[];
  action: () => void;
  group?: string;
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  commands: CommandItem[];
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  commands,
  placeholder = "Type a command or search...",
  className,
  style,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commandPaletteClass = [
    styles.commandPalette,
    isOpen ? styles.open : "",
    className || "",
  ].filter(Boolean).join(" ");

  // Filter commands based on search term
  const filteredCommands = commands.filter((command) => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    const titleMatch = command.title.toLowerCase().includes(searchLower);
    const descriptionMatch = command.description?.toLowerCase().includes(searchLower);
    const keywordMatch = command.keywords?.some(keyword => 
      keyword.toLowerCase().includes(searchLower)
    );
    
    return titleMatch || descriptionMatch || keywordMatch;
  });

  // Group commands
  const groupedCommands = filteredCommands.reduce((groups, command) => {
    const group = command.group || "General";
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(command);
    return groups;
  }, {} as Record<string, CommandItem[]>);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
        break;
      case "Escape":
        e.preventDefault();
        onClose();
        break;
    }
  };

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current && selectedIndex >= 0) {
      const selectedElement = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      ) as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={commandPaletteClass}
        style={{
          fontFamily: effectiveFontFamily,
          ...style,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.content}>
          {Object.keys(groupedCommands).length === 0 ? (
            <div className={styles.emptyState}>
              <p>No commands found</p>
            </div>
          ) : (
            <div ref={listRef} className={styles.commandList}>
              {Object.entries(groupedCommands).map(([groupName, groupCommands]) => (
                <div key={groupName} className={styles.group}>
                  <div className={styles.groupHeader}>{groupName}</div>
                  {groupCommands.map((command, index) => {
                    const globalIndex = filteredCommands.indexOf(command);
                    return (
                      <button
                        key={command.id}
                        data-index={globalIndex}
                        className={`${styles.commandItem} ${
                          globalIndex === selectedIndex ? styles.selected : ""
                        }`}
                        onClick={() => {
                          command.action();
                          onClose();
                        }}
                      >
                        {command.icon && (
                          <div className={styles.commandIcon}>{command.icon}</div>
                        )}
                        <div className={styles.commandContent}>
                          <div className={styles.commandTitle}>{command.title}</div>
                          {command.description && (
                            <div className={styles.commandDescription}>
                              {command.description}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

