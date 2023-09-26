import React, { useCallback, useEffect, useState } from 'react';
import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from 'components/diary/DayExercises';
import DayDashboard from 'components/diary/DayDashboard';
import Container from 'components/Container';
import DaySwitch from 'components/diary/DaySwitch';
import styles from './Dairy.module.css';
import axios from 'axios';
axios.defaults.baseURL = 'https://node-server-team-proj.onrender.com/api/';

function Diary() {
  const [data, setData] = useState([]);
  const { meal, workout } = data;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = selectedDate.toISOString();
  const getData = useCallback(async () => {
    const { data } = await axios.get(`diaries/${date}`);
    return setData(data);
  }, [date]);

  useEffect(() => {
    getData();
  }, [getData]);

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
            setSelectedDate={setSelectedDate}
            handleToPreviousDay={handleToPreviousDay}
            handleToNextDay={handleToNextDay}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.itemsCont}>
            <DayProducts products={meal} />
            <DayExercises exercises={workout} />
          </div>
          <DayDashboard />
        </div>
      </Container>
    </div>
  );
}

export default Diary;
