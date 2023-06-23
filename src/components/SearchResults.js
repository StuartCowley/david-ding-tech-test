import React from "react";
import "../styles/search-results.css";
const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="no-results-msg">No results!</p>;
  } else {
    return (
      <>
        <div className="search-results">
          {results.map((result, index) => (
            <img
              key={index}
              className="results-images"
              alt="moon-pic"
              src={result}
            ></img>
          ))}
        </div>
      </>
    );
  }
};

export default SearchResults;
