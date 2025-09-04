import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./SearchInput.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface SearchOption {
  value: string;
  label: string;
  description?: string;
}

export interface SearchInputProps {
  placeholder?: string;
  options: SearchOption[];
  value?: string;
  onSelect?: (option: SearchOption) => void;
  onSearch?: (query: string) => void;
  loading?: boolean;
  disabled?: boolean;
  maxHeight?: string;
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  descriptionSize?: number;
  descriptionWeight?: number | string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  options,
  value = "",
  onSelect,
  onSearch,
  loading = false,
  disabled = false,
  maxHeight = "200px",
  className,
  customColor,
  customBorder,
  titleSize = 14,
  titleWeight = 500,
  descriptionSize = 12,
  descriptionWeight = 400,
}) => {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()) ||
    option.description?.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setIsOpen(true);
    setHighlightedIndex(-1);
    onSearch?.(newQuery);
  };

  const handleOptionSelect = (option: SearchOption) => {
    setQuery(option.label);
    setIsOpen(false);
    setHighlightedIndex(-1);
    onSelect?.(option);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleOptionSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const searchInputClass = [
    styles.searchInput,
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div className={styles.container} style={{ fontFamily: effectiveFontFamily }}>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={searchInputClass}
          style={{ borderColor: customBorder, color: customColor }}
        />
        {loading && <span className={styles.loading}>⟳</span>}
        <span className={styles.searchIcon}>🔍</span>
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <div
          ref={dropdownRef}
          className={styles.dropdown}
          style={{ maxHeight, borderColor: customBorder }}
        >
          {filteredOptions.map((option, index) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                index === highlightedIndex ? styles.highlighted : ""
              }`}
              onClick={() => handleOptionSelect(option)}
              style={{ color: customColor }}
            >
              <div
                className={styles.optionLabel}
                style={{
                  fontSize: titleSize,
                  fontWeight: titleWeight,
                }}
              >
                {option.label}
              </div>
              {option.description && (
                <div
                  className={styles.optionDescription}
                  style={{
                    fontSize: descriptionSize,
                    fontWeight: descriptionWeight,
                  }}
                >
                  {option.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
