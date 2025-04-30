const GOOGLE_BOOKS_API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const getBooks = async (searchTerm, page, maxResults) => {
  // if (searchTerm.trim() === "") throw new Error("Search term cannot be empty");

  const startIndex = (page - 1) * maxResults;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}&key=${GOOGLE_BOOKS_API_KEY}`;
  const response = await fetch(url);
  console.log(response);

  if (!response.ok) {
    throw new Error("Invalid search term.");
  }
  console.log(searchTerm);
  // if (searchTerm === undefined) {
  //   throw new Error(`Invalid search term.`);
  // }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    throw new Error();
  }
  return results;
  // if (data.items.length === 0) {
  //   throw new Error(`No results found for ${searchTerm}`);
  // }
  // return data.items;
};

// export const updateDisplay = async (searchTerm, page = "1", maxResults) => {
//   const startIndex = (page - 1) * maxResults;
//   const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}&key=${GOOGLE_BOOKS_API_KEY}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   // if (data.items === undefined) {
//   //   throw new Error("No more results for ");
//   // }
//   return data.items;
// };
