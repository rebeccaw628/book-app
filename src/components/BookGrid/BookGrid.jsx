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
