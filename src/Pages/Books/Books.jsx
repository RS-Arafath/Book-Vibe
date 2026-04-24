import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';

const Books = () => {
    const { handlemarkAsRead, storeBook, handleWishList, wishlist } =
      useContext(BookContext);

  
    console.log('wishList', storeBook);
  return (
    <div className=" w-11/12 mx-auto border  mt-20 mb-10 md:mb-15 lg:mb-20 lg:my-25">
      <h2> Read list: {storeBook.length}</h2>
      <h3> wish list: {wishlist.length}</h3>
    </div>
  );
};

export default Books;