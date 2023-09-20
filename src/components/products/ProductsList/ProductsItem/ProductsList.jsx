import products from '../../../../JSON/products.json';
import styles from './ProductsList.module.css';
import symbolDefs from '../../../../images/symbol-defs.svg';

function ProductsList() {
  const positive = true;

  const className = positive ? (styles.bubbleIconPositive) : (styles.bubbleIconNegative);

  return (
    <ul className={styles.productsList}>
      {products
        .slice(0, 20)
        .map(({ _id, weight, calories, category, title }) => {
          return (
            <li key={_id.$oid} className={styles.productsItem}>
              <div className={styles.productBox}>
                <p className={styles.productsDiet}>DIET</p>
                <div className={styles.productRecommended}>
                  <svg className={className} width="17" height="17">
                    <use href={symbolDefs + '#bubble-icon'}></use>
                  </svg>
                  <p>Recommended</p>
                  <button type="button" className={styles.btnAdd}>
                    Add
                    <svg className={styles.runIcon} width="24" height="24">
                      <use href={symbolDefs + '#icon-next'}></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles.titleBox}>
                <div className={styles.caloriesCountBack}>
                  <svg className={styles.runIcon} width="24" height="24">
                    <use href={symbolDefs + '#run-icon'}></use>
                  </svg>
                </div>

                <h2 className={styles.title}>{title}</h2>
              </div>

              <div className={styles.productInfo}>
                <p className={styles.productInfoItem}>
                  Calories: <span>{calories}</span>
                </p>
                <p className={styles.productInfoItem}>
                  Category: <span>{category}</span>
                </p>
                <p className={styles.productInfoItem}>
                  Weight: <span>{weight}</span>
                </p>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductsList;
