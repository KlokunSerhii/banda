import { createSlice } from '@reduxjs/toolkit';
import { exerciseCategories, exerciseList } from './operation';

const pending = state => {
  state.isLoading = true;
};

const categoryFulfilled = (state, { payload }) => {
  const categories = payload.exerciseCategories.map(el => ({
    title: el,
    srcSet: el.imgURL,
  }));
  state.categories = categories;
  state.isLoading = false;
};

const listFulfilled = (state, { payload }) => {
  state.exerciseList = payload;
  state.isLoading = false;
};

const rejected = state => {
  state.isLoading = false;
};

export const exerciseReducer = createSlice({
  name: 'exercises',
  initialState: {
    bodyparts: [],
    equipments: [],
    muscules: [],
    categories: [],
    exerciseList: [],
    selectedCategory: 'bodyparts',
    isLoading: false,
  },
  extraReducers: {
    [exerciseCategories.pending]: pending,
    [exerciseList.pending]: pending,
    [exerciseCategories.fulfilled]: categoryFulfilled,
    [exerciseList.fulfilled]: listFulfilled,
    [exerciseCategories.rejected]: rejected,
    [exerciseList.rejected]: rejected,
  },
});

export default exerciseReducer.reducer;
