# Loom Design System - Utility Classes

A comprehensive utility-first CSS framework similar to Tailwind CSS, but built specifically for the Loom Design System.

## Installation

### CDN (Recommended for quick setup)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@loom/core@latest/loom-utilities.css">
```

### NPM Package
```bash
npm install @loom/core
```

```css
@import '@loom/core/loom-utilities.css';
```

### React Integration
```bash
npm install @loom/react
```

```tsx
import { loom, cn } from '@loom/react';
```

## Grid System

### Basic Grid
```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-primary text-white p-4 rounded-md">Item 1</div>
  <div class="bg-secondary text-white p-4 rounded-md">Item 2</div>
  <div class="bg-success text-white p-4 rounded-md">Item 3</div>
</div>
```

### Grid Columns
- `grid-cols-1` - 1 column
- `grid-cols-2` - 2 columns
- `grid-cols-3` - 3 columns
- `grid-cols-4` - 4 columns
- `grid-cols-5` - 5 columns
- `grid-cols-6` - 6 columns
- `grid-cols-12` - 12 columns

### Grid Rows
- `grid-rows-1` - 1 row
- `grid-rows-2` - 2 rows
- `grid-rows-3` - 3 rows
- `grid-rows-4` - 4 rows
- `grid-rows-5` - 5 rows
- `grid-rows-6` - 6 rows

### Grid Spanning
- `col-span-1` through `col-span-6`
- `col-span-full` - spans all columns
- `row-span-1` through `row-span-6`
- `row-span-full` - spans all rows

### Grid Gaps
- `gap-0` through `gap-24`
- `gap-x-0` through `gap-x-8` (column gap)
- `gap-y-0` through `gap-y-8` (row gap)

## Flexbox System

### Flex Direction
```html
<div class="flex flex-col gap-4">
  <div class="bg-primary text-white p-2">Item 1</div>
  <div class="bg-secondary text-white p-2">Item 2</div>
</div>
```

### Flex Properties
- `flex-row` - horizontal direction
- `flex-row-reverse` - horizontal reverse
- `flex-col` - vertical direction
- `flex-col-reverse` - vertical reverse

### Flex Wrap
- `flex-wrap` - wrap items
- `flex-wrap-reverse` - wrap reverse
- `flex-nowrap` - no wrapping

### Justify Content
- `justify-start` - start alignment
- `justify-end` - end alignment
- `justify-center` - center alignment
- `justify-between` - space between
- `justify-around` - space around
- `justify-evenly` - space evenly

### Align Items
- `items-start` - start alignment
- `items-end` - end alignment
- `items-center` - center alignment
- `items-baseline` - baseline alignment
- `items-stretch` - stretch items

### Flex Properties
- `flex-1` - flex: 1 1 0%
- `flex-auto` - flex: 1 1 auto
- `flex-initial` - flex: 0 1 auto
- `flex-none` - flex: none
- `flex-grow` - flex-grow: 1
- `flex-grow-0` - flex-grow: 0
- `flex-shrink` - flex-shrink: 1
- `flex-shrink-0` - flex-shrink: 0

## Spacing System

### Margin
```html
<div class="m-4 mx-auto my-2">
  <!-- margin: 1rem, margin-x: auto, margin-y: 0.5rem -->
</div>
```

- `m-0` through `m-24` - all margins
- `mx-0` through `mx-8` - horizontal margins
- `my-0` through `my-8` - vertical margins
- `mt-0` through `mt-8` - top margin
- `mr-0` through `mr-8` - right margin
- `mb-0` through `mb-8` - bottom margin
- `ml-0` through `ml-8` - left margin
- `m-auto` - margin: auto
- `mx-auto` - margin-x: auto
- `my-auto` - margin-y: auto

### Padding
```html
<div class="p-4 px-6 py-2">
  <!-- padding: 1rem, padding-x: 1.5rem, padding-y: 0.5rem -->
