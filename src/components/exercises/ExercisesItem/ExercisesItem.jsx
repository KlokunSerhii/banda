import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ExercisesItem.module.css';

function ExercisesItem({ el, openModalToggle }) {
  return (
    <li className={styles.exercisesContainer}>
      <NavLink to="/exercises">Hello</NavLink>
    </li>
  );
}

export default ExercisesItem;
