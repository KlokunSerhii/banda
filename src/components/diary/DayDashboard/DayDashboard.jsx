import React from 'react';
import styles from './DayDashboard.module.css';
import { PiForkKnifeFill } from 'react-icons/pi';
import { CgGym } from 'react-icons/cg';
import { GiShinyApple } from 'react-icons/gi';
import { BsFire } from 'react-icons/bs';
import { MdDirectionsRun } from 'react-icons/md';
import { PiWarningCircleBold } from 'react-icons/pi';
import { PiCirclesThreeFill } from 'react-icons/pi';

function DayDashboard() {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles.box}>
          <div className={styles.header}>
            <PiForkKnifeFill
              fill="#EF8964"
              size={20}
              style={{ width: 20 }}
            ></PiForkKnifeFill>
            <p>Daily calorie intake</p>
          </div>
          <p className={styles.result}>2200</p>
        </li>
        <li className={styles.box}>
          <div className={styles.header}>
            <CgGym fill="#EF8964" size={20} style={{ width: 20 }}></CgGym>
            <p>Daily norm of sports</p>
          </div>
          <p className={styles.result}>110 min</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            <GiShinyApple
              fill="#EF8964"
              size={20}
              style={{ width: 20 }}
            ></GiShinyApple>
            <p className={styles.title}>Calories consumed</p>
          </div>
          <p className={styles.result}>707</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            <BsFire fill="#EF8964" size={20} style={{ width: 20 }}></BsFire>
            <p className={styles.title}>Calories burned</p>
          </div>
          <p className={styles.result}>855</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            <PiCirclesThreeFill
              fill="#EF8964"
              size={20}
              style={{ width: 20 }}
            ></PiCirclesThreeFill>
            <p className={styles.title}>Rest of the calories</p>
          </div>
          <p className={styles.result}>1493</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            <MdDirectionsRun
              fill="#EF8964"
              size={20}
              style={{ width: 20 }}
            ></MdDirectionsRun>
            <p className={styles.title}>The rest of sports</p>
          </div>
          <p className={styles.result}>85 min</p>
        </li>
      </ul>
      <div className={styles.textCont}>
        <PiWarningCircleBold className={styles.warningIcon}
          fill="#EF8964"
          size={24}
          style={{ width: 80}}
        ></PiWarningCircleBold>
        <p className={styles.text}>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </p>
      </div>
    </div>
  );
}

export default DayDashboard;
