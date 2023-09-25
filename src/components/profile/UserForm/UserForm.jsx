import { Formik, Field, Form } from 'formik';
import { useState, useRef, useEffect, useCallback } from 'react';
import style from './UserForm.module.css';
import { object, string, number, date } from 'yup';
import FormField from './FormField';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useAuth } from 'hooks';
import axios from 'axios';
import Container from 'components/Container/Container';
import UserCard from '../UserCard/UserCard';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import TitlePage from 'components/diary/TitlePage/TitlePage';

const reqmsg = 'Field is required';

const formSchema = {
  name: string().required(reqmsg),
  height: number().min(150, 'Must be more than 150').required(reqmsg).integer(),
  currentWeight: number()
    .min(35, 'Must be more than 35')
    .required(reqmsg)
    .integer(),
  desiredWeight: number()
    .min(35, 'Must be more than 35')
    .required(reqmsg)
    .integer(),
  blood: string().oneOf(['1', '2', '3', '4']).required(),
  sex: string().oneOf(['male', 'female']).required(),
  birthdate: date().test(
    'age',
    'You must be 18 or older',
    function (birthdate) {
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 18);
      return birthdate <= cutoff;
    }
  ),
  levelActivity: string().oneOf(['1', '2', '3', '4']).required(reqmsg),
};

const validationSchema = object(formSchema);

const backendSchema = object({
  ...formSchema,
  blood: number().oneOf([1, 2, 3, 4]).required(),
  levelActivity: number().oneOf([1, 2, 3, 4]).required(),
});

const defaultValues = {
  name: '',
  email: '',
  height: '',
  currentWeight: '',
  desiredWeight: '',
  birthdate: '',
  blood: '',
  sex: '',
  levelActivity: '',
  avatar: '',
};

