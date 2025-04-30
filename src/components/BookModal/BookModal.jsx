import classes from "./BookModal.module.scss";
import { useState } from "react";
import { details } from "../services/data-services";
import { FaBook } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const BookModal = ({ closeModal, bookInfo }) => {
  const { Title, Author, Description } = details(bookInfo);
  const entries = Object.entries(details(bookInfo)).slice(3);

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
            <h3 className={classes.modal__title}>{Title}</h3>
            <h4 className={classes.modal__author}>{Author}</h4>
            <p>{Description}</p>
            {/*<h5>Genre: {genre}</h5>
          <h5>ISBN: {isbn}</h5>
          <h5>Pages: {pages}</h5>
          <h5>Published Date: {publishedDate}</h5>
          <h5>Publisher: {publisher}</h5> */}
            {entries.map(([key, value]) => {
              return (
                <p className={classes.modal__bold} key={key}>
                  {key}: <span className={classes.modal__details}>{value}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
