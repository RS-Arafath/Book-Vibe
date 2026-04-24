import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';
import WishListCard from '../ListedBookCard/WishListCard';

const WishList = () => {
   const {wishlist } = useContext(BookContext);
  return (
    <div>
      <div className="w-11/12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mx-auto   gap-10 mt-7 sm:mt-9 md:mt-10">
        {wishlist.map((book, ind) => (
          <WishListCard key={ind} book={book}></WishListCard>
        ))}
      </div>
    </div>
  );
};

export default WishList;