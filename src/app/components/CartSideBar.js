"use client";
import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function CartSidebar({ onClose }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart data from localStorage
  useEffect(() => {
    loadCartData();
  }, []);

  const loadCartData = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  const updateQuantity = (itemId, change) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === itemId) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    loadCartData();
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    loadCartData();
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    loadCartData();
  };

  return (
    <div className="fixed inset-0 z-20 overflow-y-auto">
      {/* Invisible Background Overlay - Click to close */}
      <div className="absolute inset-0 bg-transparent" onClick={onClose} />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-gray-900 shadow-xl transform transition-transform flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
          <h2 className="text-lg sm:text-xl font-bold text-gray-300 flex items-center gap-2">
            <FiShoppingCart className="text-xl sm:text-2xl" />
            Your Cart ({cartCount > 99 ? "99+" : cartCount})
          </h2>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <FiShoppingCart className="text-4xl sm:text-6xl text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-base sm:text-lg">
                Your cart is empty
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Add some items to get started!
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-3 sm:space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-700"
                  >
                    {/* Item Info */}
                    <div className="mb-3">
                      <h3 className="text-gray-300 font-medium text-sm sm:text-base line-clamp-2 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs uppercase tracking-wide">
                        {item.category}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors touch-manipulation"
                          disabled={item.quantity <= 1}
                        >
                          <AiOutlineMinus className="text-gray-300 text-sm" />
                        </button>

                        <input
                          type="number"
                          min="1"
                          max="99"
                          value={item.quantity}
                          onChange={(e) => {
                            const newQuantity = parseInt(e.target.value) || 1;
                            if (newQuantity > 0 && newQuantity <= 99) {
                              const updatedCart = cartItems.map((cartItem) =>
                                cartItem.id === item.id
                                  ? { ...cartItem, quantity: newQuantity }
                                  : cartItem
                              );
                              localStorage.setItem(
                                "cart",
                                JSON.stringify(updatedCart)
                              );
                              loadCartData();
                            }
                          }}
                          className="text-gray-300 font-medium px-3 py-2 bg-gray-700 border border-gray-600 rounded-md min-w-[3rem] text-center text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />

                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors touch-manipulation"
                        >
                          <AiOutlinePlus className="text-gray-300 text-sm" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-400 hover:bg-red-900/20 rounded-md transition-colors touch-manipulation"
                        title="Remove item"
                      >
                        <MdDelete className="text-lg" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 sm:mt-6 space-y-3">
                <button
                  onClick={() => (window.location.href = "/checkout")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors touch-manipulation text-sm sm:text-base"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors touch-manipulation text-sm"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
