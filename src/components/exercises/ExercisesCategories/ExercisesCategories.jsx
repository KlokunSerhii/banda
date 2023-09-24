import React from 'react'; // useEffect
import { NavLink } from 'react-router-dom';
import styles from './ExercisesCategories.module.css';
import ExercisesList from '../ExercisesList';
// import { useExercise } from 'hooks';

function ExercisesCategories() {
  // const { selectedCategory } = useExercise();

  return (
    <>
      <NavLink className={styles.exercisesBtnBack} to="/products">
        Back
      </NavLink>
      <div className={styles.exercisesTitleLocation}>
        <h2 className={styles.exercisesSubTitle}>Exercises</h2>
        <ul className={styles.exercisesList}>
          <li className={styles.exercisesItem}>
            <NavLink to="bodyparts" className={styles.exercisesLinkActive}>
              Body parts
            </NavLink>
          </li>
          <li className={styles.exercisesItem}>
            <NavLink to="muscules">Muscles</NavLink>
          </li>
          <li className={styles.exercisesItem}>
            <NavLink to="esequipments">Equipment</NavLink>
          </li>
        </ul>
      </div>
      <ExercisesList />
    </>
  );
}

export default ExercisesCategories;
