import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext'; // to access the current theme

import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import SearchablePage from './pages/SearchablePage';
import ToggleThemeButton from './components/ToggleThemeButton';

/**
 * App.js
 *
 * The root of our single-page application. Now includes a theme toggle
 * powered by React Context and a toggle button in the navbar.
 */
function App() {
  // Access the theme from the ThemeContext
  const { theme } = useContext(ThemeContext);

  return (
    /**
     * We apply a dynamic class or inline style based on 'theme'
     * This allows everything within <App> to change color accordingly.
     */
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <BrowserRouter>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>
            Home
          </Link>
          <Link to="/todo" style={{ marginRight: '15px' }}>
            To-Do List
          </Link>
          <Link to="/searchable">
            Searchable List
          </Link>

          {/* The toggle button that allows switching between light and dark mode */}
          <ToggleThemeButton />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/searchable" element={<SearchablePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