</div>
```

- `p-0` through `p-24` - all padding
- `px-0` through `px-8` - horizontal padding
- `py-0` through `py-8` - vertical padding
- `pt-0` through `pt-8` - top padding
- `pr-0` through `pr-8` - right padding
- `pb-0` through `pb-8` - bottom padding
- `pl-0` through `pl-8` - left padding

## Typography

### Font Sizes
```html
<h1 class="text-4xl font-bold">Large Heading</h1>
<p class="text-base text-gray-600">Body text</p>
```

- `text-xs` - 0.75rem
- `text-sm` - 0.875rem
- `text-base` - 1rem
- `text-lg` - 1.125rem
- `text-xl` - 1.25rem
- `text-2xl` - 1.5rem
- `text-3xl` - 1.875rem
- `text-4xl` - 2.25rem
- `text-5xl` - 3rem
- `text-6xl` - 3.75rem

### Font Weights
- `font-thin` - 100
- `font-light` - 300
- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700
- `font-extrabold` - 800
- `font-black` - 900

### Text Alignment
- `text-left` - left align
- `text-center` - center align
- `text-right` - right align
- `text-justify` - justify text

### Text Style
- `italic` - italic text
- `not-italic` - normal text
- `underline` - underlined text
- `no-underline` - no underline

### Text Transform
- `uppercase` - uppercase text
- `lowercase` - lowercase text
- `capitalize` - capitalize text
- `normal-case` - normal case

### Line Height
- `leading-none` - line-height: 1
- `leading-tight` - line-height: 1.25
- `leading-snug` - line-height: 1.375
- `leading-normal` - line-height: 1.5
- `leading-relaxed` - line-height: 1.625
- `leading-loose` - line-height: 2

### Text Overflow
- `truncate` - truncate with ellipsis

## Colors

### Background Colors
```html
<div class="bg-primary text-white p-4">Primary Background</div>
<div class="bg-gray-100 text-gray-900 p-4">Gray Background</div>
```

#### Semantic Colors
- `bg-primary` - primary color
- `bg-secondary` - secondary color
- `bg-success` - success color
- `bg-warning` - warning color
- `bg-error` - error color
- `bg-white` - white
- `bg-black` - black
- `bg-transparent` - transparent

#### Gray Scale
- `bg-gray-50` through `bg-gray-900`

### Text Colors
```html
<p class="text-primary">Primary text</p>
<p class="text-gray-600">Gray text</p>
```

#### Semantic Colors
- `text-primary` - primary color
- `text-secondary` - secondary color
- `text-success` - success color
- `text-warning` - warning color
- `text-error` - error color
- `text-white` - white
- `text-black` - black
- `text-transparent` - transparent

#### Gray Scale
- `text-gray-50` through `text-gray-900`

### Border Colors
```html
<div class="border border-primary">Primary border</div>
<div class="border-2 border-gray-300">Gray border</div>
```

#### Semantic Colors
- `border-primary` - primary color
- `border-secondary` - secondary color
- `border-success` - success color
- `border-warning` - warning color
- `border-error` - error color
- `border-white` - white
- `border-black` - black
- `border-transparent` - transparent

#### Gray Scale
- `border-gray-50` through `border-gray-900`

## Layout

### Display
- `block` - display: block
- `inline-block` - display: inline-block
- `inline` - display: inline
- `flex` - display: flex
- `inline-flex` - display: inline-flex
- `grid` - display: grid
- `inline-grid` - display: inline-grid
- `hidden` - display: none

### Position
- `static` - position: static
- `fixed` - position: fixed
- `absolute` - position: absolute
- `relative` - position: relative
- `sticky` - position: sticky

### Width & Height
- `w-full` - width: 100%
- `w-auto` - width: auto
- `w-screen` - width: 100vw
- `w-min` - width: min-content
- `w-max` - width: max-content
- `w-fit` - width: fit-content

- `h-full` - height: 100%
- `h-auto` - height: auto
- `h-screen` - height: 100vh
- `h-min` - height: min-content
- `h-max` - height: max-content
- `h-fit` - height: fit-content

## Borders

### Border Width
```html
<div class="border border-primary">Thin border</div>
<div class="border-2 border-secondary">Medium border</div>
```

- `border-0` - no border
- `border` - 1px border
- `border-2` - 2px border
- `border-4` - 4px border
- `border-8` - 8px border

### Border Style
- `border-solid` - solid border
- `border-dashed` - dashed border
- `border-dotted` - dotted border
- `border-double` - double border
- `border-none` - no border

### Border Radius
```html
<div class="rounded-lg">Rounded corners</div>
<div class="rounded-full">Fully rounded</div>
```

- `rounded-none` - no radius
- `rounded-sm` - small radius
- `rounded` - default radius
- `rounded-md` - medium radius
- `rounded-lg` - large radius
- `rounded-xl` - extra large radius
- `rounded-2xl` - 2x large radius
- `rounded-3xl` - 3x large radius
- `rounded-full` - fully rounded

## Shadows

```html
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
```

- `shadow-none` - no shadow
- `shadow-sm` - small shadow
- `shadow` - default shadow
- `shadow-md` - medium shadow
- `shadow-lg` - large shadow
- `shadow-xl` - extra large shadow
- `shadow-2xl` - 2x large shadow
- `shadow-inner` - inner shadow

## React Integration

### Using Utility Functions
```tsx
import { loom, cn } from '@loom/react';

function MyComponent() {
  return (
    <div className={loom.cn(
      loom.layout.display.flex,
      loom.flex.justify.center,
      loom.flex.items.center,
      loom.spacing.padding.all(4),
      loom.colors.background.primary,
      loom.colors.text.white,
      loom.borders.radius('lg')
    )}>
      Centered content
    </div>
  );
}
```

### Pre-built Common Styles
```tsx
import { loom } from '@loom/react';

function Card() {
  return (
    <div className={loom.common.card}>
      <h3 className={loom.cn(loom.typography.size('lg'), loom.typography.weight.semibold)}>
        Card Title
      </h3>
      <p className={loom.typography.size('sm')}>
        Card content
      </p>
    </div>
  );
}

function Button({ variant = 'primary' }) {
  const baseClasses = loom.common.button;
  const variantClasses = variant === 'primary' 
    ? loom.cn(loom.colors.background.primary, loom.colors.text.white)
    : loom.cn(loom.colors.background.white, loom.colors.text.primary);
    
  return (
    <button className={loom.cn(baseClasses, variantClasses)}>
      Click me
    </button>
  );
}
```

### Utility Demo Component
```tsx
import { UtilityDemo } from '@loom/react';

function App() {
  return (
    <div>
      <UtilityDemo />
    </div>
  );
}
```

## Best Practices

1. **Use semantic class names** - Prefer `bg-primary` over `bg-blue-500`
2. **Combine utilities** - Use multiple classes for complex layouts
3. **Use the `cn` function** - For conditional classes in React
4. **Start with common patterns** - Use pre-built common styles as starting points
5. **Keep it readable** - Use line breaks for complex className strings

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

The utility classes are optimized for:
- Minimal CSS bundle size
- Fast rendering
- Tree-shaking support
- No runtime JavaScript required

