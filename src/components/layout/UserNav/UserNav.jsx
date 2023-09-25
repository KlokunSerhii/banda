import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './UseNav.module.css';

function UserNav() {
  const { pathname } = useLocation();
  return (
    <nav className={styles.navList}>
      <NavLink
        className={`${styles.navItem} ${
          pathname === '/diary' ? styles.navItemActive : ''
        }`}
        to="/diary"
      >
        Diary
      </NavLink>
      <NavLink
        className={`${styles.navItem} ${
          pathname === '/products' ? styles.navItemActive : ''
        }`}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={`
        ${styles.navItem}
        ${pathname === '/exercises/bodyparts' ? styles.navItemActive : ''}
        ${pathname === '/exercises/muscles' ? styles.navItemActive : ''}
        ${pathname === '/exercises/equipment' ? styles.navItemActive : ''}`}
        to="/exercises"
      >
        Exercises
      </NavLink>
    </nav>
  );
}

export default UserNav;
