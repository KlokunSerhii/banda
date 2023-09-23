import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useExercises } from '../../../hooks/exercises';
import ExercisesItem from '../ExercisesItem';
import styles from './ExercisesList.module.css';
import { exercisesList } from '../../../redux/exercises/operation';
import { useAuth } from '../../../hooks/auth';
import BasicModalWindow from '../../BasicModalWindow';


function ExercisesList() {
  return (
    <ul className={styles.exercisesList}>
      <ExercisesItem />
    </ul>
  );
}

export default ExercisesList;
