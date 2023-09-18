import React, { useRef } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import FormField from './FormField';

import styles from './SignInForm.module.css';
import { login } from '../../../redux/auth/operations';

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
const initialValues = {
  email: '',
  password: '',
};

function SignInForm() {
  const dispatch = useDispatch();
  const onSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };

  const formik = useRef();

  return (
    <Formik
      innerRef={formik}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, errors }) => (
        <Form className={styles.singin}>
          <FormField
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <FormField
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button className={styles.signInBtn} type="submit">
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
