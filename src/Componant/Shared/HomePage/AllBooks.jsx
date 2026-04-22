import React, { use } from 'react';
const bookPromise=fetch('/public/booksData.json').then(res=>res.json())
const AllBooks = () => {
  const books = use(bookPromise)
  console.log(books);
  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>books</h2>

      {
        
      }
    </div>
  );
};

export default AllBooks;