import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import webstoreData from "../../webstoreData"; // just for prototyping.
import "../../styles/Webstore.css";
import { listProducts } from "../../actions/productActions";

const Store = (props) => {
  const productList = useSelector(state => state.productList)
  const { products, loading, error } = productList
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts())
    return () => {
      // Cleanup not necessary.
    }
  }, [])

  return (
    loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :

    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <Link to={`/product/${product._id}`}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>
            <div className="product-name">
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </div>
            <div className="product-price">${product.price}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Store;
