import React from 'react';
import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from 'components/diary/DayExercises';
import DayDashboard from 'components/diary/DayDashboard';
import Container from 'components/Container';
import DaySwitch from 'components/diary/DaySwitch';
import css from './Dairy.module.css';

function Diary() {
  return (
    <Container>
      <div className={css.titleCont}>
        <TitlePage title="Diary"></TitlePage>
        <DaySwitch></DaySwitch>
      </div>
      <div className={css.container}>
        <div className={css.itemsCont}>
          <DayProducts></DayProducts>
          <DayExercises></DayExercises>
        </div>
        <DayDashboard></DayDashboard>
      </div>
    </Container>
  );
}

export default Diary;
