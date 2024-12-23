import React from 'react';
import SearchableList from '../components/SearchableList';

/**
 * SearchablePage.js
 *
 * A dedicated page displaying the Searchable List feature.
 * Users can type in a search bar to filter and highlight matching items in real time.
 */
function SearchablePage() {
  return (
    <div>
      <h1>Searchable List Feature</h1>
      <SearchableList />
    </div>
  );
}

export default SearchablePage;
