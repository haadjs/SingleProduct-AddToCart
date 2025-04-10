import React from "react";
import UseFetch from "../Hooks/UseFetch";
import Card from "../Components/Card";

const Products = () => {
  let [data, loading, error] = UseFetch("https://dummyjson.com/products");
  console.log(data);

  return (
    <>


      {error && (
        <h1>
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </h1>
      )}
      <h1 className="mt-5 text-3xl font-bold text-center m-4"> PRODUCTS :)</h1>
     
     
      {loading && <h1 className="mt-9 text-center" ><span className="loading loading-dots loading-xl"></span></h1>}

      <div className="flex flex-wrap justify-center gap-7 ">
        {data &&
          data.products.map((itm) => (
            <Card
              key={itm.id}
              title={itm.title}
              desc={itm.description}
              img={itm.thumbnail}
              price={itm.price}
              id={itm.id}
            />
          ))}
      </div>
    </>
  );
};

export default Products;
