import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * ToggleThemeButton.js
 *
 * A simple button that uses ThemeContext to toggle between light and dark themes.
 */
function ToggleThemeButton() {
  // We consume the context to gain access to theme and toggleTheme
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ marginLeft: '10px' }}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ToggleThemeButton;
