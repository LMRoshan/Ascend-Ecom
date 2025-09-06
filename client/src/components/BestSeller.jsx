import React from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Img1 from "../assets/bestSeller/tshirt.png";
import Img2 from "../assets/bestSeller/tshirt1.png";
import Img3 from "../assets/bestSeller/waterproof1.png";
import Img4 from "../assets/bestSeller/waterproof2.png";
import Img5 from "../assets/bestSeller/windproof1.png";

const BestSeller = () => {
  const imgStyle = {
    width: "100%",
    height: "19rem",
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <>
      <div className="best-seller mt-4">
        <div className="container pt-4 pb-4">
          <div className="best-seller-title">
            <h2 className="text-center fw-bold">Best Sellers</h2>
            <p className="text-center">
              Explore our extensive collection of best-selling products
            </p>
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className="best-seller-card">
                <img src={Img1} alt="tshirt" style={imgStyle} />
                <div className="body mt-2 p-2">
                  <h5
                    className="title me-2 fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Arsenal Away Jersey
                  </h5>
                  <p className="price">$30</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="best-seller-card">
                <img src={Img2} alt="tshirt" style={imgStyle} />
                <div className="body mt-2 p-2">
                  <h5
                    className="title me-2 fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Plain White T-shirt
                  </h5>
                  <p className="price">$20</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="best-seller-card">
                <img src={Img3} alt="tshirt" style={imgStyle} />
                <div className="body mt-2 p-2">
                  <h5
                    className="title me-2 fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Aston Martin F1 Jacket
                  </h5>
                  <p className="price">$230</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="best-seller-card">
                <img src={Img4} alt="tshirt" style={imgStyle} />
                <div className="body mt-2 p-2">
                  <h5
                    className="title me-2 fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Redbull Racing F1 Jacket
                  </h5>
                  <p className="price">$210</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="best-seller-card">
                <img src={Img5} alt="tshirt" style={imgStyle} />
                <div className="body mt-2 p-2">
                  <h5
                    className="title me-2 fw-bold"
                    style={{ color: "var(--primary-color)" }}
                  >
                    Aroan Windproof Jacket
                  </h5>
                  <p className="price">$65</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BestSeller;