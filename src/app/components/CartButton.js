"use client";
import { toast } from "react-toastify";

export default function CartButton({ item }) {
  const addToCart = () => {
    const cartItem = {
      id: item.id,
      title: item.title,
      category: item.category,
      quantity: 1,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = existingCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push(cartItem);
    }

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success("Item added to cart successfully!");
  };

  return (
    <button
      onClick={addToCart}
      className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 py-2 px-4 rounded-lg transition-colors hover:scale-105 transform text-sm font-medium"
    >
      Add to Cart
    </button>
  );
}
