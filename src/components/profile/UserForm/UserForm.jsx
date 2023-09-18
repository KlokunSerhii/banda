import { Formik, Field, Form, 
        // setIn 
       } from 'formik';
import { useState, useRef, useEffect } from 'react';
import style from './UserForm.module.css';
import { object, string, number, date } from 'yup';
import FormField from './FormField';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast} from 'react-toastify';
import { useAuth } from 'hooks';
import axios from 'axios';
import Container from 'components/Container/Container';


const formSchema = {
  name: string().required(),
  height: number().min(150, 'Must be more than 150').required().integer(),
  currentWeight: number().min(35, 'Must be more than 35').required().integer(),
  desiredWeight: number().min(35, 'Must be more than 35').required().integer(),
  blood: string().oneOf(["1", "2", "3", "4"]).required(),
  sex: string().oneOf(['male', 'female']).required(),
  birthdate: date().test('age', 'You must be 18 or older', function (birthdate) {
    const cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 18);
    return birthdate <= cutoff;
  }),
  levelActivity: string().oneOf(["1", "2", "3", "4"]).required(),
};

const validationSchema = object(formSchema);


const backendSchema = object({
  ...formSchema, 
  blood: number().oneOf([1, 2, 3, 4]).required(),
  levelActivity: number().oneOf([1, 2, 3, 4]).required(),
})

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
};

function UserForm() {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const { user } = useAuth();
  const [initialValues, setInitialValues] = useState({...defaultValues, ...user.name, ...user.email});
  // const [error, setError] = useState(false);
  // const [pending, setPending] = useState(false);

  const formik = useRef();

  // useEffect(() => {
  //   getCurrent();
  // }, []);

  // Обновляем состояние кнопки Submit
  // useEffect(() => {
  //   checkIfDataChanged();
  // }, [initialValues])


  // Получаем данные пользователя
  // const getCurrent = async () => {
  //   setPending(true);
  //   try {
  //     // Ожидаем данные пользователя с сервера
  //     const { data } = await axios.get('/users/current');
  //     const { user } = data;
  //     const { name, email } = user;

  //     // Обьединяем физические данные пользователя с именем и имейлом
  //     const userData = {
  //       name,
  //       email,
  //       ...user.bodyParams,
  //     };
      
  //     validationSchema.validate(userData).then((formData) => {

  //       // Конвертируем обьект даты в строку в нужном формате для элемента input
  //       const newDate = new Intl.DateTimeFormat('en-GB').format(formData.birthdate).split('/').reverse().join('-');

  //       // Заменяем значение даты на отформатированное
  //       formData.birthdate = newDate;

  //       // Обновляем изначальные данные формы для определения в будущем, изменились ли значения;
  //       setInitialValues(formData);

  //       // Устанавливаем новые значения формика
  //       formik.current.initialValues = formData;
  //       formik.current.setValues(formData);
  //       setPending(false);
  //     })
  //   } catch (e) {
  //     setError(e.message || 'Some error occured...');
  //     setPending(false);
  //   }
  // };


  const handleFormChange = e => {
    console.log(formik.current)
    checkIfDataChanged();
  };


  // Проверяем отличаются ли данные в форме от изначальных
  const checkIfDataChanged = () => {
    setTimeout(() => {
      const { values, isValid } = formik.current;
      const isDataEqual = Object.keys(initialValues).every(
        key => initialValues[key] === values[key]
      );
      setSubmitDisabled(isDataEqual || !isValid);
    });
  }

 const handleSubmit = (values, actions) => {
    const { name, email, ...bodyParams } = backendSchema.cast(values);
    bodyParams.defaultParams = false;
    values.defaultParams = false;
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("bodyParams", JSON.stringify(bodyParams))

    axios.patch('/users/current', formData).then((res) => {
      setInitialValues(values);
      formik.current.initialValues = values;
      toast.success('Your profile has been successfully updated');
    }, 
      () => toast.error('Sorry, profile update failed...'));
  };
 
  return (
    <Container>
    <div className={`${style.UserForm} `}>
      <ToastContainer />
      <h1 className={style.title}>Profile Settings</h1>

      <Formik
        innerRef={formik}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <Form className={style.form} onChange={handleFormChange}>
            <div id="basic-info" className={style.text}>
              Basic info
            </div>
            <div className={style.input_container}>
              <FormField
                type="text"
                name="name"
                placeholder="Name"
                aria-labelledby="basic-info"
                required
              />
              <FormField
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
            <div role="group" aria-labelledby="my-radio-group">
              <label className={style.label}>
                <Field
                  className={style.radio}
                  type="radio"
                  name="blood"
                  value="1"
                  onChange={handleChange}
                />
                1
              </label>
              <label className={style.label}>
                <Field
                  className={style.radio}
                  type="radio"
                  name="blood"
                  value="2"
                  onChange={handleChange}
                />
                2
              </label>
              <label className={style.label}>
                <Field
                  className={style.radio}
                  type="radio"
                  name="blood"
                  value="3"
                  onChange={handleChange}
                />
                3
              </label>
              <label className={`${style.label} ${style.label_4}`}>
                <Field
                  className={style.radio}
                  type="radio"
                  name="blood"
                  value="4"
                  onChange={handleChange}
                />
                4
              </label>
              <label className={style.label}>
                <Field
                  className={style.radio}
                  type="radio"
                  name="sex"
                  value="male"
                  onChange={handleChange}
                />
                Male
              </label>
              <label className={style.label}>
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
                Moderately active (moderate exercises/sports 3-5 days per week)
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
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
            </div>

            <button
              className={style.button}
              type="submit"
              disabled={submitDisabled}
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </Container>
  );
}

export default UserForm;
