import React from 'react';
import styles from './ParamsForm.module.css';

import { FiArrowRight } from "react-icons/fi";
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';

import bg from '../../../images/params-form-desktop-img2@3x.jpg';
import { NavLink } from 'react-router-dom';

function ParamsForm() {


    const handleClick = () => {



    };
  

    const Schema = Yup.object().shape({
    height: Yup.number()
    .min(150)
      .required('Please enter your height. Height must be at least 150 cm!'),

    currentWeight: Yup.number(35)
    .min()
            .required('Please enter Current Weight. Current Weight must be at least 35(kg)'),
     desiredWeight: Yup.number(35)
     .min()
      .required('Please enter your Desired Weight. Desired Weight must be at least 35(kg)'),

    birthday: Yup.date()
      .required('Please enter your Birthday. You have to be older than 18 y.o!'),
  });

    return (
        <div className={styles.containerParams}>
            <img src={bg} alt="bg" className={styles.bg} />
            <div className={styles.formContainer}>
                <div className={styles.descriptionWrapper}>
                    <h2 className={styles.title}>Get closer to your goals!</h2>
                    <p className={styles.description}>
                        To ensure a personalized user experience and the proper functioning <br />
                        of our platform,we ask you to provide the following information about <br />
                        your weight, height and other relevant data:
                    </p>
                </div>
        
                <form className={styles.formWrapper}>
                    <ul className={styles.formList}>
                        <li className={styles.formItemWrapper}>
                            <label htmlFor="height" className={styles.formLabel}>Height</label>
                            <input id='height' className={styles.formInput} type="text" />
                        </li>
      
                        <li className={styles.formItemWrapper}>
                            <label htmlFor="currentWeight" className={styles.formLabel}>Current Weight</label>
                            <input id='currentWeight' className={styles.formCurrentWeightInput} type="text" />
                        </li>
    
                        <li className={styles.formItemWrapper}>
                            <label htmlFor="desiredWeight" className={styles.formLabel}>Desired Weight</label>
                            <input id='desiredWeight' className={styles.formDesiredWeightInput} type="text" />
                        </li>

                        <li className={styles.formDatapickerWrapper}>
                            {/* <label className={styles.formLabel}>Birth</label> */}
                            <input className={styles.formDatapickerInput} type="date" />
                          
                        </li>
                    </ul>

                </form>
               
                    <button  type='button' className={styles.nextBtn} onClick={handleClick}>
                        Next <FiArrowRight style={{ width: "18px", height: "18px", marginLeft: "4px", color: "#e6533c" }} />
                    </button>
              
            </div>
        </div>
    );
};

export default ParamsForm;
