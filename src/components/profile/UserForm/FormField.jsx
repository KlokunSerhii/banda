import { Field, useFormikContext } from 'formik';
import styles from './UserForm.module.css';

const FormField = (props) => {
  const { name, className, ...rest } = props;
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext();
  const invalid = errors[name] && touched[name];

  return (
    <div className={`${styles.FormField } ${className || ''}`}>
      <Field className={`${styles.input} ${invalid ? styles.inputInvalid : ''.trim()}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        name={name}
        {...rest}
      />
      <div className={styles.errorMessage}>
        {invalid ?
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 9v4"></path>
            <path d="M12 16v.01"></path>
          </svg> : null}
        <span>{invalid && errors[name]}</span>
      </div>
    </div>
  )
}

export default FormField;