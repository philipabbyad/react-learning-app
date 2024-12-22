import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';

test('renders greeting with a name', () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText(/Hello, Alice!/i)).toBeInTheDocument();
});

test('renders greeting with another name', () => {
  render(<Greeting name="Bob" />);
  expect(screen.getByText(/Hello, Bob!/i)).toBeInTheDocument();
});
