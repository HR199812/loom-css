"use client";
import React, { createContext, useContext, ReactNode } from 'react';

export interface LoomConfig {
  fontFamily?: string;
  theme?: 'light' | 'dark' | 'system';
  colors?: {
    primary?: string;
    secondary?: string;
    success?: string;
    warning?: string;
    error?: string;
    background?: string;
    foreground?: string;
  };
  spacing?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  boxShadow?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

interface LoomConfigContextType {
  config: LoomConfig;
  updateConfig: (newConfig: Partial<LoomConfig>) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

const LoomConfigContext = createContext<LoomConfigContextType | undefined>(undefined);

export const useLoomConfig = () => {
  const context = useContext(LoomConfigContext);
  if (!context) {
    throw new Error('useLoomConfig must be used within a LoomConfigProvider');
  }
  return context;
};

interface LoomConfigProviderProps {
  children: ReactNode;
  config?: LoomConfig;
}

export const LoomConfigProvider: React.FC<LoomConfigProviderProps> = ({
  children,
  config: initialConfig = {},
}) => {
  const [config, setConfig] = React.useState<LoomConfig>({
    fontFamily: 'var(--loom-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
    theme: 'system',
    colors: {
      primary: 'var(--loom-color-primary, #3b82f6)',
      secondary: 'var(--loom-color-secondary, #64748b)',
      success: 'var(--loom-color-success, #10b981)',
      warning: 'var(--loom-color-warning, #f59e0b)',
      error: 'var(--loom-color-error, #ef4444)',
      background: 'var(--loom-color-background, #ffffff)',
      foreground: 'var(--loom-color-foreground, #0f172a)',
    },
    spacing: {
      xs: 'var(--loom-spacing-xs, 0.25rem)',
      sm: 'var(--loom-spacing-sm, 0.5rem)',
      md: 'var(--loom-spacing-md, 1rem)',
      lg: 'var(--loom-spacing-lg, 1.5rem)',
      xl: 'var(--loom-spacing-xl, 2rem)',
    },
    borderRadius: {
      sm: 'var(--loom-radius-sm, 0.125rem)',
      md: 'var(--loom-radius-md, 0.375rem)',
      lg: 'var(--loom-radius-lg, 0.5rem)',
      xl: 'var(--loom-radius-xl, 0.75rem)',
    },
    boxShadow: {
      sm: 'var(--loom-shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05))',
      md: 'var(--loom-shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06))',
      lg: 'var(--loom-shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))',
      xl: 'var(--loom-shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04))',
    },
    ...initialConfig,
  });

  const updateConfig = React.useCallback((newConfig: Partial<LoomConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  const setTheme = React.useCallback((theme: 'light' | 'dark' | 'system') => {
    setConfig(prev => ({ ...prev, theme }));
    
    // Apply theme to document
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else if (theme === 'light') {
        root.classList.add('light');
        root.classList.remove('dark');
      } else {
        // System theme - remove both classes to use CSS media queries
        root.classList.remove('light', 'dark');
      }
    }
  }, []);

  // Apply initial theme
  React.useEffect(() => {
    if (config.theme && typeof document !== 'undefined') {
      setTheme(config.theme);
    }
  }, [config.theme, setTheme]);

  const value = React.useMemo(() => ({
    config,
    updateConfig,
    setTheme,
  }), [config, updateConfig, setTheme]);

  return (
    <LoomConfigContext.Provider value={value}>
      {children}
    </LoomConfigContext.Provider>
  );
};

// Export the context for advanced usage
export { LoomConfigContext };
