import React from 'react';
import styles from './DayDashboard.module.css';
import { useState, useEffect } from 'react';
import { PiForkKnifeFill } from 'react-icons/pi';
import { CgGym } from 'react-icons/cg';
import { GiShinyApple } from 'react-icons/gi';
import { BsFire } from 'react-icons/bs';
import { MdDirectionsRun } from 'react-icons/md';
import { PiWarningCircleBold } from 'react-icons/pi';
import { PiCirclesThreeFill } from 'react-icons/pi';
import { useDiary } from 'hooks/diary.js';
import { useAuth } from 'hooks/auth.js';

function DayDashboard() {
  const diary = useDiary();
  const auth = useAuth();
  const dailyCalorieIntake = auth.user.bodyParams.bmr;
  const dailyNormOfSports = auth.user.bodyParams.dailySportTime;

  const [consumedCalories, setConsumedCalories] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const [caloriesRest, setCaloriesRest] = useState(0);
  const [sportsRest, setSportsRest] = useState(dailyNormOfSports);

  useEffect(() => {
    const products = diary.diary.consumedProducts;
    const exercises = diary.diary.doneExercises;

    const totalConsumedCalories = products.reduce((total, element) => {
      return (
        (element.product.calories / element.product.weight) * element.weight +
        total
      );
    }, 0);
    const totalBurnedCalories = exercises.reduce((total, element) => {
      return (
        (element.exercise.burnedCalories / element.exercise.time) *
          element.duration +
        total
      );
    }, 0);

    const totalTimeOfSports = exercises.reduce((total, element) => {
      return element.duration + total;
    }, 0);

    const restOfCalories = dailyCalorieIntake - totalConsumedCalories;

    const restOfSports = dailyNormOfSports - totalTimeOfSports;

    setConsumedCalories(Math.round(totalConsumedCalories));
    setBurnedCalories(Math.round(totalBurnedCalories));
    setCaloriesRest(Math.round(restOfCalories));
    setSportsRest(Math.round(restOfSports));
  }, [diary, dailyCalorieIntake, dailyNormOfSports]);

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
          <p className={styles.result}>{dailyCalorieIntake}</p>
        </li>
        <li className={styles.box}>
          <div className={styles.header}>
            <CgGym fill="#EF8964" size={20} style={{ width: 20 }}></CgGym>
            <p>Daily norm of sports</p>
          </div>
          <p className={styles.result}>{dailyNormOfSports} min</p>
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
          <p className={styles.result}>{consumedCalories}</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            <BsFire fill="#EF8964" size={20} style={{ width: 20 }}></BsFire>
            <p className={styles.title}>Calories burned</p>
          </div>
          <p className={styles.result}>{burnedCalories}</p>
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
          <p className={styles.result}>{caloriesRest}</p>
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
          <p className={styles.result}>{sportsRest} min</p>
        </li>
      </ul>
      <div className={styles.textCont}>
        <PiWarningCircleBold
          className={styles.warningIcon}
          fill="#EF8964"
          size={24}
          style={{ width: 80 }}
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
