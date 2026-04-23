import React, { use } from 'react';
import BookCard from '../../ui/BookCard';

const bookPromise = fetch('/booksData.json')
.then((res) => res.json());
const AllBooks = () => {
  const books = use(bookPromise);
  // console.log(books);
  return (
    <div className="container mx-auto font-primary">
      <h2 className="text-3xl font-secondary sm:text-4xl md:text-5xl font-bold text-center">
        <sup>
          <small className="text-red-500">{books.length}</small>
        </sup>{' '}
        Books
      </h2>

      <div className="w-11/12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mx-auto   gap-10 mt-7 sm:mt-9 md:mt-10">
        {books.map((book,ind) => {
          return (
           <BookCard key={ind} book={book}></BookCard>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
