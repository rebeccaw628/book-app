const GOOGLE_BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const getBooks = async (searchTerm, page, maxResults) => {
  const startIndex = (page - 1) * maxResults;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}&key=${GOOGLE_BOOKS_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Invalid search term.");
  }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    throw new Error();
  }
  return results;
};
