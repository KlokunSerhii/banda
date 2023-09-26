import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './DayExercises.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

import TableExercises from './TableExercises';

function DayExercises({ exercises }) {
  return (
    <div className={styles.dayExercisesWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>Exercises</p>
        <div className={styles.btnWrapper}>
          <button className={styles.addExerciseBtn}>
            <NavLink to="/exercises">Add exercise</NavLink>
          </button>
          <AiOutlineArrowRight width="16px" height="16px" />
        </div>
      </div>

      <TableExercises exercises={exercises} />
    </div>
  );
}

export default DayExercises;