function UserForm() {
  const dispatch = useDispatch();
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const { user } = useAuth();
  const [initialValues, setInitialValues] = useState({
    ...defaultValues,
    ...user.name,
    ...user.email,
  });
  const [, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const formik = useRef();

  // Проверяем отличаются ли данные в форме от изначальных
  const checkIfDataChanged = useCallback(() => {
    setTimeout(() => {
      const { values, isValid } = formik.current;

      // Проходим по все ключам формы и сравниваем со значениями изначального состояния
      const isDataEqual = Object.keys(initialValues).every(
        key => initialValues[key] === values[key]
      );
      setSubmitDisabled(isDataEqual || !isValid);
    });
  }, [initialValues]);

  // Получаем данные пользователя
  const getCurrent = async () => {
    setPending(true);
    try {
      // Ожидаем данные пользователя с сервера
      const { data } = await axios.get('/users/current');
      const { user } = data;
      const { name, email } = user;

      // Обьединяем физические данные пользователя с именем и имейлом
      const userData = {
        name,
        email,
        avatar: '',
        ...user.bodyParams,
      };

      validationSchema.validate(userData).then(formData => {
        // Конвертируем обьект даты в строку в нужном формате для элемента input
        const newDate = new Intl.DateTimeFormat('en-GB')
          .format(formData.birthdate)
          .split('/')
          .reverse()
          .join('-');

        // Заменяем значение даты на отформатированное
        formData.birthdate = newDate;

        // Обновляем изначальные данные формы для определения в будущем, изменились ли значения;
        setInitialValues(formData);

        // Устанавливаем новые значения формика
        formik.current.initialValues = formData;
        formik.current.setValues(formData);
        setPending(false);
      });
    } catch (e) {
      setError(e.message || 'Some error occured...');
      setPending(false);
    }
  };

  const handleAvatar = e => {
    const file = e.target.files[0];
    setAvatar(file);
    checkIfDataChanged();
  };

  const handleFormChange = useCallback(() => {
    checkIfDataChanged();
  }, [checkIfDataChanged]);

  const handleSubmit = values => {
    setPending(true);
    const { name, email, avatarURL, ...bodyParams } =
      backendSchema.cast(values);
    bodyParams.defaultParams = false;
    values.defaultParams = false;

    // Создаем новую форму для отправки на сервер
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    // Добавляем параметры тела пользователя в форму в виде строки (обычный обьект сервер не принимает)
    formData.append('bodyParams', JSON.stringify(bodyParams));

    let config;
    if (avatar) {
      formData.append('avatar', avatar);
      config = { headers: { 'Content-Type': 'multipart/form-data' } };
    }

    // Отправляем запрос на сервер
    axios.patch('/users/current', formData, config).then(
      res => {
        // При упешном обновлении данных пользователя перезаписываем изначальные данные пользователи (для отслеживания изменений)
        setInitialValues(values);
        formik.current.initialValues = values;
        dispatch(refreshUser());
        toast.success('Your profile has been successfully updated');
        setPending(false);
      },
      // Обрабатываем ошибку
      () => {
        setPending(false);
        toast.error('Sorry, profile update failed...');
      }
    );
  };

  // Получаем изначальные данные пользователя при первой загрузке
  useEffect(() => {
    getCurrent();
  }, []);

  // Обновляем состояние кнопки Submit при изменений значений формы
  useEffect(() => {
    checkIfDataChanged();
  }, [initialValues, checkIfDataChanged]);

  return (
    <Container className={style.container}>
      <div
        className={`${style.UserForm} ${
          pending ? style.UserForm_disabled : ''
        }`}
      >
        <TitlePage title="Profile Settings" />

        <Formik
          innerRef={formik}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange }) => (
            <div class={style.FormContainer}>
              {/* Body Params */}
              <div class={style.form_box}>
                <Form className={style.form} onChange={handleFormChange}>
                  <div id="basic-info" className={style.text}>
                    Basic info
                  </div>
                  <div className={style.input_container}>
                    <FormField
                      className={style.basic_input}
                      type="text"
                      name="name"
                      placeholder="Name"
                      aria-labelledby="basic-info"
                      required
                    />
                    <FormField
                      className={style.basic_input}
                      type="email"
                      name="email"
                      placeholder="Email"
                      aria-labelledby="basic-info"
                      readOnly
                    />
                  </div>
                  <div className={style.input_container}>
                    <label className={style.text}>
                      Height
                      <FormField
                        className={style.input_1}
                        type="number"
                        name="height"
                        min="150"
                      />
                    </label>
                    <label className={style.text}>
                      Current Weight
                      <FormField
                        className={style.input_2}
                        min="35"
                        type="number"
                        name="currentWeight"
                      />
                    </label>
                    <label className={style.text}>
                      Desired Weight
                      <FormField
                        className={style.input_3}
                        type="number"
                        name="desiredWeight"
                        min="35"
                      />
                    </label>
                    <FormField
                      className={style.input_4}
                      type="date"
                      name="birthdate"
                    />
                  </div>
                  <div
                    className={`${style.text} ${style.text_blood}`}
                    id="my-radio-group"
                  >
                    Blood
                  </div>
                  <div
                    className={style.label_container}
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <label className={`${style.label} ${style.labelUpper}`}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="blood"
                        value="1"
                        onChange={handleChange}
                      />
                      1
                    </label>
                    <label className={`${style.label} ${style.labelUpper}`}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="blood"
                        value="2"
                        onChange={handleChange}
                      />
                      2
                    </label>
                    <label className={`${style.label} ${style.labelUpper}`}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="blood"
                        value="3"
                        onChange={handleChange}
                      />
                      3
                    </label>
                    <label
                      className={`${style.label} ${style.labelUpper} ${style.label_4}`}
                    >
                      <Field
                        className={style.radio}
                        type="radio"
                        name="blood"
                        value="4"
                        onChange={handleChange}
                      />
                      4
                    </label>
                    <label className={`${style.label} ${style.labelUpper}`}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="sex"
                        value="male"
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label className={`${style.label} ${style.labelUpper}`}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="sex"
                        value="female"
                        onChange={handleChange}
                      />
                      Female
                    </label>
                  </div>
                  <div className={style.lifeStyle}>
                    <label className={style.label}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="levelActivity"
                        value="1"
                        onChange={handleChange}
                      />
                      Sedentary lifestyle (little or no physical activity)
                    </label>
                    <label className={style.label}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="levelActivity"
                        value="2"
                        onChange={handleChange}
                      />
                      Light activity (light exercises/sports 1-3 days per week)
                    </label>
                    <label className={style.label}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="levelActivity"
                        value="3"
                        onChange={handleChange}
                      />
                      Moderately active (moderate exercises/sports 3-5 days per
                      week)
                    </label>
                    <label className={style.label}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="levelActivity"
                        value="4"
                        onChange={handleChange}
                      />
                      Very active (intense exercises/sports 6-7 days per week)
                    </label>
                    <label className={style.label}>
                      <Field
                        className={style.radio}
                        type="radio"
                        name="levelActivity"
                        value="5"
                        onChange={handleChange}
                      />
                      Extremely active (very strenuous exercises/sports and
                      physical work)
                    </label>
                  </div>

                  <button
                    className={style.button}
                    type="submit"
                    disabled={submitDisabled}
                  >
                    {pending ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                        >
                          <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                          />
                        </path>
                      </svg>
                    ) : (
                      'Save'
                    )}
                  </button>
                </Form>
              </div>

              {/* User Card */}
              <UserCard user={user} onAvatarChange={handleAvatar} />
            </div>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default UserForm;
