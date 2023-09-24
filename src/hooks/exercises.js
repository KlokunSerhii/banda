import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectExerciseList,
  selectExercises,
  selectIsLoading,
} from '../redux/exercises/selectors';

export const useExercise = () => {
  return {
    categories: useSelector(selectCategories),
    exercise: useSelector(selectExercises),
    exerciseList: useSelector(selectExerciseList),
    isLoading: useSelector(selectIsLoading),
  };
};
