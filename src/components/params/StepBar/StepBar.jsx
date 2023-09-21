import React from 'react';
import styles from './StepBar.module.css'
import { NavLink } from 'react-router-dom';

function StepBar({currentStep}) {

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={`${currentStep===0 ? styles.active : styles.visited} `} to={'/params'}></NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={`${currentStep===1 ? styles.active : currentStep===0 ? styles.link : styles.visited} `} to={'/params'}></NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={`${currentStep===2 ?styles.active: styles.link}`} to={'/params'}></NavLink>
        </li>
      </ul>
    </nav>
   
  );
};

export default StepBar;
