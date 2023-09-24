import { useEffect, useState } from 'react';
import ExercisesItem from '../ExercisesItem';
import styles from './ExercisesList.module.css';
import { useDispatch } from 'react-redux';
import { exerciseCategories } from 'redux/exercises/operation';
import { useExercise } from 'hooks';



function ExercisesList() {
  const { categories } = useExercise();
  const dispatch = useDispatch();
  const currentCategory = 'equipment';

  console.log(categories)

  useEffect(() => {
    dispatch(exerciseCategories('bodyparts'));
  }, [dispatch]);

  return (
    <ul className={styles.exercisesList}>
      {categories.map((category) => <ExercisesItem item={category.title}/>)}
   </ul>
  );
}

export default ExercisesList;
