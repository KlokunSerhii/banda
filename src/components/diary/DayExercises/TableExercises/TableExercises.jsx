import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import symbolDefs from '../../../../images/symbol-defs.svg';
// import { toast } from 'react-toastify';

import styles from './TableExercises.module.css';
import axios from 'axios';

function TableExercises({ exercises }) {
  //!===================================================

  const handleDelete = async params => {
    await axios.delete(`eaten-products/${params._id}`);
  };

  //!=====================================================

  const listOfExercises = exercises?.map(obj => {
    const num = nanoid();
    return (
      <tr key={num}>
        <td className={styles.tdBodyPart}>
          <div>{obj.exercise.bodyPart}</div>
        </td>
        <td className={styles.tdEquipment}>
          <div>{obj.exercise.equipment}</div>
        </td>
        <td className={styles.tdName}>
          <div>{obj.exercise.name}</div>
        </td>
        <td className={styles.tdTarget}>
          <div>{obj.exercise.target}</div>
        </td>
        <td className={styles.tdBurnedCalories}>
          <div>{obj.exercise.burnedCalories}</div>
        </td>
        <td className={styles.tdTime}>
          <div>{obj.duration}</div>
        </td>

        <td className={styles.tdDellete}>
          <button onClick={() => handleDelete(obj._id)}>
            <svg>
              <use href={symbolDefs + '#trash-icon'}></use>
            </svg>
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      {listOfExercises?.length > 0 ? (
        <div className={styles.DayExercises}>
          <div className={styles.DayExercisesTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thBodyPart}>Body Part</th>
                  <th className={styles.thEquipment}>Equipment</th>
                  <th className={styles.thName}>Name</th>
                  <th className={styles.thTarget}>Target</th>
                  <th className={styles.thBurnedCalories}>Burned Calories</th>
                  <th className={styles.thTime}>Time</th>
                </tr>
              </thead>
              <tbody>{listOfExercises}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={styles.DayExercises}>
          <div className={styles.DayExercisesHead}>
            <h2>Exercises</h2>
          </div>
          <div className={styles.DayExercisesTable}>
            <p className={styles.not_found}>Not found exercises</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TableExercises;
