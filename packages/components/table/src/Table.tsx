"use client";
import React, { useContext } from "react";
import styles from "./Table.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface TableColumn {
  key: string;
  title: string;
  width?: string;
  align?: "left" | "center" | "right";
  sortable?: boolean;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  title?: string;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  onSort?: (column: string, direction: "asc" | "desc") => void;
}

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  title,
  striped = false,
  bordered = true,
  hoverable = true,
  size = "md",
  className,
  customColor,
  customBorder,
  titleSize = 18,
  titleWeight = 600,
  onSort,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || 'var(--loom-font-family)';

  const tableClass = [
    styles.table,
    sizeStyles[size],
    striped ? styles.striped : "",
    bordered ? styles.bordered : "",
    hoverable ? styles.hoverable : "",
    className || "",
  ].filter(Boolean).join(" ");

  const handleSort = (column: TableColumn) => {
    if (column.sortable && onSort) {
      onSort(column.key, "asc"); // You can implement direction logic here
    }
  };

  return (
    <div className={styles.tableWrapper} style={{ fontFamily: effectiveFontFamily }}>
      {title && (
        <h3
          className={styles.title}
          style={{ fontSize: titleSize, fontWeight: titleWeight, color: customColor }}
        >
          {title}
        </h3>
      )}
      
      <div className={styles.tableContainer}>
        <table className={tableClass} style={{ borderColor: customBorder }}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`${styles.header} ${column.sortable ? styles.sortable : ""}`}
                  style={{ 
                    width: column.width,
                    textAlign: column.align,
                    color: customColor 
                  }}
                  onClick={() => handleSort(column)}
                >
                  {column.title}
                  {column.sortable && <span className={styles.sortIcon}>↕</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={styles.row}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={styles.cell}
                    style={{ 
                      textAlign: column.align,
                      color: customColor 
                    }}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
