import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://node-server-team-proj.onrender.com/api/';

export const exerciseList = createAsyncThunk('exercise/list', async params => {
  const { data } = await axios.get(`exercises/${params}`);
  return data;
  
});


export const exerciseCategories = createAsyncThunk(
  'exercise/categories',
  async params => {
    const response = await axios.get(`exercise-categories/${params}`);
    return response.data;
  }
);
