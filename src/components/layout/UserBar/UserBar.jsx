import React from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import styles from './UserBar.module.css';

const UserBar = () => {
  const navigate = useNavigate();

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
      <div className={styles.avatar}
        src="https://bit.ly/broken-link"
      ><BiSolidUser className={styles.avatarIcon} />
</div>
    </div>
  );
};

export default UserBar;

// UserBar(для авторизованого користувача) складається з:
//  - іконки-посилання, по clickу на яке авторизованого користувача переадресовує на User page
//  - елемента, що відображає поточку аватарку користувача. У разі її відсутності - зображення за замовченням
