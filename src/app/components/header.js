"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartSidebar from "./CartSideBar";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";
import { SlLogin } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartSideBarOpen, setisCartSideBarOpen] = useState(false);

  const searchInputRef = useRef(null);
  const router = useRouter();

  // Focus on search input when search box opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      setSearchQuery("");
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
    if (e.key === "Escape") {
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <header className="bg-gray-900 shadow-lg sticky top-0 z-20 border-b border-gray-700">
        <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <Link
            href={"/"}
            className="flex title-font font-bold items-center text-gray-300 mb-4 md:mb-0 hover:text-white transition-colors duration-300"
          >
            <div className="relative">
              <Image
                src={"/favicon.png"}
                width={70}
                height={70}
                alt="CartCraze Logo"
              />
            </div>
            <span className="text-2xl tracking-tight">CartCraze</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:ml-auto items-center text-base space-x-8">
            <Link
              href={"/products/gadgets"}
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium"
            >
              Gadgets
            </Link>
            <Link
              href={"/products/essentials"}
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium"
            >
              Essentials
            </Link>
            <Link
              href={"/products/travels"}
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium"
            >
              Travels
            </Link>
            <Link
              href={"/products/cares"}
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium"
            >
              Cares
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-lg transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>

            {/* Cart Button */}
            <button
              onClick={() => {
                setisCartSideBarOpen(!isCartSideBarOpen);
              }}
              className="relative text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-lg transition-all duration-300"
            >
              <FaCartShopping />
            </button>

            {/* Login/Signup Button */}
            <Link href="/authentication/login">
              <button className="inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-300 border-0 py-2 px-6 focus:outline-none rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Login
                <SlLogin className="ml-2" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 absolute top-1 left-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-start justify-center pt-20">
            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden">
              <form onSubmit={handleSearch} className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Search products..."
                      className="w-full px-6 py-4 pr-12 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-lg placeholder-gray-400"
                    />
                    <svg
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <button
                    type="button"
                    onClick={closeSearch}
                    className="text-gray-400 hover:text-gray-300 hover:bg-gray-800 p-2 rounded-lg transition-all duration-300"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                {/* Search Suggestions/Popular Searches */}
                <div className="mt-6">
                  <p className="text-gray-400 text-sm mb-3">
                    Popular Searches:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "iPhone",
                      "Laptop",
                      "Headphones",
                      "Smart Watch",
                      "Camera",
                    ].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => {
                          setSearchQuery(term);
                          setIsSearchOpen(false);
                          router.push(`/search/${encodeURIComponent(term)}`);
                        }}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-xs">
                    Press Enter to search or Escape to close
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-6 py-4 space-y-4">
              <Link
                href={"/products/gadgets"}
                className="block text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
              >
                Gadgets
              </Link>
              <Link
                href={"/products/essentials"}
                className="block text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
              >
                Essentials
              </Link>
              <Link
                href={"/products/travels"}
                className="block text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
              >
                Travels
              </Link>
              <Link
                href={"/products/cares"}
                className="block text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
              >
                Cares
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <Link href="/authentication/login">
                  <button className="inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-300 border-0 py-2 px-6 focus:outline-none rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Login
                    <SlLogin className="ml-2" />
                  </button>
                </Link>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-300 hover:text-white p-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setisCartSideBarOpen(!isCartSideBarOpen);
                  }}
                  className="relative text-gray-300 hover:text-white p-2"
                >
                  <FaCartShopping />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {isCartSideBarOpen && (
        <>
          <CartSidebar onClose={() => setisCartSideBarOpen(false)} />
          <button
            onClick={() => setisCartSideBarOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors fixed top-4 right-4 z-50"
          >
            <IoClose className="text-2xl text-red-600" />
          </button>
        </>
      )}
    </>
  );
};

export default Header;
