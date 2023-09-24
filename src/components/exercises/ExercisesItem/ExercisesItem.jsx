// import { useAuth } from '../../../hooks/auth';
import styles from './ExercisesItem.module.css';
// import { NavLink } from 'react-router-dom';

function ExercisesItem({ item }) {
  const { filter, name, imgURL } = item;

  return (
    <li
      className={styles.exercisesContainer}
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className={styles.text_container}>
        <p className={styles.text_name}>{name}</p>
        <p className={styles.text}>{filter}</p>
      </div>
      {/* <NavLink to="/exercises">Hello</NavLink> */}
    </li>
  );
}

export default ExercisesItem;
