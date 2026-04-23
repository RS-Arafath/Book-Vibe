
import { useLoaderData, useParams } from 'react-router';

// const bookPromise = fetch('/booksData.json').then((res) => res.json());


const BookDetails = () => {
  const { bookId } = useParams()
  console.log(bookId);
  // const books = use(bookPromise);
  const books = useLoaderData()
  console.log(books);
  const expectedBook = books.find((book) => book.bookId == bookId)
  console.log(expectedBook);
  // console.log(books);
  
  return (
    <div className='mt-20'>
      <h2>book details</h2>
    </div>
  );
};

export default BookDetails;