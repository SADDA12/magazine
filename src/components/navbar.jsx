import React from "react";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
      };

    return(
        <>
        <section className="bg-indigo-950 flex justify-between fixed w-full top-0 z-0 p-4 ">

        <div className="lg:hidden flex gap-2">
                    <button onClick={toggleMenu} className="text-white text-xs focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <p className="text-white">Menu</p>
                    {isOpen && (
                        <div className="absolute left-0 mt-10 ml-4 w-48 bg-indigo-900 shadow-xl">
                            <ul className="py-3">
                                <li><a href="/" className="text-white text-sm p-4">HOME</a></li>
                                <li><a href="/" className="text-white text-sm p-4">ARCHIVE</a></li>
                                <li><a href="/" className="text-white text-sm p-4">CATEGORY</a></li>
                                <li><a href="/" className="text-white text-sm p-4">POST TYPES</a></li>
                                <li><a href="/" className="text-white text-sm p-4">ABOUT</a></li>
                                <li><a href="/" className="text-white text-sm p-4">CONTACT</a></li>
                            </ul>
                        </div>
                    )}
                </div>


                <div className="hidden lg:block">
                    <ul className="text-white flex gap-6 text-sm">
                        <li><a href="/" className="hover:text-rose-500 cursor-pointer">HOME</a></li>
                        <li><a href="/" className="hover:text-rose-500 cursor-pointer">ARCHIVE</a></li>
                        <li><a href="/" className="hover:text-rose-500 cursor-pointer">CATEGORY</a></li>
                        <li><a href="/" className="hover:text-rose-500 cursor-pointer">POST TYPES</a></li>
                        <li><a href="/" className="hover:text-rose-500 cursor-pointer">ABOUT</a></li>
                        <li><a href="/" className="hover:text-rose-500 cursor-pointer">CONTACT</a></li>
                    </ul>
                </div>



                <div className="relative flex items-center">
            <button
              onClick={toggleSearch}
              className="text-white text-xs focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isSearchOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12h16M6 8h12m-10 8h8"
                  ></path>
                )}
              </svg>
            </button>
            {isSearchOpen && (
              <div className="absolute right-6 top-0">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-32 md:w-48 lg:w-60 p-1 bg-white rounded-md"
                />
              </div>
            )}
          </div>
            
        </section>
        </>
    )
}