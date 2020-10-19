import React from "react";
import { Link } from "react-router-dom";

import webstoreData from "../../webstoreData"; // just for prototyping.
import "../../styles/Webstore.css";

const Store = () => {
  return (
    <ul className="products">
      {webstoreData.products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <Link to={`product/${product.id}`}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="product-name">
              <Link to={`product/${product.id}`}>{product.name}</Link>
            </div>
            <div className="product-price">{product.price}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Store;
