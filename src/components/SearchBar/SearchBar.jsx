import { useNavigate } from "react-router";
import { useRef } from "react";
import { getBooks } from "../services/fetch-services";
import classes from "./SearchBar.module.scss";
import { IoSearchCircle } from "react-icons/io5";

const SearchBar = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setError(null);
    navigate(`/search/${inputRef.current.value}`);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        type="search"
        id="searchInput"
        className={classes.searchBar}
        name="searchTerm"
        placeholder="look for a book"
        ref={inputRef}
      />
      <button type="submit" className={classes.searchBtn}>
        <IoSearchCircle className={classes.icon} />
      </button>
    </form>
  );
};

export default SearchBar;
