import React from "react";
import postImage from "../assets/8-min.jpg";
import { useCart } from "../context/Cart";
import { toast } from "react-toastify";

const postData = [
  {
    title: "Strato Max",
    description:
      "Strato Max reaches new heights in laptop design and functionality. Built for performance without compromise, it features a stunning display, powerful internals, and intelligent features that enhance every task. Whether you're streaming, coding, or creating, Strato Max delivers smooth, high-speed performance in an ultra-slim package. It’s the go-anywhere, do-anything laptop made for those who expect nothing less than maximum capability.",
    price: "$120",
    image: postImage,
  },
];

const ProductDetails = () => {
  const { title, description, price, image } = postData[0];
  const [cart, setCart] = useCart();
  const handleAddToCart = () => {
    const product = { title, description, price, image };
    setCart((prevCart) => [...prevCart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success("Item Added to cart");
  };
  return (
    <div className="mt-32 px-6 md:px-20 flex flex-col md:flex-row gap-10 items-center mb-11">
      {/* Product Image */}
      <div className="w-full md:max-w-md">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-3xl border border-gray-200 object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 text-lg">{description}</p>
        <p className="text-2xl font-semibold text-pink-700">Price: {price}</p>

        <div className="flex gap-4">
          <button
            className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-medium transition duration-300 cursor-pointer"
            onClick={handleAddToCart}
          >
            Add to Bag
          </button>
          <button className="px-6 py-3 rounded-full bg-black hover:bg-gray-900 text-white font-medium transition duration-300 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
