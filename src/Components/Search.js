import React, { useRef } from "react";
import { useGlobalContext } from "../Context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchInput = useRef("");

  //When the form is submitted it changes the search input for the API
  const handSubmit = (e) => {
    e.preventDefault();
    //console.log("submitted");
    setSearchTerm(searchInput.current.value);
  };

  return (
    <section className="search">
      <form className="searchForm" onSubmit={handSubmit}>
        <div className="formInput">
          <input
            type="text"
            id="name"
            ref={searchInput}
            placeholder="e.g.Python"
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
