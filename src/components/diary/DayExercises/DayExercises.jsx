import React from 'react';
import css from './DayExercises.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

function DayExercises() {
  return (
    <div className={css.container}>
      <div className={css.headerContainer}>
        <p>Exercises</p>
        <button className={css.addBtn}>
          Add exercise
          <AiOutlineArrowRight width="16px" height="16px"></AiOutlineArrowRight>
        </button>
      </div>
      <div className={css.content}>
        <p>Not found exercises</p>
      </div>
    </div>
  );
}

export default DayExercises;
