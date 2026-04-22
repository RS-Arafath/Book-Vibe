import React from 'react';
import BannerImg from '../../../assets/pngwing 1.png';
const Banner = () => {
  return (
    <div className=" container font-primary hero flex items-center bg-base-200 h-175 sm:h-200 py-7 lg:h-107.5 max-h-[75vh] mx-auto rounded-2xl shadow mt-20 mb-10 md:mb-15 lg:mb-20 lg:my-25 ">
      <div className="hero-content mx-auto flex-col top-0 lg:flex-row-reverse w-full justify-between items-center ">
        <div className="hover-3d">
          {/* content */}
          <figure className="max-w-70 rounded-2xl">
            <img src={BannerImg} alt="3D hover img" className='h-60 sm:h-60 md:h-70 lg:h-full' />
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
        <div className="text-left my-9 space-y-5 sm:space-y-6 md:space-y-9">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            Books to freshen <br className="hidden lg:flex" /> up your
            bookshelf!
          </h1>

          <button className="bg-amber-500 font-bold cursor-pointer hover:bg-amber-600 transition-all text-sm sm:text-lg md:text-xl duration-300 transform hover:scale-105 px-4 sm:px-6 md:px-8 py-3 rounded-lg  shadow-lg text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
