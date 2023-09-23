import { createSlice } from '@reduxjs/toolkit';
import { exerciseCategories, exerciseList } from './operation';

const pending = state => {
  state.isLoading = true;
};

const categoryFulfilled = (state, { payload }) => {
  if (payload === 'bodyparts') {
    state.bodyparts = payload.bodyparts.map(el => ({
      title: el,
      srcSet: el.imgURL,
    }));
  } else if (payload === 'muscles') {
    state.muscules = payload.muscles.map(el => ({
      title: el,
      srcSet: el.imgURL,
    }));
  } else if (payload === 'equipments') {
    state.equipments = payload.equipments.map(el => ({
      title: el,
      srcSet: el.imgURL,
    }));
  }
  state.isLoading = false;
};

const listFulfilled = (state, { payload }) => {
  state.exerciseList = payload;
  state.isLoading = false;
};

const rejected = state => {
  state.isLoading = false;
};

export const exrciseReducer = createSlice({
  name: 'exercises',
  initialState: {
    bodyparts: [],
    equipments: [],
    muscules: [],
    exerciseList: [],
    selectedCategory: '',
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

export default exrciseReducer.reducer;
