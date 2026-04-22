import React, { use } from 'react';
const bookPromise=fetch('/public/booksData.json').then(res=>res.json())
const AllBooks = () => {
  const books = use(bookPromise)
  console.log(books);
  return (
    <div>
      
    </div>
  );
};

export default AllBooks;