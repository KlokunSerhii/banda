import React from 'react';
import Logo from '../Logo';
import styles from './Header.module.css';
import UserNav from '../UserNav';
import { useAuth } from 'hooks';
import UserBar from '../UserBar';
import LogOutBtn from '../LogOutBtn';

function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className={styles.header}>
      <Logo />
      {isLoggedIn && (
        <>
          <UserNav />
          <UserBar />
          <LogOutBtn />
        </>
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
