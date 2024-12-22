import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const heading = screen.getByText(/React Learning Tool/i);
  expect(heading).toBeInTheDocument();
});
