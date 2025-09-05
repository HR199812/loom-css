"use client";
import React, { useContext } from "react";
import styles from "./Pagination.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outlined" | "minimal";
  className?: string;
  customColor?: string;
  customBorder?: string;
  disabled?: boolean;
}

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  outlined: styles.outlined || "",
  minimal: styles.minimal || "",
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  size = "md",
  variant = "default",
  className,
  customColor,
  customBorder,
  disabled = false,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (end - start + 1 < maxVisiblePages) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisiblePages - 1);
      } else {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push("...");
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageClick = (page: number) => {
    if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const paginationClass = [
    styles.pagination,
    sizeStyles[size],
    variantStyles[variant],
    disabled ? styles.disabled : "",
    className || "",
  ].filter(Boolean).join(" ");

  const visiblePages = getVisiblePages();

  return (
    <nav className={paginationClass} style={{ fontFamily: effectiveFontFamily }}>
      {showFirstLast && (
        <button
          className={`${styles.pageButton} ${styles.firstLast}`}
          onClick={() => handlePageClick(1)}
          disabled={disabled || currentPage === 1}
          style={{ borderColor: customBorder, color: customColor }}
        >
          ««
        </button>
      )}

      {showPrevNext && (
        <button
          className={`${styles.pageButton} ${styles.prevNext}`}
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={disabled || currentPage === 1}
          style={{ borderColor: customBorder, color: customColor }}
        >
          ‹
        </button>
      )}

      {visiblePages.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          );
        }

        const pageNumber = page as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            className={`${styles.pageButton} ${isActive ? styles.active : ""}`}
            onClick={() => handlePageClick(pageNumber)}
            disabled={disabled}
            style={{
              borderColor: customBorder,
              color: isActive ? customColor : undefined,
              backgroundColor: isActive ? customColor : undefined,
            }}
          >
            {pageNumber}
          </button>
        );
      })}

      {showPrevNext && (
        <button
          className={`${styles.pageButton} ${styles.prevNext}`}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={disabled || currentPage === totalPages}
          style={{ borderColor: customBorder, color: customColor }}
        >
          ›
        </button>
      )}

      {showFirstLast && (
        <button
          className={`${styles.pageButton} ${styles.firstLast}`}
          onClick={() => handlePageClick(totalPages)}
          disabled={disabled || currentPage === totalPages}
          style={{ borderColor: customBorder, color: customColor }}
        >
          »»
        </button>
      )}
    </nav>
  );
};
