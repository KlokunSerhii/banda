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
    state.consumedProducts =[...state.consumedProducts, newProduct] 
    state.date = newProduct.date
    state.isLoading = false;
  }


};



const getDiary = (state, { payload }) => {
  const { meal , workout } = payload;
  state.consumedProducts = [...meal];
  state.doneExercises = [...workout]
  state.isLoading = false;
};

const deleteDiary = (state, { payload }) => {
  const { exerciseId, productId, data } = payload;

  if (productId) {
    state.consumedProducts = [...state.consumedProducts].filter(
      el => el._id !== productId
    );
  }
  if (exerciseId) {
    state.doneExercises = [...state.doneExercises].filter(
      el => el._id !== exerciseId
    );
  }

  state.burnedCalories = data.burnedCalories;
  state.consumedCalories = data.consumedCalories;
  state.timeSport = data.timeSport;
  state.isLoading = false;
};

const rejected = state => {
  state.isLoading = false;
};

const diaryRejected = state => {
  state.burnedCalories = 0;
  state.consumedCalories = 0;
  state.consumedProducts = [];
  state.createdAt = null;
  state.date = null;
  state.doneExercises = [];
  state.owner = null;
  state.timeSport = null;
  state.updatedAt = null;
  state._id = null;
  state.isLoading = false;
};

export const diaryReducer = createSlice({
  name: 'diary',
  initialState: {
    burnedCalories: null,
    consumedCalories: null,
    consumedProducts: [],
    date: null,
    doneExercises: [],
    owner: null,
    timeSport: null,
    _id: null,
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
