import React, { useState, useEffect } from "react";
import axios from "axios";


const EditProductForm = ({ product, onClose, refreshProducts }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    category: typeof product.category === "object" ? product.category.name : product.category || "",  
  });
  

  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.classList.add("overflow-hidden");

    // Re-enable scrolling when modal closes
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.put(
        `https://e-commerce-backend-xo61.onrender.com/api/products/${product._id}`,
        formData
      );
  
      if (response.status === 200) {
        alert("Product updated successfully");
  
        // Refresh Redux state without reloading the page
        refreshProducts(); 
        onClose(); 
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-white p-6 w-[400px] max-w-full rounded-lg shadow-lg z-50">
        <h2 className="text-center font-bold text-lg mb-4">Edit Product</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border p-2 w-full rounded-md"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
