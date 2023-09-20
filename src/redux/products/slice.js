import { createSlice } from '@reduxjs/toolkit';
import { productCategories, productList } from './operation';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    list: [],
    isLoading: false,
    filter: {
      search: '',
      category: '',
      recomended: '',
    },
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(productCategories.pending, pending)
      .addCase(productCategories.fulfilled, categoriesFulfilled)
      .addCase(productCategories.rejected, rejected)
      .addCase(productList.pending, pending)
      .addCase(productList.fulfilled, ListFulfilled)
      .addCase(productList.rejected, rejected),
});

function ListFulfilled(state, { payload }) {
  state.list = payload;
  state.isLoading = false;
}

function pending(state) {
  state.isLoading = true;
}

function rejected(state) {
  state.isLoading = false;
}

function categoriesFulfilled(state, { payload }) {
  state.isLoading = false;
  state.categories = payload;
}

export default productSlice.reducer;
export const filterReducer = productSlice.actions.setFilter;
