import React, { useContext } from "react";
import Logo from "../assets/log.png";
import { Link } from "react-router-dom";
import "../App.css";
import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import ProductContext from "../context/ProductContext";
const Navbar = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const {state} = useContext(ProductContext)

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#2B3A55" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "120px", height: "80px", margin: "-13px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto" style={{ fontSize: "20px" }}>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-style"
                  aria-current="page"
                  style={linkStyle}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-style"
                  style={linkStyle}
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-style"
                  style={linkStyle}
                  to="/category"
                >
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-style"
                  style={linkStyle}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-style"
                  style={linkStyle}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <Link
              className="nav-link-style me-4"
              style={{
                fontSize: "22px",
                color: "white",
                textDecoration: "none",
              }}
              to="/login"
            >
              <FaUserAlt />
            </Link>
            <Link className="nav-link position-relative" to="/cart">
                <button
                  type="button"
                  className="btn position-relative"
                  style={{ backgroundColor: "var(--secondary-color)" }}
                >
                  <FaCartArrowDown style={{ color: "var(--primary-color)" }}/>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state.cart.length || 0}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
