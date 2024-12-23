import React, { useState } from 'react';

/**
 * SearchableList
 * 
 * This component displays a list of items and provides a search bar for users to type in queries.
 * Any item that matches the search query is highlighted in real-time. This demonstrates how
 * to handle user input, filter data, and conditionally render elements based on state in React.
 */

function SearchableList() {
  // 'items' is our static or predefined list of strings that we will filter and display.
  const [items] = useState([
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express',
    'MongoDB',
  ]);

  // 'searchTerm' stores the current text in the search bar.
  // 'setSearchTerm' updates that value as the user types.
  const [searchTerm, setSearchTerm] = useState('');

  // Convert the searchTerm to lowercase for case-insensitive matching.
  const lowerCaseTerm = searchTerm.toLowerCase();

  /**
   * filteredItems
   * Filters items by checking if each item includes the lowercase search term.
   */
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(lowerCaseTerm)
  );

  /**
   * highlightMatch
   * Returns an element that highlights the portion of the text matching the search term.
   * @param {string} text 
   */
  const highlightMatch = (text) => {
    if (!searchTerm) return text;
    // Find the portion of the text that matches the searchTerm.
    const idx = text.toLowerCase().indexOf(lowerCaseTerm);
    if (idx === -1) return text;

    const originalText = text.substring(idx, idx + searchTerm.length);
    
    // Break the string into three parts: before, the match, and after.
    return (
      <>
        {text.substring(0, idx)}
        <span style={{ backgroundColor: 'yellow' }}>{originalText}</span>
        {text.substring(idx + searchTerm.length)}
      </>
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Searchable List</h1>

      {/* Search Input */}
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      {/* Display filtered items. Matched parts are highlighted. */}
      <ul style={{ paddingLeft: '20px' }}>
        {filteredItems.map(item => (
          <li key={item} style={{ marginBottom: '8px' }}>
            {highlightMatch(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableList;
