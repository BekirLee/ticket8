import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  allProducts: [],
};

const url = "http://localhost:3000/api/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(url);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const res = await axios.delete(`${url}/${id}`);
    return id;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (item) => {
    const res = await axios.post(`${url}`, item);
    return res.data;
  }
);

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.products = state.allProducts.filter((item) =>
        item.name.toLowerCase().includes(action.payload.trim().toLowerCase())
      );
    },
    sortZA: (state, action) => {
      state.products = [...state.products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    },
    sortAZ: (state, action) => {
      state.products = [...state.products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.allProducts = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item._id !== action.payload._id
        );
        state.allProducts = state.allProducts.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.allProducts.push(action.payload);
      });
  },
});

export const { searchProduct, sortAZ, sortZA } = counterSlice.actions;

export default counterSlice.reducer;
