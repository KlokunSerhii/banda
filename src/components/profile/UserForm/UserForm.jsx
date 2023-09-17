import { Formik, Field, Form } from 'formik';
import { useState, useRef } from 'react';
import style from './UserForm.module.css';
import { object, string, number, date } from 'yup';
import FormField from './FormField';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, /* toast  */} from 'react-toastify';

const validationSchema = object({
  name: string().required(),
  height: number().min(150).required().integer(),
  currentWeight: number().min(35).required().integer(),
  desiredWeight: number().min(35).required().integer(),
  blood: number().oneOf([1, 2, 3, 4]).required(),
  sex: string().oneOf(['male', 'female']).required(),
  birthday: date().test('age', 'You must be 18 or older', function (birthdate) {
    const cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 18);
    return birthdate <= cutoff;
  }),
  levelActivity: number().oneOf([1, 2, 3, 4]).required(),
});

const defaultValues = {
  name: '',
  email: '',
  height: '',
  currentWeight: '',
  desiredWeight: '',
  birthday: '',
  blood: '1',
  sex: 'male',
  levelActivity: '1',
};

function UserForm() {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  // const [initialValues, setInitialValues] = useState(defaultValues);

  const formik = useRef();

  /* useEffect(() => {
    fetchUser().then(user => setInitialValues(user));
  }, []);

  const fetchUser = async () => {
    const data = await fetch('/user/getInfo');
    return await JSON.parse(data);
  };

  const updateUser = user => {
    return fetch('/user/update', { method: 'POST', body: user });
  }; */

  const handleFormChange = e => {
    setTimeout(() => {
      const { values, isValid } = formik.current;
      const isDataEqual = Object.keys(initialValues).every(
        key => initialValues[key] === values[key]
      );
      setSubmitDisabled(isDataEqual || !isValid);
    });
  };

 /* const handleSubmit = (values, actions) => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    myPromise.then(
      () => {
        toast('Введите имя');
        
        actions.resetForm();
      },
      () => 
      toast('Введите имя')
    );
  };  */
 
  return (
    <div className="container">
      <ToastContainer />
      <h1 className={style.title}>Profile Settings</h1>
      
      <Formik
        innerRef={formik}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
        }) => (
          <Form
            className={style.form}
            onChange={handleFormChange}
          >
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
                onkeydown="return /[a-z]/i.test(event.key)"
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
                name="birthday"
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

            {errors.name && <div id="feedback">{errors.name}</div>}
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
  );
}

export default UserForm;
