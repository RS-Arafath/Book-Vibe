import React from 'react';
import { IoStarHalfOutline } from 'react-icons/io5';
import { Link } from 'react-router';
const WishListCard = ({book}) => {
  return (
    <Link
      to={`/BookDetails/${book.bookId}`}
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
          {book.tags.map((tag, ind) => (
            <strong
              key={ind}
              className="badge badge-soft badge-success font-semibold "
            >
              {' '}
              {tag}
            </strong>
          ))}
        </div>
        <h2 className="card-title font-secondary font-bold text-lg sm:text-xl md:text-2xl">
          {book.bookName}
        </h2>
        <p className="font-semibold text-xs lg:text-base italic">
          {book.author}
        </p>

        <div className="divider m-0"></div>
        <div className="card-actions justify-between items-center">
          <div className="text-lg font-semibold">{book.category}</div>
          <div className=" flex items-center gap-1 text-lg font-bold">
            {book.rating}
            <span className="font-bold text-blue-600">
              <IoStarHalfOutline />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WishListCard;