import React from "react";
import Image from "next/image";
import { FaShopify } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container px-6 py-16 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* Brand Section */}
          <div className="w-full lg:w-80 mb-12 lg:mb-0">
            <a className="flex title-font font-bold items-center justify-center lg:justify-start text-gray-300 mb-6">
              <div className="relative">
                <Image
                  src={"/favicon.png"}
                  width={70}
                  height={70}
                  alt="CartCraze Logo"
                />
              </div>
              <span className="text-2xl tracking-tight">CartCraze</span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6 text-center lg:text-left">
              Your ultimate destination for premium products and unbeatable
              deals. Shop with confidence and style.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-8 lg:pl-16">
            {/* Shop Categories */}
            <div>
              <h2 className="title-font font-semibold text-gray-300 tracking-widest text-sm mb-4 uppercase flex items-center gap-2">
                <FaShopify className="text-base" />
                <span>Shop</span>
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Electronics
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Fashion
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Home & Garden
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Sports
                  </a>
                </li>
              </nav>
            </div>

            {/* Customer Service */}
            <div>
              <h2 className="title-font font-semibold text-gray-300 tracking-widest text-sm mb-4 uppercase flex items-center gap-2">
                <BiSupport className="text-base" />
                <span>Support</span>
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Track Order
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Returns
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Size Guide
                  </a>
                </li>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h2 className="title-font font-semibold text-gray-300 tracking-widest text-sm mb-4 uppercase flex items-center gap-2">
                <FaUserFriends className="text-base" />
                <span>Company</span>
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Press
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Blog
                  </a>
                </li>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h2 className="title-font font-semibold text-gray-300 tracking-widest text-sm mb-4 uppercase flex items-center gap-2">
                <GiInjustice className="text-base" />
                <span>Legal</span>
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">
                    GDPR
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        {/* Features/Benefits Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2 text-gray-300">
                <FaShippingFast />
              </div>
              <h3 className="text-gray-300 font-semibold mb-1">
                Free Shipping
              </h3>
              <p className="text-gray-400 text-sm">On orders over $99</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2 text-gray-300">
                <GrSecure />
              </div>
              <h3 className="text-gray-300 font-semibold mb-1">
                Secure Payment
              </h3>
              <p className="text-gray-400 text-sm">SSL encrypted checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2 text-gray-300">
                <IoReturnDownBackOutline />
              </div>
              <h3 className="text-gray-300 font-semibold mb-1">Easy Returns</h3>
              <p className="text-gray-400 text-sm">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto py-6 px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center sm:text-left mb-4 sm:mb-0 flex items-center justify-center sm:justify-start gap-1">
            © 2025 ShopMaster. All rights reserved. |
            <span className="text-gray-300 ml-1 font-medium flex items-center gap-1">
              Built with <FaHeart className="text-red-500 text-xs" /> for
              amazing shopping experience
            </span>
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              href="#"
              aria-label="Facebook"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              href="#"
              aria-label="Twitter"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              href="#"
              aria-label="Instagram"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              href="#"
              aria-label="LinkedIn"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              href="#"
              aria-label="YouTube"
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
