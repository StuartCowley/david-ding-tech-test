import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState();
  const handleInputChange = (e) => setValue(e.target.value);
  return (
    <>
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          onChange={handleInputChange}
        ></input>
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
