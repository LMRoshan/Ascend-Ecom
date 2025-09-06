import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditProduct = ({ product, onClose, onSave }) => {
  const formData = {
    title: product.title,
    description: product.description,
    price: product.price,
    stock: product.stock,
    category: product.category,
  };

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      title: Yup.string().required("Name is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Description is required"),
      price: Yup.number().required("Price is required"),
      stock: Yup.number().required("stock is required"),
    }),
    onSubmit: (values, action) => {
      onSave(values);
      onClose();
      action.resetForm();
    },
  });

  return (
    <div className=" modal show" style={{ display: "block" }}>
      <div className=" modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit product</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-6">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
                {errors.title && touched.title && (
                  <div className="text-danger">{errors.title}</div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                />
                {errors.category && touched.category && (
                  <div className="text-danger">{errors.category}</div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
                {errors.description && touched.description && (
                  <div className="text-danger">{errors.description}</div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
                {errors.price && touched.price && (
                  <div className="text-danger">{errors.price}</div>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="stock" className="form-label">
                  Instock
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  name="stock"
                  value={values.stock}
                  onChange={handleChange}
                />
                {errors.stock && touched.stock && (
                  <div className="text-danger">{errors.stock}</div>
                )}
              </div>
              <div className=" modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

