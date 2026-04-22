import React from 'react';
import BannerImg from '../../../assets/pngwing 1.png';
const Banner = () => {
  return (
    <div className=" container my-10 hero flex items-center bg-base-200 min-h-[70vh]  mx-auto rounded-2xl shadow-2xl">
      <div className="hero-content flex-col top-0 lg:flex-row-reverse w-full justify-between items-center mx-15 ">
        <div className="hover-3d">
          {/* content */}
          <figure className="max-w-70 rounded-2xl">
            <img src={BannerImg} alt="3D hover img" />
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
        <div className="text-left my-9 space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-fxl font-bold ">
            Books to freshen <br className="hidden lg:flex" /> up your
            bookshelf!
          </h1>

          <button className="btn btn-success">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
