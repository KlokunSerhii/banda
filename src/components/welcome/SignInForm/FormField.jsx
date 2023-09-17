import { Field, useFormikContext } from 'formik';
import styles from './FormField.module.css';
import symbolDefs from '../../../images/symbol-defs.svg';

const FormField = props => {
  const { name, className, ...rest } = props;
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();
  const invalid = errors[name] && touched[name];

  return (
    <div>
      <Field
        className={`${styles.input} ${
          invalid ? styles.inputInvalid : styles.inputValid
        } ${className || ''}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        name={name}
        {...rest}
      />
      <div
        className={`${styles.message} ${
          invalid ? styles.errorMessage : styles.successMessage
        }`}
      >
        <svg className={`${invalid ? styles.errorIcon : styles.successIcon}`}>
          <use
            href={symbolDefs + '#checkbox-circle-fill-icon'}
            width="16"
            height="16"
          ></use>
        </svg>
        {invalid ? `Error ${name}` : `Success ${name}`}
      </div>
    </div>
  );
};

export default FormField;
