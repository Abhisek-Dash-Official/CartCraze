import Image from "next/image";
import dotenv from "dotenv";
dotenv.config();
import { IoIosFlash } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import CartButton from "./components/CartButton";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/highlights`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: 10 }),
      cache: "no-store",
    }
  );

  const { topDeals, flashSales, trendingBrands } = await res.json();

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6">
            Discover Amazing Deals
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Shop the latest trends and exclusive offers from top brands
          </p>
          <Link
            href="#top-Deals-Section"
            className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Flash Sales Section */}
      {flashSales && flashSales.length > 0 && (
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-300 mb-4 flex items-center justify-center gap-3">
                <IoIosFlash className="text-yellow-400 text-5xl" />
                <span>Flash Sales</span>
              </h2>
              <p className="text-gray-400">
                Limited time offers - Don't miss out!
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {flashSales.map((item, index) => (
                <div
                  key={item.id || index}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-gray-700/50 transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <Link
                    href={`/${encodeURIComponent(
                      item.title.toLowerCase().replace(/\s+/g, "-")
                    )}?id=${item.id}&category=${encodeURIComponent(
                      item.category
                    )}`}
                    className="block"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        width={400}
                        height={300}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        src={item.img}
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        FLASH DEAL
                      </div>
                      {item.stock && item.stock < 10 && (
                        <div className="absolute top-4 right-4 bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">
                          Only {item.stock} left!
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-gray-400 text-sm tracking-widest mb-2 uppercase">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-300 text-xl font-semibold mb-3 group-hover:text-white transition-colors line-clamp-2">
                        {item.title}
                      </h2>
                      {item.desc_ && (
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {item.desc_}
                        </p>
                      )}
                      <div className="flex items-center mb-3">
                        {item.rating && (
                          <div className="flex items-center space-x-1">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(item.rating)
                                      ? "fill-current"
                                      : "fill-gray-600"
                                  }`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-gray-400 text-sm ml-2">
                              ({item.rating})
                            </span>
                            {item.reviews && (
                              <span className="text-gray-500 text-sm ml-1">
                                • {item.reviews} reviews
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-300">
                          {item.price}
                        </p>
                        <span>
                          <CartButton item={item} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Deals Section */}
      {topDeals && topDeals.length > 0 && (
        <section
          id="top-Deals-Section"
          className="py-16 bg-gray-900 scroll-mt-20"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-300 mb-4 flex items-center justify-center gap-3">
                <FaFireAlt className="text-orange-500 text-4xl" />
                <span>Top Deals</span>
              </h2>
              <p className="text-gray-400">Best prices on premium products</p>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topDeals.map((item, index) => (
                <div
                  key={item.id || index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-gray-600/50 transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <Link
                    href={`/${encodeURIComponent(
                      item.title.toLowerCase().replace(/\s+/g, "-")
                    )}?id=${item.id}&category=${encodeURIComponent(
                      item.category
                    )}`}
                    className="block"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        width={400}
                        height={300}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        src={item.img}
                      />
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        TOP DEAL
                      </div>
                      {item.stock && item.stock < 20 && (
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                          {item.stock} in stock
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-gray-400 text-sm tracking-widest mb-2 uppercase">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-300 text-xl font-semibold mb-3 group-hover:text-white transition-colors line-clamp-2">
                        {item.title}
                      </h2>
                      {item.desc_ && (
                        <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                          {item.desc_}
                        </p>
                      )}
                      <div className="flex items-center mb-3">
                        {item.rating && (
                          <div className="flex items-center space-x-1">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(item.rating)
                                      ? "fill-current"
                                      : "fill-gray-600"
                                  }`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-gray-400 text-sm ml-2">
                              {item.rating}
                            </span>
                            {item.reviews && (
                              <span className="text-gray-500 text-sm ml-1">
                                ({item.reviews})
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-300">
                          {item.price}
                        </p>
                        <span className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-1 rounded-lg transition-colors hover:scale-105 transform cursor-pointer">
                          View Deal
                        </span>
                        <span>
                          <CartButton item={item} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trending Brands Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-300 mb-4 flex items-center justify-center gap-3">
              <BsGraphUpArrow className="text-green-400 text-4xl" />
              <span>Trending Brands</span>
            </h2>
            <p className="text-gray-400">
              Popular products from trusted brands
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingBrands.map((data, index) => (
              <div
                key={data.id || index}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-gray-700/50 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <Link
                  href={`/${encodeURIComponent(
                    data.title.toLowerCase().replace(/\s+/g, "-")
                  )}?id=${data.id}&category=${encodeURIComponent(
                    data.category
                  )}`}
                  className="block"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      width={400}
                      height={300}
                      alt={data.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      src={data.img}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
                      TRENDING
                    </div>
                    {data.stock && data.stock > 50 && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-xs">
                        In Stock
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-400 text-sm tracking-widest mb-2 uppercase">
                      {data.category}
                    </h3>
                    <h2 className="text-gray-300 text-xl font-semibold mb-3 group-hover:text-white transition-colors line-clamp-2">
                      {data.title}
                    </h2>
                    {data.desc_ && (
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {data.desc_}
                      </p>
                    )}
                    <div className="flex items-center mb-3">
                      {data.rating && (
                        <div className="flex items-center space-x-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(data.rating)
                                    ? "fill-current"
                                    : "fill-gray-600"
                                }`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm ml-2">
                            {data.rating}
                          </span>
                          {data.reviews && (
                            <span className="text-gray-500 text-sm ml-1">
                              ({data.reviews})
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-300">
                        {data.price}
                      </p>
                      <span>
                        <CartButton item={data} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
