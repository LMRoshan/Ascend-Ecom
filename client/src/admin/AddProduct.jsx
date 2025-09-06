// import React from "react";
// import Navbar from "./Navbar";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const AddProduct = () => {
//   const {
//     handleSubmit,
//     handleChange,
//     values,
//     errors,
//     touched,
//     resetForm,
//     isSubmitting,
//   } = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       price: "",
//       stock: "",
//       category: "",
//       img: ""
//     },
//     validationSchema: Yup.object({
//       title: Yup.string()
//         .required("Name is required")
//         .min(2, "Name must be at least 2 characters"),
//       category: Yup.string()
//         .required("Category is required")
//         .min(2, "Category must be at least 2 characters"),
//       description: Yup.string()
//         .required("Description is required")
//         .min(2, "Description must be at least 2 characters"),
//       price: Yup.number()
//         .required("Price is required")
//         .positive("Price must be positive"),
//       stock: Yup.number()
//         .required("In stock is required")
//         .integer("Stock must be a whole number")
//         .min(0, "Stock cannot be negative"),
//     }),
//     onSubmit: async (values, { setSubmitting }) => {
//       const authToken = localStorage.getItem("authToken");

//       if (!authToken) {
//         console.error("No authentication token found. Please log in.");
//         return;
//       }
//       try {
//         const response = await fetch(
//           "http://localhost:3005/api/products/createProduct",
//           {
//             method: "POST",
//             headers: {
//               authToken: authToken,
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//           }
//         );

//         const json = await response.json();

//         if (response.ok && json.success) {
//           alert("Product added successfully");
//           resetForm();
//         } else {
//           alert(`Failed to add product: ${json.message || "Unknown error"}`);
//         }
//       } catch (error) {
//         alert("Network Error: " + error.message);
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-4">
//         <div className="row">
//           <div className="col-md-8 offset-md-2">
//             <h2 className="mb-4">Add New Product</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="title" className="form-label">
//                   Product Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={values.title}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="title"
//                   disabled={isSubmitting}
//                 />
//                 {errors.title && touched.title && (
//                   <div className="invalid-feedback">{errors.title}</div>
//                 )}
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="productDescription" className="form-label">
//                   Description *
//                 </label>
//                 <textarea
//                   name="description"
//                   value={values.description}
//                   onChange={handleChange}
//                   className="form-control"
//                   id="productDescription"
//                   rows="3"
//                   disabled={isSubmitting}
//                 />
//                 {errors.description && touched.description && (
//                   <div className="invalid-feedback">{errors.description}</div>
//                 )}
//               </div>

//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <label htmlFor="productPrice" className="form-label">
//                     Price *
//                   </label>
//                   <input
//                     type="number"
//                     name="price"
//                     value={values.price}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="productPrice"
//                     step="0.01"
//                     min="0"
//                     disabled={isSubmitting}
//                   />
//                   {errors.price && touched.price && (
//                     <div className="invalid-feedback">{errors.price}</div>
//                   )}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <label htmlFor="productInstock" className="form-label">
//                     Stock *
//                   </label>
//                   <input
//                     type="number"
//                     name="stock"
//                     value={values.stock}
//                     onChange={handleChange}
//                     className="form-control"
//                     id="productInstock"
//                     min="0"
//                     disabled={isSubmitting}
//                   />
//                   {errors.stock && touched.stock && (
//                     <div className="invalid-feedback">{errors.stock}</div>
//                   )}
//                 </div>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="category" className="form-label">
//                   Category *
//                 </label>
//                 <select
//                   name="category"
//                   value={values.category}
//                   onChange={handleChange}
//                   className='form-select' 
//                   id="category"
//                   disabled={isSubmitting}
//                 >
//                   <option value="">Select a category</option>
//                   <option value="Waterproof">Waterproof</option>
//                   <option value="Windproof">Windproof</option>
//                   <option value="Bottoms">Bottoms</option>
//                   <option value="Tops">Tops</option>
//                 </select>
//                 {errors.category && touched.category && (
//                   <div className="invalid-feedback">{errors.category}</div>
//                 )}
//               </div>

//               <div className="mb-3">
//               <label htmlFor="productImage" className="form-label">
//                 Image *
//               </label>
//               <input
//                 type="file"
//                 name="img"
//                 onChange={handleChange}
//                 className="form-control"
//                 id="productImage"
//               />
//             </div>

//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Adding Product..." : "Add Product"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddProduct;


import React, { useState } from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      stock: "",
      category: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      category: Yup.string()
        .required("Category is required")
        .min(2, "Category must be at least 2 characters"),
      description: Yup.string()
        .required("Description is required")
        .min(2, "Description must be at least 2 characters"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be positive"),
      stock: Yup.number()
        .required("In stock is required")
        .integer("Stock must be a whole number")
        .min(0, "Stock cannot be negative"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        console.error("No authentication token found. Please log in.");
        return;
      }

      try {
        const formData = new FormData();
        
        Object.keys(values).forEach(key => {
          formData.append(key, values[key]);
        });
        
        if (selectedFile) {
          formData.append('images', selectedFile);
        }

        const response = await fetch(
          "http://localhost:3005/api/products/createProduct",
          {
            method: "POST",
            headers: {
              authToken: authToken,
            },
            body: formData,
          }
        );

        const json = await response.json();

        if (response.ok && json.success) {
          alert("Product added successfully");
          resetForm();
          setSelectedFile(null); 
        } else {
          alert(`Failed to add product: ${json.message || "Unknown error"}`);
        }
      } catch (error) {
        alert("Network Error: " + error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  className={`form-control ${errors.title && touched.title ? 'is-invalid' : ''}`}
                  id="title"
                  disabled={isSubmitting}
                />
                {errors.title && touched.title && (
                  <div className="invalid-feedback">{errors.title}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`}
                  id="productDescription"
                  rows="3"
                  disabled={isSubmitting}
                />
                {errors.description && touched.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Price *
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    className={`form-control ${errors.price && touched.price ? 'is-invalid' : ''}`}
                    id="productPrice"
                    step="0.01"
                    min="0"
                    disabled={isSubmitting}
                  />
                  {errors.price && touched.price && (
                    <div className="invalid-feedback">{errors.price}</div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="productInstock" className="form-label">
                    Stock *
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={values.stock}
                    onChange={handleChange}
                    className={`form-control ${errors.stock && touched.stock ? 'is-invalid' : ''}`}
                    id="productInstock"
                    min="0"
                    disabled={isSubmitting}
                  />
                  {errors.stock && touched.stock && (
                    <div className="invalid-feedback">{errors.stock}</div>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category *
                </label>
                <select
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  className={`form-select ${errors.category && touched.category ? 'is-invalid' : ''}`}
                  id="category"
                  disabled={isSubmitting}
                >
                  <option value="">Select a category</option>
                  <option value="Waterproof">Waterproof</option>
                  <option value="Windproof">Windproof</option>
                  <option value="Bottoms">Bottoms</option>
                  <option value="Tops">Tops</option>
                </select>
                {errors.category && touched.category && (
                  <div className="invalid-feedback">{errors.category}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="productImage" className="form-label">
                  Image *
                </label>
                <input
                  type="file"
                  name="images"
                  onChange={handleFileChange}
                  className="form-control"
                  id="productImage"
                  accept="image/*"
                  disabled={isSubmitting}
                />
                {selectedFile && (
                  <small className="form-text text-muted">
                    Selected: {selectedFile.name}
                  </small>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding Product..." : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;