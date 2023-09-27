import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://node-server-team-proj.onrender.com/api/';

export const getDiariesByDate = createAsyncThunk(
  'diary/getByDate',
  async currentDate => {
    const { data } = await axios.get(`diaries/${currentDate}`);
    return data;
  }
);

export const addDiariesProduct = createAsyncThunk(
  'diary/addProduct',
  async body => {
    const { date, productId, quantity } = body;
    const { data } = await axios.post('eaten-products/', {
      date,
      productId,
      weight: quantity,
    });
    return { ...data, produst: body };
  }
);

export const addDiaryExercise = createAsyncThunk(
  'diary/addExercise',
  async body => {
    const { date, exerciseId, duration } = body;
    const { data } = await axios.post('done-exercises/', {
      date,
      exerciseId,
      duration,
    });
    return { ...data, newExercise: body.data };
  }
);

export const deleteDiaryExercise = createAsyncThunk(
  'diary/deleteExercise',
  async params => {
    const { data } = await axios.delete(`done-exercises/${params}`);
      return { data };
    }

  
);

export const deleteDiaryProduct = createAsyncThunk(
  'diary/deleteProduct',
  async params => {
  const{ data } = await axios.delete(`eaten-products/${params}`);
  return data
  }
);
