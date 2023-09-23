import { useSelector } from 'react-redux';
import { selectDiaryDate, selectDiary } from '../redux/diary/selectors';

export const useDiary = () => {
  return {
    date: useSelector(selectDiaryDate),
    diary: useSelector(selectDiary),
  };
};
