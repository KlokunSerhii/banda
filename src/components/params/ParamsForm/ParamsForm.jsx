import React from 'react';
import { useState, useRef, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import styles from './ParamsForm.module.css';

import { 
    // ErrorMessage,
     Formik,
     Field,
     Form,
     useFormik } from 'formik';
import * as Yup from 'yup';
// import moment from "moment";
import {FiArrowLeft, FiArrowRight, FiWatch } from "react-icons/fi";
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdDirectionsRun } from 'react-icons/md';


import primaryBg from '../../../images/params-primary-form-desktop-img1@3x.jpg';
import secondBg from '../../../images/params-second-form-desktop-img2@3x.jpg';
import thirdBg from '../../../images/params-third-form-desktop-img3@3x.jpg'


// import { NavLink } from 'react-router-dom';


const validationSchema = Yup.object().shape({
    height: Yup.number()
        .min(150, 'Height must be at least 150 cm!')
        .required('Height field is rquired!')
        .integer(),
    currentWeight: Yup.number()
        .min(35, 'Current Weight must be at least 35 kg!')
        .required('Current Weight field is rquired!')
        .integer(),
    desiredWeight: Yup.number()
        .min(35, 'Desired Weight must be at least 35 kg!')
        .required('Desired Weight field is rquired!')
        .integer(),
    birthday: Yup.date().test('age', 'You must be 18 or older', function (birthdate) {
        const cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 18);
        return birthdate <= cutoff;
    }),
    blood: Yup.string()
        .oneOf(["1", "2", "3", "4"])
        .required('Blood field is rquired!'),
    sex: Yup.string()
        .oneOf(['male', 'female'])
        .required('Sex field is rquired!'),
    levelActivity: Yup.number()
        .oneOf([1, 2, 3, 4, 5])
        .required('Level Activity field is rquired!'),
    
});



