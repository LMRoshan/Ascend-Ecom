import React, { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductContext from "../context/ProductContext";

const DetailInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state || {};

  const { dispatch, state, products } = useContext(ProductContext);

  const currentProduct = product || products?.find((p) => p._id === id);

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const inCart = (product) => {
    return (
      state.cart &&
      state.cart.some((item) => {
        return item._id === product._id;
      })
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-3 mb-3">
        <div className="row">
          {!currentProduct ? (
            <h1>Product not found</h1>
          ) : (
            <div className="row detail">
              <div className="col-md-6 d-flex justify-content-center">
                <img
                  src={`https://ascend-y4h7.onrender.com/uploads/${currentProduct.img[0]}`}
                  alt={currentProduct.title}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-flex-start">
                <h3>{currentProduct.title}</h3>
                <p>{currentProduct.category}</p>
                <h3>${currentProduct.price}</h3>
                <p>Stocks: {currentProduct.stock}</p>
                <div className="description">
                  <h5>Description</h5>
                  <p>{currentProduct.description}</p>
                </div>
                <div className="mt-3">
                  {inCart(currentProduct) ? (
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => handleRemoveFromCart(currentProduct._id)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleAddToCart(currentProduct)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailInfo;
