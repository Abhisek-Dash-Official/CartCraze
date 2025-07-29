"use client";
import { useRouter } from "next/navigation";

export default function BuyNowButton({ item }) {
  const router = useRouter();

  const buyNow = () => {
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

    // Redirect to checkout
    router.push("/checkout");
  };

  return (
    <button
      onClick={buyNow}
      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors hover:scale-105 transform text-sm font-medium"
    >
      Buy Now
    </button>
  );
}
