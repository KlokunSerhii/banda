import React from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import styles from './SignInForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/operations';
import bg from '../../../images/side-view-people-training-gym 1.jpg';

function SignInForm() {
  const email = '';
  const password = '';
  const dispatch = useDispatch();

  const handleSubmitLogin = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };

  const validPassword =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const validEmail =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const SignupSchemaLogin = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(validPassword)
      .required('Please enter your password'),

    email: Yup.string()
      .email('invalid email')
      .matches(validEmail)
      .required('Please enter your email'),
  });

  return (
    <div className={styles.containerSingIn}>
      <img src={bg} alt="bg" className={styles.bg} />
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Sign In</h1>
        <p className={styles.welcome}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <Formik
          initialValues={{ email, password }}
          validationSchema={SignupSchemaLogin}
          onSubmit={handleSubmitLogin}
        >
          <Form className={styles.form}>
            <label className={styles.label}>
              <Field
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
            </label>
            <ErrorMessage
              name="email"
              render={() => (
                <div className={styles.errorMessage}>
                  {'Please enter your email'}
                </div>
              )}
            />

            <label className={styles.label}>
              <Field
                className={styles.input}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
            </label>
            <ErrorMessage
              name="password"
              render={() => (
                <div className={styles.errorMessage}>
                  {'Please enter your password'}
                </div>
              )}
            />
            <button className={styles.button} type="submit">
              Sign In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignInForm;
