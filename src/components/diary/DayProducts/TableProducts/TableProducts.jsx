import React from 'react';
import symbolDefs from '../../../../images/symbol-defs.svg';
import styles from './TableProducts.module.css';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteDiaryProduct } from 'redux/diary/operations';

function TableProducts({ products }) {
  const { user } = useAuth();
  const bloodType = user.bodyParams.blood;
  const dispatch = useDispatch();
  const handleDelete = async params => {
    dispatch(deleteDiaryProduct(params));
  };

  const recomendProduct = groupBloodNotAllowed => {
    return groupBloodNotAllowed[bloodType];
  };

  const listOfProducts = products?.map(obj => {
    const caloriesEaten = Math.round((obj.weight * obj.product.calories) / 100);
    return (
      <tr key={obj._id}>
        <td className={styles.tdTitle}>
          <div className={styles.tdTitle}>{obj.product.title}</div>
        </td>
        <td className={styles.tdCategory}>
          <div className={styles.tdCategory}>{obj.product.category}</div>
        </td>
        <td className={styles.tdCalories}>
          <div className={styles.tdCalories}>{caloriesEaten}</div>
        </td>
        <td className={styles.tdWeight}>
          <div className={styles.tdWeight}>{obj.weight}</div>
        </td>
        <td className={styles.tdRecommend}>
          {recomendProduct(obj.product.groupBloodNotAllowed) ? (
            <>
              <span>
                <svg className={styles.recommendCircle}>
                  <circle cx="7" cy="7" r="7" fill="green" />
                </svg>
                <p>Yes</p>
              </span>
            </>
          ) : (
            <>
              <span>
                <svg className={styles.recommendCircle}>
                  <circle cx="7" cy="7" r="7" fill="red" />
                </svg>
                <p>No</p>
              </span>
            </>
          )}
        </td>
        <td className={styles.tdDellete}>
          <button onClick={() => handleDelete(obj._id)}>
            <svg>
              <use href={symbolDefs + '#trash-icon'}></use>
            </svg>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {listOfProducts?.length > 0 ? (
        <div className={styles.DayProducts}>
          <div className={styles.DayProductsTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thTitle}>Title</th>
                  <th className={styles.thCategory}>Category</th>
                  <th className={styles.thCalories}>Calories</th>
                  <th className={styles.thWeight}>Weight</th>
                  <th className={styles.thRecommend}>Recommend</th>
                </tr>
              </thead>
              <tbody>{listOfProducts}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={styles.DayProducts}>
          <div className={styles.DayProductsTable}>
            <p className={styles.not_found}>Not found products</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TableProducts;
