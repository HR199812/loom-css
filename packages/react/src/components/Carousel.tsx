"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "./Carousel.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface CarouselItem {
  id: string;
  content: React.ReactNode;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showThumbnails?: boolean;
  variant?: "default" | "card" | "minimal";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  onSlideChange?: (index: number) => void;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  card: styles.card || "",
  minimal: styles.minimal || "",
};

const sizeStyles: Record<string, string> = {
  sm: styles.sm || "",
  md: styles.md || "",
  lg: styles.lg || "",
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showArrows = true,
  showDots = true,
  showThumbnails = false,
  variant = "default",
  size = "md",
  className,
  style,
  onSlideChange,
}) => {
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselClass = [
    styles.carousel,
    variantStyles[variant],
    sizeStyles[size],
    className || "",
  ].filter(Boolean).join(" ");

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    onSlideChange?.(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex, items.length]);

  if (!items.length) {
    return null;
  }

  return (
    <div
      className={carouselClass}
      style={{
        fontFamily: effectiveFontFamily,
        ...style,
      }}
    >
      <div className={styles.carouselContainer}>
        <div
          className={styles.slidesContainer}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={item.id} className={styles.slide}>
              <div className={styles.slideContent}>
                {item.content}
              </div>
              {(item.title || item.description) && (
                <div className={styles.slideInfo}>
                  {item.title && (
                    <h3 className={styles.slideTitle}>{item.title}</h3>
                  )}
                  {item.description && (
                    <p className={styles.slideDescription}>{item.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {showArrows && items.length > 1 && (
          <>
            <button
              className={styles.arrowLeft}
              onClick={goToPrevious}
              disabled={isTransitioning}
            >
              ‹
            </button>
            <button
              className={styles.arrowRight}
              onClick={goToNext}
              disabled={isTransitioning}
            >
              ›
            </button>
          </>
        )}
      </div>

      {showDots && items.length > 1 && (
        <div className={styles.dotsContainer}>
          {items.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {showThumbnails && items.length > 1 && (
        <div className={styles.thumbnailsContainer}>
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ""}`}
              onClick={() => goToSlide(index)}
            >
              {item.content}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

