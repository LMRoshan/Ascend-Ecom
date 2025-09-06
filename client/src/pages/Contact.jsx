import React from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const { values, handleSubmit, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, action) => {
      const { name, email, subject, message } = values;
      try {
        const response = await fetch("http://localhost:3005/api/messages/createMessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        });

        const json = await response.json();
        if (json.success) {
          alert("Message sent successfully");
          action.resetForm();
        }
      } catch (error) {
        console.log("Network Error", error);
      }
    },
  });

  const iconStyle = {
    color: "var(--secondary-color)",
    fontSize: "1.8rem",
    marginRight: "20px",
  };

  return (
    <div>
      <Navbar />
      <div className="contact mt-4 mb-4">
        <div className="container">
          <div className="contact-title mb-5">
            <h2 className="text-center fw-bold">Contact Us</h2>
            <p className="text-center">Get in touch with us</p>
          </div>

          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="contact-info">
                <div className="contact-detail">
                  <FaMapMarkerAlt
                    style={iconStyle}
                  />
                  <div>
                    <h3>Location</h3>
                    <p>48 Liston Ave, Reservoir VIC 3073, Australia</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <FaEnvelope
                    style={iconStyle}
                  />
                  <div>
                    <h3>Email</h3>
                    <p>info@ascend.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <FaPhone
                    style={iconStyle}
                  />
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <FaClock
                    style={iconStyle}
                  />
                  <div>
                    <h3>Business Hours</h3>
                    <p style={{ marginBottom: "-7px" }}>
                      Monday-Friday: 9AM - 5PM
                    </p>
                    <p>Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label fw-bold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        className="form-control"
                        id="name"
                        required
                      />
                      {errors.name && touched.name ? (
                        <p className="error">{errors.name}</p>
                      ) : null}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-bold">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        className="form-control"
                        id="email"
                        required
                      />
                      {errors.email && touched.email ? (
                        <p className="error">{errors.email}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      value={values.subject}
                      className="form-control"
                      id="subject"
                      required
                    />
                    {errors.subject && touched.subject ? (
                      <p className="error">{errors.subject}</p>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-bold">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      value={values.message}
                      className="form-control"
                      id="message"
                      rows="5"
                      required
                    ></textarea>
                    {errors.message && touched.message ? (
                      <p className="error">{errors.message}</p>
                    ) : null}
                  </div>
                  <button type="submit" className="contact-btn d-block m-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
