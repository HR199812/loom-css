"use client";
import React, { useState, useContext } from "react";
import styles from "./PaymentPlan.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface PaymentPlanProps {
  title: string;
  price: number;
  currency?: string;
  period?: string;
  description?: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText?: string;
  onUpgrade?: () => void;
  variant?: "default" | "elevated" | "outlined";
  size?: "sm" | "md" | "lg";
  className?: string;
  customColor?: string;
  customBorder?: string;
  titleSize?: number;
  titleWeight?: number | string;
  priceSize?: number;
  priceWeight?: number | string;
  descriptionSize?: number;
  descriptionWeight?: number | string;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  elevated: styles.elevated || "",
  outlined: styles.outlined || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const PaymentPlan: React.FC<PaymentPlanProps> = ({
  title,
  price,
  currency = "$",
  period = "/month",
  description,
  features,
  popular = false,
  buttonText = "Upgrade Plan",
  onUpgrade,
  variant = "default",
  size = "md",
  className,
  customColor,
  customBorder,
  titleSize = 24,
  titleWeight = 700,
  priceSize = 36,
  priceWeight = 800,
  descriptionSize = 14,
  descriptionWeight = 400,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const planClass = [
    styles.plan,
    variantStyles[variant],
    sizeStyles[size],
    popular ? styles.popular : "",
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div
      className={planClass}
      style={{
        fontFamily: effectiveFontFamily,
        borderColor: customBorder,
      }}
    >
      {popular && (
        <div className={styles.popularBadge} style={{ backgroundColor: customColor }}>
          Most Popular
        </div>
      )}

      <div className={styles.header}>
        <h3
          className={styles.title}
          style={{
            fontSize: titleSize,
            fontWeight: titleWeight,
            color: customColor,
          }}
        >
          {title}
        </h3>
        
        <div className={styles.priceContainer}>
          <span
            className={styles.currency}
            style={{ color: customColor }}
          >
            {currency}
          </span>
          <span
            className={styles.price}
            style={{
              fontSize: priceSize,
              fontWeight: priceWeight,
              color: customColor,
            }}
          >
            {price}
          </span>
          <span
            className={styles.period}
            style={{ color: customColor }}
          >
            {period}
          </span>
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

      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <span
              className={`${styles.checkIcon} ${feature.included ? styles.included : styles.excluded}`}
              style={{ color: feature.included ? "#10b981" : "#ef4444" }}
            >
              {feature.included ? "✓" : "✗"}
            </span>
            <span
              className={`${styles.featureText} ${!feature.included ? styles.excluded : ""}`}
            >
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <button
          className={styles.upgradeButton}
          onClick={onUpgrade}
          style={{
            backgroundColor: customColor,
            borderColor: customBorder,
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};