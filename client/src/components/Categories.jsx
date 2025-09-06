import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Categories = ({ cards, buttonVisibility = true }) => {
  const cardStyle = { width: "23rem", height: "27rem" };

  return (
    <div>
      <div className="container mt-4 mb-4">
        <div className="category-title">
          <h2 className="text-center fw-bold">Category</h2>
          <p className="text-center mb-4">
            Explore our handpicked product categories designed to fit your style
            and needs
          </p>
        </div>

        <div className="row g-4 justify-content-between">
          {cards.map((card, index) => (
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center" key={index}>
              <div className="card card-hover" style={cardStyle}>
                <img className="card-img-top" src={card.img} alt="shorts" />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "var(--secondary-color)" }}
                  >
                    {card.title}
                  </h5>
                  <p className="card-text" style={{ color: "white" }}>
                    {card.text}
                  </p>
                  <Link to={`/category/${card.category}`} className="btn-category">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {buttonVisibility && (
            <div className="category-btn text-center">
              <Link to="/category" className="btn-view-more-product">
                View More
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
