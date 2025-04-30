import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import classes from "./Results.module.scss";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookGrid from "../../components/BookGrid/BookGrid";
import {
  getBooks,
  // updateDisplay,
} from "../../components/services/fetch-services";

const Results = () => {
  // const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState(10);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  // const [lastPage, setLastPage] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const { searchTerm } = useParams();
  // const navigate = useNavigate();

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

  console.log(selected);

  useEffect(() => {
    // console.log("running");
    // setLastPage(false);
    // if (!searchTerm) {
    //   setError(true);
    //   // setBooks([]);
    // }
    // setError(false);
    getBooks(searchTerm, 1, selected)
      .then((data) => {
        setPage(1);
        // console.log(data);
        setBooks(data);
        setNoResults(false);
      })
      // } else setError(true);
      .catch((e) => {
        setError(e);
        setNoResults(true);
        setBooks(null);
        // setLastPage(false);
        //   // navigate("/*");
        // });
      });
  }, [searchTerm]);

  useEffect(() => {
    getBooks(searchTerm, page, selected)
      .then((data) => {
        // console.log(data);
        setBooks(data);
        setNoResults(false);
      })
      .catch((e) => {
        // setError(e);
        // setLastPage(true);
        // navigate("/*");
        // setBooks(undefined);
        setNoResults(true);
      });
  }, [page, selected]);

  console.log(books);
  // console.log("hi");
  // console.log(error);
  console.log(searchTerm);
  return (
    <div className={classes.results}>
      <Logo />
      <Header />
      <SearchBar />
      {/* {noResults ? (
        <p>{error.message}</p>
      ) : ( */}
      <div className={classes.results__display}>
        <div className={classes.results__subheading}>
          {/* // <div className={classes.results__displayError}> */}
          <p className={classes.results__text}>
            {!books ? "No results found for" : "Showing results for"}
            <span className={classes.results__term}> '{searchTerm}'</span>
          </p>
          {/* // </div> */}
          {/* ) : ( */}
          {/* // <div className={classes.results__display}> */}
          {/* <div className={classes.results__subheading}> */}
          {/* <p className={classes.results__text}> */}
          {/* Showing results for */}
          {/* <span className={classes.results__term}> '{searchTerm}'</span> */}
          {/* </p>) */}
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
          {/* // ) : (
          //   <div className={classes.results__text}>No more results</div>
          // )} */}
        </div>
      </div>

      {/* </div> */}
      {/* </div> */}
      {/* )} */}
      {/* //{" "} */}
    </div>
  );
};

export default Results;

// {books ? (
//   <div className={classes.results__displayError}>
//     <p>
//       {error.message}{" "}
//       <span className={classes.results__term}> '{searchTerm}'</span>
//     </p>
//   </div>
// ) : (
//   <div className={classes.results__display}>
//     <div className={classes.results__subheading}>
//       <p className={classes.results__text}>
//         Showing results for
//         <span className={classes.results__term}> '{searchTerm}'</span>
//       </p>
//       <label htmlFor="displayNumber" className={classes.results__text}>
//         Results per page:
//         <select
//           id="displayNumber"
//           className={classes.results__select}
//           value={selected}
//           onChange={handleSelection}
//         >
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="30">30</option>
//           <option value="40">40</option>
//         </select>
//       </label>
//     </div>
//     <BookGrid books={books} />
//     <div className={classes.results__nav}>
//       {page > 1 && (
//         <button className={classes.results__btn} onClick={previousPage}>
//           Previous page
//         </button>
//       )}
//       <p>Page: {page} </p>
//       <button
//         className={classes.results__btn}
//         onClick={nextPage}
//         disabled={lastPage}
//       >
//         Next page
//       </button>
//     </div>
//   </div>
// )}
// </div>
