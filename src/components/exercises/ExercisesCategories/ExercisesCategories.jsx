import React from 'react'; // useEffect
import { NavLink } from 'react-router-dom';
import styles from './ExercisesCategories.module.css';
import { useParams } from 'react-router-dom';

function ExercisesCategories() {
  const { category, subcategory } = useParams();

  return (
    <div className={styles.categories_container}>
      <NavLink className={styles.exercisesBtnBack} hidden={!subcategory} to={`/exercises/${category || ''}`}>
        Back
      </NavLink>
      <div className={styles.exercisesTitleLocation}>
        <h2 className={styles.exercisesSubTitle}>{subcategory || "Exercises"}</h2>
        <ul className={styles.exercisesList}>
          <li className={styles.exercisesItem}>
            <NavLink to="bodyparts" className={category === 'bodyparts' ? styles.exercisesLinkActive : ''}>
              Body parts
            </NavLink>
          </li>
          <li className={styles.exercisesItem}>
            <NavLink to="muscles" className={category === 'muscles' ? styles.exercisesLinkActive : ''}>Muscles</NavLink>
          </li>
          <li className={styles.exercisesItem}>
            <NavLink to="equipment" className={category === 'equipment' ? styles.exercisesLinkActive : ''}>Equipment</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExercisesCategories;
