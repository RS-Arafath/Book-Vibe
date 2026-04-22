import React from 'react';
import Homepage from './../../../Pages/HomePage/Homepage';
import { Link, Links, NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? 'text-green-500 border border-green-400' : ''}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/books'}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? 'text-green-500 border border-green-400' : ''}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/page-to-read'}
          className={({ isActive }) =>
            `font-semibold ${isActive ? 'text-green-500 border border-green-400' : ''}`
          }
        >
          Page to read
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="left-0 top-0  right-0 shadow-sm font-secondary fixed z-50 backdrop-blur-md bg-white/10 border border-white/20  ">
      <div className="container mx-auto navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100/20 backdrop-blur-xl border border-white/10 rounded-box z-10 mt-3 w-30 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>
          <a
            onClick={() => (window.location.href = '/')}
            className="font-bold cursor-pointer text-sm sm:text-xl md:text-3xl"
          >
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <NavLink to={'/signIn'}>
            {' '}
            <button className="btn bg-green-600 p-2 font-semibold md:p-4 hover:bg-green-500">
              Sign In
            </button>
          </NavLink>
          <NavLink to={'/signUp'}>
            {' '}
            <button className="btn font-secondary btn-outline p-2 md:p-4 btn-info">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
