
import { use } from 'react';
import {  useNavigate, useParams } from 'react-router';

const bookPromise = fetch('/booksData.json').then((res) => res.json());


const BookDetails = () => {
  const { bookId } = useParams()
const navigate = useNavigate();
  const books = use(bookPromise)
  
  const expectedBook = books.find((book) => book.bookId == bookId)
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
    <div className="card w-11/12 container mx-auto  lg:card-side bg-base-100 shadow-xl mt-20 md:mt-30">
      <figure className="p-5 rounded-xl w-full max-h-[500px] flex-1 ">
        <img
          src={image}
          alt={bookName}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain transition duration-300 cursor-pointer overflow-hidden  hover:scale-90 "
        />
      </figure>

      <div className="card-body flex-2">
        <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl font-bold">
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
        <div className=" flex gap-2 md:gap-4 my-5 font-secondary">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="btn btn-outline"
          >
            Back
          </button>
          <button className="btn btn-primary">Read</button>
          <button className="btn btn-accent">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;