import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';

const ReadList = () => {
    const { handlemarkAsRead, storeBook, handleWishList, wishlist } =
      useContext(BookContext);
  return (
    <div>
      read list
    </div>
  );
};

export default ReadList;