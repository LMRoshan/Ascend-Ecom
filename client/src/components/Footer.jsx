import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="footer-content">
              <h3 className="footer-title">Ascend</h3>
              <p>
                Embark on unforgettable journeys with our adventure brand, where
                every experience is crafted for thrill, discovery, and the great
                outdoors
              </p>
              <div className="social-links">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="footer-content">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/category">Category</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-content">
              <h3>Products</h3>
              <ul>
                <li>
                  <a href="#">Windproof Jackets</a>
                </li>
                <li>
                  <a href="#">Waterproof Jackets</a>
                </li>
                <li>
                  <a href="#">T-shirts</a>
                </li>
                <li>
                  <a href="#">Buttoms</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <p>&copy; 2025 Ascend. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
