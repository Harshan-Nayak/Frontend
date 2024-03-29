
import React from 'react';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-gradient-to-r from-rose-100 to-teal-100 ">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/" className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">HireTalent</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          {/* <Link href="/"  className="mr-5 hover:text-gray-900">First Link</Link>
          <Link href="/"  className="mr-5 hover:text-gray-900">Second Link</Link> */}
          <button className="mr-5  btn btn-outline btn-success">Find Jobs</button>
          <button className="mr-5  btn btn-outline btn-warning">Hire Talent</button>
          <Link href="/"  className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="/"  className="mr-5 hover:text-gray-900">About</Link>
          <Link href="/"  className="mr-5 hover:text-gray-900">Contact</Link>
        </nav>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">SignIn
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
