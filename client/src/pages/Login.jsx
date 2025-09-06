import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaEye, FaEyeSlash, FaUserNinja, FaUnlockAlt } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import Img1 from "../assets/about.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
  const form = {
    username: "",
    password: "",
  };

  const LoginSchema = Yup.object({
    username: Yup.string()
      .min(2, "Invalid username")
      .required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    useFormik({
      initialValues: form,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        const { username, password } = values;
        try {
          const response = await fetch("http://localhost:3005/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });

          const json = await response.json();
          if (json.success) {
            localStorage.setItem("authToken", json.authToken);
            navigate("/dashboard");
          } else {
            alert("Invalid credentials");
            action.resetForm();
          }
        } catch (error) {
          console.log("Network Error", error);
        }
      },
    });

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow p-4"
          style={{ width: "100%", maxWidth: "1000px" }}
        >
          <div className="row g-0">
            {/* Left Column */}
            <div className="col-md-6 d-flex align-items-center">
              <img
                src={Img1}
                alt="img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right Column */}
            <div className="col-md-6 d-flex flex-column justify-content-center p-4">
              <h2
                className="text-center mb-4"
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  background:
                    "linear-gradient(to right, #eee, var(--secondary-color), #eee)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Welcome Back
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">
                    Username
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUserNinja
                        style={{ color: "var(--secondary-color)" }}
                      />
                    </span>
                    <input
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                      id="username"
                      autoFocus
                      required
                    />
                  </div>
                  {errors.username && touched.username ? (
                    <p className="text-danger">{errors.username}</p>
                  ) : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon2">
                      <FaUnlockAlt
                        style={{ color: "var(--secondary-color)" }}
                      />
                    </span>
                    <input
                      type={passwordVisibility ? "text" : "password"}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                      id="password"
                      required
                    />
                    <span
                      className="input-group-text"
                      onClick={changePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      {passwordVisibility ? (
                        <FaEyeSlash
                          style={{ color: "var(--secondary-color)" }}
                        />
                      ) : (
                        <FaEye style={{ color: "var(--secondary-color)" }} />
                      )}
                    </span>
                  </div>
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password}</p>
                  ) : null}
                </div>

                <Link
                  className="mb-2 d-block text-decoration-none text-black"
                  to="/forgot-password"
                >
                  Forgot Password?
                </Link>

                <button
                  type="submit"
                  className="btn w-100 mt-3 mb-3"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
