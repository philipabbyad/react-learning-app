import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('counter increments on button click', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /Increment/i });
  const paragraph = screen.getByText(/You clicked 0 times/i);
  
  fireEvent.click(button);
  expect(paragraph).toHaveTextContent('You clicked 1 times.');
  
  fireEvent.click(button);
  expect(paragraph).toHaveTextContent('You clicked 2 times.');
});
