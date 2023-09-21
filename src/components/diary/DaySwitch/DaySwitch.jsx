import React from 'react';
import styles from './DaySwitch.module.css';
import symbolDefs from '../../../images/symbol-defs.svg';

function DaySwitch() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>20/07/2023</p>
      <button className={styles.calendar}>
        <svg style={{ width: '24px', height: '24px' }}>
          <use href={symbolDefs + '#calendar-icon'}></use>
        </svg>
      </button>

      <div className={styles.btnCont}>
        <button className={styles.btnArrowRight}>
          <svg className={styles.arrowRight}>
            <use href={symbolDefs + '#arrow-right-icon'}></use>
          </svg>
        </button>

        <button className={styles.btnArrowLeft}>
          <svg className={styles.arrowLeft}>
            <use href={symbolDefs + '#arrow-left-icon'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default DaySwitch;
