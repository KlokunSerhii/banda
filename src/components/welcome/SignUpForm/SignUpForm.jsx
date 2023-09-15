import React from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdRunCircle } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiFillCheckCircle } from 'react-icons/ai';

import styles from './SignUpForm.module.css';
import { register } from '../../../redux/auth/operations';
import bg from '../../../images/side-view-people-training-gym 1.jpg';

function SignUpForm() {
  const name = '';
  const email = '';
  const password = '';
  const dispatch = useDispatch();

  const handleSubmitLogin = ({ email, password, name }, { resetForm }) => {
    dispatch(register({ email, password, name }));
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
    name: Yup.string().required('Please enter your name'),
  });

  return (
    <div className={styles.containerSingUp}>
      <div className={styles.imgContainer}>
        <img src={bg} alt="bg" className={styles.bg} />
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
      </div>

      <div className={styles.formContainer}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.welcome}>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </p>
        <Formik
          initialValues={{ email, password, name }}
          validationSchema={SignupSchemaLogin}
          onSubmit={handleSubmitLogin}
        >
          <Form className={styles.form}>
            <label className={styles.label}>
              <Field
                className={styles.input}
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
              />
            </label>
            <ErrorMessage
              name="name"
              render={() => (
                <div className={styles.errorMessage}>
                  <AiFillCheckCircle className={styles.ErrorIcon} />
                  {'Error name'}
                </div>
              )}
            />
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
              Sign Up
            </button>
            <p className={styles.linkSingIn}>
              Already have account?
              <NavLink to={'/singin'} className={styles.link}>
                Sign In
              </NavLink>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUpForm;
