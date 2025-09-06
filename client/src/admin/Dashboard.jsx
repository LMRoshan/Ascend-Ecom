import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Img1 from "../assets/banner/banner1.png";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const getMessage = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      
      if (!authToken) {
        navigate("/login");
        return;
      }
      const response = await fetch(
        "https://ascend-y4h7.onrender.com/api/messages/getMessages",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authToken: authToken,
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        setMessages(json.messages);
      }
    } catch (error) {
      console.log("Network Error", error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        navigate("/login");
        return;
      }

      const response = await fetch(
        `https://ascend-y4h7.onrender.com/api/messages/deleteMessage/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authToken: authToken,
          },
        }
      );
    
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || response.status);
      } else {
        alert("Product deleted");
      }

      getMessage();

    } catch (error) {
      console.log("Network Error", error);
    }
  }

const handleDeleteMessage = async (id) => {
  await deleteMessage(id);
}

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <>
    <Navbar/>
      <div className="container-fluid mt-3">
        <div className="row">
          <div
            className="sider col-md-2"
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              height: "88vh",
              boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            }}
          >
            <div className="quickLinks">
              <h5 className="fw-bolder text-decoration-underline">
                Quick Links
              </h5>
              <ul>
                <li className="list-unstyled">
                  <Link
                    to="/adminProds"
                    style={{ color: "black", textDecoration: "none", display: "block" }}
                    className="quick-links"
                  >
                    Add Product
                  </Link>
                  <Link
                    to="/adminProds"
                    style={{ color: "black", textDecoration: "none" }}
                    className="quick-links"
                  >
                    View Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-10">
            <div
              className="welcome"
              style={{
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                height: "200px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={Img1}
                alt="Admin"
                className="img-fluid"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center 65%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 50,
                  left: 60,
                  color: "white",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                <h1
                  style={{
                    fontWeight: "bold",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Welcome
                </h1>
                <h1
                  style={{
                    fontWeight: "bolder",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    color: "var(--secondary-color)",
                    textTransform: "uppercase",
                    fontSize: "3.5rem",
                    marginTop: "-20px",
                  }}
                >
                  Admin
                </h1>
              </div>
            </div>

            <div className="client-msg">
              <h3
                className="mt-5"
                style={{
                  display: "inline-block",
                  borderBottom: "2px solid var(--secondary-color)",
                  paddingBottom: "4px",
                  fontWeight: "bold",
                  color: "#2c3e50",
                }}
              >
                Messages from Visitors
              </h3>

              {messages &&
                messages.map((msg) => (
                  <div key={msg._id} className="message p-3 mt-4 position-relative">
                    <h5
                      className="fw-bolder mb-3 d-flex align-items-center gap-2"
                      style={{ fontSize: "1.2rem" }}
                    >
                      <FaUser
                        style={{ marginRight: "5px", color: "var(--secondary-color)" }}
                      />{" "}
                      {msg.name}
                    </h5>
                    <p>
                      <strong
                        className="text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Email:
                      </strong>{" "}
                      {msg.email}
                    </p>
                    <p>
                      <strong
                        className="text-muted"
                        style={{ fontSize: "0.9rem", marginTop: "-30px" }}
                      >
                        Subject:
                      </strong>{" "}
                      {msg.subject}
                    </p>
                    <div className="msg d-flex align-items-center">
                      <p>
                        <strong
                          className="text-muted"
                          style={{ fontSize: "1rem" }}
                        >
                          Message:
                        </strong>{" "}
                        {msg.message}
                      </p>
                    </div>

                    <div className="del-button">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteMessage(msg._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
