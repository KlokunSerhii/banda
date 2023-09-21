import React from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineSetting } from 'react-icons/ai';
import { useAuth } from 'hooks';
import styles from './UserBar.module.css';

const UserBar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user)



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
      <div className={styles.avatar}>
        <img
          className={styles.avatar}
          src={user.avatarURL}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default UserBar;

// UserBar(для авторизованого користувача) складається з:
//  - іконки-посилання, по clickу на яке авторизованого користувача переадресовує на User page
//  - елемента, що відображає поточку аватарку користувача. У разі її відсутності - зображення за замовченням
