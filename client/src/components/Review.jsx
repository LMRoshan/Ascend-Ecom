import React from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div style={{ background: "#a0a0a0ff" }}>
      <div className="container p-5">
        <div className="review-title">
          <h2 className="text-center fw-bold mb-5">What our Customers say</h2>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <div
              className="review-card"
              style={{
                width: "20rem",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px var(--secondary-color)",
              }}
            >
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="review-body mt-2">
                <p className="review-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p className="review-name">John Doe</p>
              </div>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <div
              className="review-card"
              style={{
                width: "20rem",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px var(--secondary-color)",
              }}
            >
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="review-body mt-2">
                <p className="review-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p className="review-name">John Doe</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <div
              className="review-card"
              style={{
                width: "20rem",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px var(--secondary-color)",
              }}
            >
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="review-body mt-2">
                <p className="review-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p className="review-name">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
