import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';

const Books = () => {
    const { handlemarkAsRead, storeBook,handleWishList } = useContext(BookContext);

  console.log(handleWishList)
    console.log('store book', storeBook);
  return (
    <div className='mt-20'>
     
    </div>
  );
};

export default Books;