import React, { useState } from 'react';

import Logo from '../Logo';
import styles from './Header.module.css';
import UserNav from '../UserNav';
import UserBar from '../UserBar';
import LogOutBtn from '../LogOutBtn';
import { useAuth } from 'hooks';
import { RiMenu2Line, RiCloseFill } from 'react-icons/ri';

// import './Header.css';

function Header() {
  const { isLoggedIn } = useAuth();
 const [nav, setNav] = useState(false);
  

  return (
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
            <div className={
              nav ? [styles.mobMenu, styles.active].join(' ') : [styles.mobMenu]
            }>
              <UserNav />
              <LogOutBtn />
            </div>
            <button
              className={styles.headerCloseBtn}
             
            >
              <RiCloseFill />
            </button>
          </div>
        </>
      )}
   
   <div onClick={() => setNav(!nav)} className={styles.mobileBtn}>
            {nav ? <RiCloseFill className={styles.closeIcon}/> : <RiMenu2Line className={styles.mobileIcon} />}
          </div>

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
