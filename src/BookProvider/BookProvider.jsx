import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext();
export const BookProvider = ({ children }) => {
  const [storeBook, setStoreBook] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  //mark is read handler
  const handlemarkAsRead = (currentBook) => {
    /**
     * 1) store book id
     * 2) where to store
     * 3) array or collection
     * 4) if the book is akready exist show the alert
     * 5) if not then add the book in the array or collection
     */

    const isExistBook = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.warn('This book is already in your read list', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    } else {
      setStoreBook([...storeBook, currentBook]);
      toast.success(`${currentBook.bookName}added to your read list`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    }
    console.log('reading list', storeBook, currentBook);
  };

  //mark as wish list handler
  const handleWishList = (currentBook) => {
    /**
     * 1) store book id
     * 2) where to store
     * 3) array or collection
     * 4) if the book is akready exist show the alert
     * 5) if not then add the book in the array or collection
     */

    //check this book hadd added in read ReadList
    const isExistInReadList = storeBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.warn('The book was already in the Read List', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    const isExistBook = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error('The book is already in your wishlist', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    } else {
      setWishlist([...wishlist, currentBook]);
      toast.success(`${currentBook.bookName}  added to your wishlist`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    }
    console.log('wishlist', currentBook, wishlist);
  };

  const data = {
    storeBook,
    setStoreBook,
    handlemarkAsRead,
    wishlist,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
