import React from "react";
import "../styles/search-results.css";
const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  } else {
    return (
      <>
        <p>Search Results</p>
        {results.map((result) => (
          <img className="card-image" alt="moon-pic" src={result}></img>
        ))}
      </>
    );
  }
};

export default SearchResults;
