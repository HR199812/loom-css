/** @type {import('loom').LoomConfig} */
const config = {
  // Design tokens
  tokens: {
    // Colors
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554',
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      success: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
        950: '#022c22',
      },
      warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
        950: '#451a03',
      },
      error: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a',
      },
    },
    
    // Spacing
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
    
    // Typography
    typography: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
    
    // Border radius
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    
    // Shadows
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },
  
  // CSS custom properties prefix
  prefix: 'loom',
  
  // Theme configuration
  theme: {
    // Default theme
    default: {
      colors: {
        background: '#ffffff',
        foreground: '#0f172a',
        primary: '#3b82f6',
        secondary: '#64748b',
        muted: '#f1f5f9',
        accent: '#f1f5f9',
        destructive: '#ef4444',
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#3b82f6',
      },
    },
    
    // Dark theme
    dark: {
      colors: {
        background: '#0f172a',
        foreground: '#f8fafc',
        primary: '#3b82f6',
        secondary: '#64748b',
        muted: '#1e293b',
        accent: '#1e293b',
        destructive: '#ef4444',
        border: '#334155',
        input: '#334155',
        ring: '#3b82f6',
      },
    },
  },
  
  // Component configuration
  components: {
    // Global component settings
    global: {
      fontFamily: 'var(--loom-font-family)',
      borderRadius: 'var(--loom-radius-md)',
    },
    
    // Individual component configurations
    button: {
      variants: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      sizes: ['default', 'sm', 'lg', 'icon'],
    },
    
    input: {
      variants: ['default', 'file', 'password'],
      sizes: ['default', 'sm', 'lg'],
    },
    
    card: {
      variants: ['default', 'outline'],
    },
  },
  
  // Utility classes configuration
  utilities: {
    // Enable/disable utility classes
    spacing: true,
    colors: true,
    typography: true,
    layout: true,
    flexbox: true,
    grid: true,
    borders: true,
    shadows: true,
    opacity: true,
    transitions: true,
  },
  
  // Build configuration
  build: {
    // Output directory for generated CSS
    outputDir: './dist',
    
    // Generate utility classes
    generateUtilities: true,
    
    // Generate component styles
    generateComponents: true,
    
    // Minify output
    minify: true,
    
    // Source maps
    sourceMap: false,
  },
  
  // Development configuration
  dev: {
    // Watch mode
    watch: true,
    
    // Hot reload
    hotReload: true,
    
    // Debug mode
    debug: false,
  },
};

module.exports = config;
