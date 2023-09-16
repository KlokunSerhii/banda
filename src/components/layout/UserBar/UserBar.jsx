import React from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import { Avatar } from '@chakra-ui/react';

import { useAuth } from 'hooks';
import styles from './UserBar.module.css';

const UserBar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className={styles.wrapUseBar}>
      <button
        type="button"
        onClick={async event => {
          navigate(`/profile`);
        }}
      >
        <AiOutlineSetting className={styles.iconSettings} />
      </button>
      <Avatar
        name={user.name}
        src="https://bit.ly/broken-link"
        bg="transparent"
        border="2px solid #E6533C"
        icon={<BiSolidUser fontSize="1.5rem" className={styles.avatar} />}
      />
    </div>
  );
};

export default UserBar;

// UserBar(для авторизованого користувача) складається з:
//  - іконки-посилання, по clickу на яке авторизованого користувача переадресовує на User page
//  - елемента, що відображає поточку аватарку користувача. У разі її відсутності - зображення за замовченням
