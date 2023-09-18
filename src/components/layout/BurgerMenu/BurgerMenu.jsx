import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import LogOutBtn from '../LogOutBtn';
import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ active, setActive }) => {
  const closeMenu = () => {
    setActive(false);
  };

  // const handleEscape = event => {
  //   if (event.key === 'Escape') {
  //     closeMenu();
  //   }
  // };

  // const handleBackdropClick = event => {
  //   if (event.target === event.currentTarget) {
  //     closeMenu();
  //   }
  // };

  useEffect(() => {
      const handleEscape = event => {
    if (event.key === 'Escape')closeMenu();
  };
    
    if (active) {
      return window.addEventListener('keydown', handleEscape);
    }
    return window.addEventListener('keydown', handleEscape);
  }, [active, closeMenu]);

  return (
    <>
      <div
        className={
          active ? [styles.menu, styles.active].join(' ') : [styles.menu]
        }
        onClick={e => e.stopPropagation()}
      >
        <NavLink className={styles.navItem} to="/diary">
          Diary
        </NavLink>
        <NavLink className={styles.navItem} to="/products" onClick={closeMenu}>
          Products
        </NavLink>
        <NavLink className={styles.navItem} to="/exercises" onClick={closeMenu}>
          Exercises
        </NavLink>
        <LogOutBtn />
      </div>
    </>
  );
};

// BurgerMenu.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
// };

export default BurgerMenu;
