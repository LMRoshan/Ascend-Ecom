import React from "react";
import Logo from "../assets/log.png";
import { Link } from "react-router-dom";
import "../App.css";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

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
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-style"
                  style={linkStyle}
                  to="/adminProds"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-style"
                  style={linkStyle}
                  to="/addProduct"
                >
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-style"
                  style={linkStyle}
                  to="/"
                >
                  Main Page
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="d-flex align-items-center"
            style={{
              backgroundColor: "var(--secondary-color)",
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            <FaUserAlt style={{ marginRight: "10px" }} /> Welcome Admin
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
