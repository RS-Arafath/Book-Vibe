//loacal storage
const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem('storeBook');

  if (allReadList) return JSON.parse(allReadList);;

  return [];
};
const addReadListToLocalDB = (book) => {
  if (!book) return false;

  const allBooks = (getAllReadListFromLocalDB() || []).filter(Boolean); // ←remove  null 

  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);

  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem('storeBook', JSON.stringify(allBooks));
  }
};


export { getAllReadListFromLocalDB, addReadListToLocalDB };
