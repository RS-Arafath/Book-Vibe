import React, { use } from 'react';
const bookPromise=fetch('/public/booksData.json').then(res=>res.json())
const AllBooks = () => {
  const books = use(bookPromise)
  console.log(books);
  return (
    <div className='mt-20'>
      <h2 className='text-5xl'>books</h2>
    </div>
  );
};

export default AllBooks;