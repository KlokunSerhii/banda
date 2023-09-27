import { createSlice } from '@reduxjs/toolkit';
import {
  addDiariesProduct,
  addDiaryExercise,
  deleteDiaryExercise,
  deleteDiaryProduct,
  getDiariesByDate,
} from './operations';

const pending = state => {
  state.isLoading = true;
};

const addDiary = (state, { payload }) => {
  const { newProduct } = payload;
  if (newProduct) {
    state.consumedProducts = [payload];
    state.isLoading = false;
  }
};

const getDiary = (state, { payload }) => {
  const { meal, workout } = payload;
  state.consumedProducts = [...meal];
  state.doneExercises = [...workout];
  state.isLoading = false;
};

const deleteDiary = (state, { payload }) => {
  const { exerciseId, productId } = payload;

  if (productId) {
    const index = state.consumedProducts.findIndex(
      obj => obj.product._id === productId
    );
    state.consumedProducts.splice(index, 1)
  }
  if (exerciseId) {
    const index = state.doneExercises.findIndex(
      obj => console.log(obj._id === exerciseId) 
    );
    state.doneExercises.splice(index, 1)
  }

  // state.isLoading = false;
};

const rejected = state => {
  state.isLoading = false;
};

const diaryRejected = state => {
  state.consumedProducts = [];
  state.doneExercises = [];
  state.isLoading = false;
};

export const diaryReducer = createSlice({
  name: 'diary',
  initialState: {
    consumedProducts: [],
    doneExercises: [],
    isLoading: true
  },

  extraReducers: {
    [getDiariesByDate.pending]: pending,
    [addDiariesProduct.pending]: pending,
    [addDiaryExercise.pending]: pending,
    [deleteDiaryExercise.pending]: pending,
    [deleteDiaryProduct.pending]: pending,

    [getDiariesByDate.fulfilled]: getDiary,
    [addDiariesProduct.fulfilled]: addDiary,
    [addDiaryExercise.fulfilled]: addDiary,
    [deleteDiaryExercise.fulfilled]: deleteDiary,
    [deleteDiaryProduct.fulfilled]: deleteDiary,

    [getDiariesByDate.rejected]: diaryRejected,
    [addDiariesProduct.rejected]: rejected,
    [addDiaryExercise.rejected]: rejected,
    [deleteDiaryProduct.rejected]: rejected,
  },
});

export default diaryReducer.reducer;
// export const setCalories = diaryReducer.actions.setCalories;
