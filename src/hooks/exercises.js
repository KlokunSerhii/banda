import { useSelector } from 'react-redux';
import {
  selectExerciseList,
  selectExercises,
  selectIsLoading,
} from '../redux/exercises/selectors';

export const useExercise = () => {
  return {
    exercise: useSelector(selectExercises),
    exerciseList: useSelector(selectExerciseList),
    isLoading: useSelector(selectIsLoading),
  };
};
