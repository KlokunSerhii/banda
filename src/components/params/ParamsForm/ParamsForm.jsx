import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operations';

import styles from './ParamsForm.module.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import {FiArrowLeft, FiArrowRight, FiWatch } from "react-icons/fi";
import { AiFillPlayCircle } from 'react-icons/ai';
import { MdDirectionsRun } from 'react-icons/md';
import { Container } from '@chakra-ui/react';


const validationSchema = Yup.object().shape({
    height: Yup.number()
        .min(150, 'Height must be at least 150 cm!')
        .required('Height input is rquired!')
        .integer(),
    currentWeight: Yup.number()
        .min(35, 'Current Weight must be at least 35 kg!')
        .required('Current Weight input is rquired!')
        .integer(),
    desiredWeight: Yup.number()
        .min(35, 'Desired Weight must be at least 35 kg!')
        .required('Desired Weight input is rquired!')
        .integer(),
    birthdate: Yup.date().test('age', 'You must be 18 or older', function (birthdate) {
        const cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 18);
        return birthdate <= cutoff;
    }),
    blood: Yup.string()
        .oneOf(["1", "2", "3", "4"])
        .required('Blood input is rquired!'),
    sex: Yup.string()
        .oneOf(['male', 'female'])
        .required('Sex input is rquired!'),
    levelActivity: Yup.string()
        .oneOf(["1", "2", "3", "4", "5"])
        .required('Level Activity input is rquired!'),
    
});

const backendSchema = Yup.object().shape({
  ...validationSchema,
    blood: Yup.number().oneOf([1, 2, 3, 4]).required(),
   levelActivity: Yup.number().oneOf([1, 2, 3, 4, 5]).required(),
});


const initialValues = {
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthdate: '',
    blood: '1',
    sex: 'male',
    levelActivity: '1'
};

