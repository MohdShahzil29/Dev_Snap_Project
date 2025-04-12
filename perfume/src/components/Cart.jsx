import React from "react";
import { useCart } from "../context/Cart";

const Cart = () => {
  const [cart, setCart] = useCart();

  const removeItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePayNow = () => {
    alert("Payment process is not implemented yet.");
  };
  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price;
  }, 0);

  return (
    <div className="mt-20 px-6 md:px-20 mb-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-10">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 border-b pb-6"
            >
              <img
                src={item.image || ""}
                alt={item.title || "Product Image"}
                className="w-40 h-40 object-cover rounded-2xl border border-gray-200"
              />
              <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-pink-700 text-xl font-bold">{item.price}</p>
              </div>
              <button
                onClick={() => removeItem(index)}
                className="mt-4 md:mt-0 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
            <p className="text-2xl font-semibold">
              Total:{" "}
              <span className="text-pink-700">${totalAmount.toFixed(2)}</span>
            </p>
            <button
              onClick={handlePayNow}
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition cursor-pointer"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
