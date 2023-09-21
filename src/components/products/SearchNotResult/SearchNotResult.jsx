import css from './SearchNotResult.module.css';

const SearchNotResult = () => {
  return (
    <div className={css.products_SearchNotResult}>
      <p className={css.products_SearchNotResult_text}>
        <span className={css.products_SearchNotResult_orangeText}>
          Sorry, no results were found
        </span>{' '}
        for the product filters you selected. You may want to consider other
        search options to find the product you want. Our range is wide and you
        have the opportunity to find more options that suit your needs.
      </p>
      <p
        className={`${css.products_SearchNotResult_orangeText} ${css.products_SearchNotResult_orangeText_block}`}
      >
        Try changing the search parameters.
      </p>
    </div>
  );
};
export default SearchNotResult;
