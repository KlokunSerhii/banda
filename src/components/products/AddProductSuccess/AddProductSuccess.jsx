import styles from './AddProductSuccess.module.css';
import symbolDefs from '../../../images/symbol-defs.svg';
import avocado from '../../../images/avocado.png';
import { Link } from 'react-router-dom';

const AddProductSuccess = ({ calories, closeModal }) => {
  console.log(calories);
  return (
    <div className={styles.SuccessModalWindow}>
      <div className={styles.SuccessModalWindowWrap}>
        <div className={`${styles.SuccessModalWindow} ${styles.boxImage}`}>
          <img
            className={styles.SuccessModalWindowImg}
            src={avocado}
            alt="avocado"
          />
          <p className={styles.SuccessModalWindowTitle}>Well done</p>
          <p className={styles.SuccessModalWindowTxt}>
            Calories:
            <span className={styles.SuccessModalWindowSub}>{calories}</span>
          </p>
        </div>
        <Link to="/products" onClick={closeModal}>
          <button className={styles.SuccessModalWindowBtn}>Next product</button>
        </Link>
        <Link to="/diary" onClick={closeModal}>
          <p className={styles.SuccessModalWindowTxt}>
            To the diary
            <svg className={styles.arrowIcon}>
              <use href={symbolDefs + '#arrow-icon'}> </use>
            </svg>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AddProductSuccess;
