import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://node-server-team-proj.onrender.com/api/';

export const getDiariesByDate = createAsyncThunk(
  'diary/getByDate',
  async currentDate => {
    const { data } = await axios.get(`diaries/${currentDate}`);
    return data.meal;
  }
);

export const addDiariesProduct = createAsyncThunk(
  'diary/addProduct',
  async body => {
    const { date, productId, weight } = body;
    const { data } = await axios.post('eaten-products/', {
      date,
      productId,
      weight,
    });
    console.log(body);
    return { ...data, product: body };
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
    const { status, data } = await axios.delete(
      `done-exercises/${params.exerciseId}`,
      { data: params }
    );
    if (status === 200) {
      return { exerciseId: params.exerciseId, data };
    }
    return {};
  }
);

export const deleteDiaryProduct = createAsyncThunk(
  'diary/deleteProduct',
  async params => {
    const { status, data } = await axios.delete(
      `eaten-products/${params.productId}`,
      { data: params }
    );
    if (status === 200) {
      return { productId: params.productId, data };
    }
    return {};
  }
);
