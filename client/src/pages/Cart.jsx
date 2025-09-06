import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="text-center">
          <h1 className="fw-bold" style={{ color: "#ff6f61" }}>
            🚧 Under Construction 🚧
          </h1>
          <p className="text-muted mt-3" style={{ fontSize: "1.2rem" }}>
            We're working hard to bring you something amazing.
            <br />
            Please check back soon!
          </p>

          <Link to="/" className="btn btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
