import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ExercisesCategories.module.css';
import ExercisesList from '../ExercisesList';

function ExercisesCategories() {
  return (
    <>
      <NavLink className={styles.exercisesBtnBack} to="/products">
        Back
      </NavLink>
      <h2 className={styles.exercisesSubTitle}>Waist</h2>
      <ul className={styles.exercisesList}>
        <li className={styles.exercisesItem}>
          <NavLink className={styles.exercisesLinkActive}>Body parts</NavLink>
        </li>
        <li className={styles.exercisesItem}>
          <NavLink>Muscles</NavLink>
        </li>
        <li className={styles.exercisesItem}>
          <NavLink>Equipment</NavLink>
        </li>
      </ul>
      <ExercisesList />
    </>
  );
}

export default ExercisesCategories;
