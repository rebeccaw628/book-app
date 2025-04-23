import React from "react";
import classes from "./SearchBar.module.scss";
import { IoSearchCircle } from "react-icons/io5";

const SearchBar = () => {
  return (
    <form className={classes.form}>
      <input
        type="search"
        id="searchInput"
        className={classes.searchBar}
        name="searchTerm"
        placeholder="look for a book"
      />
      <button type="submit" className={classes.searchBtn}>
        <IoSearchCircle className={classes.icon} />
      </button>
    </form>
  );
};

export default SearchBar;
