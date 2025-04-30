import classes from "./BookModal.module.scss";
import { details } from "../services/data-services";

const BookModal = ({ closeModal, bookInfo }) => {
  const {
    title,
    author,
    description,
    genre,
    isbn,
    pages,
    publishedDate,
    publisher,
  } = details(bookInfo);

  return (
    <div className={classes.modal}>
      <div className={classes.modal__overlay}>
        <div className={classes.modal__content}>
          <div className={classes.modal__noText}>
            {bookInfo.imageLinks ? (
              <img
                className={classes.modal__img}
                src={bookInfo.imageLinks.thumbnail}
                alt={bookInfo.title}
              ></img>
            ) : (
              <p className={classes.modal__noImg}>Image unavailble</p>
            )}
            <span className={classes.modal__close} onClick={closeModal}>
              &times;
            </span>
          </div>
          <div className={classes.modal__text}>
            <h3 className={classes.modal__title}>{title}</h3>
            <h4 className={classes.modal__author}>{author}</h4>
            <p>{description}</p>
            <p className={classes.modal__bold}>
              Genre:<span className={classes.modal__details}> {genre}</span>
            </p>
            <p className={classes.modal__bold}>
              ISBN: <span className={classes.modal__details}> {isbn}</span>
            </p>
            <p className={classes.modal__bold}>
              Page count:
              <span className={classes.modal__details}> {pages}</span>
            </p>
            <p className={classes.modal__bold}>
              Published:
              <span className={classes.modal__details}> {publishedDate}</span>
            </p>
            <p className={classes.modal__bold}>
              Publisher:
              <span className={classes.modal__details}> {publisher}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
