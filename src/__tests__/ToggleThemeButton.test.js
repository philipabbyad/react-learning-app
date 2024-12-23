import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import ToggleThemeButton from '../components/ToggleThemeButton';

describe('ToggleThemeButton', () => {
  test('toggles text between "Light Mode" and "Dark Mode"', () => {
    render(
      <ThemeProvider>
        <ToggleThemeButton />
      </ThemeProvider>
    );

    // Default theme is 'light', so we expect the button to say "Switch to Dark Mode"
    const button = screen.getByRole('button', { name: /Switch to Dark Mode/i });
    expect(button).toBeInTheDocument();

    // Click the button to toggle
    fireEvent.click(button);

    // Now the theme is 'dark', so the button text changes to "Switch to Light Mode"
    expect(screen.getByRole('button', { name: /Switch to Light Mode/i })).toBeInTheDocument();
  });
});
