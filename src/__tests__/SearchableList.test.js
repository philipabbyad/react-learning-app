import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchableList from '../components/SearchableList';

describe('SearchableList Component', () => {
  test('renders all items by default', () => {
    render(<SearchableList />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });

  test('filters and highlights items based on search term', () => {
    render(<SearchableList />);
    const searchInput = screen.getByPlaceholderText('Type to search...');

    fireEvent.change(searchInput, { target: { value: 'react' } });
    // Should only see "React" item in the list
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText('JavaScript')).not.toBeInTheDocument();
    expect(screen.queryByText('MongoDB')).not.toBeInTheDocument();

    // The matched term in "React" should be highlighted
    const highlightedText = screen.getByText('React').querySelector('span');
    expect(highlightedText).toHaveStyle('background-color: yellow');
  });
});
