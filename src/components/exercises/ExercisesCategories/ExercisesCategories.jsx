import React from 'react'; // useEffect
import { NavLink } from 'react-router-dom';
import styles from './ExercisesCategories.module.css';

function ExercisesCategories({ category }) {

  return (
    <>
      <NavLink className={styles.exercisesBtnBack} to="/products">
        Back
      </NavLink>
      <div className={styles.exercisesTitleLocation}>
        <h2 className={styles.exercisesSubTitle}>Exercises</h2>
        <ul className={styles.exercisesList}>
          <li className={styles.exercisesItem}>
            <NavLink to="bodyparts" className={category === 'bodyparts' ? styles.exercisesLinkActive : ''}>
              Body parts
            </NavLink>
          </li>
          <li className={styles.exercisesItem}>
            <NavLink to="muscles" className={category === 'muscles' ? styles.exercisesLinkActive : ''}>Muscles</NavLink>
          </li>
          <li className={styles.exercisesItem}>
            <NavLink to="equipment" className={category === 'equipment' ? styles.exercisesLinkActive : ''}>Equipment</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ExercisesCategories;
