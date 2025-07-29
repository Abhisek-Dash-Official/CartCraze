"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import Link from "next/link";
import { MdDeleteForever } from "react-icons/md";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    loadCartData();
  }, []);

  const loadCartData = async () => {
    try {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        const parsedCart = JSON.parse(cartData);
        setCartItems(parsedCart);
        await fetchProductDetails(parsedCart);
      } else {
        setCartItems([]);
        setProductDetails({});
        setTotalAmount(0);
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
      toast.error("Failed to load cart data");
    } finally {
      setLoading(false);
    }
  };

  const fetchProductDetails = async (cartItems) => {
    const details = {};
    let total = 0;

    for (const item of cartItems) {
      try {
        const slug = item.title.toLowerCase().replace(/\s+/g, "-");
        const res = await fetch(
          `/api/products/${slug}?id=${item.id}&category=${item.category}`
        );
        const product = await res.json();
        details[item.id] = product;
        total += product.price * item.quantity;
      } catch (error) {
        console.error(`Error fetching product ${item.id}:`, error);
      }
    }

    setProductDetails(details);
    setTotalAmount(total);
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    let newTotal = 0;
    updatedCart.forEach((item) => {
      const product = productDetails[item.id];
      if (product) {
        newTotal += product.price * item.quantity;
      }
    });
    setTotalAmount(newTotal);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    let newTotal = 0;
    updatedCart.forEach((item) => {
      const product = productDetails[item.id];
      if (product) {
        newTotal += product.price * item.quantity;
      }
    });
    setTotalAmount(newTotal);

    toast.success("Item removed from cart");
  };

  const handlePurchase = () => {
    const storedUserData = localStorage.getItem("userData");
    if (!storedUserData) {
      toast.error("No account found. Please sign up first!");
      return;
    }
    const userData = JSON.parse(storedUserData);
    const user = {
      userName: userData.username,
      email: userData.email,
      contactNumber: userData.contactNumber,
      totalAmount: totalAmount,
      products: cartItems,
    };

    fetch("/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to purchase");
        }
        return res.text();
      })
      .then((data) => {
        toast.success("Purchase successful! Thank you for your order.");
        localStorage.removeItem("cart");
        loadCartData();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong! Purchase failed!");
      });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="mt-4 text-white text-sm sm:text-base md:text-lg font-medium animate-pulse">
          Loading your cart please wait...
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
              Add some products to get started
            </p>
            <Link href="/">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Checkout
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto">
            Review your items and complete your purchase
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Cart Items */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Your Items
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {cartItems.map((item) => {
                const product = productDetails[item.id];
                if (!product) return null;

                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-gray-700 rounded-lg"
                  >
                    {/* Image and Product Info */}
                    <div className="flex flex-row items-center gap-4">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-600 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={product.img || "/placeholder.jpg"}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-white">
                          {product.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          {product.category}
                        </p>
                        <p className="text-white font-semibold mt-1 text-sm sm:text-base">
                          ₹{product.price}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls, Price, and Remove Button */}
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <button
                          onClick={() =>
                            updateCartQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M3 10h14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>

                        <span className="w-8 sm:w-10 text-center font-semibold text-xs sm:text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateCartQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                          aria-label="Increase quantity"
                        >
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M10 3v14M3 10h14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-4">
                        <p className="text-sm sm:text-base font-semibold min-w-[60px] sm:min-w-[80px] text-right">
                          ₹{(product.price * item.quantity).toLocaleString()}
                        </p>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 font-bold text-2xl hover:text-red-300 transition-colors"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <MdDeleteForever />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex justify-between text-gray-300 text-sm sm:text-base">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-gray-300 text-sm sm:text-base">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>

              <hr className="border-gray-600" />

              <div className="flex justify-between text-base sm:text-xl font-semibold">
                <span>Total</span>
                <span>₹{Math.round(totalAmount).toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105"
            >
              Purchase Now - ₹{totalAmount.toLocaleString()}
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-4 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
