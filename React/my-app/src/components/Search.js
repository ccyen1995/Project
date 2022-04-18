import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input type="text" onChange={inputHandler} name="" id="" />
      <button onClick={search}>search</button>
    </div>
  );
};

export default Search;
