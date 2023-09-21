import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://node-server-team-proj.onrender.com/api/';

export const productCategories = createAsyncThunk(
  'products/categories',
  async () => {
    const { data } = await axios.get('products/categories');
    return data;
  }
);

export const productList = createAsyncThunk('products/list', async () => {
  const { data } = await axios.get('products?limit=1000');
  return data.products;
});
