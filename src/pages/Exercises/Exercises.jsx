import Container from 'components/Container';
//import TitlePage from 'components/diary/TitlePage';
import ExercisesCategories from 'components/exercises/ExercisesCategories';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Exercices() {
  return (
    <div>
      <Container>
        <div>
          {/* <TitlePage title={subcategory || "Exercises"} /> */}
          <ExercisesCategories />
        </div>
        <Outlet />
      </Container>
    </div>)
}

export default Exercices;
