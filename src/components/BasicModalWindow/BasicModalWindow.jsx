import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './BasicModalWindow.module.css';
import symbolDefs from '../../images/symbol-defs.svg';



const BasicModalWindow = ({ children, isOpenModalToggle, className, innerClasses }) => {
  useEffect(() => {
    document.body.classList.add(`${styles.overflowHidden}`);
    return () => {
      document.body.classList.remove(`${styles.overflowHidden}`);
    };
  }, []);

  useEffect(() => {
    const closeESC = e => {
      if (e.code === 'Escape') {
        isOpenModalToggle();
      }
    };
    document.addEventListener('keydown', closeESC);
    return () => {
      document.removeEventListener('keydown', closeESC);
    };
  }, [isOpenModalToggle]);

  const handleClickBackground = e => {
    if (e.currentTarget === e.target) {
      isOpenModalToggle();
    }
  };

  const modal = (
    <div className={`${styles.basicModalWindow} ${className || ''}`} onClick={handleClickBackground}>
      <div className={`${styles.modal} ${innerClasses || ''}`}>
        <button className={styles.closeSvg} onClick={() => isOpenModalToggle()}>
          <svg className={styles.colorSvg} width="20" height="20">
            <use href={symbolDefs + '#close-icon'}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.querySelector('#modal-root'));
};

export default BasicModalWindow;
