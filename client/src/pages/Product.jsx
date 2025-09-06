import React, { useContext } from "react";
import "../App.css";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Navbar />
      <div className="container m-5">
        <div className="row">
          <h1 className="products-title">Available Products</h1>
          {products.length == 0 ? (
            <p>No products found</p>
          ) : (
            products.map((product, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-3"
                key={index}
              >
                <div
                  className="best-seller-card"
                  style={{
                    width: "23rem",
                    minHeight: "20rem",
                    position: "relative",
                  }}
                  key={index}
                >
                  <img
                    className="card-img-top"
                    src={`http://localhost:3005/uploads/${product.img[0]}`}
                    alt="product"
                    style={{ height: "23rem", objectFit: "cover" }}
                  />
                  <div className="body p-2">
                    <h5
                      className="title"
                      style={{ color: "var(--secondary-color)" }}
                    >
                      {product.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{ color: "black", marginBottom: "-3px" }}
                    >
                      {product.category}
                    </p>
                    <p className="card-text fw-bold" style={{ color: "black" }}>
                      $ {product.price}
                    </p>
                    <Link
                      to={`/products/${product._id}`}
                      state={{ product }}
                      className="btn-product"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
