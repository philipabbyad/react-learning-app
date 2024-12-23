import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // <-- import your ThemeProvider

// This file is the entry point of the React application.
// It takes the top-level <App /> component and renders it into the 'root' DOM element in index.html.

// Get a reference to the 'root' HTML element where we'll mount our React app
const container = document.getElementById('root');

// Create a React root using the container
const root = createRoot(container);

/**
 * Render the <App /> component (our entire application) inside the 'root' div
 * We wrap <App /> in <ThemeProvider> so that the entire app,
 * including all routes and components, can access the theme context.
 */
root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
