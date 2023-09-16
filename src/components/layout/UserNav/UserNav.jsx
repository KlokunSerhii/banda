import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, TabList, Box } from '@chakra-ui/react';
// import styled from './UseNav.module.css';

function UserNav() {
  return (
    <Tabs valign="end" variant="unstyled">
      <TabList
        display="flex"
        align="center"
        justify="center"
        color="rgba(239, 237, 232, 1)"
        gap="16px"
      >
        <Box
          border="1px"
          borderColor="rgba(239, 237, 232, 0.3)"
          borderRadius="12px"
          boxShadow="inner"
        >
          <Tab
            as={Link}
            to="/diary"
            _selected={{
              color: '#EFEDE8',
              bg: '#E6533C',
              borderRadius: '12px',
            }}
          >
            Diary
          </Tab>
        </Box>
        <Box
          border="1px"
          borderColor="rgba(239, 237, 232, 0.3)"
          borderRadius="12px"
        >
          <Tab
            as={Link}
            to="/products"
            _selected={{
              color: '#EFEDE8',
              bg: '#E6533C',
              borderRadius: '12px',
            }}
          >
            Products
          </Tab>
        </Box>
        <Box
          border="1px"
          borderColor="rgba(239, 237, 232, 0.3)"
          borderRadius="12px"
        >
          <Tab
            as={Link}
            to="/exercises"
            _selected={{
              color: '#EFEDE8',
              bg: '#E6533C',
              borderRadius: '12px',
            }}
          >
            Exercises
          </Tab>
        </Box>
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
