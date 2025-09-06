import React, { useState, useReducer, useEffect } from "react";
import { cartReducer } from "./Reducer";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const allProduct = async () => {
    try {
      const response = await fetch("https://ascend-y4h7.onrender.com/api/products/getProducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let data = await response.json();
      console.log(data);
      
      setProducts(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteProduct = async (id) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.error("No authentication token found. Please log in.");
      return;
    }
    try {
      const response = await fetch(`https://ascend-y4h7.onrender.com/api/products/deleteProduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authToken: authToken,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || response.status);
      } else {
        alert("Product deleted");
      }

      allProduct();
    } catch (error) {
      console.log(error.message);
    }
  };

  const editProduct = async (id, updateData) => {

  const { title, description, price, category, stock } = updateData;
  const authToken = localStorage.getItem("authToken");
  
  if (!authToken) {
    console.error("No authentication token found. Please log in.");
    return;
  }
  
  try {
    const response = await fetch(`https://ascend-y4h7.onrender.com/api/products/updateProduct/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "authToken": authToken,
      },
      body: JSON.stringify({ title, description, price, category, stock }),
    });
    
    if (!response.ok) {
      console.log("Edit product error:", response.status);
    }
    
    const data = await response.json();
    allProduct(); 
    return data;
  } catch (error) {
    console.error("Edit product error:", error.message);
  }
};

  useEffect(() => {
    allProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{ state, dispatch, deleteProduct, editProduct, products, allProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
