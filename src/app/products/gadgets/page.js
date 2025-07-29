import Image from "next/image";
import Link from "next/link";
import { cartcrazeDB } from "../../../lib/db";

const Gadgets = async () => {
  const [gadgetsData] = await cartcrazeDB.query("SELECT * FROM gadgets");

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Latest Gadgets
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover cutting-edge technology and innovative gadgets that
              enhance your digital lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {gadgetsData.map((gadget) => (
              <Link
                key={gadget.id}
                href={`/${encodeURIComponent(
                  gadget.title.toLowerCase().replace(/\s+/g, "-")
                )}?id=${gadget.id}&category=${encodeURIComponent(
                  gadget.category
                )}`}
                className="block"
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 cursor-pointer">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gray-700">
                    <Image
                      src={gadget.img}
                      alt={gadget.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-gray-400 uppercase tracking-wide">
                        {gadget.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-white hover:text-gray-300 transition-colors">
                      {gadget.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {gadget.desc_}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(gadget.rating)
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
                        {gadget.rating} ({gadget.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">
                          ₹{gadget.price}
                        </span>
                      </div>
                    </div>

                    {/* Stock Status */}
                    <div>
                      {gadget.stock > 0 ? (
                        <span className="text-green-400 text-sm">
                          ✓ In Stock ({gadget.stock} available)
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

export default Gadgets;
