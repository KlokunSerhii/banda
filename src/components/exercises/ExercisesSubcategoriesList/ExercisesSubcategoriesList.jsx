import { useEffect, useState } from 'react';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem';
import { useParams, NavLink } from 'react-router-dom';
import styles from './ExercisesSubcategoriesList.module.css';
import formStyles from '../AddExerciseForm/AddExerciseForm.module.css';
import { useExercise } from 'hooks';
import { useDispatch } from 'react-redux';
import { exerciseList } from 'redux/exercises/operation';
import BasicModalWindow from 'components/BasicModalWindow/BasicModalWindow';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';

function ExercisesSubcategoriesList() {
  const { category, subcategory } = useParams();
  const dispatch = useDispatch();
  const { exerciseList: list } = useExercise();
  const [modalData, setModalData] = useState(null);
  const [successData, setSuccessData] = useState(null);

  useEffect(() => {
    const key =
      category === 'bodyparts'
        ? 'bodyPart'
        : category === 'muscles'
        ? 'target'
        : category;
    const params = `?${key}=${subcategory}`;
    dispatch(exerciseList(params));
  }, [dispatch, subcategory, category]);

  const openModalToggle = item => {
    setModalData(item);
    console.log(item)
  };

  const closeModal = () => {
    setModalData(null);
  };

  const handleOpenSuccessModal = (exercise) => {
    closeModal();
    setSuccessData(exercise);
  }

  const closeSuccessModal = () => setSuccessData(null);

  return (
    <>
      {modalData && (
        <BasicModalWindow isOpenModalToggle={closeModal} className={styles.ModalBackdrop} innerClasses={styles.FormModal}>
          <AddExerciseForm item={modalData} handleSuccess={handleOpenSuccessModal}/>
        </BasicModalWindow>
      )}
      <ul className={styles.exerciseList}>
        {list.map(item => {
          return <ExercisesSubcategoriesItem item={item} key={item._id} handleClick={openModalToggle} />;
        })}
      </ul>

      {/* Sucess Modal */}
      {successData && (
        <BasicModalWindow
          isOpenModalToggle={closeSuccessModal}
          className={formStyles.ModalBackdrop}
          innerClasses={formStyles.ModalSuccess}
        >
          <div className={formStyles.FormSuccessContainer}>
            <div className={formStyles.FormSuccessImage}></div>
            <h4 className={formStyles.FormSuccessTitle}>Well done</h4>
            <div className={formStyles.flex}>
              <span className={formStyles.FormTimerCaloriesLabel}>Your time:</span>
              <span className={formStyles.FormTimerCaloriesValue}>
                {successData.passedTime} minutes
              </span>
            </div>
            <div className={formStyles.flex}>
              <span className={formStyles.FormTimerCaloriesLabel}>
                Burned calories:
              </span>
              <span className={formStyles.FormTimerCaloriesValue}>{successData.calories}</span>
            </div>
            <button className={`${formStyles.FormAddButton} ${formStyles.success_button}`} onClick={closeSuccessModal}>Next exercise</button>
            <span className={`${formStyles.FormTimerCaloriesLabel}`}>
              <NavLink to="/diary">
                To the diary
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1"
                    stroke="#EFEDE8"
                    strokeOpacity="0.3"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </span>
          </div>
        </BasicModalWindow>
      )}
    </>
  );
}

export default ExercisesSubcategoriesList;
