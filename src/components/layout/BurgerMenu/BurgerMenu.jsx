import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdLogout } from 'react-icons/md';
import styles from './BurgerMenu.module.css';
import { RiCloseFill } from 'react-icons/ri';

const BurgerMenu = ({ active }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(active);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleEscape = event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeMenu();
      console.log('handleBackdrop');
    }
  };

  useEffect(() => {
    if (menuIsOpen) {
      return window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

    useEffect(() => {
    setMenuIsOpen(active);
  }, [active]);

  return (
    <>
      {active && (
        <div className={styles.backdrop} onClick={closeMenu}></div>
      )}
      <div
        className={
          menuIsOpen ? [styles.menu, styles.active].join(' ') : [styles.menu]
        }
        onClick={handleBackdrop}
      >
          <div className={styles.wrapNav} onClick={e => e.stopPropagation()}>
            <NavLink
              className={styles.navItem}
              to="/diary"
              onClick={closeMenu}
            >
              Diary
            </NavLink>
            <NavLink
              className={styles.navItem}
              to="/products"
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink
              className={styles.navItem}
              to="/exercises"
              onClick={closeMenu}
            >
              Exercises
            </NavLink>
          </div>
          <NavLink
            className={styles.btnLogout}
            to="/"
            onClick={closeMenu}
          >
            <div className={styles.btnText}>Logout</div>
            <MdLogout className={styles.btnIcon} />
          </NavLink>
             <button
            className={styles.closeBtn}
            onClick={closeMenu}
          >
            <RiCloseFill className={styles.closeIcon} />
          </button>
        </div>
    </>
  );
};

BurgerMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func,
};

export default BurgerMenu;
