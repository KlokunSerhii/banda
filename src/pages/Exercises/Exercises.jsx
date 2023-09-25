import Container from 'components/Container';
import TitlePage from 'components/diary/TitlePage';
import ExercisesCategories from 'components/exercises/ExercisesCategories';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

function Exercices() {
  const { category } = useParams();

  return (
    <div>
      <Container>
        <div>
          <TitlePage text="Exercises" />
          <ExercisesCategories category={category}/>
        </div>
        <Outlet />
      </Container>
    </div>)
}

export default Exercices;
