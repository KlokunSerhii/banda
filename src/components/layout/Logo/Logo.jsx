import React from 'react';
import { NavLink } from 'react-router-dom/dist';
import styles from './Logo.module.css';
import { useAuth } from 'hooks';

function Logo() {
  const {isLoggedIn } = useAuth();

  return (
    <NavLink  to={isLoggedIn ? "/diary" : "/"} className={styles.wrapLogo}>
      <span className={styles.logoIcon}>
        <svg 
          viewBox="0 0 44 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43 7.28571C43.5523 7.28571 44 7.73343 44 8.28571V8.71429C44 9.26657 43.5523 9.71429 43 9.71429H41.8571C41.3049 9.71429 40.8571 10.162 40.8571 10.7143V13.5714C40.8571 14.1237 40.4094 14.5714 39.8571 14.5714H38.7143C38.162 14.5714 37.7143 15.0191 37.7143 15.5714V16C37.7143 16.5523 37.2666 17 36.7143 17H34C33.4477 17 33 16.5523 33 16V10.7143C33 10.162 32.5523 9.71429 32 9.71429H12C11.4477 9.71429 11 10.162 11 10.7143V16C11 16.5523 10.5523 17 10 17H7.28572C6.73343 17 6.28571 16.5523 6.28571 16V15.5714C6.28571 15.0191 5.838 14.5714 5.28571 14.5714H4.14286C3.59057 14.5714 3.14286 14.1237 3.14286 13.5714V10.7143C3.14286 10.162 2.69514 9.71429 2.14286 9.71429H0.999999C0.447714 9.71429 0 9.26657 0 8.71429V8.28571C0 7.73343 0.447715 7.28571 1 7.28571H2.14286C2.69514 7.28571 3.14286 6.838 3.14286 6.28571V3.42857C3.14286 2.87629 3.59057 2.42857 4.14286 2.42857H5.28572C5.838 2.42857 6.28571 1.98086 6.28571 1.42857V0.999999C6.28571 0.447714 6.73343 0 7.28571 0H10C10.5523 0 11 0.447715 11 1V6.28572C11 6.838 11.4477 7.28571 12 7.28571H32C32.5523 7.28571 33 6.838 33 6.28571V0.999999C33 0.447714 33.4477 0 34 0H36.7143C37.2666 0 37.7143 0.447715 37.7143 1V1.42857C37.7143 1.98086 38.162 2.42857 38.7143 2.42857H39.8571C40.4094 2.42857 40.8571 2.87629 40.8571 3.42857V6.28572C40.8571 6.838 41.3049 7.28571 41.8571 7.28571H43Z"
            fill="#E6533C"
          />
        </svg>
      </span>
      <p className={styles.titleLogo}>PowerPulse</p>{' '}
    </NavLink>
  );
}

export default Logo;

// Logo є посиланням, по clickу на яке неавторизованого користувача переадресовує на Welcome page, авторизованого
//  - на Diary page або Params page(якщо на backendі відсутня інформація про параметри авторизованого користувача)
