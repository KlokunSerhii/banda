import React from 'react';
import styles from './ExercisesSubcategoriesItem.module.css';

function ExercisesSubcategoriesItem({ item, handleClick } ) {
  const { bodyPart, burnedCalories, name, target } =
    item;
  return (
    <li className={styles.excercisesCard}>
      <div className={styles.excercisesCardStatus}>
        <span className={styles.excercisesCardDiet}>
          <p className={styles.excercisesCardDietText}>workout</p>
        </span>
        <button
          onClick={() => handleClick(item)}
          className={styles.exercisesCardBtnStart}
          type="button"
        >
          Start
        </button>
      </div>

      <h4 className={styles.excercisesCardTitle}>{name}</h4>
      <ul className={styles.excercisesCardInfo}>
        <li className={styles.excercisesCardInfoItem}>
          Burned calories:
          <span className={styles.excercisesCardInfoValue}>
            {burnedCalories}
          </span>
        </li>
        <li className={styles.excercisesCardInfoItem}>
          Body part:<p className={styles.excercisesCardInfoValue}>{bodyPart}</p>
        </li>
        <li className={styles.excercisesCardInfoItem}>
          Target: <p className={styles.excercisesCardInfoValue}>{target}</p>
        </li>
      </ul>
    </li>
  );
}

export default ExercisesSubcategoriesItem;
