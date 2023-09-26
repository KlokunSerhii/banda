import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './AddProductModalWindow.module.css';
import { addDiariesProduct } from '../../redux/diary/operations';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProductForm = ({ eldata, onClick, closeModal }) => {
  const dispatch = useDispatch();
  const { title, calories, _id: productId } = eldata;
  const [quantity, setQuantity] = useState('');

  const caloriesEaten = Math.round((quantity * calories) / 100);
  const date = new Date().toISOString();

  const handleAddToDiary = () => {
    if (!caloriesEaten) {
      toast.error('Must be greater than 0');
      return;
    }
    dispatch(
      addDiariesProduct({
        date,
        productId,
        weight: quantity,
        ...eldata,
        caloriesEaten,
        quantity,
      })
    )
      .then(() => {
        onClick(caloriesEaten);
      })
      .catch(error => {
        toast(error.message);
      });
  };

  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <div className={styles.input}>
          <label>
            <input
              className={styles.inputTitle}
              type="text"
              value={title}
              disabled
            />
          </label>
          <label>
            <input
              className={styles.inputQuantity}
              placeholder="grams"
              type="number"
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
            />
          </label>
        </div>
        <br />
        <p>
          <span className={styles.calories}>
            <span className={styles.titleCalories}>Calories:</span>
            {caloriesEaten}
          </span>
        </p>
        <br />
        <div className={styles.btn}>
          <button
            className={styles.btnAdd}
            type="button"
            onClick={handleAddToDiary}
          >
            Add to diary
          </button>
          <button
            className={styles.btnCancel}
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
