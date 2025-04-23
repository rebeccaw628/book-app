export const getBooks = async () => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search + terms}`
  );
  if (!response.ok) {
    throw new Error("Could not get data");
  }
  const data = await response.json();
  return data;
};
