import React from "react";
import { useParams } from "react-router";
import UseFetch from "../Hooks/UseFetch";

const SingleProduct = () => {
  let params = useParams();

  let addToCart = () => {
    let quantity = 1;
    let productId = params.id;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = cart.find((item) => item.id === productId);

    if (product) {
      product.quantity += 1;
    } else {
      cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  let [data, loading, error] = UseFetch(
    `https://dummyjson.com/products/${params.id}`
  );

  if (loading) {
    return (
      <div className="text-center mt-10 text-xl font-semibold text-pink-600">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Images */}
        <div className="md:w-1/2">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-auto rounded-2xl shadow-lg object-cover border border-pink-100"
          />
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {data.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product ${idx}`}
                className="w-20 h-20 object-cover rounded-lg border border-pink-200 hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-pink-600">{data.title}</h1>
          <p className="text-gray-200 text-sm">{data.description}</p>
          <p className="text-lg font-semibold text-pink-500">
            Brand: <span className="text-gray-400">{data.brand}</span>
          </p>
          <p className="text-md font-medium text-pink-500">
            Category: <span className="text-gray-400">{data.category}</span>
          </p>
          <p className="text-3xl font-bold text-pink-700">${data.price}</p>
          <p className="text-sm text-gray-100">
            Rating: <span className="font-medium">{data.rating}</span> ⭐
          </p>
          <p className="text-sm text-gray-100">
            Stock available: <span className="font-medium">{data.stock}</span>
          </p>
          <button
            onClick={() => addToCart()}
            className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg shadow-lg transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
