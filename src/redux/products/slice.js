import { createSlice } from '@reduxjs/toolkit';
import { productCategories, productList } from './operation';

const pending = state => {
  state.isLoading = true;
};

const rejected = state => {
  state.isLoading = false;
};

const productCategoriesFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.categories = payload;
};

const productListFulfilled = (state, { payload }) => {
  state.list = payload;
  state.isLoading = false;
};

const filter = (state, { payload }) => {
  state.filter = payload;
};

export const productReducer = createSlice({
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
    setFilter: filter,
  },
  extraReducers: {
    [productCategories.pending]: pending,
    [productList.pending]: pending,
    [productList.fulfilled]: productListFulfilled,
    [productCategories.fulfilled]: productCategoriesFulfilled,
    [productCategories.rejected]: rejected,
    [productList.rejected]: rejected,
  },
});

export default productReducer.reducer;
export const filterReducer = productReducer.actions.setFilter;
