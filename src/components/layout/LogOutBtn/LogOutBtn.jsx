import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { MdLogout } from 'react-icons/md';

import { logout } from 'redux/auth/operations';
import styles from './LogOutBtn.module.css';

function LogOutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logout());
    navigate(`/`);
  };

  return (
    <div >
     
      <button className={styles.btnLogout} type="button" onClick={onClick}>
         <div className={styles.btnText}>Logout</div>
        <MdLogout className={styles.btnIcon} />
      </button>
    </div>
  );
}

export default LogOutBtn;

// По clickу на кнопку має відправлятися запит на backend, який видаляє активну сесію користувача.

// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification.
// Якщо запит на backend пройшов успішно - користувача має переадресувати на публічну сторінку Welcome page.

// Незалежно від відповіді backenda, користувача слід деавторизувати "на клієнті", очистивши при цьому redux store  та localStorage.
