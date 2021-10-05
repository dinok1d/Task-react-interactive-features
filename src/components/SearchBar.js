import React from "react";
// Styling

const SearchBar = ({ setQuery }) => {
  return (
    <input
      className="searchBar"
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
