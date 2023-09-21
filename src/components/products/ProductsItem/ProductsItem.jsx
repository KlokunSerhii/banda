import styles from './Productsitem.module.css';
import { useAuth } from '../../../hooks/auth';

const ProductsItem = ({ el, openModalToggle }) => {
  const { user } = useAuth();
  const bloodType = user.bodyParams.blood;

  return (
    <li className={styles.productsCard}>
      <div className={styles.productsCardStatus}>
        <span className={styles.productsCardDiet}>
          <p className={styles.productsCardDietText}>diet</p>
        </span>
        <div className={styles.productsCardStatusCont}>
          <p
            className={
              el.groupBloodNotAllowed[bloodType]
                ? styles.productsStatusRecommendedTextTrue
                : styles.productsStatusRecommendedTextFalse
            }
          >
            {el.groupBloodNotAllowed[bloodType]
              ? 'Recommended'
              : 'Not recommended'}
          </p>

          <button
            onClick={() => {
              openModalToggle(el);
            }}
            className={styles.productsCardBtnAdd}
            type="button"
          >
            Add
          </button>
        </div>
      </div>
      <h4 className={styles.productsCardTitle}>{el.title}</h4>

      <ul className={styles.productsCardInfo}>
        <li className={styles.productsCardInfoItem}>
          Calories:
          <p className={styles.productsCardInfoValue}>{el.calories}</p>
        </li>
        <li className={styles.productsCardInfoItem}>
          Category:
          <p className={styles.productsCardInfoValue}>{el.category}</p>
        </li>
        <li className={styles.productsCardInfoItem}>
          Weight:
          <p className={styles.productsCardInfoValue}>{el.weight}</p>
        </li>
      </ul>
    </li>
  );
};

export default ProductsItem;
