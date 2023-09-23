import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ExercisesCategories.module.css';
import ExercisesList from '../ExercisesList';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from 'redux/exercises/selectors';
import { exerciseCategories } from 'redux/exercises/operation';
import { useExercise } from 'hooks';

function ExercisesCategories() {
  const { categories } = useExercise();
  const dispatch = useDispatch();

  console.log(categories)

  useEffect(() => {
    dispatch(exerciseCategories('bodyparts'));
  }, [dispatch]);

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
