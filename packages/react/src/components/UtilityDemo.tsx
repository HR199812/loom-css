"use client";
import React from "react";
import { loom } from "../utils/classNames";

export const UtilityDemo: React.FC = () => {
  return (
    <div className={loom.cn(loom.layout.display.block, loom.spacing.padding.all(8))}>
      <h1 className={loom.cn(loom.typography.size('3xl'), loom.typography.weight.bold, loom.typography.align.center, loom.spacing.margin.bottom(8))}>
        Loom Utility Classes Demo
      </h1>
      
      {/* Grid Example */}
      <div className={loom.cn(loom.layout.display.block, loom.spacing.margin.bottom(8))}>
        <h2 className={loom.cn(loom.typography.size('2xl'), loom.typography.weight.semibold, loom.spacing.margin.bottom(4))}>
          Grid System
        </h2>
        <div className={loom.cn(loom.layout.display.grid, loom.grid.cols(3), loom.grid.gap(4))}>
          <div className={loom.cn(loom.colors.background.primary, loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Grid Item 1
          </div>
          <div className={loom.cn(loom.colors.background.secondary, loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Grid Item 2
          </div>
          <div className={loom.cn(loom.colors.background.success, loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Grid Item 3
          </div>
        </div>
      </div>

      {/* Flex Example */}
      <div className={loom.cn(loom.layout.display.block, loom.spacing.margin.bottom(8))}>
        <h2 className={loom.cn(loom.typography.size('2xl'), loom.typography.weight.semibold, loom.spacing.margin.bottom(4))}>
          Flexbox System
        </h2>
        <div className={loom.cn(loom.layout.display.flex, loom.flex.justify.between, loom.flex.items.center, loom.colors.background.gray(100), loom.spacing.padding.all(4), loom.borders.radius('md'))}>
          <div className={loom.cn(loom.colors.background.warning, loom.spacing.padding.all(2), loom.borders.radius('sm'))}>
            Flex Item 1
          </div>
          <div className={loom.cn(loom.colors.background.error, loom.spacing.padding.all(2), loom.borders.radius('sm'))}>
            Flex Item 2
          </div>
          <div className={loom.cn(loom.colors.background.success, loom.spacing.padding.all(2), loom.borders.radius('sm'))}>
            Flex Item 3
          </div>
        </div>
      </div>

      {/* Typography Example */}
      <div className={loom.cn(loom.layout.display.block, loom.spacing.margin.bottom(8))}>
        <h2 className={loom.cn(loom.typography.size('2xl'), loom.typography.weight.semibold, loom.spacing.margin.bottom(4))}>
          Typography
        </h2>
        <div className={loom.cn(loom.layout.display.block, loom.spacing.padding.all(4), loom.colors.background.gray(50), loom.borders.radius('md'))}>
          <p className={loom.cn(loom.typography.size('xs'), loom.spacing.margin.bottom(2))}>
            Extra Small Text (xs)
          </p>
          <p className={loom.cn(loom.typography.size('sm'), loom.spacing.margin.bottom(2))}>
            Small Text (sm)
          </p>
          <p className={loom.cn(loom.typography.size('base'), loom.spacing.margin.bottom(2))}>
            Base Text (base)
          </p>
          <p className={loom.cn(loom.typography.size('lg'), loom.spacing.margin.bottom(2))}>
            Large Text (lg)
          </p>
          <p className={loom.cn(loom.typography.size('xl'), loom.spacing.margin.bottom(2))}>
            Extra Large Text (xl)
          </p>
          <p className={loom.cn(loom.typography.size('2xl'), loom.typography.weight.bold)}>
            Heading Text (2xl)
          </p>
        </div>
      </div>

      {/* Colors Example */}
      <div className={loom.cn(loom.layout.display.block, loom.spacing.margin.bottom(8))}>
        <h2 className={loom.cn(loom.typography.size('2xl'), loom.typography.weight.semibold, loom.spacing.margin.bottom(4))}>
          Color System
        </h2>
        <div className={loom.cn(loom.layout.display.grid, loom.grid.cols(2), loom.grid.gap(4))}>
          <div className={loom.cn(loom.colors.background.primary, loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Primary
          </div>
          <div className={loom.cn(loom.colors.background.secondary, loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Secondary
          </div>
          <div className={loom.cn(loom.colors.background.success, loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Success
          </div>
          <div className={loom.cn(loom.colors.background.warning, loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Warning
          </div>
          <div className={loom.cn(loom.colors.background.error, loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Error
          </div>
          <div className={loom.cn(loom.colors.background.gray(500), loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center, loom.colors.text.white)}>
            Gray 500
          </div>
        </div>
      </div>

      {/* Common Components Example */}
      <div className={loom.cn(loom.layout.display.block, loom.spacing.margin.bottom(8))}>
        <h2 className={loom.cn(loom.typography.size('2xl'), loom.typography.weight.semibold, loom.spacing.margin.bottom(4))}>
          Common Components
        </h2>
        
        {/* Card */}
        <div className={loom.cn(loom.common.card, loom.spacing.margin.bottom(4))}>
          <h3 className={loom.cn(loom.typography.size('lg'), loom.typography.weight.semibold, loom.spacing.margin.bottom(2))}>
            Card Component
          </h3>
          <p className={loom.cn(loom.typography.size('sm'), loom.colors.text.gray(600))}>
            This is a card built using Loom utility classes.
          </p>
        </div>

        {/* Button */}
        <button className={loom.cn(loom.common.button, loom.colors.background.primary, loom.colors.text.white, loom.colors.border.primary, loom.spacing.margin.right(2))}>
          Primary Button
        </button>
        
        <button className={loom.cn(loom.common.button, loom.colors.background.white, loom.colors.text.primary, loom.colors.border.primary)}>
          Secondary Button
        </button>

        {/* Input */}
        <div className={loom.cn(loom.layout.display.block, loom.spacing.margin.top(4))}>
          <input 
            type="text" 
            placeholder="Input field with utility classes"
            className={loom.cn(loom.common.input, loom.spacing.margin.bottom(2))}
          />
        </div>
      </div>

      {/* Responsive Grid */}
      <div className={loom.cn(loom.layout.display.block, loom.spacing.margin.bottom(8))}>
        <h2 className={loom.cn(loom.typography.size('2xl'), loom.typography.weight.semibold, loom.spacing.margin.bottom(4))}>
          Responsive Grid
        </h2>
        <div className={loom.cn(loom.common.gridResponsive)}>
          <div className={loom.cn(loom.colors.background.gray(200), loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center)}>
            Responsive Item 1
          </div>
          <div className={loom.cn(loom.colors.background.gray(200), loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center)}>
            Responsive Item 2
          </div>
          <div className={loom.cn(loom.colors.background.gray(200), loom.spacing.padding.all(4), loom.borders.radius('md'), loom.typography.align.center)}>
            Responsive Item 3
          </div>
        </div>
      </div>
    </div>
  );
};

