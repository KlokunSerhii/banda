import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, TabList } from '@chakra-ui/react';

function UserNav() {


  return (
    <Tabs variant="unstyled" _selected={{ color: 'white', bg: 'blue.500' }}>
      <TabList>
        <Tab as={Link} to="/diary">
          Diary
        </Tab>
        <Tab as={Link} to="/products">
          Products
        </Tab>
        <Tab as={Link} to="/exercises">
          Exercises
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default UserNav;

// UserNav(для авторизованого користувача) є списком елементів навігації, який містить наступні маршрути:
//  /diary - переадресовує на Diary page
//  /products - переадресовує на Products page
//  /exercises - переадресовує на Exercises page

// Активну сторінку, на якій перебуває авторизований користувач, необхідно виокремити в UserNav.

// На мобільній версії UserNav слід реалізувати у вигляді бургер-меню, яке містить в т.ч. кнопку LogOutBtn
