import React from 'react';
import ExercisesItem from '../ExercisesItem';
import styles from './ExercisesList.module.css';

function ExercisesList() {
  return (
    <ul className={styles.exercisesList}>
      <ExercisesItem />
    </ul>
  );
}

export default ExercisesList;
