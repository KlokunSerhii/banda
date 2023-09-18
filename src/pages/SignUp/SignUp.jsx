import SignUpForm from 'components/SignUpForm';
import React from 'react';
import { NavLink } from 'react-router-dom';
import symbolDefs from '../../images/symbol-defs.svg';

import styles from './SignUp.module.css';
import Container from '../../components/Container';

function SignUp() {
  return (
    <section className={styles.backGround}>
      <Container>
        <div className={styles.screen}>
          <div className={styles.videoCountBox}>
            <div className={styles.videoCountBack}>
              <svg className={styles.videoPlayIcon} width="12" height="12">
                <use href={symbolDefs + '#play-symbol-icon'}></use>
              </svg>
            </div>
            <div>
              <p className={styles.videoCount}>350+</p>
              <p className={styles.videoTutorial}>Video tutorial</p>
            </div>
          </div>
          <div className={styles.caloriesCountBox}>
            <div className={styles.caloriesCountBack}>
              <svg className={styles.runIcon} width="17" height="17">
                <use href={symbolDefs + '#run-icon'}></use>
              </svg>
            </div>
            <div className={styles.caloriesContent}>
              <p className={styles.caloriesCount}>500</p>
              <p className={styles.caloriesTutorial}>cal</p>
            </div>
          </div>
          <div className={styles.screen__content}>
            <h2>Sign up</h2>
            <p className={styles.enterText}>
              Thank you for your interest in our platform. To complete the
              registration process, please provide us with the following
              information.
            </p>

            <SignUpForm />

            <p className={styles.noaccount}>
              Already have account?
              <NavLink to="/singin" className={styles.link}>
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SignUp;
