import React from "react";
import "./Product.css";

function Product({ product }) {
  const percent = (product.rating / 5) * 100;

  const handleClick = () => {
    console.log(product.name);
  };

  return (
    <div className="border rounded-sm">
      <img
        className="w-full h-80 object-cover"
        src={product.image}
        alt={`Product ${product.id}`}
      />
      <div className="p-2">
        <p className="text-lg font-bold">{product.name}</p>
        <p>
          Category: <span className="italic">{product.category}</span>
        </p>
        <p className="font-bold">&#8377; {product.price}</p>
        <p>
          <span
            className="star-rating"
            style={{ "--rating-percent": `${percent}%` }}
          ></span>{" "}
          {product.rating}
        </p>
        <button
          onClick={handleClick}
          className="bg-sky-500 hover:bg-sky-700 hover:text-white p-2 my-1 rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
