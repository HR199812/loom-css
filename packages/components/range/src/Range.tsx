"use client";
import React, { useState, useContext } from "react";
import styles from "./Range.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface RangeProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "onChange"
  > {
  title?: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  showValue?: boolean;
  showLabels?: boolean;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  descriptionSize?: number;
  descriptionWeight?: number | string;
}

export const Range: React.FC<RangeProps> = ({
  title,
  description,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 0,
  onChange,
  showValue = true,
  showLabels = true,
  customColor,
  customBorder,
  titleSize = 16,
  titleWeight = 600,
  descriptionSize = 14,
  descriptionWeight = 400,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div className={styles.wrapper} style={{ fontFamily: effectiveFontFamily }}>
      {title && (
        <label
          className={styles.title}
          style={{
            fontSize: titleSize,
            fontWeight: titleWeight,
            color: customColor,
          }}
        >
          {title}
        </label>
      )}

      <div className={styles.rangeContainer}>
        {showLabels && (
          <div className={styles.labels}>
            <span className={styles.minLabel}>{min}</span>
            <span className={styles.maxLabel}>{max}</span>
          </div>
        )}

        <div className={styles.sliderWrapper}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            className={`${styles.range} ${customBorder || ""}`}
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
            }}
            {...props}
          />

          {showValue && (
            <div
              className={styles.valueDisplay}
              style={{ left: `${percentage}%` }}
            >
              {currentValue}
            </div>
          )}
        </div>
        {description && (
          <p
            className={styles.description}
            style={{
              fontSize: descriptionSize,
              fontWeight: descriptionWeight,
              color: customColor,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
