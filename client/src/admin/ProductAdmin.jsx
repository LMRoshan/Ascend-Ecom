import React, { useContext, useState } from "react";
import "../App.css";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import EditProduct from "./EditProduct";

const ProductAdmin = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, allProduct, deleteProduct, editProduct } =
    useContext(ProductContext);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    allProduct();
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

const saveEdit = async (updateData) => {
  if (!selectedProduct || !selectedProduct._id) {
    alert("No product selected for editing");
    return;
  }
  try {
    await editProduct(selectedProduct._id, updateData);
    closeEditModal();
  } catch (error) {
    alert("Failed to update product: " + error.message);
  }
};

  return (
    <>
      <Navbar />
      <div className="container m-5">
        <div className="row">
          <h1 className="products-title">Available Products</h1>
          {products.length == 0 ? (
            <p>No products found</p>
          ) : (
            products.map((product, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-3"
                key={index}
              >
                <div
                  className="best-seller-card"
                  style={{
                    width: "25rem",
                    minHeight: "20rem",
                    position: "relative",
                  }}
                  key={index}
                >
                  <img
                    className="card-img-top"
                    src={`http://localhost:3005/uploads/${product.img[0]}`}
                    alt="product"
                    style={{ height: "23rem" }}
                  />
                  <div className="body p-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5
                        className="title"
                        style={{ color: "var(--secondary-color)" }}
                      >
                        {product.title}
                      </h5>

                      <div
                        className="menu-option position-absolute bg-white p-2 shadow rounded"
                        style={{ zIndex: 999, bottom: "90px", right: "10px" }}
                      >
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => openEditModal(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p
                      className="card-text"
                      style={{ color: "black", marginBottom: "-3px" }}
                    >
                      {product.category}
                    </p>
                    <p className="card-text fw-bold" style={{ color: "black" }}>
                      $ {product.price}
                    </p>
                    <p className="card-text">Stock: {product.stock}</p>

                    <Link
                      to={`/products/${product._id}`}
                      state={{ products }}
                      className="btn-product"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {modalVisible && selectedProduct && selectedProduct._id && (
          <EditProduct
            product={selectedProduct}
            onClose={closeEditModal}
            onSave={saveEdit}
          />
        )}
      </div>
    </>
  );
};

export default ProductAdmin;
