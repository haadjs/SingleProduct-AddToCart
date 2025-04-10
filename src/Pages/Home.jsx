import React from 'react';
import ProductCard from '../Components/ProductCard';
import UseFetch from '../Hooks/UseFetch';

const Home = () => {
  const [data, loading, error] = UseFetch(`https://dummyjson.com/products?limit=9`);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {loading && (
        <div className="text-center mt-10 text-xl font-semibold text-pink-600">
          Loading...
        </div>
      )}
      {error && (
        <div className="text-center mt-10 text-red-500">
          Error: {error}
        </div>
      )}
      {!loading && !error && (
        <>
          <div className="text-center my-10">
            <h2 className="text-4xl font-bold text-pink-600">Discover Your Beauty</h2>
            <p className="text-gray-500 mt-2">Top quality makeup and skincare products</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {data.products?.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
