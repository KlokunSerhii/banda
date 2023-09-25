import React from 'react';
import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from 'components/diary/DayExercises';
import DayDashboard from 'components/diary/DayDashboard';
import Container from 'components/Container';
import DaySwitch from 'components/diary/DaySwitch';
import styles from './Dairy.module.css';

function Diary() {
  return (

    <div className={styles.backGround}>
      <Container>
        <div className={styles.titleCont}>
          <TitlePage title="Diary" />
          <DaySwitch />
        </div>
        <div className={styles.container}>
          <div className={styles.itemsCont}>
            <DayProducts />
            <DayExercises />
          </div>
          <DayDashboard />
        </div>
      </Container>
    </div>
    
   
  );
}

export default Diary;
