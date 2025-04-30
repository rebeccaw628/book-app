import classes from "./BookCard.module.scss";
import { details } from "../services/data-services";
import BookModal from "../BookModal/BookModal";
import { useState } from "react";

const BookCard = ({ bookInfo }) => {
  const { title, author } = details(bookInfo);
  const numberOfAuthors = bookInfo.authors?.length || 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={classes.card}>
      {bookInfo.imageLinks ? (
        <img
          className={classes.card__img}
          src={bookInfo.imageLinks.thumbnail}
          alt={title}
        ></img>
      ) : (
        <p className={classes.card__noImg}>{title}</p>
      )}
      <div className={classes.card__preview}>
        <div className={classes.card__text}>
          <h4 className={classes.card__title}>{title}</h4>
          <p className={classes.card__author}>
            {numberOfAuthors > 1 ? "Authors: " : "Author: "}
            {author}
          </p>
        </div>
        <div className={classes.card__btn}>
          <button className={classes.card__btn} onClick={openModal}>
            More info ...
          </button>
        </div>
      </div>

      {isModalOpen && (
        <BookModal
          closeModal={closeModal}
          bookInfo={bookInfo}
          // displayDetails={displayDetails}
        />
      )}
    </div>
  );
};

export default BookCard;
