import { useAuth } from '../../../hooks/auth';
import styles from './ExercisesItem.module.css';

function ExercisesItem({ el, openModalToggle }) {
  const { user } = useAuth();
 
  return (
    <li className={styles.exercisesContainer}>
      <NavLink to="/exercises">Hello</NavLink>
    </li>
  );
}

export default ExercisesItem;
