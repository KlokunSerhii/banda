import { useSelector } from 'react-redux';
import {
  selectCategoriesProducts,
  selectFilter,
  selectIsLoadingProduct,
  selectProductsList,
} from '../redux/products/selectors';

export const useProduct = () => {
  return {
    categoriesProducts: useSelector(selectCategoriesProducts),
    filterProduct: useSelector(selectFilter),
    IsLoading: useSelector(selectIsLoadingProduct),
    selectProductsList: useSelector(selectProductsList),
  };
};
