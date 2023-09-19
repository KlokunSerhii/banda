import React from 'react';
import { useNavigate } from 'react-router';
import { MdLogout } from 'react-icons/md';
import styles from './LogOutBtn.module.css';


function LogOutBtn() {
  const navigate = useNavigate();

  return (
      <button className={styles.btnLogout} type="button" onClick={async event => {
        navigate(`/`);
      }}>
         <div className={styles.btnText}>Logout</div>
        <MdLogout className={styles.btnIcon} />
      </button>

  );
}

export default LogOutBtn;

// По clickу на кнопку має відправлятися запит на backend, який видаляє активну сесію користувача.

// Якщо backend повернув помилку - необхідно її опрацювати і відобразити користувачеві у вигляді вспливаючого віконечка-notification.
// Якщо запит на backend пройшов успішно - користувача має переадресувати на публічну сторінку Welcome page.

// Незалежно від відповіді backenda, користувача слід деавторизувати "на клієнті", очистивши при цьому redux store  та localStorage.
