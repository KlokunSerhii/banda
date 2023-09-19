import style from './UserCard.module.css';
import defaultAvatar from './defaultAvatar.png';
import { useFormikContext, Field } from 'formik';
import { useState } from 'react';
import LogOutBtn from 'components/layout/LogOutBtn/LogOutBtn';

function UserCard({ user, onAvatarChange }) {
  const { values, handleChange, ...rest } = useFormikContext();
  const [tempAvatarUrl, setTempAvatarUrl] = useState(null);

  const onChange = e => {
    handleChange(e);
    onAvatarChange(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      const image = event.target.result;
      setTempAvatarUrl(image);
      console.log(rest)
    };
    reader.onerror = () => console.error('file reading error');
    reader.readAsDataURL(file);
  };
  return (
    <div className={style.UserCard}>
      {/* Avatar */}
      <div className={style.avatar}>
        <div className={style.avatar_container}>
          <img src={tempAvatarUrl || user.avatarURL || defaultAvatar} alt=""></img>
        </div>
        <div className={style.avatar_icon}></div>
        <Field
          className={style.file_input}
          name="avatar"
          type="file"
          accept=".jpg, .png, .gif, .webp"
          onChange={onChange}
          value={values.avatar}
          title={user.name}
        ></Field>
      </div>

      <p className={style.avatar_name}>{user.name}</p>
      <p className={style.text}>User</p>
      <div className={style.info_container}>
        <div className={style.info_card}>
          <div className={style.info_text_container}>
            <div className={style.info_icon}></div>
            <div className={style.info_text}>Daily calorie intake</div>
          </div>
          {values.bmr}
        </div>
        <div className={style.info_card}>
          <div className={style.info_text_container}>
            <div className={style.info_icon2}></div>
            <div className={style.info_text}>Daily norm of sports</div>
          </div>
          {values.dailySportTime}
        </div>
      </div>
      <div className={style.text_container}>
        <div className={style.text_icon}></div>
        <p className={style.text_info}>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </div>
      <div className={style.logout_container}><LogOutBtn/></div>
    </div>
  );
}

export default UserCard;
