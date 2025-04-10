import React from 'react';
import { useNavigate } from 'react-router';

const Card = ({ title, desc, img, id }) => {
  let navigate = useNavigate();


  return (
    <div className="bg-white rounded-xl shadow-md w-96 overflow-hidden hover:shadow-pink-300 transition-shadow duration-300">
      <figure>
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="p-4">
        <h2 className="text-xl font-bold text-pink-600">{title}</h2>
        <p className="text-gray-500 mt-2 text-sm">{desc}</p>
        <div className="flex justify-end mt-4">
          <button
          
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition"
            onClick={() => navigate(`/product/${id}`)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
