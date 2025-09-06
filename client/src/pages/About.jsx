import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Img1 from "../assets/log.png";
import Img2 from "../assets/about.png";

const About = () => {
  const cardVariants = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: -5,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
      },
    },
  };

  const textVariants = {
    offscreen: { x: 200, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  return (
    <>
      <Navbar />
      <div className="about">
        <div
          className="container p-4"
          style={{
            margin: "50px",
            backgroundColor: "var(--primary-color)",
            borderRadius: "20px",
          }}
        >
          <div className="row align-items-center">
            
            <motion.div
              className="logo-img d-flex flex-column align-items-center col-md-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              variants={cardVariants}
            >
              <img
                src={Img1}
                alt="logo"
                style={{ width: "550px", marginTop: "-70px" }}
              />
              <h3
                style={{
                  marginTop: "-70px",
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: "bolder",
                }}
              >
                Ascend
              </h3>
            </motion.div>

           
            <motion.div
              className="story-text col-md-6"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              variants={textVariants}
            >
              <h2
                style={{
                  color: "var(--secondary-color)",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                Our Story
              </h2>
              <p style={{ color: "white" }}>
                Welcome to Ascend, your one-stop destination for all things
                adventure! We're a passionate team of adventurers who believe in
                the power of exploration to unlock new horizons and create
                unforgettable memories.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mission p-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2
                  style={{
                    color: "var(--secondary-color)",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Our Mission
                </h2>
                <p style={{ color: "var(--primary-color)" }}>
                  Our mission is to inspire people to step outside their comfort
                  zones and embrace the spirit of adventure. We aim to provide
                  high-quality outdoor gear and experiences that empower
                  individuals to explore nature with confidence, connect with
                  others who share the same passion, and create memories that
                  last a lifetime. At Ascend, we believe adventure is more than
                  a journey — it’s a way of life.”
                </p>
              </div>
              <div className="col-md-6">
                <div className="img-mission">
                  <img
                    src={Img2}
                    alt="mission"
                    style={{ width: "100%", height: "50%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
