import React, { createContext, useState, useMemo } from 'react';

/**
 * ThemeContext.js
 *
 * This file defines a context for theming (light/dark) 
 * and a provider that manages the global theme state.
 */

// 1. Create the Context object
export const ThemeContext = createContext();

// 2. Create a custom provider component
export function ThemeProvider({ children }) {
  // State that holds the current theme: 'light' or 'dark'
  const [theme, setTheme] = useState('light');

  /**
   * toggleTheme
   * Toggles the global theme between 'light' and 'dark'.
   */
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  /**
   * memoizedValue
   * We use useMemo to avoid unnecessary re-renders. 
   * This object holds the current theme and the toggle function.
   */
  const memoizedValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  // The ThemeContext provider supplies the theme and toggle function to descendants.
  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
}
