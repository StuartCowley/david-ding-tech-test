import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = () => {
  const [value, setValue] = useState();
  const handleInputChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    getImages(value);
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
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
