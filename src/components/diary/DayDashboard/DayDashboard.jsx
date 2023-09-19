import React from 'react';
import css from './DayDashboard.module.css';
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
      <ul className={css.container}>
        <li className={css.box}>
          <div className={css.header}>
            <PiForkKnifeFill
              fill="#EF8964"
              size={20}
              style={{ width: 20 }}
            ></PiForkKnifeFill>
            <p>Daily calorie intake</p>
          </div>
          <p className={css.result}>2200</p>
        </li>
        <li className={css.box}>
          <div className={css.header}>
            <CgGym fill="#EF8964" size={20} style={{ width: 20 }}></CgGym>
            <p>Daily norm of sports</p>
          </div>
          <p className={css.result}>110 min</p>
        </li>
        <li className={css.darkBox}>
          <div className={css.header}>
            <GiShinyApple
              fill="#EF8964"
              size={20}
              style={{ width: 20 }}
            ></GiShinyApple>
            <p className={css.title}>Calories consumed</p>
          </div>
          <p className={css.result}>0</p>
        </li>
        <li className={css.darkBox}>
          <div className={css.header}>
            <BsFire fill="#EF8964" size={20} style={{ width: 20 }}></BsFire>
            <p className={css.title}>Calories burned</p>
          </div>
          <p className={css.result}>0</p>
        </li>
        <li className={css.darkBox}>
          <div className={css.header}>
            <PiCirclesThreeFill
              fill="#EF8964"
              size={20}
              style={{ width: 20 }}
            ></PiCirclesThreeFill>
            <p className={css.title}>Rest of the calories</p>
          </div>
          <p className={css.result}>0</p>
        </li>
        <li className={css.darkBox}>
          <div className={css.header}>
            <MdDirectionsRun
              fill="#EF8964"
              size={20}
              style={{ width: 20 }}
            ></MdDirectionsRun>
            <p className={css.title}>The rest of sports</p>
          </div>
          <p className={css.result}>0</p>
        </li>
      </ul>
      <div className={css.textCont}>
        <PiWarningCircleBold
          fill="#EF8964"
          size={24}
          style={{ width: 80, marginTop: 5 }}
        ></PiWarningCircleBold>
        <p className={css.text}>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </p>
      </div>
    </div>
  );
}

export default DayDashboard;
