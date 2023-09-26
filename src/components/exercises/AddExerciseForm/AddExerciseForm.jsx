import { useState } from 'react';
import styles from './AddExerciseForm.module.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { object, string, number } from 'yup';
import axios from 'axios';

const exerciseSchema = object({
  exerciseId: string().required(),
  date: string().required(),
  duration: number().min(1).required(),
  //calories: number().min(1).required(),
});

export default function AddExerciseForm({ item, handleSuccess }) {
  const {
    gifUrl,
    name,
    target,
    bodyPart,
    equipment,
    time,
    burnedCalories,
    _id: exerciseId,
  } = item;
  const [timerActive, setTimerActive] = useState(false);
  const [calories, setCalories] = useState(0);
  const [passedTime, setPassedTime] = useState(0);

  const handleTimerToggle = () => setTimerActive(!timerActive);

  const handleSubmit = () => {
    setTimerActive(false);
    const data = {
      exerciseId,
      date: new Date().toISOString(),
      duration: passedTime,
    };

    const validatedData = exerciseSchema.cast(data);
    axios.post('/done-exercises', validatedData).then(
      () => {
        handleSuccess({
          passedTime,
          calories,
        })
      },
      () => console.warn('error')
    );
  };

  /* const handleReset = () => {
    setTimerId(timerId === 1 ? 2 : 1);
    setCalories(0);
    setPassedTime(0);
    setTimerActive(false);
  } */

  return (
    <div className={styles.Form}>
      {/* Form Data */}
      <div className={styles.FormData}>

        {/* Animation */}
        <div className={styles.FormImageBox}>
          <img src={gifUrl} alt={name} className={styles.FormImage} />
        </div>

        {/* Timer */}
        <div className={styles.FormTimer}>
          <span className={styles.FormItemLabel}>Timer</span>
          <div className={styles.FormTimerBox}>
            <CountdownCircleTimer
              className="hello"
              isPlaying={timerActive}
              duration={time * 60}
              colors={['#E6533C', '#F7B801', '#A30000', '#A30000']}
              trailColor="#efede81a"
              strokeWidth={4}
              colorsTime={[7, 5, 2, 0]}
              rotation="counterclockwise"
              updateInterval={0.5}
            >
              {({ remainingTime, elapsedTime }) => {
                let minutes = Math.floor(remainingTime / 60);
                let passedMinutes = (elapsedTime / 60).toFixed(2);
                let seconds = remainingTime % 60;
                if (minutes < 10) {
                  minutes = '0' + minutes.toString();
                }

                if (seconds < 10) {
                  seconds = '0' + seconds.toString();
                }

                const calories = ((elapsedTime / 60) * burnedCalories) / time;
                setTimeout(() => {
                  setCalories(Math.round(calories));
                  setPassedTime(Number(passedMinutes));
                });
                const timeLeft = `${minutes}:${seconds}`;
                return <div className={styles.FormTimerTime}>{timeLeft}</div>;
              }}
            </CountdownCircleTimer>
          </div>
          <button
            className={`${styles.FormTimerButton} ${
              timerActive ? styles.FormTimerButtonActive : ''
            }`}
            onClick={handleTimerToggle}
          ></button>
          <div>
            <span className={styles.FormTimerCaloriesLabel}>
              Burned calories:
            </span>
            <span className={styles.FormTimerCaloriesValue}>{calories}</span>
          </div>
        </div>

      </div>

      <div className={styles.FormBottomContainer}>
        {/* Data fields */}
        <div className={styles.FormGrid}>
          <div className={styles.FormItem}>
            <span className={styles.FormItemLabel}>Name</span>
            <span className={styles.FormItemName}>{name}</span>
          </div>
          <div className={styles.FormItem}>
            <span className={styles.FormItemLabel}>Target</span>
            <span className={styles.FormItemName}>{target}</span>
          </div>
          <div className={styles.FormItem}>
            <span className={styles.FormItemLabel}>Body Part</span>
            <span className={styles.FormItemName}>{bodyPart}</span>
          </div>
          <div className={styles.FormItem}>
            <span className={styles.FormItemLabel}>Equipment</span>
            <span className={styles.FormItemName}>{equipment}</span>
          </div>
          <div className={styles.FormItem}>
            <span className={styles.FormItemLabel}>Time</span>
            <span className={styles.FormItemName}>{time}</span>
          </div>
        </div>
        

        {/* Submit button */}
        <button
          className={styles.FormAddButton}
          disabled={passedTime < 1}
          onClick={handleSubmit}
        >
          Add to diary
        </button>

      </div>
    </div>
  );
}
