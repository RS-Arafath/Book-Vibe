import React, { createContext, useState} from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext();
export const BookProvider = ({ children }) => {
    const [storeBook, setStoreBook] = useState([]);

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
        toast.warn('The Book Already Exists', {
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
        toast.success(`${currentBook.bookName}  is added the List`, {
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
    };

    
  const data = {
    storeBook,setStoreBook,handlemarkAsRead
  }
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
