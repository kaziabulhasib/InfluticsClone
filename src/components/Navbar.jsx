// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative bg-white shadow'>
      <div className='container px-6 py-4 mx-auto'>
        {/* Main Navbar Row */}
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <a href='#' className='text-2xl font-bold text-gray-800'>
              Influtics
            </a>
          </div>

          {/* Right Side - Cart & Hamburger (Mobile) */}
          <div className='flex items-center space-x-4 lg:hidden'>
            {/* Cart Icon */}
            <a className='relative text-gray-700 hover:text-gray-600' href='#'>
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              type='button'
              className='text-gray-500 hover:text-gray-600 focus:outline-none'
              aria-label='toggle menu'>
              {!isOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 8h16M4 16h16'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            <a
              className='text-gray-700 hover:text-blue-500 transition-colors duration-300'
              href='#'>
              Home
            </a>
            <a
              className='text-gray-700 hover:text-blue-500 transition-colors duration-300'
              href='#'>
              Bryan liked
            </a>
            <a
              className='text-gray-700 hover:text-blue-500 transition-colors duration-300'
              href='#'>
              About Me
            </a>
            <a
              className='text-gray-700 hover:text-blue-500 transition-colors duration-300'
              href='#'>
              Fact 20.5K
            </a>
            <a
              className='text-gray-700 hover:text-blue-500 transition-colors duration-300'
              href='#'>
              Follow Me
            </a>

            {/* Desktop Cart Icon */}
            <a className='relative text-gray-700 hover:text-gray-600' href='#'>
              <svg
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Menu - Slides from right */}
        <div
          className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
            lg:hidden
          `}>
          {/* Close Button */}
          <div className='flex justify-end p-4'>
            <button
              onClick={toggleMenu}
              className='text-gray-500 hover:text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className='px-6 py-4'>
            <div className='flex flex-col space-y-6'>
              <a
                className='text-gray-700 hover:text-blue-500 transition-colors duration-300 text-lg font-medium'
                href='#'
                onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a
                className='text-gray-700 hover:text-blue-500 transition-colors duration-300 text-lg font-medium'
                href='#'
                onClick={() => setIsOpen(false)}>
                Bryan liked
              </a>
              <a
                className='text-gray-700 hover:text-blue-500 transition-colors duration-300 text-lg font-medium'
                href='#'
                onClick={() => setIsOpen(false)}>
                About Me
              </a>
              <a
                className='text-gray-700 hover:text-blue-500 transition-colors duration-300 text-lg font-medium'
                href='#'
                onClick={() => setIsOpen(false)}>
                Fact 20.5K
              </a>
              <a
                className='text-gray-700 hover:text-blue-500 transition-colors duration-300 text-lg font-medium'
                href='#'
                onClick={() => setIsOpen(false)}>
                Follow Me
              </a>
            </div>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
            onClick={toggleMenu}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
