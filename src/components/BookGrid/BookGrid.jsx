import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getBooks } from "../services/fetch-services";
import classes from "./BookGrid.module.scss";
import BookCard from "../BookCard/BookCard";

const BookGrid = ({ books }) => {
  console.log(books);
  return (
    <div className={classes.bookgrid}>
      {books.map((book) => (
        <BookCard key={book.id} bookInfo={book.volumeInfo} />
      ))}
    </div>
  );
};

export default BookGrid;
