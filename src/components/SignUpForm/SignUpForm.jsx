import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import styles from './SignUpForm.module.css';
import { register } from '../../redux/auth/operations';
import FormField from '../FormField';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email')
    .matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Enter valid email'),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
      'Min: 6 symbols, one uppercase letter, one lowercase letter, one number, one special symbol'
    )
    .required('Please enter your password'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function SignUpForm() {
  const dispatch = useDispatch();

  const onSubmit = ({ email, password, name }, { resetForm }) => {
    dispatch(register({ email, password, name }));
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
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <FormField
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            autocomplete="email"
            required
          />
          <FormField
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            autocomplete="new-password"
            required
          />

          <button className={styles.signUpBtn} type="submit">
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
