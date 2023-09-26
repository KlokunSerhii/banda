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
  const date = new Date().toISOString();
  const { meal, workout } = data;

  const getData = useCallback(async () => {
    const { data } = await axios.get(`diaries/${date}`);
    return setData(data);
  }, [date]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.backGround}>
      <Container>
        <div className={styles.titleCont}>
          <TitlePage title="Diary" />
          <DaySwitch />
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
