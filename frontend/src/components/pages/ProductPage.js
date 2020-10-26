import React, { useEffect } from "react";

import "../../styles/ProductPage.css";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../../actions/productActions";

const ProductPage = (props) => {
  const productInfo = useSelector((state) => state.productDetails);
  const { product, loading, error } = productInfo;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetails(props.match.params.id));
    console.log(props.match.params.id);
    return () => {
      // Cleanup not necessary.
    };
  }, []);

  return (
    loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :

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
