/**
 * Loom Design System - Utility Class Name Generator
 * Similar to Tailwind CSS but with Loom's design tokens
 */

// Type definitions for utility classes
export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridRows = 1 | 2 | 3 | 4 | 5 | 6;
export type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type FontWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'white' | 'black' | 'gray';
export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type Shadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner';

// Grid utilities
export const grid = {
  cols: (cols: GridCols) => `grid-cols-${cols}`,
  rows: (rows: GridRows) => `grid-rows-${rows}`,
  gap: (gap: Spacing) => `gap-${gap}`,
  gapX: (gap: Spacing) => `gap-x-${gap}`,
  gapY: (gap: Spacing) => `gap-y-${gap}`,
  colSpan: (span: number) => `col-span-${span}`,
  rowSpan: (span: number) => `row-span-${span}`,
};

// Flexbox utilities
export const flex = {
  direction: {
    row: 'flex-row',
    rowReverse: 'flex-row-reverse',
    col: 'flex-col',
    colReverse: 'flex-col-reverse',
  },
  wrap: {
    wrap: 'flex-wrap',
    wrapReverse: 'flex-wrap-reverse',
    nowrap: 'flex-nowrap',
  },
  justify: {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  },
  items: {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  },
  grow: (grow: boolean = true) => grow ? 'flex-grow' : 'flex-grow-0',
  shrink: (shrink: boolean = true) => shrink ? 'flex-shrink' : 'flex-shrink-0',
  basis: {
    auto: 'flex-auto',
    initial: 'flex-initial',
    none: 'flex-none',
    full: 'flex-1',
  },
};

// Spacing utilities
export const spacing = {
  margin: {
    all: (size: Spacing) => `m-${size}`,
    x: (size: Spacing) => `mx-${size}`,
    y: (size: Spacing) => `my-${size}`,
    top: (size: Spacing) => `mt-${size}`,
    right: (size: Spacing) => `mr-${size}`,
    bottom: (size: Spacing) => `mb-${size}`,
    left: (size: Spacing) => `ml-${size}`,
    auto: 'm-auto',
    autoX: 'mx-auto',
    autoY: 'my-auto',
  },
  padding: {
    all: (size: Spacing) => `p-${size}`,
    x: (size: Spacing) => `px-${size}`,
    y: (size: Spacing) => `py-${size}`,
    top: (size: Spacing) => `pt-${size}`,
    right: (size: Spacing) => `pr-${size}`,
    bottom: (size: Spacing) => `pb-${size}`,
    left: (size: Spacing) => `pl-${size}`,
  },
};

// Typography utilities
export const typography = {
  size: (size: FontSize) => `text-${size}`,
  weight: (weight: FontWeight) => `font-${weight}`,
  align: (align: TextAlign) => `text-${align}`,
  style: {
    italic: 'italic',
    normal: 'not-italic',
  },
  decoration: {
    underline: 'underline',
    none: 'no-underline',
  },
  transform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    normal: 'normal-case',
  },
  lineHeight: {
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  },
  truncate: 'truncate',
};

// Color utilities
export const colors = {
  background: {
    transparent: 'bg-transparent',
    white: 'bg-white',
    black: 'bg-black',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
    gray: (shade: ColorShade) => `bg-gray-${shade}`,
  },
  text: {
    transparent: 'text-transparent',
    white: 'text-white',
    black: 'text-black',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    gray: (shade: ColorShade) => `text-gray-${shade}`,
  },
  border: {
    transparent: 'border-transparent',
    white: 'border-white',
    black: 'border-black',
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    warning: 'border-warning',
    error: 'border-error',
    gray: (shade: ColorShade) => `border-gray-${shade}`,
  },
};

// Layout utilities
export const layout = {
  display: {
    block: 'block',
    inlineBlock: 'inline-block',
    inline: 'inline',
    flex: 'flex',
    inlineFlex: 'inline-flex',
    grid: 'grid',
    inlineGrid: 'inline-grid',
    hidden: 'hidden',
  },
  position: {
    static: 'static',
    fixed: 'fixed',
    absolute: 'absolute',
    relative: 'relative',
    sticky: 'sticky',
  },
  width: {
    auto: 'w-auto',
    full: 'w-full',
    screen: 'w-screen',
    min: 'w-min',
    max: 'w-max',
    fit: 'w-fit',
  },
  height: {
    auto: 'h-auto',
    full: 'h-full',
    screen: 'h-screen',
    min: 'h-min',
    max: 'h-max',
    fit: 'h-fit',
  },
};

// Border utilities
export const borders = {
  width: {
    none: 'border-0',
    thin: 'border',
    medium: 'border-2',
    thick: 'border-4',
    extra: 'border-8',
  },
  style: {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    double: 'border-double',
    none: 'border-none',
  },
  radius: (radius: BorderRadius) => `rounded-${radius}`,
};

// Shadow utilities
export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
};

// Opacity utilities
export const opacity = {
  none: 'opacity-0',
  low: 'opacity-25',
  medium: 'opacity-50',
  high: 'opacity-75',
  full: 'opacity-100',
};

// Cursor utilities
export const cursor = {
  auto: 'cursor-auto',
  default: 'cursor-default',
  pointer: 'cursor-pointer',
  wait: 'cursor-wait',
  text: 'cursor-text',
  move: 'cursor-move',
  help: 'cursor-help',
  notAllowed: 'cursor-not-allowed',
};

// Transition utilities
export const transitions = {
  none: 'transition-none',
  all: 'transition-all',
  colors: 'transition-colors',
  opacity: 'transition-opacity',
  shadow: 'transition-shadow',
  transform: 'transition-transform',
  duration: {
    fast: 'duration-150',
    normal: 'duration-200',
    slow: 'duration-300',
  },
  ease: {
    linear: 'ease-linear',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
  },
};

// Utility function to combine class names
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Pre-built common combinations
export const common = {
  // Card styles
  card: cn(
    layout.display.block,
    borders.radius('lg'),
    borders.width.thin,
    borders.style.solid,
    colors.border.gray(200),
    shadows.md,
    colors.background.white,
    spacing.padding.all(6)
  ),
  
  // Button base styles
  button: cn(
    layout.display.inlineFlex,
    layout.position.relative,
    spacing.padding.x(4),
    spacing.padding.y(2),
    borders.radius('md'),
    borders.width.thin,
    borders.style.solid,
    typography.weight.medium,
    typography.size('sm'),
    transitions.all,
    transitions.duration.fast,
    cursor.pointer
  ),
  
  // Input base styles
  input: cn(
    layout.display.block,
    layout.width.full,
    spacing.padding.x(3),
    spacing.padding.y(2),
    borders.radius('md'),
    borders.width.thin,
    borders.style.solid,
    colors.border.gray(300),
    colors.background.white,
    typography.size('sm'),
    transitions.colors
  ),
  
  // Container styles
  container: cn(
    layout.display.block,
    layout.width.full,
    spacing.margin.autoX,
    spacing.padding.x(4)
  ),
  
  // Flex center
  flexCenter: cn(
    layout.display.flex,
    flex.justify.center,
    flex.items.center
  ),
  
  // Grid responsive
  gridResponsive: cn(
    layout.display.grid,
    grid.cols(1),
    grid.gap(4),
    'md:grid-cols-2',
    'lg:grid-cols-3'
  ),
};

// Export all utilities as a single object
export const loom = {
  grid,
  flex,
  spacing,
  typography,
  colors,
  layout,
  borders,
  shadows,
  opacity,
  cursor,
  transitions,
  common,
  cn,
};

