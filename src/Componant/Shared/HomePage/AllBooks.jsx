import React, { use } from 'react';
import { IoStarHalfOutline } from 'react-icons/io5';
const bookPromise = fetch('/booksData.json')
.then((res) => res.json());
const AllBooks = () => {
  const books = use(bookPromise);
  console.log(books);
  return (
    <div className="container mx-auto font-primary">
      <h2 className="text-3xl font-secondary sm:text-4xl md:text-5xl font-bold text-center">
        <sup>
          <small className='text-red-500'>{books.length}</small>
        </sup>{' '}
        Books
      </h2>

      <div className="w-11/12 grid grid-cols-1    mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 sm:mt-9 md:mt-10">
        {books.map((book) => {
          return (
            <div
              className="card cursor-pointer  w-full h-full items-stretch border  mx-auto bg-base-100 border-gray-200 shadow-xl
  hover:border-blue-400 hover:shadow-blue-200 hover:shadow-xl hover:-translate-y-2
  transition-all duration-300 ease-in-out  "
            >
              <div className="mx-auto ">
                <div className="hover-3d mx-auto ">
                  {/* content */}
                  <figure className="py-5  overflow-hidden  ">
                    <img
                      src={book.image}
                      className="h-[250px] w-full rounded-sm"
                      alt={book.bookName}
                    />
                  </figure>
                  {/* 8 empty divs needed for the 3D effect */}
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="card-body">
                <div className="flex gap-2">
                  {book.tags.map((tag) => (
                    <strong className="badge badge-soft badge-success font-semibold ">
                      {' '}
                      {tag}
                    </strong>
                  ))}
                </div>
                <h2 className="card-title font-bold text-2xl sm:text-3xl md:text-4xl">
                  {book.bookName}
                </h2>
                <p className="font-semibold text-base sm:text-lg">
                  {book.author}
                </p>

                <div className="divider"></div>
                <div className="card-actions justify-between">
                  <div className="text-lg font-semibold">{book.category}</div>
                  <div className="font-semibold flex items-center gap-1 text-lg">
                    {book.rating}
                    <span>
                      <IoStarHalfOutline />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
