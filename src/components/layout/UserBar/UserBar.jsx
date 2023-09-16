import React from 'react';
import { useAuth } from 'hooks';
import UseNav from '../UserNav';

const UserBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn && <UseNav />}
    </div>
  );
};


export default UserBar;


// UserBar(для авторизованого користувача) складається з: 
//  - іконки-посилання, по clickу на яке авторизованого користувача переадресовує на User page
//  - елемента, що відображає поточку аватарку користувача. У разі її відсутності - зображення за замовченням