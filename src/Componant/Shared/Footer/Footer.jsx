import React from 'react';
import { FaXTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="   mx-auto footer  mt-20 footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 text-base sm:text-lg">
      <nav className="grid grid-flow-col gap-4 text-black font-secondary">
        <a className="link link-hover  hover:text-[#787676] duration-75">
          About us
        </a>
        <a className="link link-hover  hover:text-[#787676] duration-75">
          Contact
        </a>
        <a className="link link-hover  hover:text-[#787676] duration-75">
          Contact
        </a>
        <a className="link link-hover  hover:text-[#787676] duration-75">
          Support
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl sm:text-4xl cursor-pointer place-items-center">
          <a className="hover:text-amber-600 duration-300 ease-out  p-1  hover:scale-130 inline-block transition-transform">
            <FaXTwitter className="hover:text-amber-500 duration-300 ease-out  p-1  hover:scale-130 inline-block transition-transform" />
          </a>

          <a>
            <FaFacebook
              href=""
              className="hover:text-blue-500 duration-300 ease-out  p-1  hover:scale-130 inline-block transition-transform"
            />
          </a>
          <a href="https://www.linkedin.com/in/rs-arafath/">
            <FaLinkedin className="hover:text-blue-500 duration-300 ease-out  p-1  hover:scale-130 inline-block transition-transform" />
          </a>
          <a href="https://github.com/RS-Arafath">
            <FaGithub className="hover:text-amber-500 duration-300 ease-out  p-1  hover:scale-130 inline-block transition-transform" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by RS
          Arafath
        </p>
      </aside>
    </footer>
  );
};

export default Footer;