"use client";
import React, { useContext } from "react";
import styles from "./LineChart.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface LineData {
  label: string;
  value: number;
  description?: string;
  color?: string;
}

export interface LineChartProps {
  title: string;
  data: LineData[];
  maxValue?: number;
  showValues?: boolean;
  showDescriptions?: boolean;
  variant?: "default" | "minimal" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  lineWidth?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showDots?: boolean;
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

export const LineChart: React.FC<LineChartProps> = ({
  title,
  data,
  maxValue,
  showValues = true,
  showDescriptions = true,
  variant = "default",
  size = "md",
  className,
  customColor,
  customBorder,
  titleSize = 20,
  titleWeight = 600,
  lineWidth = 3,
  showGrid = true,
  showLegend = false,
  showDots = true,
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

  // Generate SVG path for the line
  const generatePath = () => {
    const width = 400; // Fixed width for SVG
    const height = 200; // Fixed height for SVG
    const padding = 40;
    
    const points = data.map((item, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.length - 1);
      const y = height - padding - ((item.value / chartMaxValue) * (height - 2 * padding));
      return `${x},${y}`;
    });

    return `M ${points.join(' L ')}`;
  };

  // Generate SVG path for the area under the line
  const generateAreaPath = () => {
    const width = 400;
    const height = 200;
    const padding = 40;
    
    const points = data.map((item, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.length - 1);
      const y = height - padding - ((item.value / chartMaxValue) * (height - 2 * padding));
      return `${x},${y}`;
    });

    const firstPoint = points[0];
    const lastPoint = points[points.length - 1];
    
    if (!firstPoint || !lastPoint) return '';
    
    const bottomY = height - padding;

    return `M ${firstPoint} L ${points.join(' L ')} L ${lastPoint.split(',')[0]},${bottomY} L ${firstPoint.split(',')[0]},${bottomY} Z`;
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
        <div className={styles.chartContainer}>
          <svg
            width="400"
            height="200"
            viewBox="0 0 400 200"
            className={styles.chartSvg}
          >
            {/* Grid lines */}
            {showGrid && (
              <g className={styles.grid}>
                {[0, 25, 50, 75, 100].map((gridValue) => {
                  const y = 40 + ((100 - gridValue) / 100) * 120;
                  return (
                    <line
                      key={gridValue}
                      x1="40"
                      y1={y}
                      x2="360"
                      y2={y}
                      stroke="rgba(0, 0, 0, 0.1)"
                      strokeWidth="1"
                    />
                  );
                })}
                {data.map((_, index) => {
                  const x = 40 + (index * 320) / (data.length - 1);
                  return (
                    <line
                      key={index}
                      x1={x}
                      y1="40"
                      x2={x}
                      y2="160"
                      stroke="rgba(0, 0, 0, 0.1)"
                      strokeWidth="1"
                    />
                  );
                })}
              </g>
            )}

            {/* Area under the line */}
            <path
              d={generateAreaPath()}
              fill="url(#gradient)"
              opacity="0.3"
            />

            {/* Line */}
            <path
              d={generatePath()}
              fill="none"
              stroke={customColor || "#3b82f6"}
              strokeWidth={lineWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dots */}
            {showDots && data.map((item, index) => {
              const x = 40 + (index * 320) / (data.length - 1);
              const y = 160 - ((item.value / chartMaxValue) * 120);
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="4"
                  fill={item.color || customColor || "#3b82f6"}
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })}

            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={customColor || "#3b82f6"} stopOpacity="0.3" />
                <stop offset="100%" stopColor={customColor || "#3b82f6"} stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* X-axis labels */}
          <div className={styles.xAxisLabels}>
            {data.map((item, index) => (
              <div key={index} className={styles.xAxisLabel}>
                <span className={styles.labelText}>{item.label}</span>
                {showValues && (
                  <span className={styles.valueText}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Descriptions */}
        {showDescriptions && (
          <div className={styles.descriptions}>
            {data.map((item, index) => (
              item.description && (
                <div key={index} className={styles.description}>
                  <span className={styles.descriptionLabel}>{item.label}:</span>
                  <span className={styles.descriptionText}>{item.description}</span>
                </div>
              )
            ))}
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

