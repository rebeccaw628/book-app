import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import classes from "./Results.module.scss";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookGrid from "../../components/BookGrid/BookGrid";
import { getBooks } from "../../components/services/fetch-services";

const Results = () => {
  const [selected, setSelected] = useState(10);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const { searchTerm } = useParams();

  const handleSelection = (e) => {
    setSelected(e.target.value);
  };

  const nextPage = () => {
    setPage((p) => p + 1);
    scrollToTop();
  };

  const previousPage = () => {
    setPage((p) => p - 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getBooks(searchTerm, 1, selected)
      .then((data) => {
        setPage(1);
        setBooks(data);
        setNoResults(false);
      })
      .catch((e) => {
        setError(e);
        setNoResults(true);
        setBooks(null);
      });
  }, [searchTerm]);

  useEffect(() => {
    getBooks(searchTerm, page, selected)
      .then((data) => {
        setBooks(data);
        setNoResults(false);
      })
      .catch((e) => {
        setNoResults(true);
      });
  }, [page, selected]);

  return (
    <div className={classes.results}>
      <Logo />
      <Header />
      <SearchBar />
      <div className={classes.results__display}>
        <div className={classes.results__subheading}>
          <p className={classes.results__text}>
            {!books ? "No results found for" : "Showing results for"}
            <span className={classes.results__term}> '{searchTerm}'</span>
          </p>
          <label htmlFor="displayNumber" className={classes.results__text}>
            Results per page:
            <select
              id="displayNumber"
              className={classes.results__select}
              value={selected}
              onChange={handleSelection}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </label>
        </div>
        {books && <BookGrid books={books} />}
        <div className={classes.results__nav}>
          {page > 1 && (
            <button className={classes.results__btn} onClick={previousPage}>
              Previous page
            </button>
          )}
          <p>Page: {page} </p>
          {books && (
            <button
              className={classes.results__btn}
              onClick={nextPage}
              disabled={noResults}
              aria-disabled={noResults}
            >
              {noResults ? "No more results" : "Next page"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
