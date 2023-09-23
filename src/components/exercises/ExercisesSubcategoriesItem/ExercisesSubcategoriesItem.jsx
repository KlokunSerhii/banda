import React from 'react';
import styles from './ExercisesSubcategoriesItem.module.css';

function ExercisesSubcategoriesItem(el, openModalToggle) {
  return (
    <li className={styles.excercisesCard}>
      <div className={styles.excercisesCardStatus}>
        <span className={styles.excercisesCardDiet}>
          <p className={styles.excercisesCardDietText}>workout</p>
        </span>
        <button
          onClick={() => {
            openModalToggle(el);
          }}
          className={styles.exercisesCardBtnStart}
          type="button"
        >
          Start
        </button>
      </div>

      <h4 className={styles.excercisesCardTitle}>Air bike</h4>
      <ul className={styles.excercisesCardInfo}>
        <li className={styles.excercisesCardInfoItem}>
          Burned calories:<p className={styles.excercisesCardInfoValue}></p>
        </li>
        <li className={styles.excercisesCardInfoItem}>
          Body part:<p className={styles.excercisesCardInfoValue}></p>
        </li>
        <li className={styles.excercisesCardInfoItem}>
          Target: <p className={styles.excercisesCardInfoValue}></p>
        </li>
      </ul>
    </li>
  );
}

export default ExercisesSubcategoriesItem;
