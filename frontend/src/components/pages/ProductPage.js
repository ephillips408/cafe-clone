import React from "react";

import webstoreData from "../../webstoreData";
import "../../styles/ProductPage.css"

const ProductPage = (props) => {
  const product = webstoreData.products.find(
    (item) => item.id === props.match.params.id
  );

  return (
    <div className="product-container">
      <img 
        className="product-page-image"
        src={product.image}
        alt="bag-of-coffee"
      />
      <div className="product-info">
        <ul>
          <li className="product-title">{product.name}</li>
          <li className="product-price">${product.price}</li>
          <li className="product-description">{product.description}</li>
          <li>
            <button className="add-to-cart-button">Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
