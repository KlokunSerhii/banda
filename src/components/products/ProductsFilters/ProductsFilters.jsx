import symbolDefs from '../../../images/symbol-defs.svg';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productCategories } from '../../../redux/products/operation';
import { capitalizeFirstLeter } from '../../../helpers/capitalize';
import { useProduct } from '../../../hooks/products';
import { filterReducer } from '../../../redux/products/slice';
import styles from './ProductsFilter.module.css';
import { customStyles } from '../../../helpers/customStyles';

const optionsRec = [
  { value: 'all', label: 'All' },
  { value: 'recommended', label: 'Recommended ' },
  { value: 'notRecommended', label: 'Not recommended' },
];

function ProductsFilters() {
  const dispatch = useDispatch();
  const { categoriesProducts } = useProduct();
  const categories = categoriesProducts.categories;
  const categoriesList = categories?.map(el => ({
    value: el,
    label: capitalizeFirstLeter(el),
  }));
  useEffect(() => {
    dispatch(productCategories());
  }, [dispatch]);

  const [hiddenBtnClose, setHiddenBtnClose] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [recommended, setRecommended] = useState(optionsRec[0]);

  const onChangeSearch = event => {
    const text = event.target.value;
    setHiddenBtnClose(text.length > 0);
    setSearch(text);
    dispatch(
      filterReducer({
        search: text,
        category: category.value,
        recommended: recommended.value,
      })
    );
  };

  const onCategoriesChange = event => {
    setCategory(event);
    dispatch(
      filterReducer({
        category: event.value,
        search,
        recommended: recommended.value,
      })
    );
  };

  const onRecomendedChange = event => {
    setRecommended(event);
    dispatch(
      filterReducer({
        recommended: event.value,
        search,
        category: category.value,
      })
    );
  };

  const delTextInput = () => {
    setSearch('');
    dispatch(
      filterReducer({
        search: '',
        category: category.value,
        recommended: recommended.value,
      })
    );
    setHiddenBtnClose(false);
  };

  return (
    <ul className={styles.products_filter}>
      <li>
        <label className={styles.products_filter_label}>
          <input
            value={search}
            onChange={onChangeSearch}
            name="productSearch"
            type="text"
            className={styles.products_filter_search}
            placeholder="Search"
          />

          <button
            onClick={delTextInput}
            style={{ display: hiddenBtnClose ? 'block' : 'none' }}
            className={`${styles.products_filter_btn_close} ${styles.products_filter_btn}`}
            type="button"
          >
            <svg className={styles.products_filter_btn_close_icon}>
              <use href={symbolDefs + '#close-icon'}></use>
            </svg>
          </button>
          <button
            className={`${styles.products_filter_btn_search} ${styles.products_filter_btn}`}
            type="button"
          >
            <svg className={styles.products_filter_btn_search_icon}>
              <use href={symbolDefs + '#search-icon'}></use>
            </svg>
          </button>
        </label>
      </li>
      <li>
        <Select
          value={category}
          onChange={onCategoriesChange}
          styles={customStyles}
          className={`
          ${styles.products_filter_select}
          ${styles.products_filter_select_categories}
          `}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary50: `var(--transparent-medium-4)`,
              primary: 'transparent',
              neutral40: `var(--main-text-color)`,
              neutral20: 'transparent',
              neutral30: 'transparent',
              neutral50: `var(--main-text-color)`,
            },
          })}
          options={categoriesList || []}
        />
      </li>
      <li>
        <Select
          onChange={onRecomendedChange}
          value={recommended}
          styles={customStyles}
          className={`${styles.products_filter_select} ${styles.products_filter_select_type}`}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary50: 'rgba(255, 255, 255, 0.10)',
              primary: 'transparent',
              neutral40: `var(--main-text-color)`,
              neutral20: 'transparent',
              neutral30: 'transparent',
              neutral50: `var(--main-text-color)`,
              neutral80: `var(--main-text-color)`,
            },
          })}
          options={optionsRec}
        />
      </li>
    </ul>
  );
}

export default ProductsFilters;
