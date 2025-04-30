export const details = (bookInfo) => {
  const title = bookInfo.title ? bookInfo.title : "No Title";
  const author = bookInfo.authors
    ? bookInfo.authors.join(", ")
    : "Unknown Author";
  const genre = bookInfo.categories ? bookInfo.categories : "Unknown genre";
  const description = bookInfo.description
    ? bookInfo.description
    : "No description available";
  const isbn = bookInfo.industryIdentifiers
    ? bookInfo.industryIdentifiers[0].identifier
    : "Unknown ISBN";
  const pages = bookInfo.pages ? bookInfo.pageCount : "Unknown";
  const publishedDate = bookInfo.publishedDate
    ? bookInfo.publishedDate
    : "Unknown publishment date";
  const publisher = bookInfo.publisher
    ? bookInfo.publisher
    : "Unknown publisher";
  //   const preview = bookInfo.previewLink ? (
  //     <a href={bookInfo.previewLink} target="_blank">
  //       View preview
  //     </a>
  //   ) : (
  //     <p>No preview available</p>
  //   );
  return {
    Title: title,
    Author: author,
    Description: description,
    Genre: genre,
    ISBN: isbn,
    Pages: pages,
    Published: publishedDate,
    Publisher: publisher,
    // preview,
  };
};

// export const thumbnail = (bookInfo, books__img, books__noImg) => {
//   return bookInfo.imageLinks.thumbnail ? (
//     <img
//       src={bookInfo.imageLinks.thumbnail}
//       alt={bookInfo.title}
//       className={books__img}
//     ></img>
//   ) : (
//     <p className={books__noImg}>'No thumbnail available'</p>
//   );
// };
