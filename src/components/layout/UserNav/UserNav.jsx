import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Tabs, Tab, TabList, Box } from '@chakra-ui/react';
import styles from './UseNav.module.css';

function UserNav() {
  return (
    <nav className={styles.navList}>
      <NavLink className={styles.navItem} to="/diary">
        Diary
      </NavLink>
      <NavLink className={styles.navItem} to="/products">
        Products
      </NavLink>
      <NavLink className={styles.navItem} to="/exercises">
        Exercises
      </NavLink>
    </nav>
  );
}

export default UserNav;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Tabs, Tab, TabList, Box } from '@chakra-ui/react';
// import styles from './UseNav.module.css';

// function UserNav() {
//   return (
//     <Tabs valign="end" variant="unstyled">
//       <TabList className={styles.navList}>
//         <Box
//           className={styles.navItem}
//           border="1px"
//           borderColor="rgba(239, 237, 232, 0.3)"
//           borderRadius="12px"
//         >
//           <Tab className={styles.navLink}
//             as={Link}
//             to="/diary"
//             _hover={{
//               border: '1px',
//               borderColor: '#E6533C',
//               borderRadius: '12px',
//             }}
//             _selected={{
//               border: 'none',
//               color: '#EFEDE8',
//               bg: '#E6533C',
//               borderRadius: '12px',
//             }}
//           >
//             Diary
//           </Tab>
//         </Box>
//         <Box
//           className={styles.navItem}
//           border="1px"
//           borderColor="rgba(239, 237, 232, 0.3)"
//           borderRadius="12px"
//         >
//           <Tab
//             as={Link}
//             to="/products"
//             _hover={{
//               border: '1px',
//               borderColor: '#E6533C',
//               borderRadius: '12px',
//             }}
//             _selected={{
//               border: '1px',
//               borderColor: '#E6533C',
//               color: '#EFEDE8',
//               bg: '#E6533C',
//               borderRadius: '12px',
//             }}
//           >
//             Products
//           </Tab>
//         </Box>
//         <Box
//           border="1px"
//           borderColor="rgba(239, 237, 232, 0.3)"
//           borderRadius="12px"
//         >
//           <Tab
//             as={Link}
//             to="/exercises"
//             _hover={{
//               border: '1px',
//               borderColor: '#E6533C',
//               borderRadius: '12px',
//             }}
//             _selected={{
//               border: '1px',
//               borderColor: '#E6533C',
//               color: '#EFEDE8',
//               bg: '#E6533C',
//               borderRadius: '12px',
//             }}
//           >
//             Exercises
//           </Tab>
//         </Box>
//       </TabList>
//     </Tabs>
//   );
// }

// export default UserNav;

// UserNav(для авторизованого користувача) є списком елементів навігації, який містить наступні маршрути:
//  /diary - переадресовує на Diary page
//  /products - переадресовує на Products page
//  /exercises - переадресовує на Exercises page

// Активну сторінку, на якій перебуває авторизований користувач, необхідно виокремити в UserNav.

// На мобільній версії UserNav слід реалізувати у вигляді бургер-меню, яке містить в т.ч. кнопку LogOutBtn