function ParamsForm() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [pending, setPending] = useState(false);
    const dispatch = useDispatch();
    const [paramsData, setParamsData] = useState(initialValues);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        validateOnBlur:true,
        onSubmit: (values) => {
            const formData = new FormData();

            //? ====================================================
            const { ...bodyParams } = backendSchema.cast(values);
            setPending(!pending);

            formData.append('bodyParams', JSON.stringify(bodyParams));

            ///api/user/current
            axios.patch('/users/current', formData).then(
                res => {
                    setParamsData(values);
                    initialValues.values = values;
                    alert(JSON.stringify(bodyParams));
                    
                    toast.success('Your profile has been successfully updated');
                    

                    
                    dispatch(refreshUser());
                    setPending(false);
                },

                () => {
                    toast.error('Oops, something went wrong! Profile update failed...');
                    setPending(false);
                }


            );

            //? ====================================================
        }
    });


    const handleNextClick = async () => {
        const bodyParams = formik.values;
        
        const isValid = await validationSchema.isValid(bodyParams);
        console.log(isValid);
      
        if (isValid) {
            setCurrentStepIndex(currentStepIndex + 1);
            return;
        
        } else if (formik.errors.height || formik.values.height === '') {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.height}`)
            
        } else if (formik.errors.currentWeight || formik.values.currentWeight === '') {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.currentWeight}`)
            
        } else if (formik.errors.desiredWeight || formik.values.desiredWeight === '') {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.desiredWeight}`)
            
        } else if (formik.errors.birthdate || formik.values.birthdate === '') {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.birthdate}`)
            
        } else if (formik.errors.blood) {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.blood}`)
            
        } else if (formik.errors.sex) {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.sex}`)
            
        } else if (formik.errors.levelActivity) {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.levelActivity}`)
            
        } else if (formik.errors.blood) {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.blood}`)
            
        } else if (formik.errors.sex) {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.sex}`)
            
        } else if (formik.errors.levelActivity) {
            return toast.error('Your form should be done to get to the next step! '
                + `${formik.errors.levelActivity}`)
            
        } 

        toast.error('Please enter all required fields!')


        // toast.error('Please enter all required fields!')
    };
    

    const handleBackClick = () => {
        setCurrentStepIndex(currentStepIndex - 1);
    }

    return (
        <>
            <ToastContainer theme='black'/>
            {/* <Container>
                
            </Container> */}
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                {currentStepIndex === 0 ?
                    <div className={`${styles.bg} ${styles.primaryBg}`}>
                        <div className={styles.containerParams}>

                            <div className={styles.boxesWrapper}>
                                <div className={styles.video}>
                                    <AiFillPlayCircle className={styles.iconPlay} />
                                    <div className={styles.videoInfo}>
                                        <p className={styles.videoQuantity}>350+</p>
                                        <p className={styles.videoText}>Video tutorial</p>
                                    </div>
                                </div>
                                <div className={styles.second}>
                                    <span className={styles.cyrcleRun}>
                                        <MdDirectionsRun size={6} className={styles.iconRun} />
                                    </span>
                    
                                    <div className={styles.secondInfo}>
                                        <p className={styles.secondQuantity}>197</p>
                                        <p className={styles.secondText}>users</p>
                                    </div>
                                </div>
                                
                            </div>

                          
                            <div className={styles.formContainer}>
                                <div className={styles.descriptionWrapper}>
                                    <h2 className={styles.title}>Get closer to your goals!</h2>
                                    <p className={styles.description}>
                                        To ensure a personalized user experience and the proper functioning
                                        of our platform,we ask you to provide the following information about
                                        your weight, height and other relevant data:
                                    </p>
                                </div>
                       
                                <ul className={styles.formList}>
                                    <li className={styles.formItemWrapper}>
                                        <label htmlFor="height" className={styles.formLabel}>Height</label>
                                        <input
                                            className={styles.formHeightInput}
                                            type="text"
                                            id='height'
                                            name='height'
                                            placeholder='157'
                                            onChange={formik.handleChange}
                                            value={formik.values.height}
                                        />
                                    </li>
      
                                    <li className={styles.formItemWrapper}>
                                        <input
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
                                        <input
                                            className={styles.formDesiredWeightInput}
                                            type="text"
                                            id='desiredWeight'
                                            name='desiredWeight'
                                            placeholder='Desired Weight'
                                            onChange={formik.handleChange}
                                            value={formik.values.desiredWeight}
                                        />
                                    </li>

                                    <li className={styles.formItemWrapper}>
                                        <input
                                            className={`${styles.formDatepickerInput} ${styles.input}`}
                                            type="date"
                                            name='birthdate'
                                            placeholder='Birthdate'
                                            onChange={formik.handleChange}
                                            value={formik.values.birthdate}

                                        />

                                    </li>
                                </ul>
                                <button type='button' className={`${styles.nextBtn}  ${styles.btn}`} onClick={handleNextClick}>
                                    Next <FiArrowRight style={{ width: "18px", height: "18px", marginLeft: "4px", color: "#e6533c" }} />
                                </button>

                            </div>
                            
                   
                        </div>
                    </div>   
                    :
                    currentStepIndex === 1 ?
                        <div className={`${styles.bg} ${styles.secondBg}`}>
                            <div className={styles.containerParams}>
                                
                                <div className={styles.boxesWrapper}>
                                    <div className={styles.video}>
                                        <AiFillPlayCircle className={styles.iconPlay} />
                                        <div className={styles.videoInfo}>
                                            <p className={styles.videoQuantity}>350+</p>
                                            <p className={styles.videoText}>Video tutorial</p>
                                        </div>
                                    </div>
                                    <div className={styles.second}>
                                        <span className={styles.cyrcleRun}>
                                            <FiWatch size={6} className={styles.iconWatch} />
                                        </span>
                    
                                        <div className={styles.secondInfo}>
                                            <p className={styles.secondQuantity}>24</p>
                                            <p className={styles.secondText}>hours</p>
                                        </div>
                                    </div>
                                   
                                </div>


                                <div className={styles.formContainer}>
                                    <div className={styles.descriptionWrapper}>
                                        <h2 className={styles.title}>Get closer to your goals!</h2>
                                    </div>

                       
                                    <div className={styles.formContainer}>
                                        <div className={styles.secondStepWrapper}>
                                            <div role="group" aria-labelledby="my-radio-group" className={styles.radioWrapper}>
                                                <p className={styles.secondStepDescription}>Blood:</p>
                                        
                                                <label className={styles.secondStepLabel}>
                                                    <input
                                                        className={styles.radio}
                                                        type="radio"
                                                        name="blood"
                                                        value="1"
                                                    
                                                        onChange={formik.handleChange}
                                                    />
                                                    1
                                                </label>
                                                <label className={styles.secondStepLabel}>
                                                    <input
                                                        className={styles.radio}
                                                        type="radio"
                                                        name="blood"
                                                        value="2"
                                                        onChange={formik.handleChange}
                                                    />
                                                    2
                                                </label>
                                                <label className={styles.secondStepLabel}>
                                                    <input
                                                        className={styles.radio}
                                                        type="radio"
                                                        name="blood"
                                                        value="3"
                                                        onChange={formik.handleChange}
                                                    />
                                                    3
                                                </label>
                                                <label className={styles.secondStepLabel}>
                                                    <input
                                                        className={styles.radio}
                                                        type="radio"
                                                        name="blood"
                                                        value="4"
                                                        onChange={formik.handleChange}
                                                    />
                                                    4
                                                </label>

                                            </div>
                                   
                                            <div className={styles.radioWrapper}>
                                                <p className={styles.secondStepDescription}>Sex:</p>
                                                <label className={styles.secondStepLabel}>
                                                    <input
                                                        className={styles.radio}
                                                        type="radio"
                                                        name="sex"
                                                        value="male"
                                                        onChange={formik.handleChange}
                                                    />
                                                    Male
                                                </label>
                                                <label className={styles.secondStepLabel}>
                                                    <input
                                            
                                                        className={styles.radio}
                                            
                                                        type="radio"
                                            
                                                        name="sex"
                                                        value="female"
                                                        onChange={formik.handleChange}
                                                    />
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                
                                        <div className={styles.secondStepActivities}>
                                            <p className={styles.secondStepDescription}>Level Activity:</p>
                                            <label className={`${styles.activitiesLabel} ${styles.secondStepLabel}`}>
                                                <input
                                        
                                                    className={styles.radio}
                                        
                                                    type="radio"
                                        
                                                    name="levelActivity"
                                                    value="1"
                                                    onChange={formik.handleChange}
                                                />
                                                Sedentary lifestyle (little or no physical activity)
                                        
                                            </label>
                                            <label className={`${styles.activitiesLabel} ${styles.secondStepLabel}`}>
                                                <input
                                        
                                                    className={styles.radio}
                                        
                                                    type="radio"
                                        
                                                    name="levelActivity"
                                                    value="2"
                                                    onChange={formik.handleChange}
                                                />
                                                Light activity (light exercises/sports 1-3 days per week)
                                       
                                            </label>
                                            <label className={`${styles.activitiesLabel} ${styles.secondStepLabel}`}>
                                                <input
                                        
                                                    className={styles.radio}
                                        
                                                    type="radio"
                                        
                                                    name="levelActivity"
                                                    value="3"
                                                    onChange={formik.handleChange}
                                                />
                                                Moderately active (moderate exercises/sports 3-5 days per week)
                                            </label>
                                            <label className={`${styles.activitiesLabel} ${styles.secondStepLabel}`}>
                                                <input
                                        
                                                    className={styles.radio}
                                        
                                                    type="radio"
                                        
                                                    name="levelActivity"
                                                    value="4"
                                                    onChange={formik.handleChange}
                                                />
                                                Very active (intense exercises/sports 6-7 days per week)
                                            </label>
                                            <label className={`${styles.activitiesLabel} ${styles.secondStepLabel}`}>
                                                <input
                                        
                                                    className={styles.radio}
                                        
                                                    type="radio"
                                        
                                                    name="levelActivity"
                                                    value="5"
                                                    onChange={formik.handleChange}
                                                />
                                                Extremely active (very strenuous exercises/sports and physical work)
                                        
                                            </label>
                                    
                                        </div>
                                
                                        <div className={styles.secondStepNav}>
                                            <button
                                    
                                                type='button'
                                    
                                                className={`  ${styles.backBtn}  ${styles.btn} `}
                                    
                                                onClick={handleBackClick}>
                                                <FiArrowLeft style={{ width: "18px", height: "18px", marginRight: "4px", color: "#e6533c" }} />
                                                Back
                                            </button>
                                            <button
                                    
                                                type='button'
                                    
                                                className={` ${styles.marginBtn} ${styles.nextBtn}  ${styles.btn}`}
                                    
                                                onClick={handleNextClick}>
                                                Next <FiArrowRight style={{ width: "18px", height: "18px", marginLeft: "4px", color: "#e6533c" }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>                     
                        :
                        <div className={`${styles.bg} ${styles.thirdBg}`}>
                            <div className={styles.containerParams}>

                                <div className={styles.boxesWrapper}>
                                    <div className={styles.video}>
                                        <AiFillPlayCircle className={styles.iconPlay} />
                                        <div className={styles.videoInfo}>
                                            <p className={styles.videoQuantity}>350+</p>
                                            <p className={styles.videoText}>Video tutorial</p>
                                        </div>
                                    </div>
                                    <div className={styles.second}>
                                        <span className={styles.cyrcleRun}>
                                            <MdDirectionsRun size={8} className={styles.iconRun} />
                                        </span>
                    
                                        <div className={styles.secondInfo}>
                                            <p className={styles.secondQuantity}>300</p>
                                            <p className={styles.secondText}>ex</p>
                                        </div>
                                    </div>
                                    
                                </div>

                       
                                <div className={styles.formContainer}>
                                    <div className={styles.descriptionWrapper}>
                                        <h2 className={styles.title}>Dear user</h2>
                                        <p className={styles.description}>
                                            Thank you for filling in all the required data. We greatly appreciate 
                                            your cooperation and commitment to a healthy lifestyle. The collected 
                                            information will allow us to provide you with a more individual
                                            and personalized approach.
                                        </p>
                                    </div>
                                    <div className={styles.submitPageNav}>
                                        <button
                                            type='submit'
                                            className={styles.goToBtn}
                                        
                                        >
                                            {/* <NavLink to="/diary"> */}
                                                Go
                                            {/* </NavLink> */}
                                            </button>
                                        <button
                                            type='button'
                                            className={`${styles.backBtn}  ${styles.btn}`}
                                            onClick={handleBackClick}>
                                            <FiArrowLeft style={{ width: "18px", height: "18px", marginRight: "4px", color: "#e6533c" }} />
                                            Back
                                        </button>
                                    </div>
                                

                                </div>
                            </div>
                        </div>
                        
                }

            </form>
            
        </>
        
    );
};

export default ParamsForm;

