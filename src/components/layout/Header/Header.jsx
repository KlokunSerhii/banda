import React from 'react';

import Logo from '../Logo';
import styles from './Header.module.css';
import UserNav from '../UserNav';
import UserBar from '../UserBar';
import LogOutBtn from '../LogOutBtn';
import { useAuth } from 'hooks';

function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className={styles.header}>
      <Logo />
      {!isLoggedIn && (
        <div className={styles.wrapNav}>
          <UserNav />
          <UserBar />
          <LogOutBtn />
        </div>
      )}
    </header>
  );
}

export default Header;

// Header в собі містить:
//  незалежно від статусу користувача
//   - Logo компанії
//  для авторизованого користувача
//  - блок зі списком елементів навігації UserNav
//  - блок з інформацією про поточного користувача UserBar
//  - кнопку LogOutBtn
