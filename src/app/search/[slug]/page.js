"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Slug = () => {
  const [SearchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  const params = useParams();

  const slug = params.slug;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        setError(null); // Reset error

        const res = await fetch(`/api/search/${slug}`);

        // Check if response is ok
        if (!res.ok) {
          setError("404");
        }

        const data = await res.json();

        // Validate product data
        if (!data || typeof data !== "object") {
          throw new Error("Invalid product data received");
        }

        setSearchData(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.message);
        setSearchData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center px-4">
        <div className="relative text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div className="mt-4 text-white text-base sm:text-lg font-medium animate-pulse">
            Loading amazing product...
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error || !SearchData) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-4xl sm:text-6xl mb-4">😔</div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {error === "Product not found" || error?.includes("404")
              ? "Product Not Found"
              : "Something Went Wrong"}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            {error || "The product you're looking for doesn't exist."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SearchData.map((data) => (
              <Link
                key={data.id}
                href={`/${encodeURIComponent(
                  data.title.toLowerCase().replace(/\s+/g, "-")
                )}?id=${data.id}&category=${encodeURIComponent(data.category)}`}
                className="block"
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 cursor-pointer">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-700">
                    <Image
                      src={data.img}
                      alt={data.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-gray-400 uppercase tracking-wide">
                        {data.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-white hover:text-gray-300 transition-colors">
                      {data.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {data.desc_}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(data.rating)
                                ? "fill-current"
                                : "text-gray-600"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">
                        {data.rating} ({data.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">
                          ₹{data.price}
                        </span>
                      </div>
                    </div>

                    {/* Stock Status */}
                    <div>
                      {data.stock > 0 ? (
                        <span className="text-green-400 text-sm">
                          ✓ In Stock ({data.stock} available)
                        </span>
                      ) : (
                        <span className="text-red-400 text-sm">
                          ✗ Out of Stock
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Slug;
