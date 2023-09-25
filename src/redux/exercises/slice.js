import { createSlice } from '@reduxjs/toolkit';
import { exerciseCategories, exerciseList } from './operation';

const pending = state => {
  state.isLoading = true;
};

const categoryFulfilled = (state, { payload }) => {
  const { exerciseCategories, totalCount } = payload;
  const categories = exerciseCategories.map(el => ({
    title: el,
    srcSet: el.imgURL,
  }));
  state.categories.list = categories;
  state.categories.total = totalCount;
  state.isLoading = false;
};

const listFulfilled = (state, { payload }) => {
  state.exerciseList = payload.exercises;
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
    categories: {
      list: [],
      total: '',
    },
    page: 1,
    exerciseList: [],
    selectedCategory: 'bodyparts',
    isLoading: false,
  },
  reducers: {
    setCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    setPage: (state, { payload }) => {
      state.selectedCategory =payload;
    }
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
export const setCategory = exerciseReducer.actions.setCategory;
export const setPage = exerciseReducer.actions.setPage;
