import { Field, useFormikContext } from 'formik';
import styles from './FormField.module.css';
import symbolDefs from '../../images/symbol-defs.svg';

const FormField = props => {
  const { name, className, ...rest } = props;
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext();
  const invalid = errors[name] && touched[name];

  return (
    <div>
      <Field
        className={`${styles.input} ${values[name] !== ''
            ? invalid
              ? styles.inputInvalid
              : styles.inputValid
            : styles.input
          } ${className || ''}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        name={name}
        {...rest}
      />
      {values[name] !== '' ? (
        invalid ? (
          <div className={styles.errorMessage}>
            <svg className={styles.errorIcon}>
              <use
                href={symbolDefs + '#checkbox-circle-fill-icon'}
                width="16"
                height="16"
              ></use>
            </svg>
            {name === "email" ? 
            (<p>Error {name}</p>) : 
            (<p className={styles.ErrorInfo}>
              Min: 6 symbols, one uppercase letter, one lowercase letter, one number, one special symbol
              </p>) 
              }
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
            Success {name}
          </div>
        )
      ) : (
        <div className={styles.static}></div>
      )}
    </div>
  );
};

export default FormField;
