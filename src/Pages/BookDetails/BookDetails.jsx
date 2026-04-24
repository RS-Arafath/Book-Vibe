import { use, useContext,} from 'react';
import { useNavigate, useParams } from 'react-router';
import { BookContext } from '../../BookProvider/BookProvider';


const bookPromise = fetch('/booksData.json').then((res) => res.json());

const BookDetails = (
  
) => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const books = use(bookPromise);
   const { handlemarkAsRead,handleWishList} = useContext(BookContext);
  const expectedBook = books.find((book) => book.bookId == bookId);
  // console.log(expectedBook.image,'expected book');
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;
  



  

  return (
    <div className="card w-11/12  border border-gray-200 bg-gray-50 shadow container mx-auto  lg:card-side  overflow-hidden mt-20 md:mt-30">
      <figure className="p-5 md:mt-3 md:ml-3 md:rounded-lg  overflow-hidden  w-full max-h-125 flex-2 bg-gray-200 py-3">
        <img
          src={image}
          alt={bookName}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain duration-300 cursor-pointer overflow-hidden  hover:scale-95 scale-90"
        />
      </figure>

      <div className="card-body flex-3">
        <h2 className="font-secondary text-3xl sm:text-4xl md:text-5xl font-bold">
          {bookName}
        </h2>
        <h4 className="font-secondary ">
          <span className="text-lg md:text-xl  font-bold ">By: </span>
          <span className="text-lg text-[#737373] md:text-xl  font-semiboldbold ">
            {author}
          </span>
        </h4>
        <div className="divider my-0"></div>

        <p className="font-secondary text-[#737373] text-lg">{category}</p>
        <div className="divider my-0"></div>

        <p className="">
          <span className="font-primary text-base sm:text-lg font-bold">
            Review:{' '}
          </span>
          {'   '}
          <span className="text-base sm:text-lg font-secondary ">{review}</span>
        </p>

        <div className="flex gap-2 items-center">
          <span className="font-primary font-bold text-lg">Tag</span>
          {tags.map((tag, ind) => (
            <strong
              key={ind}
              className="badge badge-soft badge-success font-semibold "
            >
              <span className="font-semibold ">#{tag}</span>
            </strong>
          ))}
        </div>

        <div className="divider my-0"></div>

        <div className="flex flex-col gap-3 font-secondary">
          <div className="flex">
            <span className="w-40 sm:w-48 text-[#737373] ">
              Number of pages
            </span>
            <span className="font-semibold">: {totalPages}</span>
          </div>
          <div className="flex">
            <span className=" w-40 sm:w-48 text-[#737373]">Publisher</span>
            <span className="font-semibold">: {publisher}</span>
          </div>
          <div className="flex">
            <span className=" w-40 sm:w-48 text-[#737373]">
              Year of Publishing
            </span>
            <span className="font-semibold">: {yearOfPublishing}</span>
          </div>
          <div className="flex">
            <span className="w-40 sm:w-48 text-[#737373]">Rating</span>
            <span className="font-semibold">: {rating}</span>
          </div>
        </div>
        <div className=" flex gap-2 flex-col sm:flex-row max-w-sm md:gap-4 my-5 font-secondary">
          <button
            className="btn btn-primary"
            onClick={() => handlemarkAsRead(expectedBook)}
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishList(expectedBook)}
            className="btn btn-accent"
          >
            Add to Wishlist
          </button>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-outline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
