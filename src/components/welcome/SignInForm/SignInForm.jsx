import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import styles from './SignInForm.module.css';
import { login } from '../../../redux/auth/operations';
import symbolDefs from '../../../images/symbol-defs.svg';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email')
    .matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Enter valid email'),
  password: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Should contain 6 symbols and at least 1 number'
    )
    .required('Please enter your password'),
});

function SignInForm() {
  const dispatch = useDispatch();
  const onSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });
  return (
    <form className={styles.singin} onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        className={styles.signin__input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email ? (
        formik.errors.email ? (
          <div className={styles.errorMessage}>
            <svg className={styles.errorIcon}>
              <use
                href={symbolDefs + '#checkbox-circle-fill-icon'}
                width="16"
                height="16"
              ></use>
            </svg>
            {formik.errors.email}
          </div>
        ) : (
          <div className={styles.successMessage}>
            <svg className={styles.successIcon}>
              <use
                href={symbolDefs + '#checkbox-circle-fill-icon'}
                width="16"
                height="16"
              ></use>
            </svg>
            Success email
          </div>
        )
      ) : null}
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        className={styles.signin__input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password ? (
        formik.errors.password ? (
          <div className={styles.errorMessage}>
            <svg className={styles.errorIcon}>
              <use
                href={symbolDefs + '#checkbox-circle-fill-icon'}
                width="16"
                height="16"
              ></use>
            </svg>
            {formik.errors.password}
          </div>
        ) : (
          <div className={styles.successMessage}>
            <svg className={styles.successIcon}>
              <use
                href={symbolDefs + '#checkbox-circle-fill-icon'}
                width="16"
                height="16"
              ></use>
            </svg>
            Success password
          </div>
        )
      ) : null}
      <button className={styles.signInBtn} type="submit">
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
