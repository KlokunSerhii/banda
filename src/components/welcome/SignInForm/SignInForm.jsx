import React from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdRunCircle } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiFillCheckCircle } from 'react-icons/ai';

import styles from './SignInForm.module.css';
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

  // const validPassword =
  //   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  // const validEmail =
  //   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const SignupSchemaLogin = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      // .matches(validPassword)
      .required('Please enter your password'),

    email: Yup.string()
      .email('invalid email')
      // .matches(validEmail)
      .required('Please enter your email'),
  });

  return (
    <div className={styles.containerSingIn}>
      <div className={styles.imgContainer}>
        <div className={styles.video}>
          <AiFillPlayCircle className={styles.iconPlay} />
          <div className={styles.videoInfo}>
            <p className={styles.videoQuantity}>350+</p>
            <p className={styles.videoText}>Video tutorial</p>
          </div>
        </div>
        <div className={styles.calories}>
          <MdRunCircle className={styles.iconRun} />
          <div className={styles.caloriesInfo}>
            <p className={styles.caloriesQuantity}>500</p>
            <p className={styles.caloriesText}>cal</p>
          </div>
        </div>
        <img src={bg} alt="bg" className={styles.bg} />
      </div>

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
                  <AiFillCheckCircle className={styles.ErrorIcon} />
                  {'Error email'}
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
                  <AiFillCheckCircle className={styles.ErrorIcon} />
                  {'Error password'}
                </div>
              )}
            />
            <button className={styles.button} type="submit">
              Sign In
            </button>
            <p className={styles.linkSingUp}>
              Don’t have an account?
              <NavLink to={'/singup'} className={styles.link}>
                Sign Up
              </NavLink>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignInForm;
