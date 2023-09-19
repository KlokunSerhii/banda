import React, { useState } from 'react';
import { RiMenu2Line, RiCloseFill } from 'react-icons/ri';
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

  return (
    <Container>
<header className={styles.header}>
  <Logo />
      {!isLoggedIn && (
        <>
          <div className={styles.wrapNavDesktop}>
            <UserNav />
            <UserBar />
            <LogOutBtn />
          </div>

          <div className={styles.wrapNavMob}>
            <UserBar/>
            <BurgerMenu
              active={menuActive}
              setActive={setMenuActive}
              className={styles.mobMenu}
            />
          </div>
          <button
            className={styles.mobileBtn}
            onClick={() => setMenuActive(!menuActive)}
          >
            {menuActive ? (
              <RiCloseFill className={styles.closeIcon} />
            ) : (
              <RiMenu2Line className={styles.mobileIcon} />
            )}
          </button>
        </>
      )}
    </header>
    </Container>
    
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

// function Header() {
//   const { isLoggedIn } = useAuth();

//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = React.useRef()

//   return (
//     <header className={styles.header}>
//       <Logo />
//       {!isLoggedIn && (
//        <><div className={styles.wrapNavDesktop}>
//              <UserNav />
//           <UserBar />
//           <LogOutBtn />
//         </div>

//         <div className={styles.wrapNavMob}>
//           <UserBar />
//           <div className={`${isOpen ? styles.mobMenu + '' + styles.active : styles.mobMenu}`}>
//             <UserNav />
//           <LogOutBtn />
//           </div>
//            <button className={styles.headerCloseBtn} ><MdClose/></button>
//         </div>

//         <Button className={styles.headerMenuBtn} bg='transparent' color='#e6533c'
//        ref={btnRef} colorScheme='teal' onClick={onOpen}
//         ><RiMenu2Line/></Button>
//        </>
//       )}
//     </header>
//   );
// }
