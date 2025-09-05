"use client";
import React, { useContext } from "react";
import styles from "./BarChart.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface BarData {
  label: string;
  value: number;
  description?: string;
  color?: string;
}

export interface BarChartProps {
  title: string;
  data: BarData[];
  maxValue?: number;
  showValues?: boolean;
  showDescriptions?: boolean;
  orientation?: "vertical" | "horizontal";
  variant?: "default" | "minimal" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  barHeight?: number;
  barSpacing?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  minimal: styles.minimal || "",
  gradient: styles.gradient || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const BarChart: React.FC<BarChartProps> = ({
  title,
  data,
  maxValue,
  showValues = true,
  showDescriptions = true,
  orientation = "vertical",
  variant = "default",
  size = "md",
  className,
  customColor,
  customBorder,
  titleSize = 20,
  titleWeight = 600,
  barHeight = 8,
  barSpacing = 12,
  showGrid = true,
  showLegend = false,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  // Calculate max value if not provided
  const chartMaxValue = maxValue || Math.max(...data.map(item => item.value));

  const chartClass = [
    styles.chart,
    variantStyles[variant],
    sizeStyles[size],
    className || "",
  ].filter(Boolean).join(" ");

  const renderVerticalBar = (item: BarData, index: number) => {
    const percentage = (item.value / chartMaxValue) * 100;
    const barColor = item.color || customColor || "#3b82f6";

    return (
      <div key={index} className={styles.barContainer}>
        <div className={styles.barLabel}>
          <span className={styles.labelText}>{item.label}</span>
          {showValues && (
            <span className={styles.valueText}>{item.value}</span>
          )}
        </div>
        
        <div className={styles.barWrapper}>
          {showGrid && (
            <div className={styles.gridLines}>
              {[0, 25, 50, 75, 100].map((gridValue) => (
                <div
                  key={gridValue}
                  className={styles.gridLine}
                  style={{
                    bottom: `${gridValue}%`,
                  }}
                />
              ))}
            </div>
          )}
          <div
            className={styles.bar}
            style={{
              width: `${percentage}%`,
              height: `${Math.max(barHeight, 20)}px`,
              backgroundColor: barColor,
              marginBottom: `${barSpacing}px`,
            }}
          />
        </div>
        
        {showDescriptions && item.description && (
          <div className={styles.description}>
            {item.description}
          </div>
        )}
      </div>
    );
  };

  const renderHorizontalBar = (item: BarData, index: number) => {
    const percentage = (item.value / chartMaxValue) * 100;
    const barColor = item.color || customColor || "#3b82f6";

    return (
      <div key={index} className={styles.horizontalBarContainer}>
        <div className={styles.horizontalBarLabel}>
          <span className={styles.labelText}>{item.label}</span>
          {showValues && (
            <span className={styles.valueText}>{item.value}</span>
          )}
        </div>
        
        <div className={styles.horizontalBarWrapper}>
          {showGrid && (
            <div className={styles.horizontalGridLines}>
              {[0, 25, 50, 75, 100].map((gridValue) => (
                <div
                  key={gridValue}
                  className={styles.horizontalGridLine}
                  style={{
                    left: `${gridValue}%`,
                  }}
                />
              ))}
            </div>
          )}
          <div
            className={styles.horizontalBar}
            style={{
              width: `${percentage}%`,
              height: `${Math.max(barHeight, 20)}px`,
              backgroundColor: barColor,
            }}
          />
        </div>
        
        {showDescriptions && item.description && (
          <div className={styles.horizontalDescription}>
            {item.description}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={chartClass}
      style={{
        fontFamily: effectiveFontFamily,
        borderColor: customBorder,
      }}
    >
      <h3
        className={styles.chartTitle}
        style={{
          fontSize: titleSize,
          fontWeight: titleWeight,
          color: customColor,
        }}
      >
        {title}
      </h3>
      
      <div className={styles.chartContent}>
        {orientation === "vertical" ? (
          <div className={styles.verticalChart}>
            {data.map(renderVerticalBar)}
          </div>
        ) : (
          <div className={styles.horizontalChart}>
            {data.map(renderHorizontalBar)}
          </div>
        )}
      </div>

      {showLegend && (
        <div className={styles.legend}>
          {data.map((item, index) => (
            <div key={index} className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{
                  backgroundColor: item.color || customColor || "#3b82f6",
                }}
              />
              <span className={styles.legendLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};