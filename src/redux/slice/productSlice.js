import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://e-commerce-backend-xo61.onrender.com/api/products";

// Fetch Products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});


// Update Product
export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, updatedData }) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
});

// Delete Product
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const productSlice = createSlice({
  name: "product",
  initialState: { products: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => { state.products = action.payload; })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(p => p._id === action.payload._id);
        if (index !== -1) state.products[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(p => p._id !== action.payload);
      });
  },
});

export default productSlice.reducer;
