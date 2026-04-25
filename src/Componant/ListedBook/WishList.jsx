import React, { useContext } from 'react';
import { BookContext } from '../../BookProvider/BookProvider';
import WishListCard from '../ListedBookCard/WishListCard';
import { useNavigate } from 'react-router';
const WishList = () => {
  const navigate = useNavigate();
  const { wishlist } = useContext(BookContext);
  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-7 sm:py-8 md:py-9 lg:py-10 px-6 text-center">
        <div
          className="mb-8"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        >
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="18"
              width="44"
              height="62"
              rx="4"
              fill="#ecfdf5"
              stroke="#10b981"
              strokeWidth="1.2"
            />
            <rect
              x="68"
              y="18"
              width="44"
              height="62"
              rx="4"
              fill="#ecfdf5"
              stroke="#10b981"
              strokeWidth="1.2"
            />
            <line
              x1="52"
              y1="18"
              x2="52"
              y2="80"
              stroke="#10b981"
              strokeWidth="2"
            />
            <line
              x1="68"
              y1="18"
              x2="68"
              y2="80"
              stroke="#10b981"
              strokeWidth="2"
            />
            <path
              d="M52 18 Q60 36 68 18"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
            />
            <path
              d="M52 80 Q60 62 68 80"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
            />
            <rect
              x="16"
              y="32"
              width="22"
              height="2"
              rx="1"
              fill="#10b981"
              opacity="0.45"
            />
            <rect
              x="16"
              y="40"
              width="30"
              height="2"
              rx="1"
              fill="#10b981"
              opacity="0.3"
            />
            <rect
              x="16"
              y="48"
              width="18"
              height="2"
              rx="1"
              fill="#10b981"
              opacity="0.3"
            />
            <rect
              x="16"
              y="56"
              width="26"
              height="2"
              rx="1"
              fill="#10b981"
              opacity="0.3"
            />
            <rect
              x="76"
              y="32"
              width="22"
              height="2"
              rx="1"
              fill="#10b981"
              opacity="0.45"
            />
            <rect
              x="76"
              y="40"
              width="30"
              height="2"
              rx="1"
              fill="#10b981"
              opacity="0.3"
            />
            <rect
              x="76"
              y="48"
              width="18"
              height="2"
              rx="1"
              fill="#10b981"
              opacity="0.3"
            />
            <rect
              x="76"
              y="56"
              width="26"
              height="2"
              rx="1"
              fill="#10b981"
              opacity="0.3"
            />
            <rect
              x="28"
              y="8"
              width="8"
              height="14"
              rx="1"
              fill="#fbbf24"
              opacity="0.85"
            />
            <polygon points="28,22 36,22 32,26" fill="#fbbf24" opacity="0.85" />
            <rect
              x="82"
              y="11"
              width="7"
              height="12"
              rx="1"
              fill="#f87171"
              opacity="0.8"
            />
            <polygon
              points="82,23 89,23 85.5,27"
              fill="#f87171"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Heading */}
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  mb-2 tracking-tight">
          No WishList data found
        </h3>

        {/* Subtext */}
        <p className="text-sm sm:text-base font-secondary text-gray-500 dark:text-gray-500 max-w-xs leading-relaxed mb-6">
          Every great book starts as a wish. Add yours and let the list grow.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex btn shadow-none hover:bg-amber-400 items-center border px-3 py-2 bg-amber-500 rounded-lg transition-all duration-150 active:scale-95"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.5 2v11M2 7.5h11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Add to Wish list
        </button>

        <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-8px); }
      }
    `}</style>
      </div>
    );
  }
  return (
    <div>
      <div className="w-11/12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mx-auto   gap-10 mt-7 sm:mt-9 md:mt-10">
        {wishlist.map((book, ind) => (
          <WishListCard key={ind} book={book}></WishListCard>
        ))}
      </div>
    </div>
  );
};

export default WishList;