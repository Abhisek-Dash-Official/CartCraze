"use client";
import Image from "next/image";
import BuyNowButton from "../components/BuyNowButton.js";
import CartButton from "../components/CartButton.js";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";

export default function Slug() {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  const params = useParams();
  const searchParams = useSearchParams();

  const slug = params.slug;
  const id = searchParams.get("id");
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        setError(null); // Reset error

        const res = await fetch(
          `/api/products/${slug}?id=${id}&category=${category}`
        );

        // Check if response is ok
        if (!res.ok) {
          setError("404");
        }

        const data = await res.json();

        // Validate product data
        if (!data || typeof data !== "object") {
          throw new Error("Invalid product data received");
        }

        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.message);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug && id && category) {
      fetchProduct();
    } else {
      setIsLoading(false);
      setError("Missing required parameters...");
    }
  }, [slug, id, category]);

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
  if (error || !product) {
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

  const myNumber = (value, fallback = 0) => {
    const num = Number(value);
    return isNaN(num) ? fallback : num;
  };

  const calculateDiscount = (price) => {
    const originalPrice = myNumber(price) * 1.2;
    const currentPrice = myNumber(price);
    if (originalPrice === 0) return 0;
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 py-6 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Image Section */}
            <div className="space-y-3 sm:space-y-4 animate-slide-in-left">
              {/* Main Image */}
              <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-2 sm:p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  width={700}
                  height={500}
                  alt={product.title || "Product"}
                  src={product.img || "/placeholder-image.jpg"}
                  priority
                  className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded-xl sm:rounded-2xl transform group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 475px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />

                {/* Stock Badge */}
                {product.stock &&
                  myNumber(product.stock) < 10 &&
                  myNumber(product.stock) > 0 && (
                    <div className="absolute top-3 right-3 sm:top-6 sm:right-6 lg:top-8 lg:right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                      <span className="flex items-center space-x-1">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="hidden sm:inline">
                          Only {product.stock} left!
                        </span>
                        <span className="sm:hidden">{product.stock} left!</span>
                      </span>
                    </div>
                  )}
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {[product.img, product.img, product.img].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-blue-500 ring-2 ring-blue-500/30"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      width={80}
                      height={80}
                      alt={`${product.title || "Product"} ${index + 1}`}
                      src={img || "/placeholder-image.jpg"}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 sm:space-y-6 animate-slide-in-right">
              {/* Title and Category */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {category || "Product"}
                  </span>
                  <span className="text-green-400 text-xs sm:text-sm font-medium">
                    ✓ In Stock
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {product.title || "Product Title"}
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {product.desc_ ||
                    product.description ||
                    "No description available"}
                </p>
                <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-400 flex-wrap gap-2">
                  <span className="flex items-center space-x-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Secure Payment</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaShippingFast className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Free Shipping</span>
                  </span>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    ₹{myNumber(product.price)}
                  </span>
                  {myNumber(product.price) > 0 && (
                    <>
                      <div className="text-gray-400 line-through text-lg sm:text-xl">
                        ₹{Math.round(myNumber(product.price) * 1.2)}
                      </div>
                      <div className="bg-green-500 text-white px-2 py-1 rounded text-xs sm:text-sm font-bold">
                        {calculateDiscount(product.price)}% OFF
                      </div>
                    </>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap gap-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-200 ${
                          i < Math.floor(myNumber(product.rating))
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.293h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034 1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.033-2.8 2.033c-.785.57-1.84-.196-1.54-1.118l1.07-3.292-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461l1.07-3.293z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-yellow-400 font-semibold text-base sm:text-lg">
                    {myNumber(product.rating, 0).toFixed(1)}
                  </span>
                  <span className="text-gray-400 text-sm sm:text-base">
                    ({myNumber(product.reviews)} reviews)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 sm:space-y-4 pt-4">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex-1">
                    <CartButton item={product} />
                  </div>
                  <div className="flex-1">
                    <BuyNowButton item={product} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s both;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 640px) {
          .animate-slide-in-left,
          .animate-slide-in-right {
            animation: fade-in 0.6s ease-out;
          }
        }
      `}</style>
    </div>
  );
}
