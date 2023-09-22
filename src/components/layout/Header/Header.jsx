import React, { useEffect, useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { useAuth } from 'hooks';
import Logo from '../Logo';
import UserNav from '../UserNav';
import UserBar from '../UserBar';
import LogOutBtn from '../LogOutBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './Header.module.css';
import Container from 'components/Container';

function Header() {
  const { isLoggedIn } = useAuth();
  const [menuActive, setMenuActive] = useState(false);
  const [className, setClassName] = useState(false);

  useEffect(() => {
    setClassName(!isLoggedIn ? styles.headerPosition : styles.headerNoPosition);
  }, [isLoggedIn]);

  return (
    <Container className={styles.container}>
      <header className={className}>
        <Logo />
        {isLoggedIn && (
          <>
            <div className={styles.wrapNavDesktop}>
              <UserNav />
              <UserBar />
              <LogOutBtn />
            </div>

            <div className={styles.wrapNavMob}>
              <UserBar />
              <BurgerMenu
                active={menuActive}
                setActive={setMenuActive}
                className={styles.mobMenu}
              />
              <button
                className={styles.mobileBtn}
                onClick={()=>{setMenuActive(true)}}
              >
                <RiMenu2Line className={styles.mobileIcon} />
              </button>
            </div>
          </>
        )}
      </header>
    </Container>
  );
}

export default Header;

