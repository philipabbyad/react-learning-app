import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import SearchablePage from './pages/SearchablePage';

/**
 * App.js
 *
 * The root of our single-page application. We use React Router to define
 * multiple routes for Home, To-Do List, and Searchable List.
 */
function App() {
  return (
    <BrowserRouter>
      {/*
        Simple navbar with Link components to navigate between routes.
        Note that <Link> from react-router-dom updates the URL
        without causing a full page reload.
      */}
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
      </nav>

      {/* 
        <Routes> defines all the valid routes in the app.
        <Route path='...' element={<Component />} /> maps a path to a component.
      */}
      <Routes>
        {/* Route for the original content (HelloWorld, Greeting, Counter) */}
        <Route path="/" element={<Home />} />

        {/* Route for the Dynamic To-Do List */}
        <Route path="/todo" element={<TodoPage />} />

        {/* Route for the Searchable List */}
        <Route path="/searchable" element={<SearchablePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

