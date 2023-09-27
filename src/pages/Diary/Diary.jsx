import React, { useEffect, useState } from 'react';
import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from 'components/diary/DayExercises';
import DayDashboard from 'components/diary/DayDashboard';
import Container from 'components/Container';
import DaySwitch from 'components/diary/DaySwitch';
import styles from './Dairy.module.css';
import { useDispatch } from 'react-redux';
import { getDiariesByDate } from 'redux/diary/operations';
import { useDiary } from 'hooks';

function Diary() {
  const {diary} = useDiary()
  const { consumedProducts, doneExercises
  } = diary;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = selectedDate.toISOString();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDiariesByDate(date))
  }, [date, dispatch ]);


  const handleToPreviousDay = () => {
    const previousDay = new Date(selectedDate);
    previousDay.setDate(previousDay.getDate() - 1);

    setSelectedDate(previousDay);
  };

  const handleToNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay);
  };

  return (
    <div className={styles.backGround}>
      <Container>
        <div className={styles.titleCont}>
          <TitlePage title="Diary" />
          <DaySwitch
            selectedDate={selectedDate}
            setSelectedDate={(date) => setSelectedDate(date)}
            
            handleToPreviousDay={handleToPreviousDay}
            handleToNextDay={handleToNextDay}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.itemsCont}>
            <DayProducts
              products={consumedProducts}
            />
            <DayExercises
              exercises={doneExercises}
            />
          </div>
          <DayDashboard />
        </div>
      </Container>
    </div>
  );
}

export default Diary;
