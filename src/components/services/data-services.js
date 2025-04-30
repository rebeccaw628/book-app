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
  return {
    title,
    author,
    description,
    genre,
    isbn,
    pages,
    publishedDate,
    publisher,
  };
};
