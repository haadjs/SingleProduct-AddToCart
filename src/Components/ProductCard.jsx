import React from 'react';
import { useNavigate } from 'react-router';

const ProductCard = ({ title, price, thumbnail }) => {
    let navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all">
      <img src={thumbnail} alt={title} className="w-full h-52 object-cover rounded-lg" />
      <h2 className="mt-3 text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-pink-500 font-bold">${price}</p>
      <button onClick={()=> navigate('/Products')} className="mt-2 px-4 py-1 bg-pink-500 text-white rounded hover:bg-pink-600">
        See more
      </button>
    </div>
  );
};

export default ProductCard;
