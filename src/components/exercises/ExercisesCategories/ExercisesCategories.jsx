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
      <div className={styles.exercisesTitleLocation}>
        <h2 className={styles.exercisesSubTitle}>Exercises</h2>
        <ul className={styles.exercisesList}>
          <li className={styles.exercisesItem}>
            <NavLink to="/" className={styles.exercisesLinkActive}>
              Body parts
            </NavLink>
          </li>
          <li className={styles.exercisesItem}>
            <NavLink to="/">Muscles</NavLink>
          </li>
          <li className={styles.exercisesItem}>
            <NavLink to="/">Equipment</NavLink>
          </li>
        </ul>
      </div>
      <ExercisesList />
    </>
  );
}

export default ExercisesCategories;