function ParamsForm() {
    const [step, setStep] = useState(true);
    // const [data, setData] = useState(initialValues);


    const formik = useFormik({
        initialValues: {
            height: '',
            currentWeight: '',
            desiredWeight: '',
            birthday: '',
            blood: '1',
            sex: 'male',
            levelActivity: '1'
        },
        validationSchema: validationSchema,
        onSubmit: (values, errors) => {
            console.log(values);
            
        }
    });

    // console.log(formik.values.blood)

    
    const handleBtnClick = async () => { 
        const newUserObject = formik.values;
        
        const isValid = await validationSchema.isValid(newUserObject);
         console.log(isValid);
      
        if (isValid) {
            setStep(!step);

            alert(JSON.stringify(newUserObject, null, 2));

          
            // dispatch(params(newUserObject));
            return;
        
        } else if (formik.errors.height) {
            return alert('Your form should be done to get to the next step! '
                + `${formik.errors.height}`)
            
        } else if (formik.errors.currentWeight) {
            return alert('Your form should be done to get to the next step! '
                + `${formik.errors.currentWeight}`)
            
        } else if (formik.errors.desiredWeight) {
            return alert('Your form should be done to get to the next step! '
                + `${formik.errors.desiredWeight}`)
            
        } else if (formik.errors.birthday) {
            return alert('Your form should be done to get to the next step! '
                + `${formik.errors.birthday}`)
            
        }  
    };

    return (
        <>
            <Formik>
                <Form>
                    {step ?
                    <div className={styles.containerParams}>

                        <div className={styles.imgContainer}>
                            <div className={styles.video}>
                                <AiFillPlayCircle className={styles.iconPlay} />
                                <div className={styles.videoInfo}>
                                    <p className={styles.videoQuantity}>350+</p>
                                    <p className={styles.videoText}>Video tutorial</p>
                                </div>
                            </div>
                            <div className={styles.users}>
                                <span className={styles.cyrcleRun}>
                                    <MdDirectionsRun size={8} className={styles.iconRun} />
                                </span>
                    
                                <div className={styles.usersInfo}>
                                    <p className={styles.usersQuantity}>197</p>
                                    <p className={styles.usersText}>users</p>
                                </div>
                            </div>
                            <img src={primaryBg} alt="bg" className={styles.bg} />
                        </div>

                        {/* <form className={styles.formWrapper}> */}
                            <div className={styles.formContainer}>
                                <div className={styles.descriptionWrapper}>
                                    <h2 className={styles.title}>Get closer to your goals!</h2>
                                    <p className={styles.description}>
                                        To ensure a personalized user experience and the proper functioning <br />
                                        of our platform,we ask you to provide the following information about <br />
                                        your weight, height and other relevant data:
                                    </p>
                                </div>
                       
                                <ul className={styles.formList}>
                                    <li className={styles.formItemWrapper}>
                                        <label htmlFor="height" className={styles.formLabel}>Height</label>
                                        <Field
                                            className={styles.formInput}
                                            type="text"
                                            id='height'
                                            name='height'
                                            placeholder='157'
                                            onChange={formik.handleChange}
                                            value={formik.values.height}
                                        />
                                    </li>
      
                                    <li className={styles.formItemWrapper}>
                                        <Field
                                            className={styles.formCurrentWeightInput}
                                            type="text"
                                            id='currentWeight'
                                            name='currentWeight'
                                            placeholder='Current Weight'
                                            onChange={formik.handleChange}
                                            value={formik.values.currentWeight}
                                        />
                                    </li>
    
                                    <li className={styles.formItemWrapper}>
                                        <Field
                                            className={styles.formDesiredWeightInput}
                                            type="text"
                                            id='desiredWeight'
                                            name='desiredWeight'
                                            placeholder='Desired Weight'
                                            onChange={formik.handleChange}
                                            value={formik.values.desiredWeight}
                                        />
                                    </li>

                                    <li className={styles.formDatepickerWrapper}>
                                        <Field
                                            className={styles.formDatepickerInput}
                                            type="date"
                                            name='birthday'
                                            placeholder='Birthday'
                                            onChange={formik.handleChange}
                                            value={formik.values.birthday}

                                        />

                                    </li>
                                </ul>
                                <button type='button' className={styles.nextBtn} onClick={handleBtnClick}>
                                    Next <FiArrowRight style={{ width: "18px", height: "18px", marginLeft: "4px", color: "#e6533c" }} />
                                </button>

                            </div>
                        {/* </form> */}
                   
                    </div>
                    :
                    <div className={styles.containerParams}>
                        <div className={styles.imgContainer}>
                            <div className={styles.video}>
                                <AiFillPlayCircle className={styles.iconPlay} />
                                <div className={styles.videoInfo}>
                                    <p className={styles.videoQuantity}>350+</p>
                                    <p className={styles.videoText}>Video tutorial</p>
                                </div>
                            </div>
                            <div className={styles.users}>
                                <span className={styles.cyrcleRun}>
                                    <FiWatch className={styles.iconWatch} />
                                </span>
                    
                                <div className={styles.usersInfo}>
                                    <p className={styles.usersQuantity}>24</p>
                                    <p className={styles.usersText}>hours</p>
                                </div>
                            </div>
                            <img src={secondBg} alt="bg" className={styles.bg} />
                        </div>
                        <div className={styles.formContainer}>
                            <div className={styles.descriptionWrapper}>
                                <h2 className={styles.title}>Get closer to your goals!</h2>
                            </div>

                       
                            <form className={styles.formWrapper}
                           
                            >
                                <div className={styles.secondStepWrapper}>

                            
                                    <div role="group" aria-labelledby="my-radio-group" className={styles.radioWrapper}>
                                        <p className={styles.secondStepDescription}>Blood:</p>
                                        
                                        <label className={styles.secondStepLabel}>
                                            <Field
                                                className={styles.radio}
                                                type="radio"
                                                name="blood"
                                                // value="1"
                                                onChange={formik.handleChange}
                                            />
                                            1
                                        </label>
                                        <label className={styles.secondStepLabel}>
                                            <Field
                                                className={styles.radio}
                                                type="radio"
                                                name="blood"
                                                // value="2"
                                                onChange={formik.handleChange}
                                            />
                                            2
                                        </label>
                                        <label className={styles.secondStepLabel}>
                                            <Field
                                                className={styles.radio}
                                                type="radio"
                                                name="blood"
                                                // value="3"
                                                onChange={formik.handleChange}
                                            />
                                            3
                                        </label>
                                        <label className={styles.secondStepLabel}>
                                            <Field
                                                className={styles.radio}
                                                type="radio"
                                                name="blood"
                                                // value="4"
                                              
                                                onChange={formik.handleChange}
                                            />
                                            4
                                        </label>

                                    </div>
                                   
                                    <div className={styles.radioWrapper}>
                                        <p className={styles.secondStepDescription}>Sex:</p>
                                        <label className={styles.secondStepLabel}>
                                                <Field className={styles.radio} type="radio" name="sex"
                                                    // value="male"
                                                onChange={formik.handleChange}
                                            />
                                            Male
                                        </label>
                                        <label className={styles.secondStepLabel}>
                                                <Field className={styles.radio} type="radio" name="sex"
                                                    // value="female"
                                                onChange={formik.handleChange}
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className={styles.secondStepActivities}>
                                    <p className={styles.secondStepDescription}>Level Activity:</p>
                                    <label className={styles.secondStepLabel}>
                                            <Field className={styles.radio} type="radio" name="levelActivity"
                                                // value="1"
                                                 onChange={formik.handleChange}
                                            />
                                        Sedentary lifestyle (little or no physical activity)
                                        
                                    </label>
                                    <label className={styles.secondStepLabel}>
                                            <Field className={styles.radio} type="radio" name="levelActivity"
                                                // value="2"
                                            onChange={formik.handleChange}
                                        />
                                        Light activity (light exercises/sports 1-3 days per week)
                                       
                                    </label>
                                    <label className={styles.secondStepLabel}>
                                            <Field className={styles.radio} type="radio" name="levelActivity"
                                                // value="3"
                                            onChange={formik.handleChange}
                                        />
                                        Moderately active (moderate exercises/sports 3-5 days per week)
                                    </label>
                                    <label className={styles.secondStepLabel}>
                                            <Field className={styles.radio} type="radio" name="levelActivity"
                                                // value="4"
                                            onChange={formik.handleChange}
                                        />
                                        Very active (intense exercises/sports 6-7 days per week)
                                    </label>
                                    <label className={styles.secondStepLabel}>
                                            <Field className={styles.radio} type="radio" name="levelActivity"
                                                // value="5"
                                            onChange={formik.handleChange}
                                        />
                                        Extremely active (very strenuous exercises/sports and physical work)
                                        
                                    </label>
                                    
                                </div>
                                
                                <div className={styles.secondStepNav}>
                                    <button type='button' className={styles.backBtn} onClick={handleBtnClick}>
                                        <FiArrowLeft style={{ width: "18px", height: "18px", marginRight: "4px", color: "#e6533c" }} />
                                        Back
                                    </button>
                                    <button type='button' className={styles.nextBtn} onClick={handleBtnClick}>
                                        Next <FiArrowRight style={{ width: "18px", height: "18px", marginLeft: "4px", color: "#e6533c" }} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

                </Form>
                
            </Formik>
        </>
        
        
    );
};

export default ParamsForm;
