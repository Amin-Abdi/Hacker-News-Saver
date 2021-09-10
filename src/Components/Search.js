import React from "react";

const Search = () => {
  const handSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="search">
      <form className="searchForm" onSubmit={handSubmit}>
        <div className="formInput">
          <input type="text" id="name" />
        </div>
      </form>
    </section>
  );
};

export default Search;
