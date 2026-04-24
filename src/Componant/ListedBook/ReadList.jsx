import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';
import BookCard from '../ui/BookCard';
import ReadBookCard from '../ListedBookCard/ReadBookCard';

const ReadList = () => {
    const {  storeBook} =
      useContext(BookContext);
  return (
    <div className="w-11/12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mx-auto   gap-10 mt-7 sm:mt-9 md:mt-10">
      {storeBook.map((book, ind) => (
        <ReadBookCard key={ind} book={book}></ReadBookCard>
      ))}
    </div>
  );
};

export default ReadList;